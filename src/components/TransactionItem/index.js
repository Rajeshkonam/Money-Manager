import './index.css'

const TransactionItem = props => {
  const {details, delTransaction} = props
  const {title, amount, type, id} = details
  const del = () => {
    delTransaction(id)
  }
  return (
    <li className="p2">
      <p className="p3">{title}</p>
      <p className="p3">{amount}</p>
      <p className="p3">{type}</p>
      <button type="button" onClick={del} className="p3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="img"
          className="ii"
        />
      </button>
    </li>
  )
}
export default TransactionItem
