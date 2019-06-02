import {
  LOADING_CATEGORY,
  GET_CATEGORIES,
  MEGA_IS_HOME,
  MEGA_NOT_HOME
} from "../actions/types";

const initialState = {
  categories: null,
  loading: false,
  isHome: false
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
        ...state,
        categories: action.payload,
        loading: false
      };
    case MEGA_IS_HOME:
      return {
        ...state,
        isHome: true
      };
    case MEGA_NOT_HOME:
      return {
        ...state,
        isHome: false
      };
    default:
      return state;
  }
}
