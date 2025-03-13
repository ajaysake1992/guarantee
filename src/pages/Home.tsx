/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import CompanyDropdown from "../components/CompanyDropdown";
import axios, { type AxiosError } from "axios";
import type { Company } from "../App";
import GuaranteeCards from "../components/GuaranteeCards";
import SearchForm from "../components/SearchForm";
import GuaranteeTable from "../components/GuaranteeTable";
import Footer from "../components/Footer";
import type { CardDetails } from "../components/Card";

const Home: React.FC = () => {
  const [companyDropdowns, setCompanyDropdowns] = useState<Company[]>([]);
  const [guaranteeData, setGuaranteeData] = useState<CardDetails[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | "">();

  useEffect(() => {
    const fetchCompanyDropdown = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/companyDropdown"
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

  useEffect(() => {
    const fetchLandingPageData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/cardRecords");
        setGuaranteeData(response.data);
      } catch (error) {
        console.log("failed to fetch data");
        setError((error as AxiosError).message);
      } finally {
        setLoading(false);
      }
    };
    fetchLandingPageData();
  }, []);

  const handleChange = (selectedCompany: string) => {
    console.log("selectedCompany", selectedCompany);
  };

  // Function to swap two users based on index
  const handleClick = (index1: number, index2: number) => {
    setGuaranteeData((prevGuarantees) => {
      if (
        index1 < 0 ||
        index2 < 0 ||
        index1 >= prevGuarantees.length ||
        index2 >= prevGuarantees.length
      ) {
        return prevGuarantees; // Return unchanged if out of bounds
      }

      // Create a shallow copy of the array
      const updatedGuarantees = [...prevGuarantees];

      // Swap users at index1 and index2
      [updatedGuarantees[index1], updatedGuarantees[index2]] = [
        updatedGuarantees[index2],
        updatedGuarantees[index1],
      ];

      updatedGuarantees[index1].status = "Active";
      updatedGuarantees[index2].status = "Pending";
      return updatedGuarantees;
    });
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
        <GuaranteeCards guaranteeData={guaranteeData} clickCard={handleClick} />
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
