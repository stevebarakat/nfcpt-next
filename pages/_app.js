import { ApolloProvider } from "@apollo/client";
import { client } from "../lib/apollo";

import "../styles/reset.css";
import "../styles/swiper.custom.css";
import "../styles/variables.css";
import "../styles/globals.css";
import "../styles/page.css";
import "../styles/plans.css";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
