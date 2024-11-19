import s from "./TransactionHistory.module.css";
function TransactionHistory({ items }) {
  return (
    <div className={s.wrapper}>
      <table className={s.table}>
        <thead className={s.thead}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr key={item.id} className={s.tr}>
              <td className={s.td}>{item.type}</td>
              <td className={s.td}>{item.amount}</td>
              <td className={s.td}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionHistory;