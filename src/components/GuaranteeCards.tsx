/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react"; // Using FontAwesome for plus icon
import styles from "../styles/GuaranteeCards.module.css";
import Card, { type CardDetails } from "./Card";
import axios, { type AxiosError } from "axios";
import { useTranslation } from "react-i18next";

type GuaranteeCardsProps = {
  guaranteeData: CardDetails[];
  clickCard: (index1: number, index2: number) => void;
};

const GuaranteeCards = ({ guaranteeData, clickCard }: GuaranteeCardsProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | "">();
  const [showMoreCards, setShowMoreCards] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <div className="d-flex flex-column flex-md-row gap-3 justify-content-between">
        {guaranteeData.slice(0, 2).map((item, index) => (
          <div key={item.id} className="col-12 col-md-5">
            <Card item={item} onClick={() => clickCard(0, index)} />
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
            <span className="d-block">{t("card.showMore")}</span>
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
              <Card item={item} onClick={() => clickCard(0, index + 2)} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default GuaranteeCards;
