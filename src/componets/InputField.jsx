import React from "react";

function InputField({ type, value, setValue, lable ,placeholder,redOnly,classes,required}) {
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
        readOnly={redOnly?redOnly:false}
        className={classes ? classes : ""}
        required={required?required:false}
      />
      
    </div>
  );
}

export default InputField;
