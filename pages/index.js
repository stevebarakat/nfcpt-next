import Head from "next/head";
import Link from "next/link";
import Hero from "../components/Hero";
import CallToAction from "../components/CallToAction";
import Treatments from "../components/Treatments";
import BottomBlocks from "../components/BottomBlocks";
import Mission from "../components/Mission";
import Layout from "../components/Layout";
import { gql } from "@apollo/client";
import { client } from "../lib/apollo";

export async function getStaticProps() {
  const result = await client.query({
    query: gql`
      query GetHomepage {
        pageBy(uri: "homepage") {
          title
          featuredImage {
            node {
              slug
              title
              caption
              sourceUrl
              altText
            }
          }
          seo {
            metaDesc
            title
          }
        }
      }
    `,
  });
  return {
    props: {
      home: await result.data.pageBy,
    },
  };
}

export default function Home({ home }) {
  return (
    <>
      <Head>
        <title>{home.seo.title}</title>
        <meta name="description" content={home.seo.metaDesc} />
      </Head>
      <Layout>
        <Hero home={home} />
        <CallToAction />
        <Mission />
        <Treatments />
        <BottomBlocks />
      </Layout>
    </>
  );
}
