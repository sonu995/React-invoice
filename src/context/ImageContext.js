import React, { createContext, useState, useContext } from 'react';

const ImageContext = createContext();

const ImageProvider = ({ children }) => {
  const [image, setImage] = useState("");

  return (
    <ImageContext.Provider value={{ image, setImage }}>
      {children}
    </ImageContext.Provider>
  );
};

const useImage = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error("useImage must be used within an ImageProvider");
  }
  return context;
}

export { ImageProvider, useImage };
