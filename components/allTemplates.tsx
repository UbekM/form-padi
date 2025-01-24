/** @format */
"use client";

import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import Banner from "@/components/banner";
import Footer from "@/components/footer";

const API_URL = "https://caselops.free.beeceptor.com/template";

type TemplateTypes = {
  name: string;
  description: string;
  category: string[];
  created: string;
};

const AllTemplates = () => {
  const [templates, setTemplates] = useState<TemplateTypes[]>([]);
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("Default");
  const [sortDate, setSortDate] = useState("Default");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Number of templates per page
  const totalPages = Math.ceil(templates.length / itemsPerPage); // Dynamically calculate total pages based on the filtered templates

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => setTemplates(response.data))
      .catch(() => console.error("Failed to fetch templates"));
  }, []);

  const filteredTemplates = templates.filter((template) => {
    const categoryMatch =
      category === "All" ? true : template.category.includes(category);
    const searchMatch = template.name
      .toLowerCase()
      .includes(search.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const sortTemplates = (templates: TemplateTypes[]) => {
    const sortedTemplates = [...templates];

    if (sortOrder === "Ascending") {
      sortedTemplates.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === "Descending") {
      sortedTemplates.sort((a, b) => b.name.localeCompare(a.name));
    }

    if (sortDate === "Ascending") {
      sortedTemplates.sort(
        (a, b) => new Date(a.created).getTime() - new Date(b.created).getTime()
      );
    } else if (sortDate === "Descending") {
      sortedTemplates.sort(
        (a, b) => new Date(b.created).getTime() - new Date(a.created).getTime()
      );
    }

    return sortedTemplates;
  };

  const sortedTemplates = sortTemplates(filteredTemplates);

  const indexOfLastTemplate = currentPage * itemsPerPage;
  const indexOfFirstTemplate = indexOfLastTemplate - itemsPerPage;
  const currentTemplates = sortedTemplates.slice(
    indexOfFirstTemplate,
    indexOfLastTemplate
  );

  return (
    <div>
      {/* Navbar Section */}
      <div className="lg:flex justify-between font-light text-sm text-[#8F8B8B]">
        <div className="px-2 pr-6 border-2 rounded-md bg-white focus-within:border-[#BDBDBD] mb-6 lg:mb-0">
          <div className="flex items-center justify-between">
            <input
              type="search"
              name="search"
              placeholder="Search Templates"
              onChange={(e) => setSearch(e.target.value)}
              className="h-8 w-full pl-5 py-5 focus:border-none outline-none"
            />
            <FaSearch />
          </div>
        </div>
        <div className="flex items-center gap-4 justify-center lg:justify-start">
          <p>Sort By:</p>
          <div className="relative">
            <p className="text-[0.6rem] px-1 absolute -top-3 left-3 bg-white">
              Category
            </p>
            <select
              name="sort-category"
              className="w-32 p-2 pr-4 border border-[#BDBDBD] rounded-sm focus:outline-none focus:border-[#BDBDBD] focus:border-2"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Education">Education</option>
              <option value="E-commerce">E-commerce</option>
              <option value="Health">Health</option>
            </select>
          </div>
          <div className="relative">
            <p className="text-[0.6rem] px-1 absolute -top-3 left-3 bg-white">
              Order
            </p>
            <select
              name="sort-order"
              className="w-32 p-2 pr-4 border border-[#BDBDBD] rounded-sm focus:outline-none focus:border-[#BDBDBD] focus:border-2"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="Default">Default</option>
              <option value="Ascending">Ascending</option>
              <option value="Descending">Descending</option>
            </select>
          </div>
          <div className="relative">
            <p className="text-[0.6rem] px-1 absolute -top-3 left-3 bg-white">
              Date
            </p>
            <select
              name="sort-date"
              className="w-32 p-2 pr-4 border border-[#BDBDBD] rounded-sm focus:outline-none focus:border-[#BDBDBD] focus:border-2"
              value={sortDate}
              onChange={(e) => setSortDate(e.target.value)}
            >
              <option value="Default">Default</option>
              <option value="Ascending">Ascending</option>
              <option value="Descending">Descending</option>
            </select>
          </div>
        </div>
      </div>

      {/* Middle Banner */}
      {!search && <Banner />}

      {/* Template Section */}
      <div className="flex justify-between items-center">
        <h1 className="pt-10 pb-8">
          {category === "All" ? "All Templates" : category}
        </h1>
        <p className="text-[#989898] text-sm">
          {filteredTemplates.length} templates
        </p>
      </div>

      {filteredTemplates.length === 0 ? (
        <p>No templates found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {currentTemplates.map((item, index) => (
            <div key={index} className="shadow-lg">
              <div className="space-y-6 p-6 pb-16">
                <h2 className="text-2xl font-medium">{item.name}</h2>
                <p>{item.description}</p>
              </div>
              <div className="bg-[#F9F9F9]">
                <p className="bg-[#F9F9F9] text-[#08BD37] p-5 py-3">
                  Use Template
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination Footer */}
      <Footer
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default AllTemplates;
