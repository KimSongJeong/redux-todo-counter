import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

/*
 * Root Reducer
 * 리듀서가 두개 존재하므로 이를 합쳐주어야 함
 * 리덕스에 내장되어있는 combineReducers 함수 사용
 */
const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;

/* 스토어 - src/index.js에서 생성 */
