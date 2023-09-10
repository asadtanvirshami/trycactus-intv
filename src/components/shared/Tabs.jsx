import React from "react";

const Tabs = ({ tab, activeTab, setActiveTab }) => {
  return (
    <div className="flex mt-5 mb-5 border-b-[1px]">
      {tab.map((item, index) => {
        return (
          <h1
            onClick={()=>setActiveTab(index)}
            key={item}
            className={`text-sm mx-3 cursor-pointer font-semibold mb-3 border-b-2 border-transparent  transition-all duration-300 ease-in-out ${activeTab==index ? 'border-b-green-300':''}`}
          >
            {item}
          </h1>
        );
      })}
    </div>
  );
};

export default Tabs;
