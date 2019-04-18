import React, { Component } from "react";
import SignInForm from "../auth/SignInForm";
import SignUpForm from "../auth/SignUpForm";
import { Route, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signUp, moduleName } from "../../ducks/auth";
import Loader from "../common/Loader";

class AuthPage extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div>
        <h1>AuthPage</h1>
        <NavLink to="/auth/signin" activeStyle={{ color: "red" }}>
          Sign In
        </NavLink>
        <NavLink to="/auth/signup" activeStyle={{ color: "red" }}>
          Sign Up
        </NavLink>
        <Route
          path="/auth/signin"
          render={() => <SignInForm onSubmit={this.handleSignIn} />}
        />
        <Route
          path="/auth/signup"
          render={() => <SignUpForm onSubmit={this.handleSignUp} />}
        />
        {loading && <Loader />}
      </div>
    );
  }
  handleSignIn = values => console.log("----", values);
  handleSignUp = ({ email, password }) => this.props.signUp(email, password);
}

export default connect(
  state => ({
    loading: state[moduleName].loading
  }),
  { signUp }
)(AuthPage);
