import { Router as ExpressRouter } from "express";
import { DateTime } from "luxon";
import * as uuid from "uuid";

import * as yup from "yup";
import { requestHandler } from "../handlers";
import { ListBlogQueryVariables } from "../generated/graphql";
import { now, parseISO } from "../util";
import {
  injectBlog,
  requireAuthentication,
  validateBlogOwner,
  validateBody,
} from "../middlewares";

export const BlogRouter = ExpressRouter();

BlogRouter.post(
  "/:slug/heart",
  validateBody(yup.object().shape({ number: yup.number().min(0) })),
  requireAuthentication,
  injectBlog,
  requestHandler(async ({ blog, sdk, body }) => {
    const { update_senna_blog_by_pk } = await sdk.GiveHeartToBlogMutation({
      id: blog.id,
      number: body.number,
    });

    return update_senna_blog_by_pk;
  })
);

BlogRouter.get(
  "/:slug",
  injectBlog,
  requestHandler(async ({ blog: data }) => {
    return { data };
  })
);

BlogRouter.patch(
  "/:slug",
  validateBody(
    yup.object().shape({
      title: yup.string().required(),
      content: yup.string().required(),
    })
  ),
  requireAuthentication,
  injectBlog,
  validateBlogOwner,
  requestHandler(async (request) => {
    const { update_senna_blog_by_pk: data } = await request.sdk.UpdateBlog({
      ...request.body,
      id: request.blog.id,
    });

    return { data };
  })
);

BlogRouter.delete(
  "/:slug",
  requireAuthentication,
  injectBlog,
  validateBlogOwner,
  requestHandler(async (request) => {
    await request.sdk.DeleteBlog({ id: request.blog.id });

    return { data: "success" };
  })
);

BlogRouter.get(
  "/",
  requestHandler(async (request) => {
    const limit = 5;
    const { after, author } = request.query;

    let where: ListBlogQueryVariables["where"] = {
      createdAt: {
        _lt: parseAfter(after as string),
      },
    };

    if (author) {
      where = { ...where, author: { username: { _eq: author as string } } };
    }

    const data = await request.sdk.ListBlog({
      where,
      limit,
    });
    const last = data.senna_blog[limit - 1];
    const nextCursor = !last
      ? null
      : Buffer.from(last.createdAt).toString("base64");

    return { data: data.senna_blog, nextCursor };
  })
);

BlogRouter.post(
  "/",
  requireAuthentication,
  validateBody(
    yup.object().shape({
      title: yup.string().required(),
      content: yup.string().required(),
      slug: yup.string().required(),
    })
  ),
  requestHandler(async (request) => {
    const { userId: author } = request;
    const { title, content, slug } = request.body;
    const id = uuid.v4();

    const result = await request.sdk.CreateBlog({
      id,
      title,
      content,
      slug,
      author,
    });

    return {
      data: result.insert_senna_blog_one,
    };
  })
);

function parseAfter(after: string | null): DateTime {
  if (!after) {
    return now();
  }

  return parseISO(
    Buffer.from(after as string, "base64")
      .toString("utf-8")
      .trim()
  );
}
