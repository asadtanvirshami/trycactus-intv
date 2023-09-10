import React, { useState } from "react";

import Input from "../../shared/Form/Input/Input";
import Button from "../../shared/Button";
import SelectType from "../../shared/Form/Input/SelectType";
import DatePicker from "../../shared/Form/Input/DatePicker";

const PropertyDetail = ({
  step,
  handlePrevious,
  setStep,
  PropertyFormItems,
}) => {
  const [formData, setFormData] = useState({
    pname: "",
    address: "",
    country:"",
    city:"",
    zip:"",
    date:""
  });

  const [errors, setErrors] = useState({
    pname: "",
    address: "",
    country:"",
    city:"",
    zip:"",
    date:""
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.pname.trim()) {
      newErrors.pname = "Name is required";
    }
    if (!formData.address.trim()) {
      newErrors.address = "Address line is required";
    }
    if (!formData.country.trim()) {
      newErrors.country = "Country is required";
    }
    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }
    if (!formData.zip.trim()) {
      newErrors.zip = "ZIP/Postal is required";
    }
    if (!formData.date.trim()) {
      newErrors.date = "Date is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setStep(step + 1);
      PropertyFormItems[step].status = "complete";
    }
  };

  return (
    <form>
      <span className="p-3">
        <h1 className="pt-1 font-semibold ">Property Detail</h1>
      </span>
      <div className="relative rounded-lg shadow-sm">
        <div>
          <Input
            required={true}
            id={"pname"}
            name={"pname"}
            value={formData.pname}
            onChange={handleInputChange}
            placeholder={"Storage A"}
            label={"Property name"}
            type={"text"}
            className={
              "p-2 mt-2 border h-10 w-full md:w-full border-[0.5]px rounded-md text-sm focus:outline-none focus:border-blue-500"
            }
            autoComplete={"off"}
          />
          <p className="text-red-500 text-xs">{errors.pname}</p>
        </div>
        <div className="mt-4">
          <Input
            required={true}
            value={formData.address}
            onChange={handleInputChange}
            id={"address"}
            name={"address"}
            placeholder={"1373 5th Avenue, Falher, Alberta T0H 1M0"}
            label={"Address line"}
            type={"text"}
            className={
              "p-2 mt-2 border h-10 w-full md:w-full border-[0.5]px rounded-md text-sm focus:outline-none focus:border-blue-500"
            }
            autoComplete={"off"}
          />
          <p className="text-red-500 text-xs">{errors.address}</p>
        </div>
        <div className="flex mt-4 flex-col sm:flex-row sm:space-x-4">
          <div className="flex flex-col w-full sm:w-1/2">
            <SelectType
              required={true}
              value={formData.country}
              onChange={handleInputChange}
              id={"country"}
              name={"country"}
              label={"Country"}
              options={"United Kingdom"}
              className={
                "p-2 mt-2 border h-10 w-full md:w-full border-[0.5]px rounded-md text-sm focus:outline-none focus:border-blue-500"
              }
            />
            <p className="text-red-500 text-xs">{errors.country}</p>
          </div>
          <div className="flex flex-col w-full sm:w-1/2">
            <SelectType
              required={true}
              value={formData.city}
              onChange={handleInputChange}
              id={"city"}
              name={"city"}
              label={"City"}
              options={"London"}
              className={
                "p-2 mt-2 border h-10 w-full md:w-full border-[0.5]px rounded-md text-sm focus:outline-none focus:border-blue-500"
              }
            />
           <p className="text-red-500 text-xs">{errors.city}</p>
          </div>
          <div className="flex flex-col w-full sm:w-1/2">
            <Input
              required={true}
              value={formData.zip}
              onChange={handleInputChange}
              id={"zip"}
              name={"zip"}
              placeholder={"1373 5th Avenue, Falher, Alberta T0H 1M0"}
              label={"ZIP/Postal Code"}
              type={"text"}
              className={
                "p-2 mt-2 border h-10 w-full md:w-full border-[0.5]px rounded-md text-sm focus:outline-none focus:border-blue-500"
              }
              autoComplete={"off"}
            />
            <p className="text-red-500 text-xs">{errors.zip}</p>
          </div>
        </div>
        <div className="mt-4">
          <DatePicker
            required={true}
            value={formData.date}
            onChange={handleInputChange}
            id={"date"}
            name={"date"}
            label={"Close Date"}
            className={
              "p-2 mt-2 border h-10 w-full md:w-full border-[0.5]px rounded-md text-sm focus:outline-none focus:border-blue-500"
            }
            min={"1970-01-01"}
            max={"2050-12-31"}
          />
         <p className="text-red-500 text-xs">{errors.date}</p>
        </div>
      </div>
      <div className="static sm:static lg:absolute bottom-1 lg:right-12">
        {step !== 0 && errors.pname == "" && (
          <Button
            title={"Back"}
            disabled={false}
            onClick={(e) => {
              handlePrevious(e);
            }}
            className="font-semibold mx-4"
          />
        )}
        <Button
          title={"Continue"}
          onClick={(e) => {
            handleSubmit(e);
          }}
          disabled={step === 3}
          className={`bg-teal-950 text-white py-2 px-4 rounded ${
            step === 3 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        />
      </div>
    </form>
  );
};

export default PropertyDetail;
