/** @format */

"use client";

import React, { useState, useEffect } from "react";
import Template from "../components/template";
import axios from "axios";

const API_URL = "https://form-padi.free.beeceptor.com/templates";

type TemplateTypes = {
  name: string;
  description: string;
};

const AllTemplates = () => {
  const [templates, setTemplates] = useState<TemplateTypes[]>([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => setTemplates(response.data))
      .catch(() => "Failed to fetch templates");
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="pt-10 pb-8">All Templates</h1>
        <p className="text-[#989898] text-sm">{templates.length} templates</p>
      </div>
      {templates.length === 0 ? (
        <p>No templates found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {templates.map((item, index) => (
            <Template key={index} header={item.name} body={item.description} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllTemplates;
