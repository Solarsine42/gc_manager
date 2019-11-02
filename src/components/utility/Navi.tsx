import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Navbar, Nav } from "react-bootstrap";

interface NaviProps {
  location: any;
  match: any;
  history: any;
}

const Navi = (props: NaviProps) => {
  return (
    <Navbar bg="light" variant="dark">
      <Navbar.Brand>
        <Link to="/">
          <strong>Golf Course Manager</strong>
        </Link>
      </Navbar.Brand>
      <Nav.Item>
        <Nav.Link>
          <Link to="/customers">Customers</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <Link to="/teetimes">Tee Times</Link>
        </Nav.Link>
      </Nav.Item>
    </Navbar>
  );
};

export default connect()(Navi);
