import React from "react";
import { connect } from "react-redux";
import { InputGroup, FormControl, Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import Customer from "./Customer";

interface DashboardProps {
  location: any;
  match: any;
  history: any;
}

class Dashboard extends React.Component {
  state = {
    query: "",
    queryLoc: "1"
  };

  render() {
    return (
      <div>
        <h1>This is the Dashboard</h1>
      </div>
    );
  }
}

export default Dashboard;
