import React, { useState } from "react";

import styles from "./InputControl.module.css";

function InputControl(props) {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className={styles.container}>
      {props.label && <label>{props.label}</label>}
      {/* {props.label=='Password'? <input type="password" {...props} />: <input type="text" {...props} />}
       */}
        {props.label === 'Password' ? (
        <div style={{display:'flex'}} >
          <input type={showPassword ? 'text' : 'password'} {...props}  />
         
         
        </div>
      ) : (
        <input type="text" {...props} />
      )}
      <div type="button" onClick={toggleShowPassword}>
            {showPassword ? 'Hide' : 'Show'} Password </div> 
    </div>
  );
}

export default InputControl;
