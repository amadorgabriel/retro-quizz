import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Head from "next/head";

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
`

const theme = {
  colors: {
    primary: "#9A3FB4",
    secondary: "#3A61EB",
    mainBg: "#1C1814",
    contrastText: "#FFFFFF",
    wrong: "#FF5722",
    success: "#4CAF50"
  },
}

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
          content="App Quiz usando Next.js e StyledComponents"
        />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:title" content="QuizzMania Retrô-Games" />
        <meta property="og:site_name" content="QuizzMania" />
        <meta
          property="og:description"
          content="App Quiz usando Next.js e StyledComponents"
        />
        <meta property="og:image" content="https://www.compare.bet/wp-content/uploads/2020/08/videogame-bg-1.jpg" />
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
  )
}
