import React from "react";
import CustomerList from "../customers/CustomerList";
import TTList from "../teetimes/TTList";

interface DashboardProps {
  location: any;
  match: any;
  history: any;
}

const Dashboard: React.FC<DashboardProps> = props => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <CustomerList />
          </div>
          <div className="col-6">
            <TTList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
