/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";
import CompanyDropdown from "./components/CompanyDropdown";
import axios, { type AxiosError } from "axios";
import Home from "./pages/Home";
// import GuaranteeCards from "./components/GuaranteeCards";
// import LanguageSwitcher from "./components/LanguageSwitcher";
// import GuaranteeDetails from "./components/GuaranteeDetails";
// import GuaranteeTable from "./components/GuaranteeTable";

export type Company = {
  key: string;
  value: string;
};

function App() {
  return (
    <>
      {/* <LanguageSwitcher /> */}
      <Home />
    </>
  );
}

export default App;
