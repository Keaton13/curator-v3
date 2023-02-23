import React from "react";
import Star from "../../assets/svg/star";
import WhaleStatsCoinRow from "./WhaleStatsCoinRow";
const styles = {
  tableBody: {
    textAlign: "center",
  },
  tableRow: {
    height: "75px",
  },
  tableTransactions: {
    maxWidth: "200px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
};

const WhaleStatsTableRow = ({ transaction, index }) => {
  const formatNum = (num) => {
    return Number(num.toFixed(2)).toLocaleString();
  };
  return (
    <tbody style={styles.tableBody}>
      {transaction && index ? (
        <tr style={styles.tableRow}>
          <td>
            <Star />
          </td>
          <td>{index}</td>
          <td>
            <WhaleStatsCoinRow name={transaction.blockchain} index={index} />
          </td>
          <td>
            <div>
              <p>
                {formatNum(transaction.amount)} {transaction.symbol}
              </p>
            </div>
          </td>
          <td>
            <div>
              <p>{formatNum(transaction.amount_usd)}</p>
            </div>
          </td>
          <td>
            <div>
              <p>{transaction.transaction_type}</p>
            </div>
          </td>
          <td>
            <div style={styles.tableTransactions}>
              <p>{transaction.to.address}</p>
            </div>
          </td>
          <td>
            <div style={styles.tableTransactions}>
              <p>{transaction.from.address}</p>
            </div>
          </td>
        </tr>
      ) : (
        <div>Loading...</div>
      )}
    </tbody>
  );
};

export default WhaleStatsTableRow;
