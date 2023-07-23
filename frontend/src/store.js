import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./reducers";

export default configureStore({ reducer }, applyMiddleware(thunk));
