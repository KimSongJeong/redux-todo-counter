import { createStore } from "redux";
// createStore는 스토어를 만들어주는 함수

/*
 * 리덕스에서 관리 할 상태 정의
 */
const initialState = {
  counter: 0,
  text: "",
  list: [],
};

/*
 * 액션 타입 정의 (대문자로 작성)
 */
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

/*
 * 액션 생성 함수 (camelCase로 작성)
 */
function increase() {
  return {
    type: INCREASE, // 액션 객체에는 type 값이 필수
  };
}

const decrease = () => ({
  type: DECREASE,
});

const changeText = (text) => ({
  type: CHANGE_TEXT,
  text, // 액션안에는 type 외에 추가적인 필드를 마음대로 넣을 수 있습니다.
});

const addToList = (item) => ({
  type: ADD_TO_LIST,
  item,
});

/*
 * 리듀서
 * 위 액션 생성함수들을 통해 만들어진 객체들을 참조하여 새로운 상태를 만듬
 * (주의 : 리듀서에서는 불변성을 꼭 지켜우어야 함)
 */
function reducer(state = initialState, action) {
  // state 의 초깃값을 initialState 로 지정했습니다.
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text,
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item),
      };
    default:
      return state;
  }
}

/*
 * 스토어 만들기
 */
const store = createStore(reducer);

console.log(store.getState());

/*
 * 스토어안에 들어있는 상태가 바뀔 때 마다 호출되는 listener 함수
 */
const listener = () => {
  const state = store.getState();
  console.log("state : ", state);
};

/*
 * 구독 해제
 */
const unsubscribe = store.subscribe(listener);
console.log("unsubscribe : ", unsubscribe);

/*
 * 액션 디스패치
 */
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText("ㅎㅇㅎㅇ"));
store.dispatch(addToList({ id: 1, text: "테스트" }));
