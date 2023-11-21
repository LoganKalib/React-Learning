import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeLeft, setTimeLeft] = useState(targetTime * 1000);

  const timerIsActive = timeLeft > 0 && timeLeft < targetTime * 1000;

  if (timeLeft <= 0) {
    clearInterval(timer.current);

    dialog.current.openDialog();
  }

  function handleReset(){
    setTimeLeft(targetTime * 1000);
  }

  const handleStart = () => {
    timer.current = setInterval(() => {
      setTimeLeft((prev) => prev - 10);
    }, 10);
  };

  const handleStop = () => {
    clearInterval(timer.current);

    dialog.current.openDialog();
  };

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} timeLeft={timeLeft} onReset={handleReset} />

      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 && "s"}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Timer
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Timer running" : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
