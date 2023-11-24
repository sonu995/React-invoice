import React, { createContext, useContext, useState } from "react";

const InvoiceContext = createContext();

export const useInvoiceContext = () => {
  return useContext(InvoiceContext);
};

export const InvoiceProvider = ({ children }) => {
  const [rows, setRows] = useState([{ item: "", unitCost: '', quantity: ''}]);
  const [taxRate, setTaxRate] = useState(10);
  const [discount, setDiscount] = useState(0);

  const handleAddRow = () => {
    setRows([...rows, { item: "", unitCost: "", quantity: "" }]);
  };

  const handleDeleteRow = (index) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);
  };

  const handleInputChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  // Calculate Subtotal, Tax, Discount, and Total
  const subtotal = rows.reduce((acc, row) => acc + row.unitCost * row.quantity, 0);
  const tax = (subtotal * taxRate) / 100;
  const total = subtotal + tax - discount;

  return (
    <InvoiceContext.Provider
      value={{
        rows,
        setRows,
        taxRate,
        setTaxRate,
        discount,
        setDiscount,
        handleAddRow,
        handleDeleteRow,
        handleInputChange,
        subtotal,
        tax,
        total,
      }}
    >
      {children}
    </InvoiceContext.Provider>
  );
};
