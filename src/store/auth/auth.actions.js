import {authActions} from '../actionTypes';



export const _dologin = params => {
  return dispatch => {
    dispatch({type: authActions.AUTH_LOGIN_REQUEST});
    dispatch({type: authActions.AUTH_LOGIN_SUCCESS});
  };
};

export const _doLogout = params => {
  return dispatch => {
    dispatch({type: authActions.AUTH_LOGOUT_REQUEST});
    dispatch({
      type: authActions.AUTH_LOGOUT_SUCCESS,
    
    });
  };
};
