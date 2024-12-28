import axios from "axios";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "../actions/authActions";
import { server } from "../store";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const userLoginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const userLoginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};

export const userLoginFailure = (message) => {
  return {
    type: LOGIN_FAILURE,
    message,
  };
};

export const userLoginAsync = (email, password) => {
  return async function (dispatch) {
    try {
      dispatch(userLoginRequest());

      const { data } = await axios.post(
        `${server}/user/login`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // const response = await fetch(`${server}/user/login`, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ email, password }),
      // })
      //   .then((res) => {
      //     // debugger;
      //     res.json();
      //   })
      //   .then((data) => {
      //     debugger;
      //     console.log(data);
      //   })
      //   .catch((error) => console.error("Error:", error));
      // debugger;

      dispatch(userLoginSuccess(data));
      await AsyncStorage.setItem("@auth", data?.token);
      // debugger;
    } catch (error) {
      dispatch(userLoginFailure(error.response.data.message));
    }
  };
};

export const userLogoutRequest = () => {
  return {
    type: LOGOUT_REQUEST,
  };
};
export const userLogoutSuccess = (data) => {
  return {
    type: LOGOUT_SUCCESS,
    payload: data,
  };
};
export const userLogoutFailure = (error) => {
  return {
    type: LOGOUT_FAILURE,
    payload: error,
  };
};
export const userLogoutAsync = () => async (dispatch) => {
  try {
    dispatch(userLogoutRequest());
    let token = await AsyncStorage.getItem("@auth");
    await AsyncStorage.removeItem("@auth");
    // debugger;
    const { data } = await axios.get(`${server}/user/logout`, {
      headers: {
        Cookie: `token=${token}`,
      },
    });
    dispatch(userLogoutSuccess({ data }));
    // debugger;
  } catch (error) {
    dispatch(userLogoutFailure(error.response.data));
  }
};

const userRegisterRequest = () => ({
  type: REGISTER_REQUEST,
});
const userRegisterSuccess = (data) => ({
  type: REGISTER_SUCCESS,
  payload: data,
});
const userRegisterFailure = (error) => ({
  type: REGISTER_FAILURE,
  payload: error,
});
export const userRegisterAsync = (userData) => (dispatch) => {
  try {
    dispatch(userRegisterRequest());

    const { data } = axios.post(`${server}/user/register`, userData);
    // debugger;
    dispatch(userRegisterSuccess(data));
    alert("User Successfully Registered!");
  } catch (error) {
    dispatch(userRegisterFailure(error));
  }
};
