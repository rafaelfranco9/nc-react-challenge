import React, { useContext, useRef, useState } from "react";
import SimpleInput from "../components/shared/SimpleInput";
import { MembersContext } from "../contexts/MembersContext";
import "../styles/MembersForm.css";

const ssnRegex = /^\d{3}-\d{2}-\d{4}$/;

const MembersForm = () => {
  const { saveNewMember } = useContext(MembersContext);
  const form = useRef(null);
  const error = useRef(null);

  const getFormData = () => {
    const formData = new FormData(form.current);
    const member = {
      firstName: formData.get("firstname").trim(),
      lastName: formData.get("lastname").trim(),
      address: formData.get("address").trim(),
      ssn: formData.get("ssn").trim(),
    };

    try {
      validateFields(member);
      error.current.textContent = "";
      form.current.reset();
      return member;
    } catch (err) {
      error.current.textContent = err.message || "An error occurred";
    }
  };

  const validateFields = ({ firstName, lastName, address, ssn }) => {
    if (!(firstName && lastName && address && ssn))
      throw new Error("All fields most be completed");
    if (firstName.length <= 1)
      throw new Error("Firstname should have more than one character");
    if (lastName.length <= 1)
      throw new Error("Lastname should have more than one character");
    if (address.length <= 1)
      throw new Error("Address should have more than one character");
    if (!ssn.match(ssnRegex)) throw new Error("invalid ssn");
  };

  const resetForm = (event) => {
    event.preventDefault();
    form.current.reset();
    error.current.textContent = "";
  };

  const handleOnSave = async (event) => {
    event.preventDefault();
    const newMember = getFormData();
    if (newMember) {
      try {
        await saveNewMember(newMember);
      } catch (err) {
        console.log(err.message);
      }
    }
  };

  return (
    <form ref={form} className="Members-form">
      <div className="Form-inputs">
        <SimpleInput placeholder={"First name"} name={"firstname"} />
        <SimpleInput placeholder={"Last name"} name={"lastname"} />
        <SimpleInput placeholder={"Address"} name={"address"} />
        <SimpleInput placeholder={"SSN"} name={"ssn"} />
        <span ref={error}></span>
      </div>
      <div className="Form-buttons">
        <button type="button" onClick={resetForm}>
          Reset
        </button>
        <button type="button" onClick={handleOnSave}>
          Save
        </button>
      </div>
    </form>
  );
};

export default MembersForm;
