/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react"; // Using FontAwesome for plus icon
import styles from "../styles/guarantee.card.module.css";

const GuaranteeCard = () => {
  const guaranteeData = [
    { id: 1, amount: "1,000,000 EUR", status: "Active" },
    { id: 2, amount: "500,000 EUR", status: "Pending" },
    { id: 3, amount: "750,000 EUR", status: "Closed" },
    { id: 4, amount: "600,000 EUR", status: "Active" },
    { id: 5, amount: "1,000,000 EUR", status: "Active" },
    { id: 6, amount: "500,000 EUR", status: "Pending" },
    { id: 7, amount: "750,000 EUR", status: "Closed" },
    { id: 8, amount: "600,000 EUR", status: "Active" },
    { id: 9, amount: "1,000,000 EUR", status: "Active" },
    { id: 10, amount: "500,000 EUR", status: "Pending" },
    { id: 11, amount: "750,000 EUR", status: "Closed" },
    { id: 12, amount: "600,000 EUR", status: "Active" },
    { id: 13, amount: "1,000,000 EUR", status: "Active" },
    { id: 14, amount: "500,000 EUR", status: "Pending" },
    { id: 15, amount: "750,000 EUR", status: "Closed" },
    { id: 16, amount: "600,000 EUR", status: "Active" },
  ];

  const [visibleCards, setVisibleCards] = useState(2); // Show 2 cards on desktop, 1 on mobile
  const [showMoreCards, setShowMoreCards] = useState(false);

  return (
    <>
      <div className="d-flex flex-column flex-md-row gap-3 justify-content-between">
        {guaranteeData.slice(0, visibleCards).map((item) => (
          <div key={item.id} className="col-12 col-md-5">
            {/* Guarantee Card */}
            <div className={`card  ${styles.cardStyle}`}>
              <div className="card-body">
                <h5 className="card-title">Guarantee {item.id}</h5>
                <p className="card-text">Amount: {item.amount}</p>
                <span
                  className={`badge ${
                    item.status === "Active" ? "bg-success" : "bg-secondary"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            </div>
          </div>
        ))}

        {/* Show More Button - Accessible */}
        {visibleCards < guaranteeData.length && (
          <button
            className={`btn ${styles.showMoreButton}`}
            onClick={() => setShowMoreCards((prevValue) => !prevValue)}
            aria-label="Show more guarantee cards"
          >
            <i className="bi bi-plus-circle me-1"></i>
            <span className="d-block">Show More</span>
          </button>
        )}
      </div>
      {showMoreCards && (
        <div className={`d-flex flex-wrap gap-3 mt-4 ${styles.dropdownCard}`}>
          {guaranteeData
            .slice(visibleCards, guaranteeData.length)
            .map((item) => (
              <div
                key={item.id}
                className={`col-12 col-md-4 ${styles.cardWrapper}`}
              >
                {/* Guarantee Card */}
                <div className={`card  ${styles.cardStyle}`}>
                  <div className="card-body">
                    <h5 className="card-title">Guarantee {item.id}</h5>
                    <p className="card-text">Amount: {item.amount}</p>
                    <span
                      className={`badge ${
                        item.status === "Active" ? "bg-success" : "bg-secondary"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default GuaranteeCard;
