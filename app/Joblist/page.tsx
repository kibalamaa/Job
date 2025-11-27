import JobList from "@/app/components/JobList";
import { jobs } from "@/app/data/jobs";
import Image from "next/image";
import dropdown from "@/public/down.svg";

const Page = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center  w-[700px]">
        <div className="flex flex-col items-center gap-5 ">
          <div className="flex justify-between w-full ">
            <div className="">
              <h1 className="font-bold text-2xl">Opportunities</h1>
              <p className="text-sm text-gray-500">
                Showing {jobs.length} results
              </p>
            </div>
            <div className="text-sm flex items-center gap-1 pr-4">
              <span className="text-gray-500">Sort by:</span> Most relevant
              <Image src={dropdown} alt="drop down" width={15} height={15} />
            </div>
          </div>

          {jobs.map((job, index) => (
            <JobList
              key={index}
              img_src={job.img_src}
              role={job.role}
              company={job.company}
              location={job.location}
              description={job.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
