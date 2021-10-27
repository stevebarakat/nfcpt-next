import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import { gql } from "@apollo/client";
import { client } from "../apollo";

export async function getSortedPostsData() {
  const res = await client.query({
    query: gql``,
  });
}
