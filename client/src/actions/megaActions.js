import axios from "axios";
import { GET_CATEGORIES, LOADING_CATEGORY, GET_ERRORS } from "./types";

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
