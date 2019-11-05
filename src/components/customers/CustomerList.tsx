import React from "react";
import { connect } from "react-redux";
import Customer from "../customers/Customer";
import { InputGroup, FormControl, Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

interface propsTypes {
  location: any;
  match: any;
  history: any;
  customers: any;
  customer: any;
  key: number;
}

interface stateTypes {
  query: string;
}

class CustomerList extends React.Component<propsTypes, stateTypes> {
  state = {
    query: ""
  };

  handleSort = (e: any) => {
    this.setState({ query: e.target.value });
  };

  render() {
    const listOfCustomers = this.props.customers
      .filter((customer: any) =>
        customer.name.toLowerCase().includes(this.state.query.toLowerCase())
      )
      .map((customer: any, i: number) => (
        <Customer key={i} customer={customer} />
      ));
    return (
      <div>
        <p>{listOfCustomers}</p>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    customers: state.customers.all,
    teetimes: state.teetimes.all
  };
}

export default connect(mapStateToProps)(CustomerList);
