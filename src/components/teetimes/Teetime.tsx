import React from "react";
import { connect } from "react-redux";

interface TPropsTypes {
  location: any;
  match: any;
  history: any;
  [key: string]: any;
}

const Teetime: React.FC<TPropsTypes> = props => {
  return (
    <div>
      <h5 className="col">{props.teetime.time}</h5>
    </div>
  );
};

export default connect()(Teetime);
