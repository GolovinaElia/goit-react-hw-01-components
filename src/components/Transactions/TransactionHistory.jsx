import PropTypes from 'prop-types';
const TransactionHistory = ({ items }) => (
    <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
 {items.map(({ id, type, amount, currency }) => (
  <tbody key={id}>
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
     </tbody>
 ))
        }
</table>
);

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
    })).isRequired,
};

export default TransactionHistory;