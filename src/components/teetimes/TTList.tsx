import React from "react";
import { connect } from "react-redux";
import { InputGroup, FormControl, Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

interface Props {
  location: any;
  match: any;
  history: any;
}

const TTList: React.FC<{}> = () => {
  return (
    <div>
      <p>I'm a Tee Time!</p>
      <p>Me too!</p>
    </div>
  );
};

export default connect()(TTList);
