import React, { useState, useEffect } from "react";
import db from "../db.json";

import Logo from "../src/components/QuizLogo/index";
import Widget from "../src/components/Widget/index";
import QuestionWidget from "../src/components/QuestionWidget";
import QuizContainer from "../src/components/QuizContainer/index";
import QuizBackground from "../src/components/QuizBackground/index";
import GitHubCorner from "../src/components/GithubCorner/index";

const screenStates = {
  QUIZ: "QUIZ",
  LOADING: "LOADING",
  RESULT: "RESULT",
};

export default function QuizPage() {
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  }, []);

  function handleQuizSubmit(){
    const nextQuestion = questionIndex + 1;
    if(nextQuestion < totalQuestions)
      setCurrentQuestion(questionIndex + 1);
    else
      setScreenState(screenStates.RESULT);
  }

  return (
    <QuizBackground backgroundImage="https://www.compare.bet/wp-content/uploads/2020/08/videogame-bg-1.jpg">
      <QuizContainer>
        <Logo />

        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            questionData={question}
            totalQuestions={totalQuestions}
            questionIndex={questionIndex}
            onSubmit={handleQuizSubmit}
          />
        )}

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && (
          <div>Você acertou X questões, parabéns! </div>
        )}
      </QuizContainer>

      <GitHubCorner projectUrl="https://github.com/amador2014" />
    </QuizBackground>
  );
}

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>Carregando...</Widget.Header>
      <Widget.Content>
        <div className="loader">[LOADING]</div>
      </Widget.Content>
    </Widget>
  );
}
