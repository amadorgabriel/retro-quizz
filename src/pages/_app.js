/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import db from '../../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const { theme } = db;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* FONTS */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />

        {/* TITLE */}
        <title>Quizz Mania - Retrô-Games</title>
        <link rel="shortcut icon" href="https://img.icons8.com/cotton/2x/controller--v2.png" />

        {/* OG METADATA */}
        <meta
          name="description"
          content={db.description}
        />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:title" content={db.title} />
        <meta property="og:site_name" content="QuizzMania" />
        <meta
          property="og:description"
          content={db.description}
        />
        <meta property="og:image" content={db.bg} />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="1501" />
        <meta property="og:image:height" content="676" />
        <meta property="og:type" content="website" />

      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
