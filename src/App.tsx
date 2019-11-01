import React from "react";
import Home from "./components/utility/Home";
import Navi from "./components/utility/Navi";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { getTeetimes } from "./store/teetimes/actions";
import { getCustomers } from "./store/customers/actions";
import "./App.css";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(getTeetimes());
    this.props.dispatch(getCustomers());
  }

  render() {
    return (
      <div className="App">
        <p>Homepage</p>>
      </div>
    );
  }
}

export default connect()(App);
