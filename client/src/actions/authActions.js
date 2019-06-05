import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER } from "../actions/types";
import setAuhtoken from "../util/setAuhtoken";
import jwt_decode from "jwt-decode";

export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => {
      return history.push("/registersuccess");
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const loginUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      const { token } = res.data;

      // set localStorage
      localStorage.setItem("jwtToken", token);
      // set auth token
      setAuhtoken(token);
      // decode token
      const decoded = jwt_decode(token);
      // set current User
      dispatch(setCurrentUser(decoded));
      history.push("/profile");
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const setCurrentUser = decoded => ({
  type: SET_CURRENT_USER,
  payload: decoded
});

// logout user
export const logOutUser = () => dispatch => {
  localStorage.removeItem("jwtToken");
  dispatch(setCurrentUser({}));
  // console.log("okeke");
};
