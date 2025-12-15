"use client";

import JobCard from "@/app/components/JobCard";
import Image from "next/image";
import dropdown from "@/public/down.svg";
import { useGetAllOpportunitiesQuery, Opportunity } from "./data/api";
import { useSession, signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Page = () => {
  const { data, error, isLoading } = useGetAllOpportunitiesQuery();
  const { data: session } = useSession();
  const pathname = usePathname();
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);

  // get user's bookmarks
  useEffect(() => {
    if (!session?.accessToken) return;

    fetch("https://akil-backend.onrender.com/bookmarks", {
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((response) => {
        const bookmarksArray = Array.isArray(response.data)
          ? response.data
          : [];
        const ids = bookmarksArray.map((b: any) => b.eventID);
        setBookmarkedIds(ids);
      })
      .catch(console.error);
  }, [session]);

  // toggle bookmark
  const toggleBookmark = async (id: string) => {
    if (!session?.accessToken) {
      // go to login 
      signIn(undefined, { callbackUrl: pathname });
      return;
    }

    const isBookmarked = bookmarkedIds.includes(id);
    const method = isBookmarked ? "DELETE" : "POST";

    try {
      await fetch(`https://akil-backend.onrender.com/bookmarks/${id}`, {
        method,
        headers: { Authorization: `Bearer ${session.accessToken}` },
      });

      setBookmarkedIds((prev) =>
        isBookmarked ? prev.filter((i) => i !== id) : [...prev, id]
      );
    } catch (err) {
      console.error("Failed to update bookmark", err);
    }
  };

  if (isLoading) {
    return <div className="flex justify-center p-10">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-red-500 p-10">Error loading opportunities.</div>
    );
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
              isBookmarked={bookmarkedIds.includes(job.id)}
              onToggleBookmark={() => toggleBookmark(job.id)} // ✅ pass toggle
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
