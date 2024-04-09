import { configureStore } from "@reduxjs/toolkit";

import logger from "redux-logger";
import thunk from "redux-thunk";

//-----------------------|| REDUX - MAIN STORE ||-----------------------//

const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

import appReducer from "./app/appSlice";
export const store = configureStore({
  reducer: {
    app: appReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
});
