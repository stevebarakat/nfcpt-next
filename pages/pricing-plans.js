import { useEffect, useRef } from "react";
import { gql, useQuery } from "@apollo/client";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Head from "next/head";
import { buildUrl } from "cloudinary-build-url";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Image from "next/image";
import plans from "../images/hero-2.jpg";

const PRICING_PLANS = gql`
  query GetPricingPlans {
    nfcptSettings {
      nfcptSettings {
        pricingPlans {
          pricingPlan {
            title
            pricingLevel {
              discountAmount
              duration
              newPrice
              numberOfVisits
              oldPrice
            }
          }
        }
      }
    }
  }
`;

export default function Plans() {
  const { loading, error, data } = useQuery(PRICING_PLANS);

  gsap.registerPlugin(ScrollTrigger);
  const el = useRef();
  const q = gsap.utils.selector(el.current);

  useEffect(() => {
    // Target any descendant with the class of .grid3 - no matter how far down the descendant tree. Uses el.current.querySelectorAll() internally
    gsap.set(".planWrap", {
      opacity: 1,
    });
    gsap.from(".planWrap", {
      stagger: { amount: 0.5 },
      scale: 0,
      delay: 0.25,
      duration: 1,
    });
  }, []);

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  data.nfcptSettings.nfcptSettings.pricingPlans.map((plan) => {
    console.log(plan.pricingPlan.title);
    plan.pricingPlan.pricingLevel.map((level) => {
      console.log(level.discountAmount);
    });
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
        <div className="plans">
          <main>
            <div className="container">
              <div className="pageWrap">
                <article style={{ zIndex: 9 }} ref={el}>
                  <h1>Pricing Plans</h1>
                  <p>
                    After receiving your initial consultation, Dr.
                    Orlando will perform a full exam in order to gain
                    insight on what recovery plan will work for you.
                    Since the recommendation will vary from person to
                    person, we offer multiple plans that are both
                    affordable and convenient without the hassles of
                    long term contracts.
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
          opacity: 0;
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
        .top {
          background: var(--transparentBlack50);
          padding: 1rem;
          text-align: center;
          border-bottom: 1px solid var(--grey50);
        }
        .top h3 {
          margin: 0;
          color: var(--grey05);
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
