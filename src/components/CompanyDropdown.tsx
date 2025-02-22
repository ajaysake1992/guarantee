/* eslint-disable @typescript-eslint/no-unused-vars */
import axios, { type AxiosError } from "axios";
import { useEffect, useState } from "react";

type Company = {
  key: string;
  value: string;
};

type CompanyDropdownResponse = {
  companyDropdown: Company[];
};

const CompanyDropdown = () => {
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

  return (
    <>
      {error && <p>Error occured {error}</p>}
      <select className="form-select">
        {companyDropdowns.map((company) => (
          <option key={company.key} value={company.value}>
            {company.value}
          </option>
        ))}
      </select>
    </>
  );
};

export default CompanyDropdown;
