import React from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { addTeetime } from "../../store/teetimes/actions";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface ATTPropsTypes {
  location: any;
  match: any;
  history: any;
  [key: string]: any;
}

interface stateTypes {
  time: string;
  customer: number;
}

class AddTeetime extends React.Component<ATTPropsTypes, stateTypes> {
  state = {
    time: "",
    customer: 0
  };

  handleDate = (date: string) => {
    this.setState({ time: date });
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.dispatch(
      addTeetime({
        time: this.state.time,
        customer: this.state.customer
      })
    );
    this.setState({
      time: "",
      customer: 0
    });
    window.location.assign("./");
  };

  render() {
    const customerList = this.props.customers.map((player: any) => {
      return <option value={player.id}>{player.name}</option>;
    });

    return (
      <div
        style={{ marginLeft: "25%", marginRight: "25%", width: "50%" }}
        className="container"
      >
        <h3>Add New Tee Time</h3>
        <br />
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="row">
            <Form.Label>Time:</Form.Label>
            <DatePicker
              onChange={(date: any) => this.handleDate(date)}
              placeholderText={this.state.time}
              showTimeSelect
              timeFormat="hh:mm aa"
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="MMMM d, yyyy hh:mm aa"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Player with Reservation</Form.Label>
            <Form.Control
              onChange={(e: any) => this.setState({ customer: e.target.value })}
              as="select"
              multiple
            >
              {customerList}
            </Form.Control>
          </Form.Group>
          <Button
            // style={{ marginLeft: "25%", marginRight: "25%", width: "30%" }}
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

export default connect(mapStateToProps)(AddTeetime);
