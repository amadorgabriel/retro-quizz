import React, { useState } from "react";
import { useRouter } from "next/router";

import Logo from "../src/components/QuizLogo/index";
import Button from "../src/components/Button/index";
import Input from "../src/components/Input/index";
import Widget from "../src/components/Widget/index";
import Footer from "../src/components/Footer/index";
import GitHubCorner from "../src/components/GithubCorner/index";
import QuizBackground from "../src/components/QuizBackground/index";
import QuizContainer from "../src/components/QuizContainer";

export default function IndexPage() {
  const route = useRouter();
  const [nickName, setNickName] = useState("");

  return (
    <QuizBackground backgroundImage="https://www.compare.bet/wp-content/uploads/2020/08/videogame-bg-1.jpg">
      <QuizContainer>
        <Logo />

        <Widget>
          <Widget.Header>
            <h1> Retrô Games - Você lebra de algum desses? </h1>
          </Widget.Header>

          <Widget.Content>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                route.push(`./quiz?nickame=${nickName}`);
              }}
            >
              <Input
                name="nickName"
                value={nickName}
                placeholder="Como quer ser chamado?"
                onChange={(event) => {
                  setNickName(event.target.value);
                }}
              />

              <Button type="submit" disabled={nickName.length == 0}>
                {`${nickName} Vamos Jogar!`}
              </Button>
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
