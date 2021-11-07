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
    nfcptSettings {
      nfcptSettings {
        testimonials {
          testimonial {
            testimonialAuthor
            testimonialContent
            testimonialPhoto {
              altText
              sourceUrl
            }
          }
        }
      }
    }
  }
`;

const Sidebar = () => {
  const { loading, error, data } = useQuery(TESTIMONIALS);

  function randomNumber(min = 0, max = 1) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const n = randomNumber(0, 1);

  console.log("data: ", data);

  const testimonialPhotoAltText =
    data?.nfcptSettings.nfcptSettings.testimonials[n].testimonial
      .testimonialPhoto.altText;
  const testimonialPhotoUrl =
    data?.nfcptSettings.nfcptSettings.testimonials[n].testimonial
      .testimonialPhoto.sourceUrl;
  const testimonialContent =
    data?.nfcptSettings.nfcptSettings.testimonials[n].testimonial
      .testimonialContent;
  const testimonialAuthor =
    data?.nfcptSettings.nfcptSettings.testimonials[n].testimonial
      .testimonialAuthor;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

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
          {testimonialPhotoUrl && (
            <Image
              src={testimonialPhotoUrl}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              quality={100}
              alt={testimonialPhotoAltText}
            />
          )}
        </div>
        <blockquote>
          <span className={styles.testimonial}>
            {testimonialContent}
          </span>
        </blockquote>
        <figcaption
          style={{
            color: "var(--grey10)",
            textAlign: "center",
            paddingBottom: "3rem",
          }}
        >
          —{testimonialAuthor}
        </figcaption>
      </div>
    </aside>
  );
};

export default Sidebar;
