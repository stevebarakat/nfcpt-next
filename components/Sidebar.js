import { useEffect } from "react";
import styles from "./sidebar.module.css";
import Image from "next/image";
import coupon from "../images/new-patient-vertical.svg";
import margaret from "../images/margaret.jpg";
import Button from "./Button";
import ClaimOfferForm from "./ClaimOfferForm";
import { gql, useQuery } from "@apollo/client";
import { client } from "../lib/apollo";

const TESTIMONIALS = gql`
  query GetTestimonials {
    pageBy(uri: "settings-page") {
      pageId
      pageSettings {
        testimonials {
          testimonial {
            testimonialContent
            testimonialPhoto {
              sourceUrl
            }
          }
        }
      }
    }
  }
`;

const Sidebar = () => {
  const { data } = useQuery(TESTIMONIALS);

  function randomNumber(min = 0, max = 1) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const n = randomNumber(0, 1);

  const testimonialPhoto =
    data?.pageBy?.pageSettings.testimonials[n].testimonial
      .testimonialPhoto.sourceUrl;
  const testimonialContent =
    data?.pageBy?.pageSettings.testimonials[n].testimonial
      .testimonialContent;
  return (
    <aside className={styles.sidebar}>
      <div
        className={styles.sidebarWidget}
        style={{ background: "var(--accentColor)" }}
      >
        <Image
          quality={100}
          src={coupon}
          alt="Picture of the author"
        />
        <ClaimOfferForm />
      </div>
      <div
        className={styles.sidebarWidget}
        style={{ background: "var(--primaryColor)" }}
      >
        <div className={styles.testimonialImg}>
          {testimonialPhoto && (
            <Image
              src={testimonialPhoto}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              quality={100}
              alt="Picture of the author"
            />
          )}
        </div>
        <blockquote>
          <span className={styles.testimonial}>
            {testimonialContent}
          </span>
        </blockquote>
      </div>
    </aside>
  );
};

export default Sidebar;
