/** @format */

import React from "react";

type SelectCompProps = {
  category: string;
  defaultValue: string;
};

const SelectComp: React.FC<SelectCompProps> = ({ category, defaultValue }) => {
  return (
    <div>
      <div className="relative">
        <p className="text-[0.6rem] px-1 absolute -top-3 left-3 bg-white ">
          {category}
        </p>
        <select
          name="sort"
          id=""
          className="w-32 p-2 pr-4 border border-[#BDBDBD] rounded-sm focus:outline-none focus:border-[#BDBDBD] focus:border-2 "
          defaultValue={defaultValue}
        >
          <option value="All">All</option>
        </select>
      </div>
    </div>
  );
};

export default SelectComp;
