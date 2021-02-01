import React from "react";

import Button from "../Button/index";
import Widget from "../Widget/index";

export default function QuestionWidget({
  questionData,
  totalQuestions,
  questionIndex,
  onSubmit
}) {

  const questionId = `question_${questionIndex}`

  return (
    <Widget>
      <Widget.Header>
        <h3>
          Pergunta {questionIndex + 1} de {totalQuestions}
        </h3>
      </Widget.Header>

      <img
        alt="Descrição"
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
        }}
        src={questionData.image}
      />

      <Widget.Content>
        <h2>{questionData.title}</h2>
        <p> {questionData.description} </p>

        <form onSubmit={(event) => {
          event.preventDefault();

          onSubmit();
        }}>
          {questionData.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;

            return (
              <Widget.Topic htmlFor={alternativeId} as="label">
                <input id={alternativeId} type="radio" name={questionId} />

                {alternative}
              </Widget.Topic>
            );
          })}
        </form>

        <Button type="submit">Confirmar</Button>
      </Widget.Content>
    </Widget>
  );
}
