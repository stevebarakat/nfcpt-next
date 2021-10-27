import { gql } from "@apollo/client";
import { client } from "../lib/apollo";

export default function Page({ page }) {
  return (
    <div>
      <h1>{page.title}</h1>
      <p>{page.content}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const result = await client.query({
    query: gql`
      query GetWordPressPosts {
        pages {
          nodes {
            uri
            slug
          }
        }
      }
    `,
  });
  console.log(result);
  return {
    paths: await result.data.pages.nodes.map((uri) => {
      return {
        params: uri,
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = await params;
  const result = await client.query({
    query: gql`
      query GetWordPressPostsBySlug($slug: String!) {
        pageBy(uri: $slug) {
          title
          content
        }
      }
    `,
    variables: { slug },
  });
  console.log(result);
  return {
    props: {
      page: result.data.pageBy,
    },
  };
}
