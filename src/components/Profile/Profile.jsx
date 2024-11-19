import transactions from '../../transactions.json'
import css from './TransactionHistory.module.css'

const TransactionHistory = ({ items }) => {
    return (
        <table className={css.table}>
  <thead>
    <tr className={css.titles}>
      <th className={css.titles_slot}>Type</th>
      <th className={css.titles_slot}>Amount</th>
      <th className={css.titles_slot}>Currency</th>
    </tr>
  </thead>

  <tbody>
                {items.map(item => (
                    <tr className={css.data_slot_horizontal} key={item.id}>
                        <td className={css.data_slot}>{item.type}</td>
                        <td className={css.data_slot}>{item.amount}</td>
                        <td className={css.data_slot}>{item.currency}</td>
       </tr>
   ))}
  </tbody>
</table>
    )
}

export default TransactionHistory;