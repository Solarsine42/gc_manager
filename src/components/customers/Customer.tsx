import React from "react";
import { connect } from "react-redux";
import { Dropdown } from "react-bootstrap";
import EditCustomerModal from "./EditCustomerModal";
import DeleteCustomer from "./DeleteCustomer";
import DeleteTeetime from "../teetimes/DeleteTeetime";
import AddTeetimeModal from "../teetimes/AddTeetimeModal";

import Moment from "react-moment";

interface CPropsTypes {
  customer: any;
  id: number;
  [key: string]: any;
}

const Customer: React.FC<CPropsTypes> = props => {
  const teeTimeList = props.customer.teetimes.map((ttime: any) => (
    <div className="row">
      <div className="col-4">
        <Moment format="MM/DD/YYYY HH:mm A">{ttime.time}</Moment>{" "}
      </div>
      <div className="col">
        <DeleteTeetime id={ttime.id} />
      </div>
    </div>
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
            <AddTeetimeModal id={props.customer.id} customer={props.customer} />
            <EditCustomerModal
              id={props.customer.id}
              customer={props.customer}
            />
            <DeleteCustomer id={props.customer.id} />
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div>
        <h6 style={{ textDecoration: "underline" }}>Posted Tee Times</h6>
        <p>
          {props.customer.teetimes[0] ? teeTimeList : "No Tee Times listed"}
        </p>
      </div>
    </div>
  );
};

export default connect()(Customer);
