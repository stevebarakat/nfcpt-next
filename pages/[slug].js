import { gql } from "@apollo/client";
import { client } from "../lib/apollo";
import Head from "next/head";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Image from "next/image";
import shoes from "../images/shoes.jpg";
import styles from "./page.module.css";

export default function Page({ page }) {
  return (
    <>
      <Head>
        <title>{page.seo.title}</title>
        <meta name="description" content={page.seo.metaDesc} />
      </Head>
      <Layout>
        <div className="page">
          <div className={styles.mastheadWrap}>
            <Image
              unoptimized={process.env.ENVIRONMENT !== "PRODUCTION"}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              quality={100}
              src={page.featuredImage.node.sourceUrl}
              alt="Picture of the author"
            />
            <div className={`${styles.heading} container`}>
              <h1>North Florida Chiropractic Physical Therapy</h1>
              <p>
                Dr. Jason Orlando | Serving Orange Park for over 20
                years
              </p>
            </div>
          </div>
          <main>
            <div className="container">
              <div className={styles.pageWrap}>
                <article>
                  <h1>{page.title}</h1>
                  <div
                    dangerouslySetInnerHTML={{ __html: page.content }}
                  ></div>
                </article>
                <Sidebar />
              </div>
            </div>
          </main>
        </div>
      </Layout>
    </>
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
          seo {
            title
            metaDesc
          }
          featuredImage {
            node {
              caption
              sourceUrl
            }
          }
        }
      }
    `,
    variables: { slug },
  });
  return {
    props: {
      page: result.data.pageBy,
    },
  };
}
