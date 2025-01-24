/** @format */

import React from "react";
import { FaSearch } from "react-icons/fa";
import SelectComp from "./selectComp";

const Navbar = () => {
  return (
    <div className="lg:flex justify-between font-light text-sm text-[#8F8B8B] ">
      <div className="px-2 pr-4 border-2 rounded-md bg-white focus-within:border-[#BDBDBD] mb-6 lg:mb-0">
        <input
          type="search"
          name="search"
          id=""
          placeholder={`Search Templates ${(<FaSearch />)}`}
          className="h-8 pl-5 py-5 focus:border-none outline-none "
        />
      </div>
      <div className="flex items-center gap-4 justify-center lg:justify-start">
        <p>Sort By:</p>
        <SelectComp
          category="Category"
          defaultValue="All"
          option1="All"
          option2="Education"
          option3="E-commerce"
          option4="Health"
        />
        <SelectComp
          category="Order"
          defaultValue="Default"
          option1="All"
          option2="Ascending"
          option3="Descending"
        />
        <SelectComp
          category="Date"
          defaultValue="Default"
          option1="All"
          option2="Ascending"
          option3="Descending"
        />
      </div>
    </div>
  );
};

export default Navbar;
