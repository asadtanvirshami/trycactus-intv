import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import React from "react";

const AddRow = ({ onRowsChange, rows, setRows, Label, placeholder }) => {
  const handlePriceChange = (event, index) => {
    const newRows = [...rows];
    newRows[index].lender = event.target.value;
    setRows(newRows);
    onRowsChange(newRows);
  };

  const handleAddRow = () => {
    setRows([...rows, { lender: "" }]);
  };

  const handleRemoveRow = (index) => {
    const newRows = [...rows];
    newRows.splice(index, 1);
    setRows(newRows);
    onRowsChange(newRows);
  };

  return (
    <div className="max-w-3xl">
      <div>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left text-sm font-normal">{Label}</th>
            </tr>
          </thead>
          <tbody className="min-h-[200px] md:min-h-0 overflow-y-auto w-full">
            {rows.map((row, index) => (
              <tr key={index}>
                <td className="m-2">
                  <input
                  required={true}
                    type="text"
                    placeholder={placeholder}
                    className="p-2 mt-2 border h-10 w-full md:w-full border-[0.5]px rounded-md text-sm focus:outline-none focus:border-blue-500"
                    value={row.lender}
                    onChange={(e) => handlePriceChange(e, index)}
                  />
                </td>
                <td className="px-4">
                  {index !== 0 && (
                    <button
                      className=" px-1 mx-1 rounded-md mt-2  border p-1  w-full md:w-auto"
                      onClick={() => handleRemoveRow(index)}
                    >
                     <MinusIcon  className="h-7 w-7"  />
                    </button>
                  )}
                  {index >= 0 && (
                    <button
                      className=" border p-1  px-1 rounded-md mt-2 focus:outline-none w-full md:w-auto"
                      onClick={handleAddRow}
                    >
                    <PlusIcon className="h-7 w-7 " />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddRow;
