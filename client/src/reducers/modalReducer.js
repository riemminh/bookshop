import { MODAL_LOGIN_CLOSE, MODAL_LOGIN_OPEN } from "../actions/types";
const initialState = {
  modalLogin: false
};
export default function(state = initialState, action) {
  switch (action.type) {
    case MODAL_LOGIN_OPEN:
      return {
        ...state,
        modalLogin: true
      };
    case MODAL_LOGIN_CLOSE:
      return {
        ...state,
        modalLogin: false
      };
    default:
      return state;
  }
}
