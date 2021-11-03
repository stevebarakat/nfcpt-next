import { useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Button from "../components/Button";
import Sidebar from "../components/Sidebar";
import Image from "next/image";
import plans from "../images/plans.jpg";

function encode(data) {
  return Object.keys(data)
    .map(
      (key) =>
        encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
    )
    .join("&");
}

export default function Contact({ page }) {
  const [state, setState] = useState("");
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => alert(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  return (
    <>
      <Head>
        <title>Contact</title>
        <meta
          name="description"
          content="Car Accident Chiropractor - We focus on auto accident recovery. Get the settlement you deserve. Free consultation (904) 272-4329"
        />
      </Head>
      <Layout>
        <div className="page">
          <div className="mastheadWrap">
            <Image
              unoptimized={process.env.ENVIRONMENT !== "PRODUCTION"}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              quality={100}
              src={plans}
              alt="women exercising"
            />
            <div className={"heading container"}>
              <span className="h1">Happy Therapy Club</span>
              <p className="description">
                Regular chiropractic adjustments lead to overall
                health and happiness.
              </p>
            </div>
          </div>
          <main>
            <div className="container">
              <div className="pageWrap">
                <article>
                  <h1>Contact</h1>
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
                    <div className="contact-form">
                      <form
                        name="contact"
                        method="post"
                        action="/thanks/"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                        onSubmit={handleSubmit}
                      >
                        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                        <input
                          type="hidden"
                          name="form-name"
                          value="contact"
                        />
                        <p hidden>
                          <label>
                            Don’t fill this out:{" "}
                            <input
                              name="bot-field"
                              onChange={handleChange}
                            />
                          </label>
                        </p>
                        <div className="form-input-wrap">
                          <label htmlFor="first-name">
                            First Name:
                          </label>
                          <input
                            type="text"
                            onChange={handleChange}
                            name="first-name"
                            id="first-name"
                          />
                        </div>
                        <div className="form-input-wrap">
                          <label htmlFor="last-name">
                            Last Name:
                          </label>
                          <input
                            type="text"
                            onChange={handleChange}
                            name="last-name"
                            id="last-name"
                          />
                        </div>
                        <div className="form-input-wrap">
                          <label htmlFor="phone-number">
                            Phone Number:
                          </label>
                          <input
                            type="text"
                            onChange={handleChange}
                            name="phone-number"
                            id="phone-number"
                          />
                        </div>
                        <div className="form-input-wrap">
                          <label htmlFor="email">Email:</label>
                          <input
                            type="text"
                            onChange={handleChange}
                            name="email"
                            id="email"
                          />
                        </div>
                        <div className="form-input-wrap">
                          <label htmlFor="message">Message:</label>
                          <textarea
                            className="text-area"
                            onChange={handleChange}
                            name="message"
                            id="message"
                          />
                          <Button
                            type="submit"
                            className="contact-button"
                          >
                            Send Message
                          </Button>
                        </div>
                      </form>
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
          border: 1px solid var(--grey);
        }
        .grid3 {
          display: grid;
          grid-template-columns: repeat(3, fit-content(50%));
          grid-gap: 1rem;
          text-align: center;
          padding: 2rem;
          font-size: 1rem;
          font-weight: 600;
          background: hsla(201, 100%, 45%, 0.25);
          justify-content: space-between;
          border-bottom: 1px solid var(--grey);
        }
        .grid3 div {
          /* border: 1px solid black; */
        }
        .top {
          background: var(--primaryColor);
          padding: 1rem;
          text-align: center;
          border-bottom: 1px solid var(--grey);
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
