import React, { Component } from "react";
import { Route } from "react-router-dom";
import AdminPage from "./routes/AdminPage";
import AuthPage from "./routes/AuthPage";

export default class Root extends Component {
  render() {
    return (
      <div>
        <h1>Hi!</h1>
        <Route path="/admin" component={AdminPage} />
        <Route path="/auth" component={AuthPage} />
      </div>
    );
  }
}
