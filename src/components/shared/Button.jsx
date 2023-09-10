import React from "react";

const Button = ({ onClick, disabled, className, title }) => {
  return (
    <button type={'submit'} onClick={onClick} disabled={disabled} className={className}>
      {title}
    </button>
  );
};

export default Button;
