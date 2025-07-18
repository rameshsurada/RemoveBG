import { useAuth, useClerk, useUser } from "@clerk/clerk-react";
import { useState, createContext, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [credit, setCredit] = useState(0);
  const [image, setImage] = useState(false);
  const [resultImage, setResultImage] = useState(false);
  const navigate = useNavigate();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const { isSignedIn } = useUser();
  const { openSignIn } = useClerk();
  const { getToken } = useAuth();

  const loadCreditsData = async () => {
    try {
      const token = await getToken();
      const { data } = await axios.get(backendUrl + "/api/user/credits", {
        headers: { token }
      });
      setCredit(data.credits);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setCredit(0);
    }
  };

  useEffect(() => {
    if (isSignedIn) {
      loadCreditsData();
    }
  }, [isSignedIn]);

  const removeBg = async (image) => {
    try {
      if (!isSignedIn) {
        return openSignIn();
      }

      setImage(image);
      setResultImage(false);
      navigate("/result");

      const token = await getToken();

      const formData = new FormData();
      if (image) formData.append("image", image);

      const { data } = await axios.post(
        backendUrl + "/api/image/remove-bg",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data"
          }
        }
      );

      if (data.success) {
        setResultImage(data.resultImage);
        console.log("Background removed image:", data.resultImage);
        if (data.creditBalance !== undefined) {
          setCredit(data.creditBalance);
        }
      } else {
        toast.error(data.message || "Failed to remove background");
        if (data.creditBalance !== undefined) {
          setCredit(data.creditBalance);
        }
        if (data.creditBalance === 0) {
          navigate("/buycredits");
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(
        error.response?.data?.message || error.message || "Something went wrong"
      );
    }
  };

  const value = {
    credit,
    setCredit,
    loadCreditsData,
    backendUrl,
    image,
    setImage,
    removeBg,
    resultImage,
    setResultImage
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
