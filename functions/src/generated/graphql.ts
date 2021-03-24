import { GraphQLClient } from "graphql-request";
import * as Dom from "graphql-request/dist/types.dom";
import gql from "graphql-tag";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars["Int"]>;
  _gt?: Maybe<Scalars["Int"]>;
  _gte?: Maybe<Scalars["Int"]>;
  _in?: Maybe<Array<Scalars["Int"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["Int"]>;
  _lte?: Maybe<Scalars["Int"]>;
  _neq?: Maybe<Scalars["Int"]>;
  _nin?: Maybe<Array<Scalars["Int"]>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars["String"]>;
  _gt?: Maybe<Scalars["String"]>;
  _gte?: Maybe<Scalars["String"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars["String"]>;
  _in?: Maybe<Array<Scalars["String"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars["String"]>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars["String"]>;
  _lt?: Maybe<Scalars["String"]>;
  _lte?: Maybe<Scalars["String"]>;
  _neq?: Maybe<Scalars["String"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars["String"]>;
  _nin?: Maybe<Array<Scalars["String"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars["String"]>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars["String"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars["String"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars["String"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars["String"]>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars["String"]>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  /** delete data from the table: "senna.author" */
  delete_senna_author?: Maybe<Senna_Author_Mutation_Response>;
  /** delete single row from the table: "senna.author" */
  delete_senna_author_by_pk?: Maybe<Senna_Author>;
  /** delete data from the table: "senna.blog" */
  delete_senna_blog?: Maybe<Senna_Blog_Mutation_Response>;
  /** delete single row from the table: "senna.blog" */
  delete_senna_blog_by_pk?: Maybe<Senna_Blog>;
  /** insert data into the table: "senna.author" */
  insert_senna_author?: Maybe<Senna_Author_Mutation_Response>;
  /** insert a single row into the table: "senna.author" */
  insert_senna_author_one?: Maybe<Senna_Author>;
  /** insert data into the table: "senna.blog" */
  insert_senna_blog?: Maybe<Senna_Blog_Mutation_Response>;
  /** insert a single row into the table: "senna.blog" */
  insert_senna_blog_one?: Maybe<Senna_Blog>;
  /** update data of the table: "senna.author" */
  update_senna_author?: Maybe<Senna_Author_Mutation_Response>;
  /** update single row of the table: "senna.author" */
  update_senna_author_by_pk?: Maybe<Senna_Author>;
  /** update data of the table: "senna.blog" */
  update_senna_blog?: Maybe<Senna_Blog_Mutation_Response>;
  /** update single row of the table: "senna.blog" */
  update_senna_blog_by_pk?: Maybe<Senna_Blog>;
};

/** mutation root */
export type Mutation_RootDelete_Senna_AuthorArgs = {
  where: Senna_Author_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Senna_Author_By_PkArgs = {
  id: Scalars["String"];
};

/** mutation root */
export type Mutation_RootDelete_Senna_BlogArgs = {
  where: Senna_Blog_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Senna_Blog_By_PkArgs = {
  id: Scalars["String"];
};

/** mutation root */
export type Mutation_RootInsert_Senna_AuthorArgs = {
  objects: Array<Senna_Author_Insert_Input>;
  on_conflict?: Maybe<Senna_Author_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Senna_Author_OneArgs = {
  object: Senna_Author_Insert_Input;
  on_conflict?: Maybe<Senna_Author_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Senna_BlogArgs = {
  objects: Array<Senna_Blog_Insert_Input>;
  on_conflict?: Maybe<Senna_Blog_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Senna_Blog_OneArgs = {
  object: Senna_Blog_Insert_Input;
  on_conflict?: Maybe<Senna_Blog_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_Senna_AuthorArgs = {
  _set?: Maybe<Senna_Author_Set_Input>;
  where: Senna_Author_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Senna_Author_By_PkArgs = {
  _set?: Maybe<Senna_Author_Set_Input>;
  pk_columns: Senna_Author_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Senna_BlogArgs = {
  _inc?: Maybe<Senna_Blog_Inc_Input>;
  _set?: Maybe<Senna_Blog_Set_Input>;
  where: Senna_Blog_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Senna_Blog_By_PkArgs = {
  _inc?: Maybe<Senna_Blog_Inc_Input>;
  _set?: Maybe<Senna_Blog_Set_Input>;
  pk_columns: Senna_Blog_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = "asc",
  /** in ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in descending order, nulls first */
  Desc = "desc",
  /** in descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in descending order, nulls last */
  DescNullsLast = "desc_nulls_last",
}

export type Query_Root = {
  __typename?: "query_root";
  /** fetch data from the table: "senna.author" */
  senna_author: Array<Senna_Author>;
  /** fetch aggregated fields from the table: "senna.author" */
  senna_author_aggregate: Senna_Author_Aggregate;
  /** fetch data from the table: "senna.author" using primary key columns */
  senna_author_by_pk?: Maybe<Senna_Author>;
  /** fetch data from the table: "senna.blog" */
  senna_blog: Array<Senna_Blog>;
  /** fetch aggregated fields from the table: "senna.blog" */
  senna_blog_aggregate: Senna_Blog_Aggregate;
  /** fetch data from the table: "senna.blog" using primary key columns */
  senna_blog_by_pk?: Maybe<Senna_Blog>;
};

export type Query_RootSenna_AuthorArgs = {
  distinct_on?: Maybe<Array<Senna_Author_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Senna_Author_Order_By>>;
  where?: Maybe<Senna_Author_Bool_Exp>;
};

export type Query_RootSenna_Author_AggregateArgs = {
  distinct_on?: Maybe<Array<Senna_Author_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Senna_Author_Order_By>>;
  where?: Maybe<Senna_Author_Bool_Exp>;
};

export type Query_RootSenna_Author_By_PkArgs = {
  id: Scalars["String"];
};

export type Query_RootSenna_BlogArgs = {
  distinct_on?: Maybe<Array<Senna_Blog_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Senna_Blog_Order_By>>;
  where?: Maybe<Senna_Blog_Bool_Exp>;
};

export type Query_RootSenna_Blog_AggregateArgs = {
  distinct_on?: Maybe<Array<Senna_Blog_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Senna_Blog_Order_By>>;
  where?: Maybe<Senna_Blog_Bool_Exp>;
};

export type Query_RootSenna_Blog_By_PkArgs = {
  id: Scalars["String"];
};

/** columns and relationships of "senna.author" */
export type Senna_Author = {
  __typename?: "senna_author";
  /** An array relationship */
  blogs: Array<Senna_Blog>;
  /** An aggregate relationship */
  blogs_aggregate: Senna_Blog_Aggregate;
  id: Scalars["String"];
  name: Scalars["String"];
  username: Scalars["String"];
};

/** columns and relationships of "senna.author" */
export type Senna_AuthorBlogsArgs = {
  distinct_on?: Maybe<Array<Senna_Blog_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Senna_Blog_Order_By>>;
  where?: Maybe<Senna_Blog_Bool_Exp>;
};

/** columns and relationships of "senna.author" */
export type Senna_AuthorBlogs_AggregateArgs = {
  distinct_on?: Maybe<Array<Senna_Blog_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Senna_Blog_Order_By>>;
  where?: Maybe<Senna_Blog_Bool_Exp>;
};

/** aggregated selection of "senna.author" */
export type Senna_Author_Aggregate = {
  __typename?: "senna_author_aggregate";
  aggregate?: Maybe<Senna_Author_Aggregate_Fields>;
  nodes: Array<Senna_Author>;
};

/** aggregate fields of "senna.author" */
export type Senna_Author_Aggregate_Fields = {
  __typename?: "senna_author_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<Senna_Author_Max_Fields>;
  min?: Maybe<Senna_Author_Min_Fields>;
};

/** aggregate fields of "senna.author" */
export type Senna_Author_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Senna_Author_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** Boolean expression to filter rows from the table "senna.author". All fields are combined with a logical 'AND'. */
export type Senna_Author_Bool_Exp = {
  _and?: Maybe<Array<Senna_Author_Bool_Exp>>;
  _not?: Maybe<Senna_Author_Bool_Exp>;
  _or?: Maybe<Array<Senna_Author_Bool_Exp>>;
  blogs?: Maybe<Senna_Blog_Bool_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  username?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "senna.author" */
export enum Senna_Author_Constraint {
  /** unique or primary key constraint */
  AuthorPkey = "author_pkey",
}

/** input type for inserting data into table "senna.author" */
export type Senna_Author_Insert_Input = {
  blogs?: Maybe<Senna_Blog_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  username?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Senna_Author_Max_Fields = {
  __typename?: "senna_author_max_fields";
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  username?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Senna_Author_Min_Fields = {
  __typename?: "senna_author_min_fields";
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  username?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "senna.author" */
export type Senna_Author_Mutation_Response = {
  __typename?: "senna_author_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Senna_Author>;
};

/** input type for inserting object relation for remote table "senna.author" */
export type Senna_Author_Obj_Rel_Insert_Input = {
  data: Senna_Author_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Senna_Author_On_Conflict>;
};

/** on conflict condition type for table "senna.author" */
export type Senna_Author_On_Conflict = {
  constraint: Senna_Author_Constraint;
  update_columns: Array<Senna_Author_Update_Column>;
  where?: Maybe<Senna_Author_Bool_Exp>;
};

/** Ordering options when selecting data from "senna.author". */
export type Senna_Author_Order_By = {
  blogs_aggregate?: Maybe<Senna_Blog_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** primary key columns input for table: senna_author */
export type Senna_Author_Pk_Columns_Input = {
  id: Scalars["String"];
};

/** select columns of table "senna.author" */
export enum Senna_Author_Select_Column {
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  Username = "username",
}

/** input type for updating data in table "senna.author" */
export type Senna_Author_Set_Input = {
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  username?: Maybe<Scalars["String"]>;
};

/** update columns of table "senna.author" */
export enum Senna_Author_Update_Column {
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  Username = "username",
}

/** columns and relationships of "senna.blog" */
export type Senna_Blog = {
  __typename?: "senna_blog";
  /** An object relationship */
  author: Senna_Author;
  authorId: Scalars["String"];
  content: Scalars["String"];
  createdAt?: Maybe<Scalars["timestamptz"]>;
  heartCount: Scalars["Int"];
  id: Scalars["String"];
  slug: Scalars["String"];
  title: Scalars["String"];
};

/** aggregated selection of "senna.blog" */
export type Senna_Blog_Aggregate = {
  __typename?: "senna_blog_aggregate";
  aggregate?: Maybe<Senna_Blog_Aggregate_Fields>;
  nodes: Array<Senna_Blog>;
};

/** aggregate fields of "senna.blog" */
export type Senna_Blog_Aggregate_Fields = {
  __typename?: "senna_blog_aggregate_fields";
  avg?: Maybe<Senna_Blog_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Senna_Blog_Max_Fields>;
  min?: Maybe<Senna_Blog_Min_Fields>;
  stddev?: Maybe<Senna_Blog_Stddev_Fields>;
  stddev_pop?: Maybe<Senna_Blog_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Senna_Blog_Stddev_Samp_Fields>;
  sum?: Maybe<Senna_Blog_Sum_Fields>;
  var_pop?: Maybe<Senna_Blog_Var_Pop_Fields>;
  var_samp?: Maybe<Senna_Blog_Var_Samp_Fields>;
  variance?: Maybe<Senna_Blog_Variance_Fields>;
};

/** aggregate fields of "senna.blog" */
export type Senna_Blog_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Senna_Blog_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "senna.blog" */
export type Senna_Blog_Aggregate_Order_By = {
  avg?: Maybe<Senna_Blog_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Senna_Blog_Max_Order_By>;
  min?: Maybe<Senna_Blog_Min_Order_By>;
  stddev?: Maybe<Senna_Blog_Stddev_Order_By>;
  stddev_pop?: Maybe<Senna_Blog_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Senna_Blog_Stddev_Samp_Order_By>;
  sum?: Maybe<Senna_Blog_Sum_Order_By>;
  var_pop?: Maybe<Senna_Blog_Var_Pop_Order_By>;
  var_samp?: Maybe<Senna_Blog_Var_Samp_Order_By>;
  variance?: Maybe<Senna_Blog_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "senna.blog" */
export type Senna_Blog_Arr_Rel_Insert_Input = {
  data: Array<Senna_Blog_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Senna_Blog_On_Conflict>;
};

/** aggregate avg on columns */
export type Senna_Blog_Avg_Fields = {
  __typename?: "senna_blog_avg_fields";
  heartCount?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "senna.blog" */
export type Senna_Blog_Avg_Order_By = {
  heartCount?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "senna.blog". All fields are combined with a logical 'AND'. */
export type Senna_Blog_Bool_Exp = {
  _and?: Maybe<Array<Senna_Blog_Bool_Exp>>;
  _not?: Maybe<Senna_Blog_Bool_Exp>;
  _or?: Maybe<Array<Senna_Blog_Bool_Exp>>;
  author?: Maybe<Senna_Author_Bool_Exp>;
  authorId?: Maybe<String_Comparison_Exp>;
  content?: Maybe<String_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  heartCount?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  slug?: Maybe<String_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "senna.blog" */
export enum Senna_Blog_Constraint {
  /** unique or primary key constraint */
  BlogPkey = "blog_pkey",
  /** unique or primary key constraint */
  BlogSlugKey = "blog_slug_key",
}

/** input type for incrementing numeric columns in table "senna.blog" */
export type Senna_Blog_Inc_Input = {
  heartCount?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "senna.blog" */
export type Senna_Blog_Insert_Input = {
  author?: Maybe<Senna_Author_Obj_Rel_Insert_Input>;
  authorId?: Maybe<Scalars["String"]>;
  content?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["timestamptz"]>;
  heartCount?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Senna_Blog_Max_Fields = {
  __typename?: "senna_blog_max_fields";
  authorId?: Maybe<Scalars["String"]>;
  content?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["timestamptz"]>;
  heartCount?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "senna.blog" */
export type Senna_Blog_Max_Order_By = {
  authorId?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  heartCount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Senna_Blog_Min_Fields = {
  __typename?: "senna_blog_min_fields";
  authorId?: Maybe<Scalars["String"]>;
  content?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["timestamptz"]>;
  heartCount?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "senna.blog" */
export type Senna_Blog_Min_Order_By = {
  authorId?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  heartCount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** response of any mutation on the table "senna.blog" */
export type Senna_Blog_Mutation_Response = {
  __typename?: "senna_blog_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Senna_Blog>;
};

/** on conflict condition type for table "senna.blog" */
export type Senna_Blog_On_Conflict = {
  constraint: Senna_Blog_Constraint;
  update_columns: Array<Senna_Blog_Update_Column>;
  where?: Maybe<Senna_Blog_Bool_Exp>;
};

/** Ordering options when selecting data from "senna.blog". */
export type Senna_Blog_Order_By = {
  author?: Maybe<Senna_Author_Order_By>;
  authorId?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  heartCount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** primary key columns input for table: senna_blog */
export type Senna_Blog_Pk_Columns_Input = {
  id: Scalars["String"];
};

/** select columns of table "senna.blog" */
export enum Senna_Blog_Select_Column {
  /** column name */
  AuthorId = "authorId",
  /** column name */
  Content = "content",
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  HeartCount = "heartCount",
  /** column name */
  Id = "id",
  /** column name */
  Slug = "slug",
  /** column name */
  Title = "title",
}

/** input type for updating data in table "senna.blog" */
export type Senna_Blog_Set_Input = {
  authorId?: Maybe<Scalars["String"]>;
  content?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["timestamptz"]>;
  heartCount?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Senna_Blog_Stddev_Fields = {
  __typename?: "senna_blog_stddev_fields";
  heartCount?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "senna.blog" */
export type Senna_Blog_Stddev_Order_By = {
  heartCount?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Senna_Blog_Stddev_Pop_Fields = {
  __typename?: "senna_blog_stddev_pop_fields";
  heartCount?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "senna.blog" */
export type Senna_Blog_Stddev_Pop_Order_By = {
  heartCount?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Senna_Blog_Stddev_Samp_Fields = {
  __typename?: "senna_blog_stddev_samp_fields";
  heartCount?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "senna.blog" */
export type Senna_Blog_Stddev_Samp_Order_By = {
  heartCount?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Senna_Blog_Sum_Fields = {
  __typename?: "senna_blog_sum_fields";
  heartCount?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "senna.blog" */
export type Senna_Blog_Sum_Order_By = {
  heartCount?: Maybe<Order_By>;
};

/** update columns of table "senna.blog" */
export enum Senna_Blog_Update_Column {
  /** column name */
  AuthorId = "authorId",
  /** column name */
  Content = "content",
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  HeartCount = "heartCount",
  /** column name */
  Id = "id",
  /** column name */
  Slug = "slug",
  /** column name */
  Title = "title",
}

/** aggregate var_pop on columns */
export type Senna_Blog_Var_Pop_Fields = {
  __typename?: "senna_blog_var_pop_fields";
  heartCount?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "senna.blog" */
export type Senna_Blog_Var_Pop_Order_By = {
  heartCount?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Senna_Blog_Var_Samp_Fields = {
  __typename?: "senna_blog_var_samp_fields";
  heartCount?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "senna.blog" */
export type Senna_Blog_Var_Samp_Order_By = {
  heartCount?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Senna_Blog_Variance_Fields = {
  __typename?: "senna_blog_variance_fields";
  heartCount?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "senna.blog" */
export type Senna_Blog_Variance_Order_By = {
  heartCount?: Maybe<Order_By>;
};

export type Subscription_Root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "senna.author" */
  senna_author: Array<Senna_Author>;
  /** fetch aggregated fields from the table: "senna.author" */
  senna_author_aggregate: Senna_Author_Aggregate;
  /** fetch data from the table: "senna.author" using primary key columns */
  senna_author_by_pk?: Maybe<Senna_Author>;
  /** fetch data from the table: "senna.blog" */
  senna_blog: Array<Senna_Blog>;
  /** fetch aggregated fields from the table: "senna.blog" */
  senna_blog_aggregate: Senna_Blog_Aggregate;
  /** fetch data from the table: "senna.blog" using primary key columns */
  senna_blog_by_pk?: Maybe<Senna_Blog>;
};

export type Subscription_RootSenna_AuthorArgs = {
  distinct_on?: Maybe<Array<Senna_Author_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Senna_Author_Order_By>>;
  where?: Maybe<Senna_Author_Bool_Exp>;
};

export type Subscription_RootSenna_Author_AggregateArgs = {
  distinct_on?: Maybe<Array<Senna_Author_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Senna_Author_Order_By>>;
  where?: Maybe<Senna_Author_Bool_Exp>;
};

export type Subscription_RootSenna_Author_By_PkArgs = {
  id: Scalars["String"];
};

export type Subscription_RootSenna_BlogArgs = {
  distinct_on?: Maybe<Array<Senna_Blog_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Senna_Blog_Order_By>>;
  where?: Maybe<Senna_Blog_Bool_Exp>;
};

export type Subscription_RootSenna_Blog_AggregateArgs = {
  distinct_on?: Maybe<Array<Senna_Blog_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Senna_Blog_Order_By>>;
  where?: Maybe<Senna_Blog_Bool_Exp>;
};

export type Subscription_RootSenna_Blog_By_PkArgs = {
  id: Scalars["String"];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars["timestamptz"]>;
  _gt?: Maybe<Scalars["timestamptz"]>;
  _gte?: Maybe<Scalars["timestamptz"]>;
  _in?: Maybe<Array<Scalars["timestamptz"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["timestamptz"]>;
  _lte?: Maybe<Scalars["timestamptz"]>;
  _neq?: Maybe<Scalars["timestamptz"]>;
  _nin?: Maybe<Array<Scalars["timestamptz"]>>;
};

export type AuthorFragment = { __typename?: "senna_author" } & Pick<
  Senna_Author,
  "id" | "name" | "username"
>;

export type BlogFragment = { __typename?: "senna_blog" } & Pick<
  Senna_Blog,
  "id" | "slug" | "title" | "content" | "createdAt" | "heartCount"
> & { author: { __typename?: "senna_author" } & AuthorFragment };

export type CreateAuthorMutationVariables = Exact<{
  id: Scalars["String"];
  name: Scalars["String"];
  username: Scalars["String"];
}>;

export type CreateAuthorMutation = { __typename?: "mutation_root" } & {
  insert_senna_author?: Maybe<
    { __typename?: "senna_author_mutation_response" } & {
      returning: Array<{ __typename?: "senna_author" } & AuthorFragment>;
    }
  >;
};

export type CreateBlogMutationVariables = Exact<{
  id: Scalars["String"];
  author: Scalars["String"];
  content: Scalars["String"];
  slug: Scalars["String"];
  title: Scalars["String"];
}>;

export type CreateBlogMutation = { __typename?: "mutation_root" } & {
  insert_senna_blog_one?: Maybe<{ __typename?: "senna_blog" } & BlogFragment>;
};

export type DeleteBlogMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type DeleteBlogMutation = { __typename?: "mutation_root" } & {
  delete_senna_blog_by_pk?: Maybe<{ __typename?: "senna_blog" } & BlogFragment>;
};

export type GetBlogQueryVariables = Exact<{
  slug: Scalars["String"];
}>;

export type GetBlogQuery = { __typename?: "query_root" } & {
  senna_blog: Array<{ __typename?: "senna_blog" } & BlogFragment>;
};

export type GiveHeartToBlogMutationMutationVariables = Exact<{
  number: Scalars["Int"];
  id: Scalars["String"];
}>;

export type GiveHeartToBlogMutationMutation = {
  __typename?: "mutation_root";
} & {
  update_senna_blog_by_pk?: Maybe<{ __typename?: "senna_blog" } & BlogFragment>;
};

export type ListBlogQueryVariables = Exact<{
  limit?: Maybe<Scalars["Int"]>;
  where: Senna_Blog_Bool_Exp;
}>;

export type ListBlogQuery = { __typename?: "query_root" } & {
  senna_blog: Array<{ __typename?: "senna_blog" } & BlogFragment>;
};

export type UpdateBlogMutationVariables = Exact<{
  id: Scalars["String"];
  content: Scalars["String"];
  title: Scalars["String"];
}>;

export type UpdateBlogMutation = { __typename?: "mutation_root" } & {
  update_senna_blog_by_pk?: Maybe<{ __typename?: "senna_blog" } & BlogFragment>;
};

export const AuthorFragmentDoc = gql`
  fragment Author on senna_author {
    id
    name
    username
  }
`;
export const BlogFragmentDoc = gql`
  fragment Blog on senna_blog {
    id
    slug
    title
    content
    createdAt
    heartCount
    author {
      ...Author
    }
  }
  ${AuthorFragmentDoc}
`;
export const CreateAuthorDocument = gql`
  mutation CreateAuthor($id: String!, $name: String!, $username: String!) {
    insert_senna_author(
      objects: { id: $id, name: $name, username: $username }
    ) {
      returning {
        ...Author
      }
    }
  }
  ${AuthorFragmentDoc}
`;
export const CreateBlogDocument = gql`
  mutation CreateBlog(
    $id: String!
    $author: String!
    $content: String!
    $slug: String!
    $title: String!
  ) {
    insert_senna_blog_one(
      object: {
        id: $id
        authorId: $author
        content: $content
        slug: $slug
        title: $title
      }
    ) {
      ...Blog
    }
  }
  ${BlogFragmentDoc}
`;
export const DeleteBlogDocument = gql`
  mutation DeleteBlog($id: String!) {
    delete_senna_blog_by_pk(id: $id) {
      ...Blog
    }
  }
  ${BlogFragmentDoc}
`;
export const GetBlogDocument = gql`
  query GetBlog($slug: String!) {
    senna_blog(limit: 1, where: { slug: { _eq: $slug } }) {
      ...Blog
    }
  }
  ${BlogFragmentDoc}
`;
export const GiveHeartToBlogMutationDocument = gql`
  mutation GiveHeartToBlogMutation($number: Int!, $id: String!) {
    update_senna_blog_by_pk(
      pk_columns: { id: $id }
      _inc: { heartCount: $number }
    ) {
      ...Blog
    }
  }
  ${BlogFragmentDoc}
`;
export const ListBlogDocument = gql`
  query ListBlog($limit: Int, $where: senna_blog_bool_exp!) {
    senna_blog(limit: $limit, where: $where, order_by: [{ createdAt: desc }]) {
      ...Blog
    }
  }
  ${BlogFragmentDoc}
`;
export const UpdateBlogDocument = gql`
  mutation UpdateBlog($id: String!, $content: String!, $title: String!) {
    update_senna_blog_by_pk(
      _set: { title: $title, content: $content }
      pk_columns: { id: $id }
    ) {
      ...Blog
    }
  }
  ${BlogFragmentDoc}
`;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (sdkFunction) => sdkFunction();
export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  return {
    CreateAuthor(
      variables: CreateAuthorMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<CreateAuthorMutation> {
      return withWrapper(() =>
        client.request<CreateAuthorMutation>(
          CreateAuthorDocument,
          variables,
          requestHeaders
        )
      );
    },
    CreateBlog(
      variables: CreateBlogMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<CreateBlogMutation> {
      return withWrapper(() =>
        client.request<CreateBlogMutation>(
          CreateBlogDocument,
          variables,
          requestHeaders
        )
      );
    },
    DeleteBlog(
      variables: DeleteBlogMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<DeleteBlogMutation> {
      return withWrapper(() =>
        client.request<DeleteBlogMutation>(
          DeleteBlogDocument,
          variables,
          requestHeaders
        )
      );
    },
    GetBlog(
      variables: GetBlogQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<GetBlogQuery> {
      return withWrapper(() =>
        client.request<GetBlogQuery>(GetBlogDocument, variables, requestHeaders)
      );
    },
    GiveHeartToBlogMutation(
      variables: GiveHeartToBlogMutationMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<GiveHeartToBlogMutationMutation> {
      return withWrapper(() =>
        client.request<GiveHeartToBlogMutationMutation>(
          GiveHeartToBlogMutationDocument,
          variables,
          requestHeaders
        )
      );
    },
    ListBlog(
      variables: ListBlogQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<ListBlogQuery> {
      return withWrapper(() =>
        client.request<ListBlogQuery>(
          ListBlogDocument,
          variables,
          requestHeaders
        )
      );
    },
    UpdateBlog(
      variables: UpdateBlogMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<UpdateBlogMutation> {
      return withWrapper(() =>
        client.request<UpdateBlogMutation>(
          UpdateBlogDocument,
          variables,
          requestHeaders
        )
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
