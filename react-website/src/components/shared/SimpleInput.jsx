import React from "react";
import "../../styles/shared/SimpleInput.css";

const SimpleInput = ({ placeholder, name, ref }) => {
  return (
    <input
      name={name}
      className="SimpleInput"
      ref={ref}
      type={"text"}
      placeholder={placeholder}
      spellCheck={false}
      autoCorrect={false}
      autoCapitalize={true}
      autoComplete={false}
    />
  );
};

export default SimpleInput;
