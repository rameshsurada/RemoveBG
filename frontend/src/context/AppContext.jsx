import { useAuth } from "@clerk/clerk-react";
import { useState, createContext } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [credit, setCredit] = useState(false);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const { getToken } = useAuth();

  const loadCreditsData = async () => {
    try {
      // Just get default token (no template)
      const token = await getToken();

      const { data } = await axios.get(`${backendUrl}/api/user/credits`, {
        headers: {
          Authorization: `Bearer ${token}` // send token as bearer token
        }
      });

      if (data.success) {
        setCredit(data.credits);
        console.log("Credits loaded:", data.credits);
      }
    } catch (error) {
      console.error("Error loading credits: ", error);
      toast.error("Not authorized, please login again.");
    }
  };

  const value = {
    credit,
    setCredit,
    loadCreditsData,
    backendUrl
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
