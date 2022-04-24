import React from "react";
import ExpensesList from "./ExpensesList";
import ExpenseListFilter from "./ExpenseListFilter";
import SummaryExpenses from "./SummaryExpenses";
const ExpenseDashBoardPage = () => (
  <div>
    <ExpenseListFilter />
    <ExpensesList />
    <SummaryExpenses />
    <div>Hello World</div>
  </div>
);

export { ExpenseDashBoardPage as default };
