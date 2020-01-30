export const Types = {
  GET_REQUEST: '@login/GET_REQUEST',
  GET_SUCCESS: '@login/GET_SUCCESS',
  GET_FAILURE: '@login/GET_FAILURE',

  GET_LOGOUT: '@login/GET_LOGOUT',
};

const initialState = {
  user: null,
  token: null,
  error: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, error: null, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, ...action.payload };
    case Types.GET_FAILURE:
      return { ...state, error: action.payload, loading: false };
    case Types.GET_LOGOUT:
      return initialState;
    default:
      return state;
  }
};
