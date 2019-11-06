import React from "react";
import { connect } from "react-redux";
import Customer from "../customers/Customer";
import { InputGroup, FormControl, Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

interface CLPropsTypes {
  location: any;
  match: any;
  history: any;
  [key: string]: any;
}

interface stateTypes {
  query: string;
}

class CustomerList extends React.Component<CLPropsTypes, stateTypes> {
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
      <Form>
        <InputGroup className="mb-4">
          <InputGroup.Prepend>
            <InputGroup.Text>
              <FaSearch />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="Search by Customer..."
            onChange={this.handleSort}
          />
        </InputGroup>
        <div>{listOfCustomers}</div>
      </Form>
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
