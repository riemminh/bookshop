import { combineReducers } from "redux";
import megaReducer from "./megaReducer";
export default combineReducers({
  mega: megaReducer
});
