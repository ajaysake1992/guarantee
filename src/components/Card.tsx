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
  return (
    <div className={`card  ${styles.cardStyle}`} onClick={onClick}>
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
  );
};

export default Card;
