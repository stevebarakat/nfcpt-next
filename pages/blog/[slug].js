import { gql } from "@apollo/client";
import { client } from "../../lib/apollo";

export default function Page({ page }) {
  return (
    <div>
      <h1>Page</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Facere porro, corrupti atque neque voluptatibus, sapiente
        veritatis doloremque quae nobis dolor eius amet voluptatem
        aliquam cum repellat et exercitationem sit dolorem?
      </p>
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
  const { uri } = await params;
  const result = await client.query({
    query: gql`
      query GetWordPressPostsBySlug {
        pageBy(uri: "first-visit") {
          title
          content
        }
      }
    `,
  });
  console.log(result);
  return {
    props: {
      page: result.data.pageBy,
    },
  };
}
