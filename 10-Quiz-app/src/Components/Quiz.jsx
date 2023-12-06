import { useState } from "react";

import QUESTIONS from "../questions";

function Quiz() {
  const [userAnswer, setUserAnswer] = useState([]);

  const activeQuestionIndex = userAnswer.length;

  function handleSelectedAnswer(selectedAnswer) {
    setUserAnswer((prev) => {
      return [...prev, selectedAnswer];
    });
  }

  return (
    <div id="question">
      <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
      <ul id="answers">
        {QUESTIONS[activeQuestionIndex].answers.map((answer) => (
          <li key={answer} className="answer">
            <button onClick={() => handleSelectedAnswer(answer)}>
              {answer}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Quiz;
