"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const SignupPage = () => {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  
  //React Hook Form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  // watch password 
  const password = watch("password");

  
  const onSubmit = async (data: any) => {
    setServerError(null);

    try {
      const res = await fetch("https://akil-backend.onrender.com/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
          confirmPassword: data.confirmPassword,
          role: "user",
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Signup failed");
      }

      router.push(`/verify-email?email=${encodeURIComponent(data.email)}`);
    } catch (error: any) {
      setServerError(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="flex flex-col w-[320px] text-sm text-gray-700 gap-4">
        <h1 className="text-center text-2xl font-bold">Sign Up Today!</h1>
        
        <button className="flex items-center justify-center gap-2 border p-2 border-gray-200 rounded-md hover:bg-gray-50">
          <Image src="/logos/google.png" alt="google icon" width={20} height={20} />
          Sign Up with Google
        </button>

        <div className="flex items-center justify-between gap-4 w-full">
          <span className="flex-1 border border-b border-gray-200" />
          <p className="border-gray-100 text-md text-gray-500">Or Sign Up with Email</p>
          <span className="flex-1 border border-b border-gray-200" />
        </div>

        {serverError && (
          <div className="p-2 text-red-600 bg-red-100 rounded text-center">
            {serverError}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          
         {/* name */}
          <div className="flex flex-col gap-1">
            <label className="font-bold">Full Name</label>
            <input
              {...register("name", { required: "Full Name is required" })}
              placeholder="Enter your name"
              className={`border p-2 rounded-md ${errors.name ? "border-red-500" : "border-gray-200"}`}
            />
            {errors.name && <span className="text-red-500 text-xs">{errors.name.message as string}</span>}
          </div>

          {/* email */}
          <div className="flex flex-col gap-1">
            <label className="font-bold">Email Address</label>
            <input
              type="email"
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              placeholder="Enter email address"
              className={`border p-2 rounded-md ${errors.email ? "border-red-500" : "border-gray-200"}`}
            />
            {errors.email && <span className="text-red-500 text-xs">{errors.email.message as string}</span>}
          </div>

          {/* password */}
          <div className="flex flex-col gap-1">
            <label className="font-bold">Password</label>
            <input
              type="password"
              {...register("password", { 
                required: "Password is required",
                minLength: { value: 6, message: "Password must be at least 6 characters" }
              })}
              placeholder="Enter password"
              className={`border p-2 rounded-md ${errors.password ? "border-red-500" : "border-gray-200"}`}
            />
            {errors.password && <span className="text-red-500 text-xs">{errors.password.message as string}</span>}
          </div>

          {/* confirm password */}
          <div className="flex flex-col gap-1">
            <label className="font-bold">Confirm Password</label>
            <input
              type="password"
              {...register("confirmPassword", { 
                required: "Please confirm your password",
                validate: (value) => value === password || "Passwords do not match"
              })}
              placeholder="Confirm password"
              className={`border p-2 rounded-md ${errors.confirmPassword ? "border-red-500" : "border-gray-200"}`}
            />
            {errors.confirmPassword && <span className="text-red-500 text-xs">{errors.confirmPassword.message as string}</span>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="p-2 border rounded-full bg-blue-900 text-sm text-white font-bold hover:bg-blue-800 transition disabled:opacity-50"
          >
            {isSubmitting ? "Signing up..." : "Continue"}
          </button>
        </form>

        <p>
          Already have an account?{" "}
          <Link href="/signin" className="text-blue-800 font-bold">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;