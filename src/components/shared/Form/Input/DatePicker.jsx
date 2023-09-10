import React from "react";
import { CalendarIcon } from "@heroicons/react/20/solid";

const DatePicker = ({ min, max, className, label, required, value, onChange, id, name }) => {
  return (
    <div className="relative">
      <label className="text-sm text-zinc-500">{label}</label>
      <input id={id} name={name} value={value} onChange={onChange} required={required} type="date" className={className} min={min} max={max} />
      <div className="absolute left-3 ">
        <CalendarIcon className="text-gray-400" />
      </div>
    </div>
  );
};

export default DatePicker;
