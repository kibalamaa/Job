import React from "react";

const page = () => {
  return (
    <div className="flex  justify-center items-center h-screen ">
      <div className=" w-1/2 h-full"></div>
      <div className=" flex w-1/2 justify-center">
        <div className="flex flex-col w-[350px] text-sm text-gray-700 gap-4">
          <h1 className="text-center text-2xl font-bold">Welcome Back,</h1>

          <div className="flex items-center justify-between gap-30 w-full">
            <span className="flex-1 border border-b border-gray-200" />

            <span className="flex-1 border border-b border-gray-200" />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="border-gray-200 font-bold">
              Email Address
            </label>
            <input
              placeholder="Enter email address"
              className="border border-gray-200 p-2 rounded-md"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="border-gray-200 font-bold">
              Password
            </label>
            <input
              placeholder="Enter password"
              className="border border-gray-200 p-2 rounded-md"
            />
          </div>

          <button className="p-2 border rounded-full bg-blue-900 text-sm text-white font-bold">
            Continue
          </button>

          <p>
            Don&apos;t have and account?{" "}
            <span className="text-blue-800 font-bold">Sign Up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
