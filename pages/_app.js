import { useEffect } from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "../lib/apollo";

import "../styles/reset.css";
import "../styles/swiper.custom.css";
import "../styles/variables.css";
import "../styles/globals.css";
import "../styles/page.css";
import "../styles/plans.css";

import TagManager from "react-gtm-module";

const tagManagerArgs = {
  id: "GTM-TMWWF56",
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
