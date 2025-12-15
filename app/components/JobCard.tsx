"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Opportunity } from "../data/api";
import CategoryBadge from "./CategoryBadge";
import { useSession, signIn } from "next-auth/react";
import { usePathname } from "next/navigation";

interface JobCardProps extends Opportunity {
  isBookmarked: boolean;
  // callback 
  onToggleBookmark: () => void;
}

const JobCard: React.FC<JobCardProps> = ({
  isBookmarked,
  onToggleBookmark,
  ...props
}) => {
  const { data: session } = useSession();
  const pathname = usePathname();

  const handleBookmarkClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (!session?.accessToken) {
      signIn(undefined, { callbackUrl: pathname });
      return;
    }

    onToggleBookmark();
  };

  return (
    <Link href={`/jobs/${props.id}`} className="block w-full group">
      <div className="flex flex-col md:flex-row w-full gap-4 md:gap-6 p-5 rounded-2xl border border-gray-200 bg-white group-hover:shadow-lg transition-shadow duration-200 cursor-pointer">
        <div className="shrink-0">
          <div className="relative h-12 w-12 md:h-14 md:w-14">
            <Image
              src={props.logoUrl || "/globe.svg"}
              alt={`${props.orgName} logo`}
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col grow gap-3">
          <div className="flex justify-between items-start">
            <h2 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
              {props.title}
            </h2>

            <button
              onClick={handleBookmarkClick}
              aria-label="Toggle bookmark"
              className="p-1 hover:scale-110 transition-transform"
            >
              <Image
                src={isBookmarked ? "/bookmarkSolid.svg" : "/bookmark.svg"}
                alt="bookmark"
                width={20}
                height={20}
              />
            </button>
          </div>

          <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
            <span className="font-medium">{props.orgName}</span>
            <span className="h-1 w-1 rounded-full bg-gray-400"></span>
            <span>{props.location}</span>
          </div>

          <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
            {props.description}
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-1">
            <span className="text-xs font-semibold rounded-full px-4 py-1.5 bg-orange-50 text-orange-400">
              {props.opType}
            </span>
            <span className="border h-5 border-gray-200" />
            {props.categories?.map((category, index) => (
              <CategoryBadge key={index} category={category} />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
