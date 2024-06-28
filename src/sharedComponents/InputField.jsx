import React from "react";

const InputField = ({ inputType, inputId, inputPlaceholder,onChange, inputValue }) => {
  return (
    <input
      type={inputType}
      id={inputId}
      onChange={onChange}
      placeholder={inputPlaceholder}
      value={inputValue}
    ></input>
  );
};
export default InputField;
