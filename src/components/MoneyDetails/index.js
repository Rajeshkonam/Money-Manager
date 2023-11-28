import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props
  return (
    <div className="d2">
      <div className="d3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="img"
          className="img1"
        />
        <div className="xx">
          <p>Your Balance</p>
          <p>Rs {balance}</p>
        </div>
      </div>

      <div className="d5">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="img"
          className="img1"
        />
        <div className="xx">
          <p>Your Income</p>
          <p>Rs {income}</p>
        </div>
      </div>

      <div className="d6">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="img"
          className="img1"
        />
        <div className="xx">
          <p>Your Expenses</p>
          <p>Rs {expenses}</p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
