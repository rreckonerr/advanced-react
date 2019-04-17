import React, { Component } from "react";
import Root from "./components/Root";
import { Provider } from "react-redux";
import store from "./redux";
import { ConnectedRouter } from "react-router-redux";
import { Router, Route } from "react-router-dom";
import history from "./history";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={Root} />
        </Router>
      </Provider>
    );
  }
}

export default App;
