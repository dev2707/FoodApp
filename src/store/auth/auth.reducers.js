import {authActions, homeActions} from '../actionTypes';

const getInitialState = () => ({
  isLoading: false,
  isLoggedIn: false,
});

export const auth = (state = getInitialState(), action) => {
  switch (action.type) {
    //User Login reducer

    case authActions.AUTH_LOGIN_REQUEST:
      return {...state, isLoggedIn: false, isLoading: true};
    case authActions.AUTH_LOGIN_SUCCESS:
      return {
        ...state,

        isLoggedIn: true,
        isLoading: false,
      };
    case authActions.AUTH_LOGIN_FAILURE:
      return {...state, isLoggedIn: false, isLoading: false};

    //User Logout reducer

    case authActions.AUTH_LOGOUT_REQUEST:
      return {...state, isLoading: true};
    case authActions.AUTH_LOGOUT_SUCCESS:
      return {
        ...state,
isLoggedIn:false,
        isLoading: false,
      };
    case authActions.AUTH_LOGOUT_FAILURE:
      return {...state, isLoading: false};

    default:
      return state;
  }
};
