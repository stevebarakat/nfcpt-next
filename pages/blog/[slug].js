import { gql } from "@apollo/client";
import { client } from "../../apollo";

export default function Page({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const result = await client.query({
    query: gql`
      query GetWordPressPosts {
        posts {
          nodes {
            slug
          }
        }
      }
    `,
  });
  return {
    paths: await result.data.posts.nodes.map(({ slug }) => {
      return {
        params: { slug },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const result = client.query({
    query: gql`
      query GetWordPressPostsBySlug {
        postBy(slug: "hello-world") {
          title
          content
        }
      }
    `,
  });
  console.log(result);
  return {
    props: {
      post: { title: result, content: "ubu" },
    },
  };
}
