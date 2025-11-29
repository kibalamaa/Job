import Link from "next/link";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Job Listing Application
      </h1>

      <p className="text-center text-gray-600 mb-10 max-w-xl">
        Available Pages
      </p>

      <div className="flex flex-col sm:flex-row gap-6">
        <Link
          href="/Joblist"
          className="px-6 py-4 bg-green-50 text-green-600  rounded-lg shadow hover:bg-green-700 hover:text-green-50 transition text-center"
        >
          Job list
        </Link>

        <Link
          href="/dashboard"
          className="px-6 py-4 border border-amber-300 text-amber-300 rounded-lg shadow hover:text-amber-700 hover:border-amber-700 transition text-center"
        >
          Dashboard
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
