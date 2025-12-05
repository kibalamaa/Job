import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col w-[320px] text-sm text-gray-700 gap-4">
        <h1 className="text-center text-2xl font-bold">Sign Up Today!</h1>
        <button className="flex items-center justify-center gap-2 border p-2 border-gray-200 rounded-md">
          <Image src='google.svg' alt='google icon' width={20} height={20}/>
          Sign Up with Google
        </button>

        <div className="flex items-center justify-between gap-4 w-full">
          <span className="flex-1 border border-b border-gray-200" />
          <p className="border-gray-100 text-md">Or Sign Up with Email</p>
          <span className="flex-1 border border-b border-gray-200" />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="fullname" className="border-gray-200 font-bold">
            Full Name
          </label>
          <input
            id="fullname"
            placeholder="Enter you name"
            className="border border-gray-200 p-2 rounded-md"
          />
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

        <div className="flex flex-col gap-1">
          <label
            htmlFor="confirmpassword"
            className="border-gray-200 font-bold"
          >
            Confirm Password
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
          Already have an account?{" "}
          <span className="text-blue-800 font-bold">Login</span>
        </p>

        <p className="text-xs">
          By clicking &apos;Continue&apos; you acknowledge that you have read
          and accepted our{" "}
          <span className="text-blue-800">Terms of Service</span> and{" "}
          <span className="text-blue-800">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
};

export default page;
