import {
  myOrdersGetFailure,
  myOrdersGetRequest,
  myOrdersGetSuccess,
} from "../actions/orderActions";

const initialState = {
  loading: false,
  orders: [],
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case myOrdersGetRequest: {
      return {
        ...state,
        loading: true,
      };
    }
    case myOrdersGetSuccess: {
      return {
        ...state,
        loading: false,
        orders: action.payload,
      };
    }
    case myOrdersGetFailure: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
};
