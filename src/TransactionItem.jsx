
function TransactionItem({ transaction }) {
  const { description, amount, type } = transaction;
  const itemClass = type === 'income' ? 'list-group-item-success' : 'list-group-item-danger';

  return (
    <li className={`list-group-item d-flex justify-content-between align-items-center ${itemClass}`}>
      <span>{description}</span>
      <span>{type === 'income' ? '+' : '-'}${amount.toFixed(2)}</span>
    </li>
  );
}

export default TransactionItem;
