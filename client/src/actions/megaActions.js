import axios from "axios";
import {
  GET_CATEGORIES,
  LOADING_CATEGORY,
  GET_ERRORS,
  MEGA_IS_HOME,
  MEGA_NOT_HOME
} from "./types";

export const getCategories = () => dispatch => {
  dispatch(loadingCategories());
  axios
    .get("/api/categories/all")
    .then(res =>
      dispatch({
        type: GET_CATEGORIES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: {}
      })
    );
};

export const loadingCategories = () => ({ type: LOADING_CATEGORY });

export const megaNotHome = () => dispatch => {
  dispatch({ type: MEGA_NOT_HOME });
};

export const megaIsHome = () => dispatch => {
  dispatch({ type: MEGA_IS_HOME });
};
