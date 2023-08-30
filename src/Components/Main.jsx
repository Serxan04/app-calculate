import React, { useState } from "react";

const Main = () => {
  const [amount, setAmount] = useState("");
  const [percent, setPercent] = useState("");
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");

  function calculate() {
    setValue((amount * percent) / 100);
    setValue2(Number(amount * percent) / 100 + Number(amount));
  }
  return (
    <div className="container">
      <div className="box">
        <label htmlFor="amount">Bill Amount:</label>
        <input
          type="text"
          name=""
          id="amount"
          className="inp"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="box">
        <label htmlFor="percent">Tip Percentage:</label>
        <input
          type="number"
          name="percent"
          id="percent"
          className="inp"
          value={percent}
          onChange={(e) => setPercent(e.target.value)}
        />
      </div>
      <div className="box">
        <label htmlFor="amount-tip">Tip Amount:</label>
        <input
          type="text"
          name="amount-tip"
          id="amount-tip"
          className="inp"
          disabled
          value={value}
        />
      </div>
      <div className="box">
        <label htmlFor="total">Total Amount:</label>
        <input
          type="text"
          name="total"
          id="total"
          className="inp"
          disabled
          value={value2}
        />
      </div>
      <div className="footer">
        <button onClick={() => calculate()} className="btn">
          Calculate
        </button>
      </div>
    </div>
  );
};

export default Main;
