import React from "react";
import styles from "../styles/GuaranteeDetails.module.css"; // CSS Modules
import "bootstrap/dist/css/bootstrap.min.css";

interface GuaranteeDetailsProps {
  details: {
    guaranteeNumber?: string;
    issueDate?: string;
    expiryDate?: string;
    cancellationDate?: string;
    beneficiary?: string;
    classType?: string;
    commissionAccount?: string;
    depositAmount?: string;
    NRC?: string;
    swiftCode?: string;
    entityOffice?: string;
    reference?: string;
  };
  onClose: () => void;
}

const GuaranteeDetails: React.FC<GuaranteeDetailsProps> = ({
  details,
  onClose,
}) => {
  return (
    <div className={`card ${styles.detailsContainer}`}>
      <div className="card-body">
        <button className="btn btn-sm btn-danger float-end" onClick={onClose}>
          Close
        </button>
        <h5 className="card-title">Guarantee Details</h5>
        <table className="table table-bordered mt-3">
          <tbody>
            <tr>
              <th>Guarantee Number</th>
              <td>{details.guaranteeNumber}</td>
            </tr>
            <tr>
              <th>Issue Date</th>
              <td>{details.issueDate}</td>
            </tr>
            <tr>
              <th>Expiry Date</th>
              <td>{details.expiryDate}</td>
            </tr>
            {details.cancellationDate && (
              <tr>
                <th>Cancellation Date</th>
                <td>{details.cancellationDate}</td>
              </tr>
            )}
            <tr>
              <th>Beneficiary</th>
              <td>{details.beneficiary}</td>
            </tr>
            <tr>
              <th>Class Type</th>
              <td>{details.classType}</td>
            </tr>
            <tr>
              <th>Commission Account</th>
              <td>{details.commissionAccount}</td>
            </tr>
            <tr>
              <th>Deposit Amount</th>
              <td>{details.depositAmount}</td>
            </tr>
            <tr>
              <th>NRC</th>
              <td>{details.NRC}</td>
            </tr>
            <tr>
              <th>Swift Code</th>
              <td>{details.swiftCode}</td>
            </tr>
            <tr>
              <th>Entity Office</th>
              <td>{details.entityOffice}</td>
            </tr>
            <tr>
              <th>Reference</th>
              <td>{details.reference}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GuaranteeDetails;
