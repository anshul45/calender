import React from "react";
import CreateEvent from "./CreateEvent";
import SmallCalender from "./SmallCalender";

const Sidebar = () => {
  return (
    <div className="border p-5 w-64 ">
      <CreateEvent />
      <SmallCalender />
    </div>
  );
};

export default Sidebar;
