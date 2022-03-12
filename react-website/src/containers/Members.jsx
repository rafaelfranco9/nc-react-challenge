import React, { useEffect, useRef } from "react";
import MembersPanel from "../components/MembersPanel";
import { MembersContextProvider } from "../contexts/MembersContext";
import "../styles/Members.css";

const Members = () => {
  const lastActivity = useRef(new Date().getTime());

  const updateTime = () => {
    lastActivity.current = new Date().getTime();
  };

  useEffect(() => {
    window.addEventListener("keypress", updateTime);
    refreshOnInactivity();
    return () => {
      window.removeEventListener("keypress", updateTime);
    };
  }, []);

  const refreshOnInactivity = () => {
    if (new Date().getTime() - lastActivity.current >= 120000) {
      window.location.reload();
    } else {
      setTimeout(refreshOnInactivity, 30000);
    }
  };

  return (
    <MembersContextProvider>
      <div className="Members-view">
        <MembersPanel />
      </div>
    </MembersContextProvider>
  );
};

export default Members;
