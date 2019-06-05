import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const mapState = state => ({
  auth: state.auth
});

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default connect(mapState)(PrivateRoute);
