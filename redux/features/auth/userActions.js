import { server } from "../../store";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// login action
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "loginRequest",
    });

    // hitting node login api request
    const { data } = await axios.post(
      `${server}/user/login`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    //login success
    dispatch({
      type: "loginSuccess",
      payload: data,
    });

    await AsyncStorage.setItem("@auth", data?.token);
  } catch (error) {
    dispatch({
      type: "loginFail",
      payload: error.response.data.message,
    });
  }
};

//register action self made
// export const userRegister =
//   (name, email, password, address, city, country, contact, answer) =>
//   async (dispatch) => {
//     try {
//       dispatch({
//         type: "userRegisterRequest",
//       });

//       // hitting node register api request
//       const { user } = await axios.post(
//         `${server}/user/register`,
//         { name, email, password, address, city, country, contact, answer },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       //register success
//       dispatch({
//         type: "userRegisterSuccess",
//         payload: user,
//       });
//     } catch (error) {
//       dispatch({
//         type: "userRegisterFail",
//         payload: error.response.data.message,
//       });
//     }
//   };

//user register followment
export const userRegister = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: "userRegisterRequest",
    });

    // hitting node register api request
    const { user } = await axios.post(`${server}/user/register`, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    //register success
    dispatch({
      type: "userRegisterSuccess",
      payload: user,
    });
  } catch (error) {
    dispatch({
      type: "userRegisterFail",
      payload: error.response.data.message,
    });
  }
};

//user data get action
export const userDataGet = () => async (dispatch) => {
  try {
    dispatch({
      type: "userDataGetRequest",
    });

    const { data } = axios.get(`${server}/user/profile`);

    dispatch({
      type: "userDataGetSuccess",
      payload: data?.user,
    });
  } catch (error) {
    dispatch({
      type: "userDataGetFail",
      payload: error.response.data.message,
    });
  }
};

//user logout action
export const userLogout = () => async (dispatch) => {
  try {
    dispatch({
      type: "userLogoutRequest",
    });

    const { data } = axios.get(`${server}/user/logout`);

    dispatch({
      type: "userLogoutSuccess",
      payload: data?.message,
    });
  } catch (error) {
    dispatch({
      type: "userLogoutFail",
      payload: error.response.data.message,
    });
  }
};
