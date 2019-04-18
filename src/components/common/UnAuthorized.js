import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class UnAuthorized extends Component {
  render() {
    return (
      <div>
        <h1>
          Unauthorized, please <Link to="/auth/signin">sign in</Link>
        </h1>
      </div>
    );
  }
}
