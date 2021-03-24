declare namespace Express {
  export interface Request {
    userId: string;
    sdk: import("./generated/graphql").Sdk;
    blog: ThenArgRecursive<
      ReturnType<import("./generated/graphql").Sdk["GetBlog"]>
    >["senna_blog"][number];
  }
}

type ThenArgRecursive<T> = T extends PromiseLike<infer U>
  ? { 0: ThenArgRecursive<U>; 1: U }[U extends PromiseLike<any> ? 0 : 1]
  : T;
