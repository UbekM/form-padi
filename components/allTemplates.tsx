/** @format */

import React from "react";
import Template from "./template";

const AllTemplates = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="pt-10 pb-4 ">All Templates</h1>
        <p className="text-[#989898]text-sm">2000 templates</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <Template header="" body="" />
      </div>
    </div>
  );
};

export default AllTemplates;
