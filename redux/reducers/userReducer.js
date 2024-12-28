import {
  PROFILE_FAILURE,
  PROFILE_REQUEST,
  PROFILE_SUCCESS,
  profileUpdateFailure,
  profileUpdateRequest,
  profileUpdateSuccess,
} from "../actions/userActions";

const initialState = {
  loading: false,
  user: {},
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    //profile
    case PROFILE_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case PROFILE_SUCCESS: {
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    }
    case PROFILE_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload,
        // user: {}
      };
    }

    //profile update
    case profileUpdateRequest: {
      return {
        ...state,
        loading: true,
      };
    }
    case profileUpdateSuccess: {
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    }
    case profileUpdateFailure: {
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
