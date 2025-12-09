"use client";

import React, { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const SigninPage = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data: any) => {
    setError(null);
    
    const result = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (result?.error) {
      setError("Invalid email or password");
    } else {
      router.push("/");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="hidden md:block w-1/2 h-full bg-gray-50"></div>
      <div className="flex w-full md:w-1/2 justify-center">
        <div className="flex flex-col w-[350px] text-sm text-gray-700 gap-4">
          <h1 className="text-center text-2xl font-bold">Welcome Back,</h1>

          <div className="flex items-center justify-between gap-30 w-full">
            <span className="flex-1 border border-b border-gray-200" />
            <span className="flex-1 border border-b border-gray-200" />
          </div>

          {error && (
            <div className="p-2 text-red-600 bg-red-100 rounded text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="font-bold">Email Address</label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                placeholder="Enter email address"
                className={`border p-2 rounded-md ${errors.email ? "border-red-500" : "border-gray-200"}`}
              />
              {errors.email && <span className="text-red-500 text-xs">{errors.email.message as string}</span>}
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-bold">Password</label>
              <input
                type="password"
                {...register("password", { required: "Password is required" })}
                placeholder="Enter password"
                className={`border p-2 rounded-md ${errors.password ? "border-red-500" : "border-gray-200"}`}
              />
              {errors.password && <span className="text-red-500 text-xs">{errors.password.message as string}</span>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="p-2 border rounded-full bg-blue-900 text-sm text-white font-bold hover:bg-blue-800 transition disabled:opacity-50"
            >
              {isSubmitting ? "Logging in..." : "Continue"}
            </button>
          </form>

          <p>
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-blue-800 font-bold">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;