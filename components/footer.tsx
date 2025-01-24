/** @format */
"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex justify-between pt-12 items-center">
      <div className="flex gap-2">
        <Link href="">&lt;</Link>
        <p>Previous</p>
      </div>
      <div className="flex gap-2 items-center">
        <p className="p-2 py-0 rounded-md border-2">1</p>
        <p>of 14</p>
      </div>
      <div className="flex gap-2">
        <p>Next</p>
        <Link href="">&gt;</Link>
      </div>
    </div>
  );
};

export default Footer;
