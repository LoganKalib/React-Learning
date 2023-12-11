import { useRef } from "react";

export default function Answers({ answers, selectedAnswer, answerState , onSelect}) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let ccsClasses = "";

        if (answerState == "answered" && isSelected) {
          ccsClasses = "seleted";
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          ccsClasses = answerState;
        }

        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelect(answer)}
              className={ccsClasses}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
