/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Company } from "../App";

type CompanyDropdownProps = {
  companyDropdowns: Company[];
  error: string | undefined;
  onChange: (companyValue: string) => void;
};

const CompanyDropdown = ({
  companyDropdowns,
  error,
  onChange,
}: CompanyDropdownProps) => {
  return (
    <>
      {error && <p>Error occured {error}</p>}
      {!error && (
        <select
          className="form-select"
          onChange={(event) => onChange(event.target.value)}
        >
          {companyDropdowns.map((company) => (
            <option key={company.key} value={company.value}>
              {company.value}
            </option>
          ))}
        </select>
      )}
    </>
  );
};

export default CompanyDropdown;
