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
    />
  );
};

export default SimpleInput;
