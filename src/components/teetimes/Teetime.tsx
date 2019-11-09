import React from "react";
import { connect } from "react-redux";

interface TPropsTypes {
  [key: string]: any;
}

const Teetime: React.FC<TPropsTypes> = props => {
  const customerList = props.teetime.customers.map((customer: any) => (
    <p>{customer.name}</p>
  ));

  console.log("TTProps", props);

  return (
    <div>
      <h5 className="col">{props.teetime.time}</h5>
      <p>{props.teetime.customers[0] ? customerList : "No Players listed"}</p>
    </div>
  );
};

export default connect()(Teetime);
