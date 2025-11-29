import React from "react";
import Image from "next/image";
import About from "../components/About";
import CheckListItem from "../components/CheckListItem";

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row p-5 gap-10 px-4 md:px-10 font-sans text-slate-800">
      <div className="flex flex-col w-full md:w-[75%] pt-4 md:pt-10 gap-8">
        <section>
          <h2 className="text-xl font-bold mb-3">Description</h2>
          <p className="text-sm leading-relaxed text-gray-600">
            As a Social Media Assistant, you will work closely with the social
            media manager or marketing team to execute social media strategies
            and campaigns. You will be responsible for assisting in the creation
            and scheduling of engaging content, monitoring social media
            channels, and interacting with followers. Your primary goal will be
            to enhance brand visibility, foster positive relationships with the
            audience, and drive engagement and conversions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">Responsibilities</h2>
          <ul className="text-sm space-y-3 text-gray-600">
            <CheckListItem text="Community engagement to ensure that is supported and actively represented online" />
            <CheckListItem text="Focus on social media content development and publication" />
            <CheckListItem text="Marketing and strategy support" />
            <CheckListItem text="Stay on top of trends on social media platforms, and suggest content ideas to the team" />
            <CheckListItem text="Engage with online communities" />
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">Ideal Candidate we want</h2>
          <ul className="list-disc list-inside text-sm space-y-3 text-gray-600">
            <li>
              <span className="font-bold text-gray-800">
                Young (18-24 year old) Female social media manager
              </span>
            </li>
            <li>
              <span className="font-bold text-gray-800">
                Passionate & Reliable:{" "}
              </span>
              Genuine interest in our mission and a strong desire to make a
              positive impact, responsible, and committed to fulfilling
              volunteer commitments.
            </li>
            <li>
              <span className="font-bold text-gray-800">
                Adaptable, Team Player & Strong Communication Skills:
              </span>{" "}
              Able to work effectively in diverse teams; and contributes
              positively. Flexible and open to embracing new challenges and
              shifting priorities; Clear verbal and written communication,
              active listening, and constructive feedback.
            </li>
            <li>
              <span className="font-bold text-gray-800">Respectful: </span>
              Embraces diversity, inclusive, and treats others with respect.
              Abides with all our rules and regulations.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">When & Where</h2>
          <div className="flex items-center gap-4">
            <Image
              src="location.svg"
              alt="location icon"
              width={20}
              height={20}
              className="inline-block"
            />
            <p className="text-sm text-gray-600">
              The onboarding event for this event will take place on Jan 18th,
              2023 in AAU Auditorium.
            </p>
          </div>
        </section>
      </div>

      <div className="flex flex-col w-full md:w-[25%]">
        <section>
          <h2 className="text-xl font-bold pb-2 mb-4">About</h2>
          <div className="flex flex-col gap-6">
            <About img_src="/calendar.svg" date="Jul 1, 2023" />
            <About img_src="/fire.svg" date="Jul 1, 2023" />
            <About img_src="/location.svg" date="Jul 1, 2023" />
          </div>
        </section>

        <section className="mt-8 pt-6 border-t border-gray-200">
          <h2 className="text-lg font-bold mb-4">Categories</h2>
          <div className="flex flex-wrap gap-4">
            <span className="bg-green-50 text-green-600 text-xs font-semibold rounded-full px-4 py-1.5">
              In Person
            </span>
            <span className="bg-orange-50 text-orange-400 text-xs font-semibold rounded-full px-4 py-1.5">
              Marketing
            </span>
          </div>
        </section>

        <section className="mt-8 pt-6 border-t border-gray-200">
          <h2 className="text-lg font-bold mb-4">Required Skills</h2>
          <div className="flex flex-wrap gap-3">
            <span className="border border-amber-400 text-amber-500 text-xs font-medium rounded-full px-3 py-1.5">
              Social Media
            </span>
            <span className="border border-amber-400 text-amber-500 text-xs font-medium rounded-full px-3 py-1.5">
              Communication
            </span>
            <span className="border border-amber-400 text-amber-500 text-xs font-medium rounded-full px-3 py-1.5">
              English
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
