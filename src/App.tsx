/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";
import CompanyDropdown from "./components/CompanyDropdown";
import axios, { type AxiosError } from "axios";
// import GuaranteeCards from "./components/GuaranteeCards";
// import LanguageSwitcher from "./components/LanguageSwitcher";
// import GuaranteeDetails from "./components/GuaranteeDetails";
// import GuaranteeTable from "./components/GuaranteeTable";

export type Company = {
  key: string;
  value: string;
};

function App() {
  const [companyDropdowns, setCompanyDropdowns] = useState<Company[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | "">();

  useEffect(() => {
    const fetchCompanyDropdown = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/companyDropdown"
        );
        setCompanyDropdowns(response.data);
      } catch (error) {
        setError((error as AxiosError).message);
      } finally {
        setLoading(false);
      }
    };
    fetchCompanyDropdown();
  }, []);

  const handleChange = (selectedCompany: string) => {
    console.log("selectedCompany", selectedCompany);
  };

  return (
    <>
      {/* <LanguageSwitcher /> */}
      <CompanyDropdown
        companyDropdowns={companyDropdowns}
        error={error}
        onChange={handleChange}
      />
    </>
  );
}

export default App;
