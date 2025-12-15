"use client";

import React, { useRef, useState, useEffect } from "react";

interface OTPInputProps {
  length?: number;
  onComplete: (otp: string) => void;
}

const OTPInput: React.FC<OTPInputProps> = ({ length = 4, onComplete }) => {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // notify  OTP changes
  useEffect(() => {
    onComplete(otp.join(""));
  }, [otp, onComplete]);

  const handleChange = (element: HTMLInputElement, index: number) => {
    const value = element.value;
    if (isNaN(Number(value))) return; 

    const newOtp = [...otp];
    // consider last character entered
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // focus next input
    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        // delete previous
        const newOtp = [...otp];
        newOtp[index - 1] = ""; 
        setOtp(newOtp);
        inputRefs.current[index - 1]?.focus();
      } else {
        // clear current
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, length).split("");
    
    if (pastedData.every((char) => !isNaN(Number(char)))) {
      const newOtp = [...otp];
      pastedData.forEach((val, i) => {
        newOtp[i] = val;
      });
      setOtp(newOtp);
      // focus on last input
      inputRefs.current[Math.min(pastedData.length, length - 1)]?.focus();
    }
  };

  return (
    <div className="flex justify-between gap-2 px-4">
      {otp.map((data, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          ref={(el) => {
            inputRefs.current[index] = el;
          }}
          value={data}
          onChange={(e) => handleChange(e.target, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          className="w-14 h-14 border-2 border-gray-200 rounded-md text-center text-2xl font-bold focus:border-blue-800 focus:outline-none transition-colors text-gray-700 bg-white"
          placeholder="0"
        />
      ))}
    </div>
  );
};

export default OTPInput;