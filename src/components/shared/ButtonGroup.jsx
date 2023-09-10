import React from "react";

const ButtonGroup = ({
  title,
  title_2,
  label,
  name,
  value1,
  value2,
  onClick,
}) => {
  return (
    <>
      <label className="text-sm text-zinc-500">{label}</label>
      <div className="flex mt-2">
        <button
          onClick={(e) => {
            onClick(e);
          }}
          name={name}
          value={value1}
          className="px-8 py-2 w-full bg-green-100 text-gray rounded-l-md"
        >
          {title}
        </button>
        <button
          onClick={(e) => {
            onClick(e);
          }}
          name={name}
          value={value2}
          className="px-8 py-2 w-full bg-zinc-200 text-stone-400 rounded-r-md"
        >
          {title_2}
        </button>
      </div>
    </>
  );
};

export default ButtonGroup;
