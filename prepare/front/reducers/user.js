export const initialState = {
  isLoggedIn: false,
  me: null,
  signUpData: {},
  loginData: {},
};
//thunk 를 사용하게 되면
//thunk는 여러번 디스패치를 해준다, 기능 끝
// 나머지는 직접 구현해야한다. 단점
// export const loginAction = (data) => {
//   return (dispatch, getState) => {
//     const state = getState();
//     dispatch(loginRequestAction());
//     axios.post('/api/login')
//       .then((res) => {
//         dispatch(loginSuccessAction(res.data))
//       })
//       .catch((err) => {
//         dispatch(logoutFailureAction(err))
//       })
//   }
// }


//Request, Success, Failure 비동기이기 때문에 원칙적으로 존재
export const loginRequestAction = (data) => {
  return {
    type: "LOG_IN_REQUEST",
    data,
  };
};
export const loginSuccessAction = (data) => {
  return {
    type: "LOG_IN_SUCCESS",
    data,
  };
};
export const loginFailureAction = (data) => {
  return {
    type: "LOG_IN_FAILURE",
    data,
  };
};

export const logoutRequestAction = (data) => {
  return {
    type: "LOG_OUT_REQUEST",
  };
};
export const logoutSuccessAction = (data) => {
  return {
    type: "LOG_OUT_SUCCESS",
  };
};
export const logoutFailureAction = (data) => {
  return {
    type: "LOG_OUT_FAILURE",
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        isLoggedIn: true,
        me: action.data,
      };
    case "LOG_OUT":
      return {
        ...state,
        isLoggedIn: false,
        me: null,
      };
    default:
      return state;
  }
};

export default reducer;
