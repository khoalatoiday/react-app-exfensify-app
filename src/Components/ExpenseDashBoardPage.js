import React from "react";
import ExpensesList from "./ExpensesList";
import ExpenseListFilter from "./ExpenseListFilter";
const ExpenseDashBoardPage = () => (
  <div>
    <ExpenseListFilter />
    <ExpensesList />
  </div>
);

export { ExpenseDashBoardPage as default };
