/** @format */

import Image from "next/image";
import Navbar from "@/components/navbar";
import AllTemplates from "@/components/AllTemplates";
import Banner from "@/components/banner";

export default function Home() {
  return (
    <div className="p-20">
      <Navbar />
      <Banner />
      <AllTemplates />
    </div>
  );
}
