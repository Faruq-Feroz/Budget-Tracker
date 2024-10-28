
import TransactionItem from "./TransactionItem";

function TransactionList({ transactions }) {
  return (
    <div className="mt-4">
      <h4>Transaction History</h4>
      <ul className="list-group">
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
