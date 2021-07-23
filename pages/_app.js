import "../styles/globals.css";
import { ProviderAuth } from "@/lib/auth";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";
import Head from "next/head";

import theme from "@/styles/theme";

const GlobalStyle = ({ children }) => {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <CSSReset />
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
      {children}
    </>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ProviderAuth>
        <GlobalStyle />
        <Component {...pageProps} />
      </ProviderAuth>
    </ChakraProvider>
  );
}

export default MyApp;
