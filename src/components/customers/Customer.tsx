import React from "react";
import { tsPropertySignature } from "@babel/types";

interface propsTypes {
  location: any;
  match: any;
  history: any;
  key: number;
  customer: any;
}

export const Customer: React.FC<propsTypes> = () => {
  return (
    <div>
      <p>{props.customer.name}</p>
    </div>
  );
};

export default Customer;
