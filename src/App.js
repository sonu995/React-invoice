import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SideNavbar from "./components/SideNavbar";
import { InvoiceProvider } from "./InvoiceContext";
import { FormProvider } from "./context/FormContext";
import { ToformProvider } from "./context/ToformContext";
import { ImageProvider } from "./context/ImageContext";

function App() {
  return (
    <Router>
      <InvoiceProvider>
        <FormProvider>
          <ToformProvider>
            <ImageProvider>
            <SideNavbar />
            </ImageProvider>
          </ToformProvider>
        </FormProvider>
      </InvoiceProvider>
    </Router>
  );
}

export default App;
