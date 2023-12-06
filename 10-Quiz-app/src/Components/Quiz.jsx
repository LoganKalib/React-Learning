import { useState } from "react";
import completedImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";

function Quiz() {
  const [userAnswer, setUserAnswer] = useState([]);

  const activeQuestionIndex = userAnswer.length;

  const quizCompleted = activeQuestionIndex === QUESTIONS.length ? true : false;

  function handleSelectedAnswer(selectedAnswer) {
    setUserAnswer((prev) => {
      return [...prev, selectedAnswer];
    });
  }

  if (quizCompleted) {
    return (
      <div>
        <img src={completedImg} alt="Completed Quiz" />
        <h2>Summary</h2>
      </div>
    );
  }

  const shuffleAnswer = [...QUESTIONS[activeQuestionIndex].answers];
  shuffleAnswer.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffleAnswer.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectedAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Quiz;
