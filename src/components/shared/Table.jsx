import React from "react";

const Table = ({ cols, data }) => {

  let keys;
  if (data.length >= 1) {
    keys = Object.keys(...data);
    keys = keys.filter((key) => key !== "id" && key !== "address" && key !== "company");
  }

  return (
    <div className="overflow-x-auto bg-white mt-5 rounded-lg shadow-md">
      <table className="table rounded-lg border-collapse mt-0 w-full min-w-max table-auto text-left border">
        <thead className="bg-gray-50">
          <tr>
            {cols.map((item, index) => (
              <th
                key={item}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-20"
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <>
            {data.map((item, index) => (
              <tr key={index}>
                {keys.map((key, index) => {
                  return (
                    <td key={key} className="px-6 py-4 text-sm whitespace-nowrap">{item[key]}</td>
                  );
                })}
              </tr>
            ))}
          </>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
