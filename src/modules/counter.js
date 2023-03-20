/*
 * 액션 타입 생성
 * Ducks 패턴을 사용할 땐, 액션의 이름에 접두사를
 * 다른 모듈과 액션 이름이 중복되는 것을 방지할 수 있음
 */
const SET_DIFF = "counter/SET_DIFF";
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

/*
 * 액션 생성함수 생성
 * export를 사용해 내보내주기
 */
export const setDiff = (diff) => ({ type: SET_DIFF, diff });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

/*
 * init
 */
const initialState = {
  number: 0,
  diff: 1,
};

/*
 * 리듀서 선언
 * export default로 내보내주어야 함
 */
export default function counter(state = initialState, action) {
  switch (action.type) {
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff,
      };
    case INCREASE:
      return {
        ...state,
        number: state.number + state.diff,
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - state.diff,
      };
    default:
      return state;
  }
}
