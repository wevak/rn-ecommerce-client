// import { configureStore } from "@reduxjs/toolkit";
// import { userReducer } from "./features/auth/userReducer";

// export default configureStore({
//   reducer: {
//     user: userReducer,
//   },
// });

import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { rootReducer } from "./reducers/rootReducer";

import logger from "redux-logger";

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));

//host
export const server = "https://production-nodejs-ecommerce.onrender.com/api/v1";
