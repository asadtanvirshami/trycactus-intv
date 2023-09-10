import React, { useState } from "react";

import Tabs from "../../shared/Tabs";
import AddRow from "../../shared/Form/Input/AddRow";
import Input from "../../shared/Form/Input/Input";
import DatePicker from "../../shared/Form/Input/DatePicker";
import ButtonGroup from "../../shared/ButtonGroup";
import Button from "../../shared/Button";

const Financing = ({ step, setStep, handlePrevious, PropertyFormItems }) => {
  const [row, setRow] = useState([{ lender: "" }]);
  const [activeTab, setActiveTab] = useState(0);
  
  const [formData, setFormData] = useState({
    loanam: 0,
    sdate: "",
    tor: "fixed",
    icap: "monthly",
    interestr: 0,
    interestop: 0,
    term: 0,
    amoritization: 0,
    finance: "",
  });

  const [errors, setErrors] = useState({
    lender: "",
    loanam: "",
    sdate: "",
    interestr: "",
    interestop: "",
    term: "",
    amoritization: "",
    finance: "",
    tor: "",
    icap: "",
  });
  
  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRowsChange = (newRows) => {
    console.log(newRows);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!row[0].lender.trim()) {
      newErrors.lender = "Lender is required";
    }
    if (!formData.loanam > 0 || "") {
      newErrors.loanam = "Loan Amount is required";
    }
    if (!formData.sdate.trim()) {
      newErrors.sdate = "Start date is required";
    }
    if (!formData.tor.trim()) {
      newErrors.tor = "Tor is required";
    }
    if (!formData.icap.trim()) {
      newErrors.tor = "Tor is required";
    }
    if (!formData.interestr > 0 || "") {
      newErrors.interestr = "Interest rate is required";
    }
    if (!formData.interestop > 0 || "") {
      newErrors.interestop = "Interest only period is required!";
    }
    if (!formData.term > 0 || "") {
      newErrors.term = "Term is required!";
    }
    if (!formData.interestop > 0 || "") {
      newErrors.interestop = "Interest only period is required!";
    }
    if (!formData.amoritization > 0 || "") {
      newErrors.amoritization = "Ammoritization only period is required!";
    }
    if (!formData.term > 0 || "") {
      newErrors.term = "Term only period is required!";
    }
    if (!formData.finance.trim()) {
      newErrors.finance = "Financing only period is required!";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    }
    if (Object.keys(newErrors).length <= 0) {
      setStep(step + 1);
      PropertyFormItems[step].status = "complete";
    }
  };  
  return (
    <>
      <Tabs
        tab={["Debt 2", "Add Debt"]}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
      <form className="relative rounded-lg shadow-sm">
        <div>
          <AddRow
            rows={row}
            setRows={setRow}
            Label={"Lender"}
            placeholder={"ABC Captial"}
            onRowsChange={handleRowsChange}
          />
          <p className="text-red-500 text-xs">{errors.lender}</p>
        </div>
        <div className="flex space-x-4 mt-3">
          <div className="flex flex-col">
            <Input
              id={"loanam"}
              name={"loanam"}
              onChange={handleInputChange}
              value={formData.loanam}
              placeholder={"$1000"}
              label={"Loan Amount"}
              type={"number"}
              required={true}
              className={
                "p-2 border mt-2 h-10 w-full border-[0.5]px rounded-md text-sm focus:outline-none focus:border-blue-500"
              }
              autoComplete={"off"}
            />
            <p className="text-red-500 text-xs">{errors.loanam}</p>
          </div>
          <div className="flex space-x-4">
            <div className="flex flex-col">
              <DatePicker
                label={"Start Date"}
                id={"sdate"}
                name={"sdate"}
                onChange={handleInputChange}
                value={formData.sdate}
                required={true}
                className={
                  "p-2 mt-1 border h-10 w-full md:w-full border-[0.5]px rounded-md text-sm focus:outline-none focus:border-blue-500"
                }
                min={"1970-01-01"}
                max={"2050-12-31"}
              />
              <p className="text-red-500 text-xs">{errors.sdate}</p>
            </div>
          </div>
        </div>
        <div className="flex space-x-4 mt-3">
          <div className="flex flex-col">
            <ButtonGroup
              value1={"fixed"}
              value2={"variable"}
              name="tor"
              onClick={handleClick}
              title={"Fixed"}
              title_2={"Variable"}
              label={"Type of Rate"}
            />
          </div>
        </div>
        <div className="flex mt-4 flex-col sm:flex-row sm:space-x-4">
          <div className="flex flex-col w-full sm:w-1/2">
            <Input
              required={true}
              id={"interestr"}
              name={"interestr"}
              onChange={handleInputChange}
              value={formData.interestr}
              placeholder={"$1000"}
              label={"Interest Rate"}
              type={"number"}
              className={
                "p-2 border mt-2 h-10 w-64 border-[0.5]px rounded-md text-sm focus:outline-none focus:border-blue-500"
              }
              autoComplete={"off"}
            />
            <p className="text-red-500 text-xs">{errors.interestr}</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mt-3 w-full">
          <div className="flex-col w-full lg:w-1/2">
            <ButtonGroup
              value1={"monthly"}
              value2={"semi-anual"}
              name="icap"
              onClick={handleClick}
              title={"Monthly"}
              title_2={"Semi-Annual"}
              label={"Interest Capitalization"}
            />
          </div>
          <div className="flex flex-col w-full lg:w-1/2">
            <Input
              required={true}
              id={"interestop"}
              name={"interestop"}
              onChange={handleInputChange}
              value={formData.interestop}
              placeholder={"$1000"}
              label={"Interest Only Period"}
              type={"number"}
              className={
                "p-2 border mt-3 h-10 w-full border-[0.5]px rounded-md text-sm focus:outline-none focus:border-blue-500"
              }
              autoComplete={"off"}
            />
            <p className="text-red-500 text-xs">{errors.interestop}</p>
          </div>
        </div>
        <div className="flex space-x-4 mt-3">
          <div className="flex flex-col w-full">
            <Input
              required={true}
              id={"term"}
              name={"term"}
              onChange={handleInputChange}
              value={formData.term}
              placeholder={"25"}
              label={"Term"}
              type={"number"}
              className={
                "p-2 border mt-2 h-10 w-full border-[0.5]px rounded-md text-sm focus:outline-none focus:border-blue-500"
              }
              autoComplete={"off"}
            />
            <p className="text-red-500 text-xs">{errors.term}</p>
          </div>
          <div className="flex flex-col w-full">
            <Input
              required={true}
              id={"amoritization"}
              name={"amoritization"}
              onChange={handleInputChange}
              value={formData.amoritization}
              placeholder={"25"}
              label={"Amoritization"}
              type={"number"}
              className={
                "p-2 border mt-2 h-10 w-full border-[0.5]px rounded-md text-sm focus:outline-none focus:border-blue-500"
              }
              autoComplete={"off"}
            />
            <p className="text-red-500 text-xs">{errors.amoritization}</p>
          </div>
          <div className="flex flex-col w-full">
            <Input
              required={true}
              id={"finance"}
              name={"finance"}
              value={formData.finance}
              onChange={handleInputChange}
              placeholder={""}
              label={"Financing"}
              type={"text"}
              className={
                "p-2 border mt-2 h-10 w-full border-[0.5]px rounded-md text-sm focus:outline-none focus:border-blue-500"
              }
              autoComplete={"off"}
            />
            <p className="text-red-500 text-xs">{errors.finance}</p>
          </div>
        </div>
      </form>
      <div className=" sm:static lg:text-right mt-[68px] lg:right-18">
        {step !== 0 && (
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
    </>
  );
};

export default Financing;
