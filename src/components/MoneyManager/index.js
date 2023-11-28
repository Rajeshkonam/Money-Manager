import {Component} from 'react'

import {v4} from 'uuid'

import TransactionItem from '../TransactionItem'

import MoneyDetails from '../MoneyDetails'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    transactionList: [],
    optionId: transactionTypeOptions[0].optionId,
  }

  getBalance = () => {
    const {transactionList} = this.state
    let balance = 0
    let income = 0
    let expenses = 0
    transactionList.forEach(i => {
      if (i.type === transactionTypeOptions[0].displayText) {
        income += i.amount
      } else {
        expenses += i.amount
      }
    })
    balance = income - expenses
    return balance
  }

  getIncome = () => {
    const {transactionList} = this.state
    let income = 0
    transactionList.forEach(i => {
      if (i.type === transactionTypeOptions[0].displayText) {
        income += i.amount
      }
    })
    return income
  }

  getExpenses = () => {
    const {transactionList} = this.state
    let expenses = 0
    transactionList.forEach(i => {
      if (i.type === transactionTypeOptions[1].displayText) {
        expenses += i.amount
      }
    })
    return expenses
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const typeOption = transactionTypeOptions.find(i => i.optionId === optionId)

    const {displayText} = typeOption
    const newTransaction = {
      id: v4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }
    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  onChangeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeType = event => {
    this.setState({optionId: event.target.value})
  }

  delTransaction = id => {
    const {transactionList} = this.state
    const updatedTransactionList = transactionList.filter(i => i.id !== id)
    this.setState({transactionList: updatedTransactionList})
  }

  render() {
    const {titleInput, amountInput, optionId, transactionList} = this.state
    const balance = this.getBalance()
    const income = this.getIncome()
    const expenses = this.getExpenses()
    return (
      <div className="d1">
        <div className="d4">
          <h1>Hii Rajesh</h1>
          <p>Welcome to State Bank Of India</p>
        </div>
        <MoneyDetails balance={balance} income={income} expenses={expenses} />
        <div className="d7">
          <div className="d8">
            <form onSubmit={this.onAddTransaction} className="f1">
              <h1 className="h1">Add Transaction</h1>
              <label htmlFor="xx" className="l1">
                TITLE
              </label>
              <input
                type="text"
                id="xx"
                value={titleInput}
                onChange={this.onChangeTitle}
                className="in1 zzz"
              />
              <label htmlFor="yy" className="l1">
                AMOUNT
              </label>
              <input
                type="text"
                id="yy"
                value={amountInput}
                onChange={this.onChangeAmount}
                className="in1 zzz"
              />
              <label htmlFor="zz" className="l1">
                TYPE
              </label>
              <select
                id="zz"
                value={optionId}
                onChange={this.onChangeType}
                className="in1 zzz"
              >
                {transactionTypeOptions.map(i => (
                  <option key={i.optionId} value={i.optionId}>
                    {i.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="bb1 in1">
                ADD
              </button>
            </form>
          </div>

          <div className="d9">
            <h1>History</h1>

            <ul className="mm">
              <li className="li1">
                <p className="p1">Title</p>
                <p className="p1">Amount</p>
                <p className="p1">Type</p>
              </li>
              {transactionList.map(i => (
                <TransactionItem
                  details={i}
                  key={i.id}
                  delTransaction={this.delTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
