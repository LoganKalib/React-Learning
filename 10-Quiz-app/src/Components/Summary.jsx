import completedImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";

export default function Summary({ userAnswers }) {
  const skippedAnswer = userAnswers.filter((answer) => answer === null);

  const correctAnswer = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );

  const skippedShare = Math.round(
    (skippedAnswer.length / userAnswers.length) * 100
  );

  const correctShare = Math.round(
    (correctAnswer.length / userAnswers.length) * 100
  );

  const wrongShare = 100 - skippedShare - correctShare;

  return (
    <div id="summary">
      <img src={completedImg} alt="Completed Quiz" />
      <h2>Summary</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedShare}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{correctShare}%</span>
          <span className="text">Correct</span>
        </p>
        <p>
          <span className="number">{wrongShare}%</span>
          <span className="text">Incorrect</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let classes = "user-answer";

          if (answer === null) {
            classes += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            classes += " correct";
          } else {
            classes += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={classes}>{answer ?? "Skipped..."}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
