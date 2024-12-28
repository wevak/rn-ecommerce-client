import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  PROFILE_FAILURE,
  PROFILE_REQUEST,
  PROFILE_SUCCESS,
  profileUpdateFailure,
  profileUpdateRequest,
  profileUpdateSuccess,
} from "../actions/userActions";
import axios from "axios";
import { server } from "../store";

const userProfileGetRequest = () => {
  return {
    type: PROFILE_REQUEST,
  };
};
const userProfileGetSuccess = (user) => {
  return {
    type: PROFILE_SUCCESS,
    payload: user,
  };
};
const userProfileGetFailure = (error) => {
  return {
    type: PROFILE_FAILURE,
    payload: error,
  };
};
export const userProfileGetAsync = () => async (dispatch) => {
  try {
    dispatch(userProfileGetRequest());

    const token = await AsyncStorage.getItem("@auth");
    const { data } = await axios.get(`${server}/user/profile`, {
      headers: {
        Cookie: `token=${token}`,
      },
    });
    // debugger;

    dispatch(userProfileGetSuccess(data.user));
  } catch (error) {
    dispatch(userProfileGetFailure(error));
  }
};

const userProfileUpdateRequest = () => {
  return {
    type: profileUpdateRequest,
  };
};

const userProfileUpdateSuccess = (user) => {
  return {
    type: profileUpdateSuccess,
    payload: user,
  };
};

const userProfileUpdateFailure = (error) => {
  return {
    type: profileUpdateFailure,
    payload: error,
  };
};

export const userProfileUpdateAsync = (user) => async (dispatch) => {
  try {
    dispatch(userProfileUpdateRequest());
    const token = await AsyncStorage.getItem("@auth");
    const { data } = await axios.put(`${server}/user/profile-update`, user, {
      headers: {
        Cookie: `token=${token}`,
      },
    });
    dispatch(userProfileUpdateSuccess(data));
  } catch (error) {
    dispatch(userProfileUpdateFailure(error));
  }
};
