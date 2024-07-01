import React from "react";

const InputField = ({ inputType, inputId, inputPlaceholder,onChange, inputValue,checked }) => {
  return (
    <input
      type={inputType}
      id={inputId}
      onChange={onChange}
      placeholder={inputPlaceholder}
      value={inputType === 'checkbox' ? undefined : inputValue}
      checked={inputType === 'checkbox' ? checked : undefined}
    ></input>
  );
};
export default InputField;