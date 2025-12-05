
const page = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col w-[400px] text-sm text-gray-700 gap-10">
        <h1 className="text-center text-2xl font-bold">Verify Email</h1>

        <p>
          We&apos;ve sent a verification code to the email address you provided.
          To complete the verification process, please enter the code here.
        </p>

        <div className="flex flex-col gap-1">
          <input
            placeholder="Enter password"
            className="border border-gray-200 p-2 rounded-md"
          />
        </div>

        <div className="flex justify-center">
          <p className="text-sm text-center w-60 text-wrap">
          You can request to
          <span className="text-blue-800"> Resend code </span>in
          <span className="text-blue-800"> 0:30</span>.
        </p>
        </div>

        <button className="p-2 border rounded-full bg-blue-900 text-sm text-white font-bold">
          Continue
        </button>
      </div>
    </div>
  );
};

export default page;
