import React from "react";

const SelectType = ({
  options,
  className,
  label,
  required,
  value,
  onChange,
  id,
  name,
}) => {
  return (
    <>
      <label className="text-sm text-zinc-500">{label}</label>
      <select
        value={value}
        onChange={onChange}
        id={id}
        name={name}
        required={required}
        className={className}
      >
        <option value="option1 hide">Select {label}</option>
        <option value="option1 ">{options}</option>
      </select>
    </>
  );
};

export default SelectType;
