import React from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { addTeetime } from "../../store/teetimes/actions";

interface ATTPropsTypes {
  location: any;
  match: any;
  history: any;
  [key: string]: any;
}

interface stateTypes {
  time: string;
}

class AddTeetime extends React.Component<ATTPropsTypes, stateTypes> {
  state = {
    time: ""
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
      <div style={{ width: "70%" }} className="container">
        <h3>Add New Tee Time</h3>
        <br />
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="row">
            <Form.Label className="col-3">Time:</Form.Label>
            <Form.Control
              className="col-7"
              value={this.state.time}
              onChange={(e: any) => this.setState({ time: e.target.value })}
              name="time"
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

export default connect(mapStateToProps)(AddTeetime);
