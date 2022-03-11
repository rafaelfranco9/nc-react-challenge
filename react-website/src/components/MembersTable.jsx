import React from "react";
import "../styles/MembersTable.css";

const MembersTable = () => {
  return (
    <div className="Table-container">
      <div className="Table-title">Members</div>
      <span className="Table-header">Name</span>
      <span className="Table-header">Lastname</span>
      <span className="Table-header">Address</span>
      <span className="Table-header">SSN</span>
      <span className="Table-item">Rafael</span>
      <span className="Table-item">Franco</span>
      <span className="Table-item">1440 brickell bay drive</span>
      <span className="Table-item">12412413</span>
    </div>
  );
};

export default MembersTable;
