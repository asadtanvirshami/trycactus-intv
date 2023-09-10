import { CheckCircleIcon } from "@heroicons/react/20/solid";
import React from "react";

import Button from "../../shared/Button";

const FormEnd = ({step, handlePrevious}) => {
  return (
    <>
    <div className="flex items-center justify-center h-screen">
      <div className="text-3xl lg:text-5xl xl:text-6xl text-center font-semibold">
        Congratulations!
        <div className=" flex text-center justify-center">
          <CheckCircleIcon className="h-24 w-24 text-green-600" />
        </div>
      </div>
    </div>
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
      </div>
    </>
  );
};

export default FormEnd;
