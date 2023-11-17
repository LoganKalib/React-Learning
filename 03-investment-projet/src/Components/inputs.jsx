function NumberInputs({ val, onValChange, data }) {
  return (
    <div>
      <label>{val}</label>
      <input type="number" onChange={onValChange} value={data}  min={5} required/>
    </div>
  );
}

export default function Inputs({ onValueChange, data }) {
  return (
    <>
      <div className="input-group">
        <NumberInputs
          val="Initial Investment"
          onValChange={onValueChange.onInitChange}
          data={data.initialInvestment}
        />
        <NumberInputs
          val="Annual Investment"
          onValChange={onValueChange.onAnnualChange}
          data={data.annualInvestment}
        />
      </div>
      <div className="input-group">
        <NumberInputs
          val="Expected Return"
          onValChange={onValueChange.onExpectedChange}
          data={data.expectedReturn}
        />
        <NumberInputs
          val="Duration"
          onValChange={onValueChange.onDurationChange}
          data={data.duration}
        />
      </div>
    </>
  );
}
