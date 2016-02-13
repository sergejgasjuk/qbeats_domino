import React from "react";

const Button = ({text, action}) => {
  return (
    <div className={`action-btn`} onClick={action}>{text}</div>
  )
};

export default Button;
