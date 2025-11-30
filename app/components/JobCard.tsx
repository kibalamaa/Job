import Image from "next/image";
import Link from "next/link";
import React from "react";

import { JoblistProps } from "@/app/data/jobs"; 
import CategoryBadge from "./CategoryBadge";

interface JobCardComponentProps extends JoblistProps {
  id: string;
}

const JobCard: React.FC<JobCardComponentProps> = (props) => {
  const { id, img_src, role, company, location, description, categories } = props;

  return (
    <Link href={`/jobs/${id}`} className="block w-full group">
      <div className="flex flex-col md:flex-row w-full gap-4 md:gap-6 p-5 rounded-2xl border border-gray-200 bg-white group-hover:shadow-lg transition-shadow duration-200 cursor-pointer">
        
        <div className="shrink-0">
          <div className="relative h-12 w-12 md:h-14 md:w-14">
            <Image
              src={img_src}
              alt={`${company} logo`}
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col grow gap-3">
          <div>
            <h2 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
              {role}
            </h2>
            <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
              <span className="font-medium">{company}</span>
              <span className="h-1 w-1 rounded-full bg-gray-400"></span>
              <span>{location}</span>
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
              {description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-1">
            {categories && categories.map((category, index) => (
              <CategoryBadge key={index} category={category} />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;