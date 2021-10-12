/*
    -connect(agru) trả về một function và function này chứa 1 agru là một RC để tạo ra một Higher Order Component(HOC)
    có thể lấy được state của Store
    + agru trong connect là 1 hàm dùng để quyết định xem HOC đó sẽ mang thông tin gì dưới dạng props từ state của store
    + cơ chế tạo ra HOC từ hàm connect(agru)(RC) giống với VD trong playground/higherOrderComponent.js-> xem cơ chế chuyển props từ
    HOC xuống RC bên trong nó

*/

import React from "react";
import { connect } from "react-redux";
import Item from "./ExpensesListItem";
import getVisibleExpenses from "../selectors/expenses"; // hàm render nhưng có điều kiện

// props của ExpensesList RC được chuyển xuống từ props của HOC
// {...expense} ~ expense ={expense} tương đương 2 cách trong Component/ExpensesListItem.js
export const ExpensesList = (props) => {
  return (
    <div>
      <h1>Your List</h1>
      {props.expenses.length > 0 ? (
        props.expenses.map((expense) => (
          <Item key={expense.description} {...expense} />
        ))
      ) : (
        <p>Nothing render</p>
      )}
    </div>
  );
};

// hàm quyết định xem thông tin gì từ state của STORE sẽ được chuyển xuống cho HOC dưới dạng props, là một agru của connect()
// connect có khả năng lấy state của Store
const mapStateStoreToProps = (state) => ({
  // expenses: state.expenses,
  filter: state.filter,
  expenses: getVisibleExpenses(state.expenses, state.filter),
});

// export default 1 HOC
export default connect(mapStateStoreToProps)(ExpensesList);

//<p>Filter Text is : {props.filter.text}</p>
