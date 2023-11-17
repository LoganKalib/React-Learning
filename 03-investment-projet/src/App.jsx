import Inputs from "./Components/inputs";
import ResultSet from "./Components/Results";
import { useState } from "react";

function App() {
  const [initInvest, setInitInvest] = useState(100);
  const [annualInvest, setAnnualInvest] = useState(10);
  const [expectedReturn, setExpectedReturn] = useState(5);
  const [duration, setDuration] = useState(5);

  const inputValid = duration >= 1;

  const onChangeObject = {
    onInitChange: (e) => setInitInvest(() => +e.target.value),
    onAnnualChange: (e) => setAnnualInvest(() => +e.target.value),
    onExpectedChange: (e) => setExpectedReturn(() => +e.target.value),
    onDurationChange: (e) => setDuration(() => +e.target.value),
  };

  const allStates = {
    initialInvestment: initInvest,
    annualInvestment: annualInvest,
    expectedReturn: expectedReturn,
    duration: duration,
  };

  return (
    <main>
      <section id="user-input">
        <Inputs onValueChange={onChangeObject} data={allStates} />
      </section>
      <section>
        {inputValid ? (
          <ResultSet states={allStates} />
        ) : (
          <p className="center">Please enter valid duration...</p>
        )}
      </section>
    </main>
  );
}

export default App;
