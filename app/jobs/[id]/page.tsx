import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import About from "@/app/components/About";
import CheckListItem from "@/app/components/CheckListItem";
import { jobs } from "@/app/data/jobs";

import CategoryBadge from "@/app/components/CategoryBadge";

interface JobPageProps {
  params: Promise<{
    id: string;
  }>;
}

const JobDetailsPage = async ({ params }: JobPageProps) => {
  const resolvedParams = await params;
  const index = parseInt(resolvedParams.id);

  const job = jobs[index];

  if (!job) {
    return notFound();
  }

  return (
    <div className="flex flex-col md:flex-row p-5 gap-10 px-4 md:px-10 font-sans text-slate-800">
      <div className="flex flex-col w-full md:w-[75%] pt-4 md:pt-10 gap-8">
        <section>
          <h1 className="text-3xl font-bold">{job.role}</h1>
          <p className="text-gray-500 text-lg">{job.company}</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">Description</h2>
          <p className="text-sm leading-relaxed text-gray-600">
            {job.description}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">Responsibilities</h2>
          <ul className="text-sm space-y-3 text-gray-600">
            {job.responsibilities.map((item, index) => (
              <CheckListItem key={index} text={item} />
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">Ideal Candidate we want</h2>
          <ul className="list-disc list-inside text-sm space-y-3 text-gray-600">
            {job.requirements.map((item, index) => {
              const [title, ...rest] = item.split(":");
              const content = rest.join(":");
              return (
                <li key={index}>
                  <span className="font-bold text-gray-800">{title}</span>
                  {content && (
                    <>
                      :
                      <span className="font-normal text-gray-600">
                        {content}
                      </span>
                    </>
                  )}
                </li>
              );
            })}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">When & Where</h2>
          <div className="flex items-center gap-4">
            <Image
              src="/location.svg"
              alt="location icon"
              width={40}
              height={40}
              className="inline-block"
            />
            <p className="text-sm text-gray-600">{job.location}</p>
          </div>
        </section>
      </div>

      <div className="flex flex-col w-full md:w-[25%]">
        <section>
          <h2 className="text-xl font-bold pb-2 mb-4">About</h2>
          <div className="flex flex-col gap-6">
            <About img_src="/calendar.svg" date={job.date} />
          </div>
        </section>

        <section className="mt-8 pt-6 border-t border-gray-200">
          <h2 className="text-lg font-bold mb-4">Categories</h2>
          <div className="flex flex-wrap gap-4">
            {job.categories.map((cat, index) => (
              <CategoryBadge key={index} category={cat} />
            ))}
          </div>
        </section>

        <section className="mt-8 pt-6 border-t border-gray-200">
          <h2 className="text-lg font-bold mb-4">Required Skills</h2>
          <div className="flex flex-wrap gap-3">
            {job.skills.map((skill, index) => (
              <span
                key={index}
                className="border border-amber-400 text-amber-500 text-xs font-medium rounded-full px-3 py-1.5"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default JobDetailsPage;
