import Inputs from "./Components/inputs";
import ResultSet from "./Components/Results";
import { useState } from "react";

function App() {
  const [initInvest, setInitInvest] = useState(0);
  const [annualInvest, setAnnualInvest] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState(0);

  const onChangeObject = {
    onInitChange: (e) => setInitInvest(e.target.value),
    onAnnualChange: (e) => setAnnualInvest(e.target.value),
    onExpectedChange: (e) => setExpectedReturn(e.target.value),
    onDurationChange: (e) => setDuration(e.target.value),
  };

  const allStates = {
    initialInvestment: initInvest,
    annualInvestment: annualInvest,
    expectedReturn: expectedReturn,
    duration: duration,
  };

  return (
    <main>
      <section id="user-input" className="input-group">
        <Inputs onValueChange={onChangeObject} />
      </section>
      <section>
        <ResultSet states ={allStates}/>
      </section>
    </main>
  );
}

export default App;
