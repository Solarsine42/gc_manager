import React from "react";
import Dashboard from "./components/utility/Dashboard";
import Navi from "./components/utility/Navi";
import AddCustomer from "./components/customers/AddCustomer";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Route, Switch } from "react-router-dom";
import { getTeetimes } from "./store/teetimes/actions";
import { getCustomers } from "./store/customers/actions";
import "./App.css";

interface AppProps {
  dispatch: Dispatch;
}

class App extends React.Component<AppProps> {
  componentDidMount() {
    this.props.dispatch(getTeetimes());
    this.props.dispatch(getCustomers());
  }

  render() {
    return (
      <div className="App">
        <Navi />
        <br />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/addCustomer" component={AddCustomer} />
        </Switch>
      </div>
    );
  }
}

export default connect()(App);
