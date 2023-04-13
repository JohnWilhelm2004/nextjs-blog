import { useState, useEffect } from "react";
import appStyles from "/components/app.module.css";

export default function Calcdesign({ children }) {
  const [preState, setState] = useState("");
  const [curState, setCurState] = useState("");
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);

  const inputNum = (e) => {
    const wert = e.target.innerHTML;
    setInput(input + wert);
  };

  const operaterType = (e) => {
    const wert = e.target.innerHTML;
    setOperator(wert);

    if (!curState) {
      setCurState(input);
      setInput("");
    }
  };

  const equals = (e) => {
    switch (operator) {
      case "+":
        setInput(Number(input) + Number(curState));
        break;
      case "-":
        setInput(Number(curState) - Number(input));
        break;
      case "/":
        setInput(Number(curState) / Number(input));
        break;
      case "x":
        setInput(Number(input) * Number(curState));
        break;
    }
    setCurState("");
    setOperator("");
  };

  const minusPlus = () => {};

  const percent = () => {};

  const reset = () => {
    setInput("");
    setOperator("");
    setCurState("");
  };

  return (
    <div className={appStyles.container}>
      <div className={appStyles.wrapper}>
        <div className={`${appStyles.screen}`}>{input}</div>
        <div
          className={`${appStyles.btn} ${appStyles.lightGray}`}
          onClick={reset}
        >
          AC
        </div>
        <div
          className={`${appStyles.btn} ${appStyles.lightGray}`}
          onClick={percent}
        >
          %
        </div>
        <div
          className={`${appStyles.btn} ${appStyles.lightGray}`}
          onClick={minusPlus}
        >
          +/-
        </div>
        <div
          className={`${appStyles.btn} ${appStyles.orange}`}
          onClick={operaterType}
        >
          /
        </div>
        <div className={appStyles.btn} onClick={inputNum}>
          7
        </div>
        <div className={appStyles.btn} onClick={inputNum}>
          8
        </div>
        <div className={appStyles.btn} onClick={inputNum}>
          9
        </div>
        <div
          className={`${appStyles.btn} ${appStyles.orange}`}
          onClick={operaterType}
        >
          x
        </div>
        <div className={appStyles.btn} onClick={inputNum}>
          4
        </div>
        <div className={appStyles.btn} onClick={inputNum}>
          5
        </div>
        <div className={appStyles.btn} onClick={inputNum}>
          6
        </div>
        <div
          className={`${appStyles.btn} ${appStyles.orange}`}
          onClick={operaterType}
        >
          +
        </div>
        <div className={appStyles.btn} onClick={inputNum}>
          1
        </div>
        <div className={appStyles.btn} onClick={inputNum}>
          2
        </div>
        <div className={appStyles.btn} onClick={inputNum}>
          3
        </div>
        <div
          className={`${appStyles.btn} ${appStyles.orange}`}
          onClick={operaterType}
        >
          -
        </div>
        <div
          className={`${appStyles.btn} ${appStyles.zero}`}
          onClick={inputNum}
        >
          0
        </div>
        <div className={appStyles.btn} onClick={inputNum}>
          .
        </div>
        <div className={appStyles.btn} onClick={equals}>
          =
        </div>
      </div>
      <div className={appStyles.footer}></div>
    </div>
  );
}
