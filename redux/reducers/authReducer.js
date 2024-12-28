import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "../actions/authActions";

const initialState = {
  loading: false,
  authUser: {},
  token: "",
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    //login
    case LOGIN_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOGIN_SUCCESS: {
      // debugger;
      return {
        ...state,
        loading: false,
        authUser: action.payload.user,
        token: action.payload.token,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        loading: false,
        authUser: {},
      };
    }

    //logout
    case LOGOUT_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOGOUT_SUCCESS: {
      // debugger;
      return {
        ...state,
        loading: false,
        message: action.payload.data.message,
        token: action.payload.token,
      };
    }
    case LOGOUT_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }

    //register
    case REGISTER_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case REGISTER_SUCCESS: {
      // debugger;
      return {
        ...state,
        loading: false,
        registerStatus: action.payload,
      };
    }
    case REGISTER_REQUEST: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};
