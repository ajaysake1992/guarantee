/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react"; // Using FontAwesome for plus icon
import styles from "../styles/GuaranteeCards.module.css";
import Card, { type CardDetails } from "./Card";

const GuaranteeCards = () => {
  const cardRecords: CardDetails[] = [
    { id: 1, amount: "1,000,000 EUR", status: "Active" },
    { id: 2, amount: "500,000 EUR", status: "Pending" },
    { id: 3, amount: "750,000 EUR", status: "Pending" },
    { id: 4, amount: "600,000 EUR", status: "Pending" },
    { id: 5, amount: "1,000,000 EUR", status: "Pending" },
    { id: 6, amount: "500,000 EUR", status: "Pending" },
    { id: 7, amount: "750,000 EUR", status: "Pending" },
    { id: 8, amount: "600,000 EUR", status: "Pending" },
    { id: 9, amount: "1,000,000 EUR", status: "Pending" },
    { id: 10, amount: "500,000 EUR", status: "Pending" },
    { id: 11, amount: "750,000 EUR", status: "Pending" },
    { id: 12, amount: "600,000 EUR", status: "Pending" },
    { id: 13, amount: "1,000,000 EUR", status: "Pending" },
    { id: 14, amount: "500,000 EUR", status: "Pending" },
    { id: 15, amount: "750,000 EUR", status: "Pending" },
    { id: 16, amount: "600,000 EUR", status: "Pending" },
  ];

  const [guaranteeData, setGuaranteeData] = useState(cardRecords);

  const [showMoreCards, setShowMoreCards] = useState(false);

  const handleClick = (item: CardDetails, index: number) => {
    const selectedCardIndex = guaranteeData.findIndex(
      (guarantee) => guarantee.id === item.id
    );
    console.log("selectedCardIndex", selectedCardIndex);
  };

  return (
    <>
      <div className="d-flex flex-column flex-md-row gap-3 justify-content-between">
        {guaranteeData.slice(0, 2).map((item, index) => (
          <div key={item.id} className="col-12 col-md-5">
            <Card
              item={item}
              onClick={() => console.log("click value", item, index + 1)}
            />
          </div>
        ))}

        {/* Show More Button - Accessible */}
        {guaranteeData.length > 2 && (
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
          {guaranteeData.slice(2, guaranteeData.length).map((item, index) => (
            <div
              key={item.id}
              className={`col-12 col-md-4 ${styles.cardWrapper}`}
            >
              <Card item={item} onClick={() => handleClick(item, index + 1)} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default GuaranteeCards;
