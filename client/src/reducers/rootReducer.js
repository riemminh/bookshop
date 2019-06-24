import { combineReducers } from "redux";
import megaReducer from "./megaReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import modalReducer from "./modalReducer";

export default combineReducers({
  mega: megaReducer,
  errors: errorReducer,
  auth: authReducer,
  modal: modalReducer
});
