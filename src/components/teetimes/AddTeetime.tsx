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
  time: any;
}

class AddTeetime extends React.Component<ATTPropsTypes, stateTypes> {
  state = {
    time: ""
  };

  handleDate = (date: any) => {
    this.setState({ time: date });
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.dispatch(
      addTeetime({
        time: this.state.time
      })
    );
    this.setState({
      time: ""
    });
    window.location.assign("./");
  };

  render() {
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
            {/* <Form.Control
              className="col-7"
              value={this.state.time}
              onChange={(e: any) => this.setState({ time: e.target.value })}
              name="time"
              type="text"
              required
            /> */}
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
