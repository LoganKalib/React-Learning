import { calculateInvestmentResults, formatter } from "../util/investment";

function TableBody({ states }) {
  const resultArray = calculateInvestmentResults(states);
  console.log(resultArray);
  return <tbody></tbody>;
}

export default function ResultSet({ states }) {
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <TableBody states={states} />
    </table>
  );
}
