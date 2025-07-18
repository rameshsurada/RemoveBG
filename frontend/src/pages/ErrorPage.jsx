import React from "react";

const ErrorPage = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen px-4">
      <div className="flex flex-col items-center text-center w-full max-w-2xl">
        <div className="mb-6">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>

        <h1 className="text-gray-800 text-lg sm:text-xl md:text-2xl font-semibold">
          Our payment services are temporarily suspended due to a technical
          issue at the server end.
        </h1>

        <p className="text-gray-600 mt-4 text-sm sm:text-base md:text-lg">
          Please try again later. We apologize for the inconvenience.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
