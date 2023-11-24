// File: FormContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState(() => {
    const storedData = localStorage.getItem("formData");
    return storedData ? JSON.parse(storedData) : {
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
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <FormContext.Provider value={{ formData, setFormData, handleChange }}>
      {children}
    </FormContext.Provider>
  );
};
