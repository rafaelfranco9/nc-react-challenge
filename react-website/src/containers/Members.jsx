import React from "react";
import MembersPanel from "../components/MembersPanel";
import { MembersContextProvider } from "../contexts/MembersContext";
import "../styles/Members.css";

const Members = () => {
  return (
    <MembersContextProvider>
      <div className="Members-view">
        <MembersPanel />
      </div>
    </MembersContextProvider>
  );
};

export default Members;
