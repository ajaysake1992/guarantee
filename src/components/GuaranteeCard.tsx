import styles from "../styles/GuaranteeCard.module.css";

type Card = {
  id: number;
  amount: string;
  status: string;
};

type GuaranteeCardProps = {
  item: Card;
};

const GuaranteeCard = ({ item }: GuaranteeCardProps) => {
  return (
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
  );
};

export default GuaranteeCard;
