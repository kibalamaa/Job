"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import OTPInput from "@/app/components/OTPInput";

const VerifyEmail = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const emailParam = searchParams.get("email") || "";

  const [timer, setTimer] = useState(30);
  const [error, setError] = useState("");

  const { handleSubmit, setValue, register } = useForm({
    defaultValues: { email: emailParam, otp: "" },
  });

  // Timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const onSubmit = async (data: { email: string; otp: string }) => {
    setError("");
    try {
      const res = await fetch(
        "https://akil-backend.onrender.com/verify-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: data.email, OTP: data.otp }),
        }
      );

      if (!res.ok) throw new Error("Invalid OTP or Verification Failed");

      router.push("/signin");
    } catch (err) {
      setError("Verification failed. Please check your code.");
    }
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-[400px] text-sm text-gray-700 gap-10 p-5"
      >
        <h1 className="text-center text-2xl font-bold">Verify Email</h1>

        <p className="text-center text-gray-500">
          We&apos;ve sent a verification code to the email address you provided.
          To complete the verification process, please enter the code here.
        </p>

        {error && (
          <div className="text-red-500 text-center bg-red-50 p-2 rounded">
            {error}
          </div>
        )}

        <input type="hidden" {...register("email")} />
        <input
          type="hidden"
          {...register("otp", { required: true, minLength: 4 })}
        />

        <OTPInput
          length={4}
          onComplete={(otpString) => {
            setValue("otp", otpString, { shouldValidate: true });
          }}
        />

        <div className="flex justify-center">
          <p className="text-sm text-center w-60 text-wrap">
            You can request to
            <button
              type="button"
              onClick={() => setTimer(30)}
              disabled={timer > 0}
              className={`font-bold ml-1 ${
                timer > 0
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-blue-800 hover:underline"
              }`}
            >
              Resend code
            </button>{" "}
            in
            <span className="text-blue-800 font-bold ml-1">
              {" "}
              {formatTime(timer)}
            </span>
          </p>
        </div>

        <button
          type="submit"
          className="p-3 border rounded-full bg-blue-900 text-sm text-white font-bold hover:bg-blue-800 transition"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default VerifyEmail;
