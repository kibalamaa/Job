import Glo from "./../public/globe.svg";
import Image from "next/image";
import React from "react";

interface JoblistProps {
    role: string;
    company: string;
    location: string;
    description: string;

}

const Joblist: React.FC<JoblistProps> = ({role, company, location, description }) => {
  return (
    <div className="flex flex-row w-[700px] rounded-2xl border-2 border-gray-300">
      <div className="flex flex-col items-center w-[100px]">
        <Image className='mt-1' src={Glo} width={50} height={10} alt="Hero image"/>
      </div>
      <div className="flex flex-col  w-[600px] h-[200px]">
        <div className="flex flex-col h-[30%] w-full pt-2">
          <h1>{role}</h1>
          <div className="flex gap-2 text-gray-500 text-sm">
            <p className="">{company}</p>
            &#x2022; 
            <p className="">{location}.</p>
          </div>
          
        </div>

        <div className="pr-4 h-[40%] ">
          <p className="text-sm text-gray-700">
            {description}
          </p>
        </div>
        <div className="flex flex-row justify-start  h-[30%] gap-2 items-center bg">
          <button className="bg-green-50 text-green-400 text-sm rounded-xl px-3 py-1">
            In Person
          </button>
          <button className="border-1 border-amber-300 text-amber-300 text-sm rounded-xl px-3 py-[1.5]">
            Education
          </button>
          <button className="border-1 border-blue-800 text-blue-800 text-sm rounded-xl px-4 py-[1.5]">
            IT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Joblist;
