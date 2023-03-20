/**
 * 프리젠테이셔널 컴포넌트
 * 리덕스 스토어에 직접적으로 접근하지 않고 필요한 값 / 함수를 props로만 받아와 사용하는 컴포넌트
 */
import React from "react";
import { Button } from "react-bootstrap";

function Counter({ number, diff, onIncrease, onDecrease, onSetDiff }) {
  const onChange = (e) => {
    onSetDiff(Number(e.target.value));
  };

  return (
    <div>
      <div className="contentTop">
        <h1 className="countNumber">{number}</h1>
      </div>
      <div className="inputGroup">
        <input
          className="inputBox"
          type="number"
          value={diff}
          min="1"
          onChange={onChange}
        />
        <Button className="mr-1" variant="outline-primary" onClick={onIncrease}>
          +
        </Button>
        <Button variant="outline-danger" onClick={onDecrease}>
          -
        </Button>
      </div>
    </div>
  );
}

export default Counter;
