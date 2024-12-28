import axios from "axios";
import {
  myOrdersGetFailure,
  myOrdersGetRequest,
  myOrdersGetSuccess,
} from "../actions/orderActions";
import { server } from "../store";
import AsyncStorage from "@react-native-async-storage/async-storage";

const myOrdersGetRequestAction = () => {
  return {
    type: myOrdersGetRequest,
  };
};

const myOrdersGetSuccessAction = (orders) => {
  return {
    type: myOrdersGetSuccess,
    payload: orders,
  };
};

const myOrdersGetFailureAction = (error) => {
  return {
    type: myOrdersGetFailure,
    payload: error,
  };
};

export const myOrdersGetAsync = () => async (dispatch) => {
  try {
    dispatch(myOrdersGetRequestAction());

    const token = AsyncStorage.getItem("@auth");
    const { data } = await axios.get(`${server}/order/my-orders`, {
      headers: {
        Cookie: `token=${token}`,
      },
    });
    // console.log(data);
    // debugger;
    dispatch(myOrdersGetSuccessAction(data.orders));
  } catch (error) {
    dispatch(myOrdersGetFailureAction(error));
  }
};
