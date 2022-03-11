import React, { useContext, useEffect } from "react";
import { MembersContext } from "../contexts/MembersContext";
import "../styles/MembersTable.css";

const MembersTable = () => {
  const { members, getAllMembersFromApi } = useContext(MembersContext);

  useEffect(async () => {
    try {
      await getAllMembersFromApi();
    } catch (err) {
      console.log(err.message);
    }
  }, []);

  return (
    <div className="Table-container">
      <div className="Table-title">Members</div>
      <span className="Table-header">Name</span>
      <span className="Table-header">Lastname</span>
      <span className="Table-header">Address</span>
      <span className="Table-header">SSN</span>
      {members?.length &&
        members.map((member, i) =>
          Object.keys(member).map((key, i) => (
            <span key={key + i} className="Table-item">
              {member[key]}
            </span>
          ))
        )}
    </div>
  );
};

export default MembersTable;
