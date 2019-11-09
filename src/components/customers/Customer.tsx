import React from "react";
import { connect } from "react-redux";
import { Dropdown } from "react-bootstrap";
import EditCustomerModal from "./EditCustomerModal";
import DeleteCustomer from "./DeleteCustomer";

interface CPropsTypes {
  customer: any;
  id: number;
  [key: string]: any;
}

const Customer: React.FC<CPropsTypes> = props => {
  const teeTimeList = props.customer.teetimes.map((ttime: any) => (
    <p>{ttime.time}</p>
  ));

  return (
    <div>
      <div className="container row mb-3">
        <h5 className="col">{props.customer.name}</h5>
        <Dropdown className="col">
          <Dropdown.Toggle size="sm" variant="success" id="dropdown-button">
            Options
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>Add Tee Time</Dropdown.Item>
            <Dropdown.Item>Remove Tee Time</Dropdown.Item>
            <EditCustomerModal
              id={props.customer.id}
              customer={props.customer}
            />
            <DeleteCustomer id={props.customer.id} />
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div>
        <p>
          {props.customer.teetimes[0] ? teeTimeList : "No Tee Times listed"}
        </p>
      </div>
    </div>
  );
};

export default connect()(Customer);
