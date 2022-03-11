import React from "react";
import MembersTable from "./MembersTable";
import MembersForm from "./MembersForm";
import Card from "../components/shared/Card";
import "../styles/MembersPanel.css";

const MembersPanel = () => {
  return (
    <div className="Members-panel">
      <div className="Members-form">
        <Card>
          <MembersForm />
        </Card>
      </div>
      <div className="Members-table">
        <Card>
          <MembersTable />
        </Card>
      </div>
    </div>
  );
};

export default MembersPanel;
