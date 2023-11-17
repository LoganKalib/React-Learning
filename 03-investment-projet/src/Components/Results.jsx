import { calculateInvestmentResults, formatter } from "../util/investment";

function TableBody({ states }) {
  const resultArray = calculateInvestmentResults(states);
  const initInvest =
    resultArray[0].valueEndOfYear -
    resultArray[0].interest -
    resultArray[0].annualInvestment;

  function total(endOfYear, annualInvestment, year) {
    const total = endOfYear - annualInvestment * year - initInvest;
    return total;
  }

  if (resultArray) {
    return (
      <tbody>
        {resultArray.map((item) => (
          <tr key={item.year}>
            <td>{item.year}</td>
            <td>{formatter.format(item.valueEndOfYear)}</td>
            <td>{formatter.format(item.interest)}</td>
            <td>
              {formatter.format(
                total(item.valueEndOfYear, item.annualInvestment, item.year)
              )}
            </td>
            <td>
              {formatter.format(
                item.valueEndOfYear -
                  total(item.valueEndOfYear, item.annualInvestment, item.year)
              )}
            </td>
          </tr>
        ))}
      </tbody>
    );
  }
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
