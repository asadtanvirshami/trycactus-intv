import { useState } from "react";
import { GetServerSideProps } from "next";

import Financing from "../components/layout/PropertyForm/Financing";
import PropertyDetail from "../components/layout/PropertyForm/PropertyDetail";
import RentRoll from "../components/layout/PropertyForm/RentRoll";
import StepperY from "../components/shared/StepperY";
import FormEnd from "../components/layout/PropertyForm/FormEnd";

import { PropertyFormItems } from "../utils/PropertiesForm/Items";
import axios from "axios";

export default function PropertyForm({ data }) {
  const [step, setStep] = useState(0);

  const handlePrevious = (e) => {
    e.preventDefault();
    setStep(step - 1);
    PropertyFormItems[step - 1].status = "current";
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        PropertyFormItems[step].status = "current";
        return (
          <PropertyDetail
            handlePrevious={handlePrevious}
            PropertyFormItems={PropertyFormItems}
            setStep={setStep}
            step={step}
          />
        );
      case 1:
        PropertyFormItems[step].status = "current";
        return (
          <RentRoll
            data={data}
            handlePrevious={handlePrevious}
            PropertyFormItems={PropertyFormItems}
            setStep={setStep}
            step={step}
          />
        );
      case 2:
        PropertyFormItems[step].status = "current";
        return (
          <Financing
            handlePrevious={handlePrevious}
            PropertyFormItems={PropertyFormItems}
            setStep={setStep}
            step={step}
          />
        );
      case 3:
        return (
          <FormEnd
            setStep={setStep}
            handlePrevious={handlePrevious}
            step={step}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className=" m-0 md:m-5 lg:m-5 xl:m-5 ">
      <div className="flex flex-col lg:flex-row">
        <div className="bg-gradient-to-r border rounded-tl-lg rounded-bl-lg from-gray-200 to-white lg:h-screen lg:w-1/4">
          <div className="flex ">
            <StepperY items={PropertyFormItems} steps={step} />
          </div>
        </div>
        <div className="lg:w-full p-5 overflow-y-auto border-l-0 border-r-[1px] border-t-[1px] border-b-[1px] rounded-tr-lg rounded-br-lg from-gray-200 to-white ">
          <h1 className=" text-2xl font-semibold">
            {(step == 0 && "Property Details") ||
              (step === 1 && "Rent Roll") ||
              (step === 2 && "Financing")}
          </h1>
          <div>{renderStep()}</div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await axios
    .get(process.env.NEXT_PUBLIC_TEST_GET_DATA)
    .then((response) => response.data);

  const data = await response;

  return {
    props: {
      data,
    },
  };
}
