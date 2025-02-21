const SearchForm = () => {
  return (
    <div className="mb-4">
      <form className="row g-3">
        <div className="col-12 col-md-3">
          <label className="form-label">Date Range</label>
          <input type="date" className="form-control" />
        </div>
        <div className="col-12 col-md-3">
          <label className="form-label">Amount</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter Amount"
          />
        </div>
        <div className="col-12 col-md-3">
          <label className="form-label">Status</label>
          <select className="form-select">
            <option>All</option>
            <option>Active</option>
            <option>Pending</option>
            <option>Closed</option>
          </select>
        </div>
        <div className="col-12 col-md-3">
          <button
            type="submit"
            className="btn btn-primary w-100"
            style={{ marginTop: 30 }}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
