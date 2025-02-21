const GuaranteeTable = () => {
  const guarantees = [
    {
      id: 1,
      number: "1234567890",
      amount: "50,000 EUR",
      issueDate: "10/10/2023",
      expiryDate: "10/10/2025",
    },
    {
      id: 2,
      number: "9876543210",
      amount: "75,000 EUR",
      issueDate: "05/12/2022",
      expiryDate: "05/12/2024",
    },
    {
      id: 3,
      number: "1234567890",
      amount: "50,000 EUR",
      issueDate: "10/10/2023",
      expiryDate: "10/10/2025",
    },
    {
      id: 4,
      number: "9876543210",
      amount: "75,000 EUR",
      issueDate: "05/12/2022",
      expiryDate: "05/12/2024",
    },
    {
      id: 5,
      number: "1234567890",
      amount: "50,000 EUR",
      issueDate: "10/10/2023",
      expiryDate: "10/10/2025",
    },
    {
      id: 6,
      number: "9876543210",
      amount: "75,000 EUR",
      issueDate: "05/12/2022",
      expiryDate: "05/12/2024",
    },
    {
      id: 7,
      number: "1234567890",
      amount: "50,000 EUR",
      issueDate: "10/10/2023",
      expiryDate: "10/10/2025",
    },
    {
      id: 8,
      number: "9876543210",
      amount: "75,000 EUR",
      issueDate: "05/12/2022",
      expiryDate: "05/12/2024",
    },
    {
      id: 9,
      number: "1234567890",
      amount: "50,000 EUR",
      issueDate: "10/10/2023",
      expiryDate: "10/10/2025",
    },
    {
      id: 10,
      number: "9876543210",
      amount: "75,000 EUR",
      issueDate: "05/12/2022",
      expiryDate: "05/12/2024",
    },
    {
      id: 11,
      number: "1234567890",
      amount: "50,000 EUR",
      issueDate: "10/10/2023",
      expiryDate: "10/10/2025",
    },
    {
      id: 12,
      number: "9876543210",
      amount: "75,000 EUR",
      issueDate: "05/12/2022",
      expiryDate: "05/12/2024",
    },
    {
      id: 13,
      number: "1234567890",
      amount: "50,000 EUR",
      issueDate: "10/10/2023",
      expiryDate: "10/10/2025",
    },
    {
      id: 14,
      number: "9876543210",
      amount: "75,000 EUR",
      issueDate: "05/12/2022",
      expiryDate: "05/12/2024",
    },
    {
      id: 15,
      number: "1234567890",
      amount: "50,000 EUR",
      issueDate: "10/10/2023",
      expiryDate: "10/10/2025",
    },
    {
      id: 16,
      number: "9876543210",
      amount: "75,000 EUR",
      issueDate: "05/12/2022",
      expiryDate: "05/12/2024",
    },
  ];

  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Number</th>
            <th>Amount</th>
            <th>Issue Date</th>
            <th>Expiry Date</th>
          </tr>
        </thead>
        <tbody>
          {guarantees.map((item) => (
            <tr key={item.id}>
              <td>{item.number}</td>
              <td>{item.amount}</td>
              <td>{item.issueDate}</td>
              <td>{item.expiryDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GuaranteeTable;
