import React from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { addCustomer } from "../../store/customers/actions";

interface ACPropsTypes {
  location: any;
  match: any;
  history: any;
  [key: string]: any;
}

interface stateTypes {
  name: string;
  company: string;
  email: string;
  phone: string;
  address: string;
}

class AddCustomer extends React.Component<ACPropsTypes, stateTypes> {
  state = {
    name: "",
    company: "",
    email: "",
    phone: "",
    address: ""
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.dispatch(
      addCustomer({
        name: this.state.name,
        company: this.state.company,
        email: this.state.email,
        phone: this.state.phone,
        address: this.state.address
      })
    );
    this.setState({
      name: "",
      company: "",
      email: "",
      phone: "",
      address: ""
    });
    window.location.assign("./");
  };

  render() {
    return (
      <div style={{ width: "70%" }} className="container">
        <h3>Add New Customer</h3>
        <br />
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="row">
            <Form.Label className="col-3">Name:</Form.Label>
            <Form.Control
              className="col-7"
              value={this.state.name}
              onChange={(e: any) => this.setState({ name: e.target.value })}
              name="name"
              type="text"
              required
            />
          </Form.Group>
          <Form.Group className="row">
            <Form.Label className="col-3">Company:</Form.Label>
            <Form.Control
              className="col-7"
              value={this.state.company}
              onChange={(e: any) => this.setState({ company: e.target.value })}
              name="company"
              type="text"
              required
            />
          </Form.Group>
          <Form.Group className="row">
            <Form.Label className="col-3">Email:</Form.Label>
            <Form.Control
              className="col-7"
              value={this.state.email}
              onChange={(e: any) => this.setState({ email: e.target.value })}
              name="email"
              type="text"
              required
            />
          </Form.Group>
          <Form.Group className="row">
            <Form.Label className="col-3">Phone:</Form.Label>
            <Form.Control
              className="col-7"
              value={this.state.phone}
              onChange={(e: any) => this.setState({ phone: e.target.value })}
              name="phone"
              type="text"
              required
            />
          </Form.Group>
          <Form.Group className="row">
            <Form.Label className="col-3">Address:</Form.Label>
            <Form.Control
              className="col-7"
              value={this.state.address}
              onChange={(e: any) => this.setState({ address: e.target.value })}
              name="address"
              type="text"
              required
            />
          </Form.Group>
          <Button
            style={{ marginLeft: "35%", marginRight: "35%", width: "30%" }}
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    customers: state.customers.all
  };
};

export default connect(mapStateToProps)(AddCustomer);
