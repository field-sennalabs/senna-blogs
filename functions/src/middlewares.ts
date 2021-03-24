import * as admin from "firebase-admin";
import express from "express";

export function validateBody(validator: any) {
  return async (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
  ) => {
    try {
      await validator.validate(request.body);
      next();
    } catch (error) {
      next(error);
    }
  };
}

export async function requireAuthentication(
  request: express.Request,
  response: express.Response,
  next: express.NextFunction
) {
  try {
    const token =
      request.header("authorization")?.slice("Bearer ".length) ?? "401";

    const doc = await admin.firestore().collection("user").doc(token).get();
    const user = doc.data();

    if (!user) {
      throw new Error("Unauthorized");
    }

    request.userId = user.username;

    next();
  } catch (error) {
    next(error);
  }
}

export async function injectBlog(
  request: express.Request,
  response: express.Response,
  next: express.NextFunction
) {
  try {
    const { params, sdk } = request;

    const result = await sdk.GetBlog({ slug: params.slug });

    const blog = result.senna_blog[0];

    if (!blog) {
      throw new Error("Not found");
    }

    request.blog = blog;

    next();
  } catch (error) {
    next(error);
  }
}

export function validateBlogOwner(
  request: express.Request,
  response: express.Response,
  next: express.NextFunction
) {
  try {
    const { blog, userId } = request;

    if (blog.author.username !== userId) {
      throw new Error("Forbidden");
    }

    next();
  } catch (error) {
    next(error);
  }
}
