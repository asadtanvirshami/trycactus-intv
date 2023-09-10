import React from "react";

const Input = ({
  label,
  className,
  placeholder,
  autoComplete,
  id,
  name,
  type,
  required,
  onChange,
  value,
}) => {
  return (
    <>
      <label className="text-sm text-zinc-500">{label}</label>
      <input
        required={required}
        onChange={onChange}
        value={value}
        type={type}
        name={name}
        id={id}
        autoComplete={autoComplete}
        className={className}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
