import React, { createContext, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const showToast = (message, type = "info") => {
    return toast[type][message];
  };

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      <ToastContainer position="bottom-center" autoClose={2000} />
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
