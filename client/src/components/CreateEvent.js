import React from "react";

const CreateEvent = () => {
  return (
    <button className="border p-2 w-fit rounded-full flex items-center shadow-md hover:shadow-2xl">
      <span className="w-7 h-7">➕</span>
      <span className="pl-3 pr-4">Create</span>
    </button>
  );
};

export default CreateEvent;
