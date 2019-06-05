import { combineReducers } from "redux";
import megaReducer from "./megaReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";

export default combineReducers({
  mega: megaReducer,
  errors: errorReducer,
  auth: authReducer
});
