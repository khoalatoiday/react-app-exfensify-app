import numeral from "numeral";
import React from "react";
import { connect } from "react-redux";
import totalExpense from "../selectors/total-expense";
import getVisibleExpenses from "../selectors/expenses";

export class SummaryExpenses extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>
          Viewing {this.props.currentExpenseCount} {this.props.currentWord} with
          totaling is {this.props.currentExpenseTotal}
        </p>
        <h4>Count of expenses: {this.props.count} </h4>
        <h4>
          Total of expenses:{" "}
          {numeral(this.props.totalExpenses / 100).format("$0,0.00")}
        </h4>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filter);
  return {
    totalExpenses: totalExpense(state.expenses),
    count: state.expenses.length,
    visibleExpenses: visibleExpenses,
    currentExpenseCount: visibleExpenses.length,
    currentExpenseTotal: numeral(totalExpense(visibleExpenses) / 100).format(
      "$0,0.00"
    ),
    currentWord: visibleExpenses.length === 1 ? "expense" : "expenses",
  };
};

export default connect(mapStateToProps)(SummaryExpenses);
