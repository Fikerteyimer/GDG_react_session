import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState("");

  const calculate = () => {
    const a = Number(num1);
    const b = Number(num2);

    switch (operator) {
      case "+":
        setResult(a + b);
        break;
      case "-":
        setResult(a - b);
        break;
      case "*":
        setResult(a * b);
        break;
      case "/":
        setResult(b !== 0 ? a / b : "undefined");
        break;
      default:
        setResult("Invalid Operator");
    }
  };

  return (
    <div className="container">
      <h2 className="header">Mini Calculator</h2>

      <input value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Enter first number" className="input" />
      <br /><br />

      <input value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Enter second number" className="input"/>
      <br /><br />

      <select value={operator} onChange={(e) => setOperator(e.target.value)} className="input">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>

      <br /><br />

      <button className="input" onClick={calculate}>Calculate</button>

      <h3>Result: {result}</h3>
    </div>
  );
}

export default Calculator;
