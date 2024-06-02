import React, { useState } from "react";

function InputField({ type, value, setValue, label ,placeholder,readOnly,classes,required }) {
  const [file,setFile]=useState()
  return (
    <div className="input-container">
      <label htmlFor={label} >{label}</label>
      <br />
      <input
        type={type}
        id={label}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(type=="file"?e.target.files[0]:e.target.value)}
        readOnly={readOnly||false}
        className={classes ? classes : ""}
        required={required?required:false}
      />
      
    </div>
  );
}

export default InputField;
