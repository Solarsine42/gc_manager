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
          <Link style={{ color: "white" }} to="/customers">
            Customers
          </Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <Link style={{ color: "white" }} to="/teetimes">
            Tee Times
          </Link>
        </Nav.Link>
      </Nav.Item>
    </Navbar>
  );
};

export default connect()(Navi);
