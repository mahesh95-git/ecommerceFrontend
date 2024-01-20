import React from "react";

function InputField({ type, value, setValue, lable ,placeholder}) {
  return (
    <div className="input-container">
      <label htmlFor={lable}>{lable}</label>
      <br />
      <input
        type={type}
        id={lable}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        required
      />
      
    </div>
  );
}

export default InputField;
