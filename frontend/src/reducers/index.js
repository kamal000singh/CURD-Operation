import { combineReducers } from "redux";
import {
  fetchEmpDetails,
  fetchNewEmpDetail,
  fetchEmpDepts,
  fetchEmpUpdateDetails,
  fetchEmpSingleDetail,
  fetchDeleteEmpDetail,
} from "./fetchAPI";

const rootReducer = combineReducers({
  fetchEmpDetails,
  fetchNewEmpDetail,
  fetchEmpDepts,
  fetchEmpUpdateDetails,
  fetchEmpSingleDetail,
  fetchDeleteEmpDetail,
});

export default rootReducer;
