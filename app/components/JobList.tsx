import Image from "next/image";

export interface JoblistProps {
  img_src: string;
  role: string;
  company: string;
  location: string;
  description: string;
}

const JobList: React.FC<JoblistProps> = ({
  img_src,
  role,
  company,
  location,
  description,
}) => {
  return (
    <div className="flex flex-row w-[700px] rounded-2xl border-1 border-gray-300 bg-white">
      <div className="flex flex-col items-center w-[100px] pt-3">
        <Image
          className="mt-1"
          src={img_src}
          width={50}
          height={10}
          alt="Hero image"
        />
      </div>
      <div className="flex flex-col  w-[600px] h-[200px]">
        <div className="flex flex-col h-[30%] w-full pt-3">
          <h2 className="font-bold">{role}</h2>
          <div className="flex gap-2 text-gray-500 text-sm">
            <p className="">{company}</p>
            &#x2022;
            <p className="">{location}</p>
          </div>
        </div>

        <div className="pr-10 h-[40%] ">
          <p className="text-sm text-gray-700">{description}</p>
        </div>
        <div className="flex flex-row justify-start  h-[30%] gap-2 items-center bg">
          <button className="bg-green-50 text-green-400 text-xs rounded-xl px-3 py-1">
            In Person
          </button>
          <div className="bg-yellow-200 border-1 border-gray-100 h-[20] py-1"></div>
          <button className="border-1 border-amber-300 text-amber-300 text-xs rounded-xl px-3 py-[1.5]">
            Education
          </button>
          <button className="border-1 border-blue-800 text-blue-800 text-xs rounded-xl px-4 py-[1.5]">
            IT
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobList;
