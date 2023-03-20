import React from "react";
import { Card } from "react-bootstrap";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease, setDiff } from "../modules/counter";
import "./containers.css";

function CounterContainer() {
  // useSelector : 리덕스 스토어의 상태를 조회하는 Hook
  // state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일
  const { number, diff } = useSelector(
    (state) => ({
      number: state.counter.number,
      diff: state.counter.diff,
    }),
    shallowEqual
  );

  // useDispatch : 리덕스 스토어의 dispatch를 함수에서 사용 할 수 있게 해주는 Hook
  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));

  return (
    <Card className="cardContent">
      <Card.Body>
        {/* <Card.Title className={"cardTitle"}>Counter</Card.Title> */}
        <Counter
          number={number}
          diff={diff}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
          onSetDiff={onSetDiff}
        />
      </Card.Body>
    </Card>
  );
}

export default CounterContainer;
