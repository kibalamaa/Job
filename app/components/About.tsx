import React from "react";
import Image from "next/image";

interface AboutProps {
  img_src: string;
  date: string;
}

const About = ({ img_src, date }: AboutProps) => {
  return (
    <div className="flex max-w-[150px] gap-4">
      <Image
        className="mt-1"
        src={img_src}
        width={34}
        height={34}
        alt="Hero image"
      />

      <div className="flex flex-col w-[80%] text-sm">
        <p className="text-gray-500">Posted On</p>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default About;
