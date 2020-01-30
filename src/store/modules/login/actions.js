import { Types } from './reducer';

export function getLoginRequest({ email, password }) {
  return {
    type: Types.GET_REQUEST,
    payload: { email, password },
  };
}

export function getLoginSuccess({ user, token }) {
  return {
    type: Types.GET_SUCCESS,
    payload: { user, token },
  };
}

export function getLoginRequest(error) {
  return {
    type: Types.GET_FAILURE,
    payload: { error },
  };
}

export function getLoginRequest() {
  return {
    type: Types.GET_LOGOUT,
  };
}
