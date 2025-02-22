/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react"; // Using FontAwesome for plus icon
import styles from "../styles/GuaranteeCards.module.css";
import Card, { type CardDetails } from "./Card";
import axios, { type AxiosError } from "axios";

const GuaranteeCards = () => {
  const [guaranteeData, setGuaranteeData] = useState<CardDetails[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | "">();
  const [showMoreCards, setShowMoreCards] = useState(false);

  useEffect(() => {
    const fetchLandingPageData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/cardRecords");
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
    <>
      <div className="d-flex flex-column flex-md-row gap-3 justify-content-between">
        {guaranteeData.slice(0, 2).map((item, index) => (
          <div key={item.id} className="col-12 col-md-5">
            <Card item={item} onClick={() => handleClick(0, index)} />
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
              <Card item={item} onClick={() => handleClick(0, index + 2)} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default GuaranteeCards;
