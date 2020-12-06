import { all, fork, take, call, put } from 'redux-saga/effects';
import axios from 'axios';
// 사가 이펙트

//일반함수
function logInAPI(data) {
  return axios.post('/api/login', data)
}
// fork - 비동기함수호출
// call - 동기함수호출

//call을 사용하면 api요청이 끝나고 result에 값을 넣는 반면 fork는 기다리지 않고 진행한다.
//call은 then을 사용하는 효과

function logIn(action) {
  try {
    const result = yield call(logInAPI, action.data);
    yield put({
      type: "LOG_IN_SUCCESS",
      data: result.data
    });
  } catch (err) {
    yield put({
      type: "LOG_IN_FAILURE",
      data: err.response.data,
    });
  }
}


//비동기 액션 크리에이터
function* watchLogIn() {
  yield take('LOG_IN_REQUEST', logIn);
}
function* watchLogOut() {
  yield take('LOG_OUT_REQUEST');
}
function* watchAddPost() {
  yield take('ADD_POST_REQUEST');
}

//비동기 액션
export default function* rootSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchAddPost),
  ])
}
//all - 배열을 값으로 받고 배열 안에 있는것들을 한번에(동시에) 다 실행한다.

//fork - 함수를 실행
//call - fork대신에 사용 가능한데 명확하게 다르다.
//call,fork로 제너레이터 함수를 실행해준다.

//take - ()안에 액션이 실행될떄까지 기다리겠다. 
//put - dispatch와 같은 역활