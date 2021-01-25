import styled from "styled-components";
import Widget from "../src/components/Widget/index"; 
import Footer from "../src/components/Footer/index";
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
  return (
    <QuizBackground backgroundImage={'https://a-static.besthdwallpaper.com/the-legend-of-zelda-breath-of-the-wild-para-o-switch-nintendo-papel-de-parede-1280x768-922_13.jpg'} >
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1> The Legend Of Zelda </h1>
          </Widget.Header>
          
          <Widget.Content>
            <p>
              Teste os seus conhecimentos sobre Zelda e divirta-se criando o seu
              AluraQuiz!
            </p>
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
