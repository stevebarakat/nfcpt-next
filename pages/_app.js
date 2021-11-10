import { useEffect } from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "../lib/apollo";
import Head from "next/head";
import "../styles/reset.css";
import "../styles/swiper.custom.css";
import "../styles/variables.css";
import "../styles/globals.css";
import "../styles/page.css";
import "../styles/plans.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default MyApp;
