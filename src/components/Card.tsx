import { useTranslation } from "react-i18next";
import styles from "../styles/GuaranteeCard.module.css";

export type CardDetails = {
  id: number;
  amount: string;
  status: "Active" | "Pending";
};

type CardProps = {
  item: CardDetails;
  onClick: () => void;
};

const Card = ({ item, onClick }: CardProps) => {
  const { t } = useTranslation();
  return (
    <div className={`card  ${styles.cardStyle}`} onClick={onClick}>
      <div className="card-body">
        <h5 className="card-title">
          {t("card.guarantee")} {item.id}
        </h5>
        <p className="card-text">
          {t("card.amount")} {item.amount}
        </p>
        <span
          className={`badge ${
            item.status === "Active" ? "bg-success" : "bg-secondary"
          }`}
        >
          {item.status}
        </span>
      </div>
    </div>
  );
};

export default Card;
