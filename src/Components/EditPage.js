import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { EDIT_EXPENSE, REMOVE_EXPENSES } from "../actions/expenses";

// export phục vụ việc test
export class EditPage extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this)
    this.removeExpense = this.removeExpense.bind(this)
  }

  onSubmit(expense) {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push("/");
  }

  removeExpense() {
    this.props.removeExpense({ id: this.props.expense.id });
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
        <button onClick={this.removeExpense}>Remove</button>
      </div>
    );
  }
}

// props là props hiện tại của EditPage
const mapPropsStateToRC = (state, props) => {
  return {
    expense: state.expenses.find(
      (expense) => expense.id === props.match.params.id
    ),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editExpense: (id, expense) => dispatch(EDIT_EXPENSE(id, expense)),
    removeExpense: (data) => dispatch(REMOVE_EXPENSES(data)),
  };
};

export default connect(mapPropsStateToRC, mapDispatchToProps)(EditPage);
