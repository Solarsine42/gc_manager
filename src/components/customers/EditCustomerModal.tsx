import React from "react";
import { Dropdown, Modal } from "react-bootstrap";
import { useState } from "react";
import EditCustomer from "./EditCustomer";

interface ECMPropsTypes {
  customer: object;
  id: number;
  [key: string]: any;
}

const EditCustomerModal: React.FC<ECMPropsTypes> = props => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Dropdown.Item onClick={handleShow} style={{ color: "orange" }}>
        Edit Customer
      </Dropdown.Item>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Customer Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditCustomer id={props.id} customer={props.customer} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditCustomerModal;
