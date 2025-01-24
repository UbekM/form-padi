/** @format */

import React from "react";

type SelectCompProps = {
  category: string;
  defaultValue: string;
  option1: string;
  option2: string;
  option3: string;
  option4?: string;
};

const SelectComp: React.FC<SelectCompProps> = ({
  category,
  defaultValue,
  option1,
  option2,
  option3,
  option4,
}) => {
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
          <option value={option1}>{option1}</option>
          <option value={option2}>{option2}</option>
          <option value={option3}>{option3}</option>
          {option4 &&<option value={option4}>{option4}</option>}
        </select>
      </div>
    </div>
  );
};

export default SelectComp;
