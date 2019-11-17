import React from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { addTeetime } from "../../store/teetimes/actions";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface ATTPropsTypes {
  [key: string]: any;
}

interface stateTypes {
  time: Date;
  customer: number;
}

class AddTeetime extends React.Component<ATTPropsTypes, stateTypes> {
  state = {
    time: new Date(),
    customer: 0
  };

  handleChange = (date: any) => {
    this.setState({
      time: date
    });
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.dispatch(
      addTeetime({
        time: this.state.time,
        customer: this.props.customer.id
      })
    );
    window.location.assign("./");
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="row">
            <Form.Label>Time:</Form.Label>
            <DatePicker
              selected={this.state.time}
              // onChange={(date: any) => this.handleDate(date)}
              onChange={this.handleChange}
              showTimeSelect
              timeFormat="hh:mm aa"
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="MMMM d, yyyy hh:mm aa"
            />
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
