import Head from "next/head";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import CallToAction from "../components/CallToAction";
import Treatments from "../components/Treatments";
import BottomBlocks from "../components/BottomBlocks";
import Mission from "../components/Mission";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Orange Park Chiropractor | North Florida Chiropractic
          Physical Therapy
        </title>
        <meta
          name="description"
          content="Generated by create next app"
        />
      </Head>
      <Layout>
        <Hero />
        <Intro />
        <Mission />
        {/* <CallToAction /> */}
        <Treatments />
        <BottomBlocks />
      </Layout>
    </>
  );
}
