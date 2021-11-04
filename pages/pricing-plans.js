import Head from "next/head";
import { buildUrl } from "cloudinary-build-url";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Image from "next/image";
import plans from "../images/hero-2.jpg";

export default function Plans() {
  const urlPixelated = buildUrl("plans", {
    cloud: {
      cloudName: "stevebarakat",
    },
    transformations: {
      effect: {
        name: "pixelate",
      },
    },
  });
  return (
    <>
      <Head>
        <title>Pricing Plans</title>
        <meta
          name="description"
          content="Car Accident Chiropractor - We focus on auto accident recovery. Get the settlement you deserve. Free consultation (904) 272-4329"
        />
      </Head>
      <Layout>
        {/* <Image
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
          placeholder="blur"
          blurDataURL={urlPixelated}
          src={plans}
          alt="women exercising"
        /> */}
        <div className="plans">
          <main>
            <div className="container">
              <div className="pageWrap">
                <article style={{ zIndex: 9 }}>
                  <h1>Pricing Plans</h1>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Facere porro, corrupti atque
                    neque voluptatibus, sapiente veritatis doloremque
                    quae nobis dolor eius amet voluptatem aliquam cum
                    repellat et exercitationem sit dolorem?
                  </p>
                  {/* CHIROPRACTIC ADJUSTMENTS */}
                  <div className="planWrap">
                    <div className="top">
                      <h3>Chiropractic Adjustments</h3>
                    </div>
                    <div className="grid3">
                      <div>5 Visits</div>
                      <div style={{ fontWeight: "800" }}>
                        Save 15%
                      </div>
                      <div>
                        <span className="strike">$200</span> $149
                      </div>
                    </div>
                    <div className="grid3">
                      <div>5 Visits</div>
                      <div style={{ fontWeight: "800" }}>
                        Save 15%
                      </div>
                      <div>
                        <span className="strike">$200</span> $149
                      </div>
                    </div>
                    <div className="grid3">
                      <div>5 Visits</div>
                      <div style={{ fontWeight: "800" }}>
                        Save 15%
                      </div>
                      <div>
                        <span className="strike">$200</span> $149
                      </div>
                    </div>
                    <div className="grid3">
                      <div>5 Visits</div>
                      <div style={{ fontWeight: "800" }}>
                        Save 15%
                      </div>
                      <div>
                        <span className="strike">$200</span> $149
                      </div>
                    </div>
                  </div>
                  {/* MASSAGE THERAPY HALF HOUR */}
                  <div className="planWrap">
                    <div className="top">
                      <h3>Massage Therapy - Half Hour</h3>
                    </div>
                    <div className="grid3">
                      <div>5 Visits</div>
                      <div style={{ fontWeight: "800" }}>
                        Save 15%
                      </div>
                      <div>
                        <span className="strike">$200</span> $149
                      </div>
                    </div>
                    <div className="grid3">
                      <div>5 Visits</div>
                      <div style={{ fontWeight: "800" }}>
                        Save 15%
                      </div>
                      <div>
                        <span className="strike">$200</span> $149
                      </div>
                    </div>
                    <div className="grid3">
                      <div>5 Visits</div>
                      <div style={{ fontWeight: "800" }}>
                        Save 15%
                      </div>
                      <div>
                        <span className="strike">$200</span> $149
                      </div>
                    </div>
                    <div className="grid3">
                      <div>5 Visits</div>
                      <div style={{ fontWeight: "800" }}>
                        Save 15%
                      </div>
                      <div>
                        <span className="strike">$200</span> $149
                      </div>
                    </div>
                  </div>
                  {/* MASSAGE THERAPY ONE HOUR */}
                  <div className="planWrap">
                    <div className="top">
                      <h3>Massage Therapy - One Hour</h3>
                    </div>
                    <div className="grid3">
                      <div>5 Visits</div>
                      <div style={{ fontWeight: "800" }}>
                        Save 15%
                      </div>
                      <div>
                        <span className="strike">$200</span> $149
                      </div>
                    </div>
                    <div className="grid3">
                      <div>5 Visits</div>
                      <div style={{ fontWeight: "800" }}>
                        Save 15%
                      </div>
                      <div>
                        <span className="strike">$200</span> $149
                      </div>
                    </div>
                    <div className="grid3">
                      <div>5 Visits</div>
                      <div style={{ fontWeight: "800" }}>
                        Save 15%
                      </div>
                      <div>
                        <span className="strike">$200</span> $149
                      </div>
                    </div>
                    <div className="grid3">
                      <div>5 Visits</div>
                      <div style={{ fontWeight: "800" }}>
                        Save 15%
                      </div>
                      <div>
                        <span className="strike">$200</span> $149
                      </div>
                    </div>
                  </div>
                </article>
                <Sidebar />
              </div>
            </div>
          </main>
        </div>
      </Layout>
      <style jsx>{`
        .planWrap {
          margin: 2rem 00;
          border: 1px solid var(--grey50);
        }
        .grid3 {
          display: grid;
          grid-template-columns: repeat(3, fit-content(50%));
          grid-gap: 1rem;
          text-align: center;
          padding: 2rem;
          font-size: 1rem;
          font-weight: 600;
          background: var(--transparentBlack50);
          justify-content: space-between;
          border-bottom: 1px solid var(--grey50);
        }
        .grid3 div {
          /* border: 1px solid black; */
        }
        .top {
          background: var(--transparentBlack75);
          padding: 1rem;
          text-align: center;
          border-bottom: 1px solid var(--grey50);
        }
        .top h3 {
          margin: 0;
          color: var(--whiteColor);
          width: fit-content;
        }
        @media (min-width: 850px) {
          .grid3 {
            font-size: 2rem;
            grid-gap: 3rem;
            padding: 3rem 2rem;
          }
          .planWrap {
            margin: 2rem;
          }
        }
      `}</style>
    </>
  );
}
