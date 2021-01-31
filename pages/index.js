import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import styled from "styled-components";
import Widget from "../src/components/Widget/index";
import Footer from "../src/components/Footer/index" ;
import GitHubCorner from "../src/components/GithubCorner/index";
import QuizBackground from "../src/components/QuizBackground/index";

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const route = useRouter();
  const [nickName, setNickName] = useState('');

  return (
    <QuizBackground
      backgroundImage={
        "https://a-static.besthdwallpaper.com/the-legend-of-zelda-breath-of-the-wild-para-o-switch-nintendo-papel-de-parede-1280x768-922_13.jpg"
      }
    >
      <Head>
        {/* <meta property="og:title" content={db.title} />
        <meta property="og:description" content={db.description} />
        <meta property="og:image" content={db.bg} />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#ffffff" /> */}
      </Head>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1> The Legend Of Zelda </h1>
          </Widget.Header>

          <Widget.Content>
            <form onSubmit={(event) => {
              event.preventDefault();
              route.push(`./quiz?nickame=${name}`)
            }}>
              <input placeholder="Como quer ser chamado?" onChange={(event) => {
                setNickName(event.target.value)
              }} />
              <button type="submit" disabled={nickName.length == 0 }>
                {nickName}, Vamos Jogar!
              </button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <p>
              Teste os seus conhecimentos sobre Zelda e divirta-se criando o seu
              AluraQuiz!
            </p>
          </Widget.Content>
        </Widget>

        <Footer />
      </QuizContainer>

      <GitHubCorner projectUrl="https://github.com/amador2014" />
    </QuizBackground>
  );
}
