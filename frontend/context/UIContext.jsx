import { createContext, useContext, useState } from "react";

const UIContext = createContext();

export const UIContextProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("accessToken") || null);

  return (
    <UIContext.Provider
      value={{ isSidebarOpen, setIsSidebarOpen, token, setToken }}
    >
      {children}
    </UIContext.Provider>
  );
};

const useUIContext = () => useContext(UIContext);

export default useUIContext;
