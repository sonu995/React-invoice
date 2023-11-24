// File: FormContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const ToformContext = createContext();

export const useToformContext = () => useContext(ToformContext);

export const ToformProvider = ({ children }) => {
  const [toformData, setToFormData] = useState(() => {
    const storedData = localStorage.getItem("toformData");
    return storedData
      ? JSON.parse(storedData)
      : {
          companyName: "",
          firstName: "",
          lastName: "",
          address: "",
          postalCode: "",
          city: " ",
          country: "",
          phoneNumber: "",
          email: "",
          website: "",
        };
  });

  useEffect(() => {
    localStorage.setItem("toformData", JSON.stringify(toformData));
  }, [toformData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setToFormData({
      ...toformData,
      [name]: value,
    });
  };

  return (
    <ToformContext.Provider value={{ setToFormData, toformData, handleChange }}>
      {children}
    </ToformContext.Provider>
  );
};
