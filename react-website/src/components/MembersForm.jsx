import React, { useRef, useState } from "react";
import SimpleInput from "../components/shared/SimpleInput";
import "../styles/MembersForm.css";

const ssnRegex = /^\d{3}-\d{2}-\d{4}$/;

const MembersForm = () => {
  const form = useRef(null);
  const error = useRef(null);

  const getFormData = () => {
    const formData = new FormData(form.current);
    const member = {
      name: formData.get("name").trim(),
      lastname: formData.get("lastname").trim(),
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

  const validateFields = ({ name, lastname, address, ssn }) => {
    if (!(name && lastname && address && ssn))
      throw new Error("All fields most be completed");
    if (name.length <= 1)
      throw new Error("Name should have more than one character");
    if (lastname.length <= 1)
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

  const handleOnSave = (event) => {
    event.preventDefault();
    console.log(getFormData());
  };

  return (
    <form ref={form} className="Members-form">
      <div className="Form-inputs">
        <SimpleInput placeholder={"First name"} name={"name"} />
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
