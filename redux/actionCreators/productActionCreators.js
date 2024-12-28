import AsyncStorage from "@react-native-async-storage/async-storage";
import FormData from "form-data";

import {
  productAllGetRequest,
  productAllGetSuccess,
  productAllGetFailure,
  productCreateRequest,
  productCreateSuccess,
  productCreateFailure,
  productDeleteRequest,
  productDeleteSuccess,
  productDeleteFailure,
  productUpdateRequest,
  productUpdateSuccess,
  productUpdateFailure,
  productImageUpdateRequest,
  productImageUpdateSuccess,
  productImageUpdateFailure,
  productImageDeleteRequest,
  productImageDeleteSuccess,
  productImageDeleteFailure,
} from "../actions/productActions";
import { server } from "../store";
import axios from "axios";

const productAllGetRequestAction = () => {
  return {
    type: productAllGetRequest,
  };
};
const productAllGetSuccessAction = (data) => {
  return {
    type: productAllGetSuccess,
    payload: data,
  };
};
const productAllGetFailureAction = (error) => {
  return {
    type: productAllGetFailure,
    payload: error,
  };
};
export const productAllGetAsync = () => async (dispatch) => {
  try {
    dispatch(productAllGetRequestAction());

    const { data } = await axios.get(`${server}/product/all-get`);
    // debugger;

    dispatch(productAllGetSuccessAction(data));
  } catch (error) {
    dispatch(productAllGetFailureAction(error.response.data));
  }
};

const productCreateRequestAction = () => {
  return {
    type: productCreateRequest,
  };
};
const productCreateSuccessAction = (data) => {
  return {
    type: productCreateSuccess,
    payload: data,
  };
};
const productCreateFailureAction = (error) => {
  return {
    type: productCreateFailure,
    payload: error,
  };
};
export const productCreateAsync =
  ({ name, description, price, stock, category, file }) =>
  async (dispatch) => {
    try {
      dispatch(productCreateRequestAction());

      let formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("stock", stock);
      if (category) {
        formData.append("category", category);
      }
      formData.append("file", {
        uri: file,
        name: "product.jpeg",
        type: "image/jpeg",
      });

      // product.file = product.file.replace(/\/+/, "//");
      const token = await AsyncStorage.getItem("@token");
      // debugger;

      const { data } = await axios.post(
        `${server}/product/create`,
        formData,
        // { name, description, price, stock, category, file },
        {
          headers: {
            Cookie: `token=${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Product created successfully");
      dispatch(productCreateSuccessAction(data));
    } catch (error) {
      dispatch(productCreateFailureAction(error.response.data));
    }
  };

//product delete
const productDeleteRequestAction = () => {
  return {
    type: productDeleteRequest,
  };
};
const productDeleteSuccessAction = (data) => {
  return {
    type: productDeleteSuccess,
    payload: data,
  };
};
const productDeleteFailureAction = (error) => {
  return {
    type: productDeleteFailure,
    payload: error,
  };
};
export const productDeleteAsync = (id) => async (dispatch) => {
  try {
    dispatch(productDeleteRequestAction());

    const token = await AsyncStorage.getItem("@token");
    const { data } = await axios.delete(`${server}/product/${id}`, {
      headers: {
        Cookie: `token=${token}`,
      },
    });

    alert("Product deleted successfully");
    dispatch(productDeleteSuccessAction(data));
  } catch (error) {
    dispatch(productDeleteFailureAction(error.response.data));
  }
};

//product update
const productUpdateRequestAction = () => {
  return {
    type: productUpdateRequest,
  };
};
const productUpdateSuccessAction = (data) => {
  return {
    type: productUpdateSuccess,
    payload: data,
  };
};
const productUpdateFailureAction = (error) => {
  return {
    type: productUpdateFailure,
    payload: error,
  };
};
export const productUpdateAsync =
  ({ id, name, description, price, stock, category }) =>
  async (dispatch) => {
    try {
      dispatch(productUpdateRequestAction());

      // const formData = new FormData();
      // if (name) {
      //   formData.append("name", name);
      // }
      // if (description) {
      //   formData.append("description", description);
      // }
      // if (price) {
      //   formData.append("price", price);
      // }
      // if (stock) {
      //   formData.append("stock", stock);
      // }
      // if (category) {
      //   formData.append("category", category);
      // }
      // if (file) {
      //   formData.append("file", file);
      // }

      const token = await AsyncStorage.getItem("@auth");
      const { data } = await axios.put(
        `${server}/product/${id}`,
        { name, description, price, stock, category },
        {
          headers: {
            Cookie: `token=${token}`,
          },
        }
      );

      alert("product successfully updated");
      dispatch(productUpdateSuccessAction(data));
    } catch (error) {
      dispatch(productUpdateFailureAction(error.response.data));
    }
  };

const productImageUpdateRequestAction = () => {
  return {
    type: productImageUpdateRequest,
  };
};
const productImageUpdateSuccessAction = (data) => {
  return {
    type: productImageUpdateSuccess,
    payload: data,
  };
};
const productImageUpdateFailureAction = (error) => {
  return {
    type: productImageUpdateFailure,
    payload: error,
  };
};
export const productImageUpdateAsync =
  ({ id, file }) =>
  async (dispatch) => {
    try {
      dispatch(productImageUpdateRequestAction());

      const formData = new FormData();
      formData.append("file", {
        uri: file,
        name: "product.jpeg",
        type: "image/jpeg",
      });

      const token = await AsyncStorage.getItem("@auth");
      const { data } = await axios.put(
        `${server}/product/images/${id}`,
        formData,
        {
          headers: {
            Cookie: `token=${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // debugger;

      alert("product image added successfully");
      dispatch(productAllGetAsync());

      dispatch(productImageUpdateSuccessAction(data));
    } catch (error) {
      dispatch(productImageUpdateFailureAction(error.response.data));
    }
  };

const productImageDeleteRequestAction = () => {
  return {
    type: productImageDeleteRequest,
  };
};
const productImageDeleteSuccessAction = (data) => {
  return {
    type: productImageDeleteSuccess,
    payload: data,
  };
};
const productImageDeleteFailureAction = (error) => {
  return {
    type: productImageDeleteFailure,
    payload: error,
  };
};
export const productImageDeleteAsync = (p_id, id) => async (dispatch) => {
  try {
    dispatch(productImageDeleteRequestAction());

    const token = await AsyncStorage.getItem("@auth");
    const { data } = await axios.delete(
      `${server}/product/image-delete/${p_id}?id=${id}`,
      {
        headers: {
          Cookie: `token=${token}`,
        },
      }
    );

    alert("image deleted successfully");
    dispatch(productImageDeleteSuccessAction(data));
  } catch (error) {
    dispatch(productImageDeleteFailureAction(error.response.data));
  }
};
