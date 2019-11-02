import React from "react";

interface DashboardProps {
  location: any;
  match: any;
  history: any;
}

const Dashboard = (props: DashboardProps) => {
  return (
    <div>
      <h1>This is the Dashboard</h1>
    </div>
  );
};
export default Dashboard;
