import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Navbar } from "react-bootstrap";

const Navi = () => {
  return (
    <Navbar bg="success" variant="light">
      <Navbar.Brand>
        <Link style={{ color: "white" }} to="/">
          <strong>Golf Course Manager</strong>
        </Link>
      </Navbar.Brand>
    </Navbar>
  );
};

export default connect()(Navi);
