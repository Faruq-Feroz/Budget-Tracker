import { useState } from 'react';

function TransactionForm({ addTransaction }) {
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    type: 'income',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.description && formData.amount) {
      addTransaction({
        ...formData,
        amount: parseFloat(formData.amount),
        id: Date.now(),
      });
      setFormData({ description: '', amount: '', type: 'income' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="my-3">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
      </div>
      <div className="form-group">
        <input
          type="number"
          className="form-control"
          placeholder="Amount"
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
        />
      </div>
      <div className="form-group">
        <select
          className="form-control"
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Add Transaction
      </button>
    </form>
  );
}

export default TransactionForm;
