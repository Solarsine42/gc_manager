import React from "react";
import { FaTimes } from "react-icons/fa";
import { rmvTeetime } from "../../store/teetimes/actions";
import { connect } from "react-redux";

interface DTTPropsTypes {
  id: number;
  [key: string]: any;
}

const RmvTeetime: React.FC<DTTPropsTypes> = props => {
  return (
    <FaTimes
      onClick={() => props.dispatch(rmvTeetime(props.id))}
      style={{ cursor: "pointer", color: "red" }}
    />
  );
};

export default connect()(RmvTeetime);
