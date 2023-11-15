function NumberInputs({ val, onValChange }) {
  return (
    <div>
      <label>{val}</label>
      <input type="number" onChange={onValChange} />
    </div>
  );
}

function NormalInputs({ val, onValChange }) {
  return (
    <div>
      <label>{val}</label>
      <input type="number" onChange={onValChange} />
    </div>
  );
}

export default function Inputs({ onValueChange }) {
  return (
    <>
      <NumberInputs
        val="Initial Investment"
        onValChange={onValueChange.onInitChange}
      />
      <NumberInputs
        val="Annual Investment"
        onValChange={onValueChange.onAnnualChange}
      />
      <NormalInputs
        val="Expected Return"
        onValChange={onValueChange.onExpectedChange}
      />
      <NormalInputs
        val="Duration"
        onValChange={onValueChange.onDurationChange}
      />
    </>
  );
}
