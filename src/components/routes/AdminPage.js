import React, { Component } from "react";
import SignupForm from "../auth/SignupForm";

export default class AdminPage extends Component {
  render() {
    return (
      <div>
        <h1>Admin Page</h1>
        <SignupForm />
      </div>
    );
  }
}
