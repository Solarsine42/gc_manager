import React from "react";
import { connect } from "react-redux";
import { Dropdown } from "react-bootstrap";

interface CPropsTypes {
  location: any;
  match: any;
  history: any;
  [key: string]: any;
}

export const Customer: React.FC<CPropsTypes> = props => {
  return (
    <div className="container row mb-3">
      <h5 className="col">{props.customer.name}</h5>
      <Dropdown className="col">
        <Dropdown.Toggle size="sm" variant="success" id="dropdown-button">
          Options
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>Add Tee Time</Dropdown.Item>
          <Dropdown.Item>Remove Tee Time</Dropdown.Item>
          <Dropdown.Item style={{ color: "orange" }}>
            Edit Customer
          </Dropdown.Item>
          <Dropdown.Item style={{ color: "red" }}>
            Delete Customer
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default connect()(Customer);
