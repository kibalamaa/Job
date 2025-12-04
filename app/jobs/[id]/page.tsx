"use client";

import React, { use } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import About from "@/app/components/About";
import CheckListItem from "@/app/components/CheckListItem";
import CategoryBadge from "@/app/components/CategoryBadge";

import { useGetOpportunityByIdQuery, Opportunity } from "@/app/data/api";

interface JobPageProps {
  params: Promise<{ id: string }>;
}

const JobDetailsPage = ({ params }: JobPageProps) => {
  const { id } = use(params);

  const { data, isLoading, error } = useGetOpportunityByIdQuery(id);

  if (isLoading) return <p>Loading...</p>;
  if (error || !data) return notFound();
  const props: Opportunity = data.data;
  return (
    <div className="flex flex-col md:flex-row p-5 gap-10 px-4 md:px-10 font-sans text-slate-800">
      <div className="flex flex-col w-full md:w-[75%] pt-4 md:pt-10 gap-8">
        <section>
          <h1 className="text-3xl font-bold">{props.title}</h1>
          <p className="text-gray-500 text-lg">{props.orgName}</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">Description</h2>
          <p className="text-sm leading-relaxed text-gray-600">
            {props.description}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">Responsibilities</h2>
          <ul className="text-sm space-y-3 text-gray-600">
            {props.responsibilities.split("\n").map((item, index) => (
              <CheckListItem key={index} text={item} />
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">Ideal Candidate we want</h2>
          <ul className="list-disc list-inside text-sm space-y-3 text-gray-600">
            {props.requirements.split("\n").map((requirement, index) => (
              <li key={index}>
                <span className="font-normal text-gray-600">{requirement}</span>
              </li>
            ))}
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
            <p className="text-sm text-gray-600">{props.whenAndWhere}</p>
          </div>
        </section>
      </div>

      <div className="flex flex-col w-full md:w-[25%]">
        <section>
          <h2 className="text-xl font-bold pb-2 mb-4">About</h2>
          <div className="flex flex-col gap-6">
            <About img_src="/calendar.svg" title='Created At' text={props.createdAt} />
            <About img_src="/calendar.svg" title='Updated At' text={props.updatedAt} />
            <About img_src="/calendar.svg" title='Posted On' text={props.datePosted} />
          </div>
        </section>

        <section className="mt-8 pt-6 border-t border-gray-200">
          <h2 className="text-lg font-bold mb-4">Categories</h2>
          <div className="flex flex-wrap gap-4">
            {props.categories.map((cat, index) => (
              <CategoryBadge key={index} category={cat} />
            ))}
          </div>
        </section>

        <section className="mt-8 pt-6 border-t border-gray-200">
          <h2 className="text-lg font-bold mb-4">Required Skills</h2>
          <div className="flex flex-wrap gap-3">
            {props.categories.map((skill, index) => (
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
