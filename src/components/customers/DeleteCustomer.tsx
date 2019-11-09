import React from "react";
import { Dropdown, Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { rmvCustomer } from "../../store/customers/actions";
import { connect } from "react-redux";

interface DCPropsTypes {
  id: number;
  [key: string]: any;
}

const RmvCustomer: React.FC<DCPropsTypes> = props => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Dropdown.Item onClick={handleShow} style={{ color: "red" }}>
        Delete Customer
      </Dropdown.Item>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete customer data?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="danger"
            onClick={() => props.dispatch(rmvCustomer(props.id))}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default connect()(RmvCustomer);
