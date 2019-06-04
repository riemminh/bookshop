import { combineReducers } from "redux";
import megaReducer from "./megaReducer";
import errorReducer from "./errorReducer";
export default combineReducers({
  mega: megaReducer,
  errors: errorReducer
});
