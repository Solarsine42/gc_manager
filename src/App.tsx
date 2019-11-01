import React from "react";
import { connect } from "react-redux";
import { getTeetimes } from "./store/tee_times/actions";
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
