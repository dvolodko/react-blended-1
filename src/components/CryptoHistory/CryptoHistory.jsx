import { formatDate } from 'helpers/formatDate';
import style from './CryptoHistory.module.css';

export const CryptoHistory = ({list}) => {
  return (<table className={style.table}>
  <thead className={style.thead}>
    <tr>
      <th className={style.th}>№</th>
      <th className={style.th}>PRICE</th>
      <th className={style.th}>AMOUNT</th>
      <th className={style.th}>DATE</th>
    </tr>
  </thead>

    <tbody>
      {list.map((listItem, index) => <tr key={listItem.id} className={style.tr}>
        <td className={style.td}>{index+1}</td>
        <td className={style.td}>{listItem.price}</td>
        <td className={style.td}>{listItem.amount}</td>
        <td className={style.td}>{formatDate (listItem.date)}</td>
      </tr>)}
  </tbody>
</table>);
};
