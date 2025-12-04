'use client';

import JobCard from "@/app/components/JobCard"; 
import Image from "next/image";
import dropdown from "@/public/down.svg"; 
import { useGetAllOpportunitiesQuery, Opportunity } from "./data/api";



const Page = () => {
  const { data, error, isLoading } = useGetAllOpportunitiesQuery();
  if (isLoading) {
    return <div className="flex justify-center p-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 p-10">Error loading opportunities.</div>;
  }
  const opportunities: Opportunity[] = data?.data || [];

  return (
    <div className="flex justify-center min-h-screen bg-gray-50 py-10 px-4">
      
      <div className="flex flex-col w-full max-w-3xl gap-6">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h1 className="font-bold text-3xl text-slate-800">Opportunities</h1>
            <p className="text-sm text-gray-500 mt-1">
              Showing {opportunities.length} results
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer hover:text-black">
            <span className="text-gray-400">Sort by:</span> 
            <span className="font-medium">Most relevant</span>
            <Image src={dropdown} alt="dropdown icon" width={16} height={16} />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {opportunities.map((job) => (
            <JobCard
              key={job.id}
              {...job}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;