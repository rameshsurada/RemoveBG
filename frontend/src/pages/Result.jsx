import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const { resultImage, image, setImage, setResultImage } =
    useContext(AppContext);
  const navigate = useNavigate();

  const handleTryAnother = () => {
    setImage(false);
    setResultImage(false);
    navigate("/");

    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 200);
  };

  return (
    <div className="mx-4 sm:mx-16 my-8 min-h-[80vh]">
      <div className="bg-blue-50 rounded-2xl shadow-xl p-6 sm:p-10 space-y-8">
        {/* Image Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center items-start">
          {/* Original Image */}
          <div className="text-center">
            <p className="pb-4 font-semibold text-gray-700 text-lg">Original</p>
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt="Original"
                className="rounded-md mx-auto w-full max-w-xs h-auto shadow"
              />
            ) : (
              <p className="text-sm text-gray-500">No image selected.</p>
            )}
          </div>

          {/* Processed Image */}
          <div className="text-center">
            <p className="pb-4 font-semibold text-gray-700 text-lg">
              Background Removed
            </p>
            {resultImage ? (
              <img
                src={resultImage}
                alt="Background Removed"
                className="rounded-md mx-auto w-full max-w-xs h-auto shadow"
              />
            ) : image ? (
              <div className="flex justify-center items-center h-48 w-48 mx-auto">
                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              <p className="text-sm text-gray-500">No result image.</p>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-end items-center gap-4 pt-2">
          <button
            onClick={handleTryAnother}
            className="px-5 py-2.5 border border-indigo-400 rounded-2xl text-indigo-700 font-medium hover:scale-105 duration-300 transition-all"
          >
            Try another image
          </button>

          {resultImage && (
            <a
              href={resultImage}
              download="background-removed.png"
              className="px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-blue-400 text-white font-medium rounded-2xl hover:scale-105 duration-300 transition-all"
            >
              Download image
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Result;
