/** @format */

import Navbar from "@/components/navbar";
import AllTemplates from "@/components/allTemplates";
import Banner from "@/components/banner";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="p-20">
      <Navbar />
      <Banner />
      <AllTemplates/>
      <Footer />
    </div>
  );
}
