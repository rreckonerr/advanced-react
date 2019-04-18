import React, { Component } from "react";
import SigninForm from "../auth/SigninForm";
import SignupForm from "../auth/SignupForm";
import { Route, NavLink } from "react-router-dom";

export default class AuthPage extends Component {
  render() {
    return (
      <div>
        <h1>AuthPage</h1>
        <NavLink path="/auth/signin" activeStyle={{ color: "red" }}>
          Sign In
        </NavLink>
        <NavLink path="/auth/signup" activeStyle={{ color: "red" }}>
          Sign Up
        </NavLink>
        <Route
          path="/auth/signin"
          render={() => <SigninForm onSubmit={this.handleSignIn} />}
        />
        <Route
          path="/auth/signup"
          render={() => <SignupForm onSubmit={this.handleSignUp} />}
        />
      </div>
    );
  }
  handleSignIn = values => console.log("----", values);
  handleSignUp = values => console.log("----", values);
}
