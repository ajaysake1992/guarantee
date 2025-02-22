/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import CompanyDropdown from "../components/CompanyDropdown";
import axios, { type AxiosError } from "axios";
import type { Company } from "../App";
import GuaranteeCards from "../components/GuaranteeCards";
import SearchForm from "../components/SearchForm";
import GuaranteeTable from "../components/GuaranteeTable";
import Footer from "../components/Footer";

const Home: React.FC = () => {
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
    <div className="container-fluid">
      {/* Company Selection */}
      <div className="container mt-3">
        <CompanyDropdown
          companyDropdowns={companyDropdowns}
          error={error}
          onChange={handleChange}
        />
      </div>

      {/* Guarantee Cards */}
      <div className="container mt-4">
        <GuaranteeCards />
      </div>

      {/* Search Form */}
      <div className="container mt-4">
        <SearchForm />
      </div>

      {/* Guarantee Table */}
      <div className="container mt-4">
        <GuaranteeTable />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
