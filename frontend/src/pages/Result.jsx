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
  };

  return (
    <div className="mx-10 sm:mx-20 my-8 min-h-[80vh]">
      <div className="bg-blue-50 rounded-2xl shadow-xl grid gap-6 pt-7 px-10 py-5">
        {/* Images */}
        <div className="grid sm:flex gap-8 justify-center">
          {/* Original image */}
          <div className="text-center">
            <p className="py-4 font-semibold text-gray-700">Original</p>
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt="Original"
                className="rounded-md max-w-xs"
              />
            ) : (
              <p className="text-sm text-gray-500">No image selected.</p>
            )}
          </div>

          {/* Processed image */}
          <div className="text-center">
            <p className="py-4 font-semibold text-gray-700">
              Background Removed
            </p>
            {resultImage ? (
              <img
                src={resultImage} // ✅ base64 string used directly
                alt="Background Removed"
                className="rounded-md max-w-xs"
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

        {/* Action buttons */}
        <div className="grid gap-2 sm:flex justify-end">
          <button
            onClick={handleTryAnother}
            className="px-4 py-2 border rounded-2xl border-indigo-400 hover:scale-105 duration-300"
          >
            Try another image
          </button>

          {resultImage && (
            <a
              href={resultImage}
              download="background-removed.png"
              className="px-4 bg-gradient-to-r text-white py-2 from-indigo-400 to-blue-300 rounded-2xl hover:scale-105 duration-300 text-center"
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
