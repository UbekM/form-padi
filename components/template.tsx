/** @format */

import React from "react";

type TemplateProps = {
  header: string;
  body: string;
};

const Template: React.FC<TemplateProps> = ({ header, body }) => {
  return (
    <div className="shadow-lg">
      <div className="space-y-6 p-6 pb-16 ">
        <h2 className="text-2xl font-medium">{header}</h2>
        <p>{body}</p>
      </div>
      <div className="bg-[#F9F9F9]">
        <p className="bg-[#F9F9F9] text-[#08BD37] p-5 py-3">Use Template</p>
      </div>
    </div>
  );
};

export default Template;
