import { LOADING_CATEGORY, GET_CATEGORIES } from "../actions/types";

const initialState = {
  categories: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_CATEGORY:
      return {
        ...state,
        loading: true
      };
    case GET_CATEGORIES:
      return {
        categories: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
