/** @format */

import React from "react";
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="bg-[#FFF4EA] my-16 text-center py-5 pb-3 lg:px-4 px-7 w-full flex items-center justify-center gap-4">
      <Image
        src="/info.svg"
        alt="info icon"
        width={25}
        height={25}
      />
      <p>
        Tada! Get started with a free template. Can’t find what you are looking
        for? Search from the 1000+ available templates
      </p>
    </div>
  );
};

export default Banner;
