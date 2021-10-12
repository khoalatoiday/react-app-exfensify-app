import React from "react";
import ExpenseForm from "./ExpenseForm";
import { ADD_EXPENSES } from "../actions/expenses";
import { connect } from "react-redux";

// ta muốn RC này có thể dispatch action thay đổi data trong redux store => phải đưa về 1 connected RC
// export phục vụ việc test
export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.addExpense(expense)
    this.props.history.push("/") // sd history API để redirect về page mong muốn 
  };
  render() {
    return (
      <div>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

// dispatch action và đưa vào props -> gọi props là dispatch action
const mapDispatchToProps = (dispatch)=>({
  addExpense: (expense) => dispatch(ADD_EXPENSES(expense))
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage)
