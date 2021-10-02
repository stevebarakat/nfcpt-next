import { useRef } from 'react';
import Head from 'next/head';
import Footer from "../components/Footer";
import HeroHeader from "../components/HeroHeader";
import Hero from "../components/Hero";
import CallToAction from "../components/CallToAction";
import useIntersecionObserver from "../hooks/useIntersectionObserver";

export default function Home({ title }) {
  const ref = useRef(null);
  const entry = useIntersecionObserver(ref, {})
  const isVisible = !!entry?.isIntersecting

  console.log(`Render Section ${title}`, { isVisible })


  return (
    <>
      <Head>
        <title>Orange Park Chiropractor | North Florida Chiropractic Physical Therapy</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className="container">
        <HeroHeader />
        <Hero />
        <CallToAction />
        <div>
          <h1>div 1</h1>
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
        </div>
        <div>
          <h1 ref={ref}>div 2</h1>
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
        </div>
        <div>
          <h1>div 3</h1>
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
        </div>
        <div>
          <h1>div 4</h1>
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
        </div>
        <div>
          <h1>div 5</h1>
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
          he <br />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  )
}
