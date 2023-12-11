import { useState, useCallback } from "react";
import completedImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";
import Question from "./Question";

function Quiz() {
  const [userAnswer, setUserAnswer] = useState([]);
  const [answerState, setAnswerState] = useState("");

  const activeQuestionIndex =
    answerState == "" ? userAnswer.length : userAnswer.length - 1;

  const quizCompleted = activeQuestionIndex === QUESTIONS.length;

  const handleSelectedAnswer = useCallback(
    function handleSelectedAnswer(selectedAnswer) {
      setAnswerState("answered");
      setUserAnswer((prev) => {
        return [...prev, selectedAnswer];
      });

      setTimeout(() => {
        if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }

        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );

  const handleSkipAnswer = useCallback(
    () => handleSelectedAnswer(null),
    [handleSelectedAnswer]
  );

  if (quizCompleted) {
    console.log(userAnswer);
    return (
      <div id="summary">
        <img src={completedImg} alt="Completed Quiz" />
        <h2>Summary</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        questionText={QUESTIONS[activeQuestionIndex].text}
        answers={QUESTIONS[activeQuestionIndex].answers}
        onSelectAnswer={handleSelectedAnswer}
        answerState={answerState}
        selectedAnswer={userAnswer[userAnswer.legth - 1]}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}

export default Quiz;
