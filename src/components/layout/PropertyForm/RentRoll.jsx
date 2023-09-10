import React from "react";

import Button from "../../shared/Button";
import Table from "../../shared/Table";

const RentRoll = ({
  handlePrevious,
  step,
  setStep,
  PropertyFormItems,
  data,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(step + 1);
    PropertyFormItems[step].status = "complete";
  };
  return (
    <>
      <Table cols={["Name", "Username", "Email", "Phone", "Website"]} data={data} />
      <div className="static sm:static lg:absolute bottom-1 lg:right-12">
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

export default RentRoll;
