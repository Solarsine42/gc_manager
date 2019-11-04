import React from "react";
import { connect } from "react-redux";

interface CustomerProps {
  location: any;
  match: any;
  history: any;
}

const Customer = (props: CustomerProps) => {
  return (
    <div>
      <p>I'm a Customer</p>
      <p>Me too!</p>
    </div>
  );
};

export default connect()(Customer);
