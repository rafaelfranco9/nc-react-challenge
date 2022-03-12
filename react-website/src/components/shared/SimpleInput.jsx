import React from "react";
import "../../styles/shared/SimpleInput.css";

const SimpleInput = ({ placeholder, name }) => {
  return (
    <input
      name={name}
      className="SimpleInput"
      type={"text"}
      placeholder={placeholder}
      spellCheck="false"
      autoCorrect="false"
      autoCapitalize="true"
      autoComplete="false"
      maxLength="80"
    />
  );
};

export default SimpleInput;
