const CompanyDropdown = () => {
  const companies = ["XYZ", "ABC", "DEF"];

  return (
    <select className="form-select">
      {companies.map((company) => (
        <option key={company} value={company}>
          {company}
        </option>
      ))}
    </select>
  );
};

export default CompanyDropdown;
