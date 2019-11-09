import React from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { editCustomer } from "../../store/customers/actions";

interface ECustPropsTypes {
  customer: any;
  id: number;
  [key: string]: any;
}

interface stateTypes {
  name: string;
  company: string;
  email: string;
  phone: string;
  address: string;
}

class EditCustomer extends React.Component<ECustPropsTypes, stateTypes> {
  state: stateTypes = {
    name: this.props.customer.name,
    company: this.props.customer.company,
    email: this.props.customer.email,
    phone: this.props.customer.phone,
    address: this.props.customer.address
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.dispatch(
      editCustomer(
        {
          name: this.state.name,
          company: this.state.company,
          email: this.state.email,
          phone: this.state.phone,
          address: this.state.address
        },
        this.props.id
      )
    );
    window.location.reload();
  };

  render() {
    return (
      <div className="container">
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
            style={{ marginLeft: "30%", marginRight: "30%", width: "40%" }}
            variant="primary"
            type="submit"
          >
            Commit Changes
          </Button>
        </Form>
      </div>
    );
  }
}

export default connect()(EditCustomer);
