import {
  productAllGetFailure,
  productAllGetRequest,
  productAllGetSuccess,
  productCreateFailure,
  productCreateRequest,
  productCreateSuccess,
  productDeleteFailure,
  productDeleteRequest,
  productDeleteSuccess,
  productImageDeleteFailure,
  productImageDeleteRequest,
  productImageDeleteSuccess,
  productImageUpdateFailure,
  productImageUpdateRequest,
  productImageUpdateSuccess,
  productUpdateFailure,
  productUpdateRequest,
  productUpdateSuccess,
} from "../actions/productActions";

const initialState = {
  loading: false,
  products: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case productAllGetRequest: {
      return {
        ...state,
        loading: true,
      };
    }
    case productAllGetSuccess: {
      return {
        ...state,
        loading: false,
        products: action.payload.products,
      };
    }
    case productAllGetFailure: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    case productCreateRequest: {
      return {
        ...state,
        loading: true,
      };
    }
    case productCreateSuccess: {
      return {
        ...state,
        loading: false,
      };
    }
    case productCreateFailure: {
      return {
        ...state,
        loading: false,
      };
    }

    case productDeleteRequest: {
      return {
        ...state,
        loading: true,
      };
    }
    case productDeleteSuccess: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }
    case productDeleteFailure: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    case productUpdateRequest: {
      return {
        ...state,
        loading: true,
      };
    }
    case productUpdateSuccess: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }
    case productUpdateFailure: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    case productImageUpdateRequest: {
      return {
        ...state,
        loading: true,
      };
    }
    case productImageUpdateSuccess: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }
    case productImageUpdateFailure: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    case productImageDeleteRequest: {
      return {
        ...state,
        loading: true,
      };
    }
    case productImageDeleteSuccess: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }
    case productImageDeleteFailure: {
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
