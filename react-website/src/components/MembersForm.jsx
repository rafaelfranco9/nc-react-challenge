import React from "react";
import SimpleInput from "../components/shared/SimpleInput";
import "../styles/MembersForm.css";

const MembersForm = () => {
  return (
    <form className="Members-form">
      <div className="Form-inputs">
        <SimpleInput placeholder={"First name"} name={"name"} />
        <SimpleInput placeholder={"Last name"} name={"lastname"} />
        <SimpleInput placeholder={"Address"} name={"address"} />
        <SimpleInput placeholder={"SSN"} name={"ssn"} />
        <span>Error Message</span>
      </div>
      <div className="Form-buttons">
        <button>Reset</button>
        <button>Save</button>
      </div>
    </form>
  );
};

export default MembersForm;
