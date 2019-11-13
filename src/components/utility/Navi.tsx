import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Navbar, Nav } from "react-bootstrap";

const Navi = () => {
  return (
    <Navbar bg="success" variant="light">
      <Navbar.Brand>
        <Link style={{ color: "white" }} to="/">
          <strong>Golf Course Manager</strong>
        </Link>
      </Navbar.Brand>
      <Nav.Item>
        <Nav.Link>
          <Link style={{ color: "white" }} to="/addCustomer">
            Add Customer
          </Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <Link style={{ color: "white" }} to="/addTeetime">
            Add Tee Time
          </Link>
        </Nav.Link>
      </Nav.Item>
    </Navbar>
  );
};

export default connect()(Navi);
