import React from "react";
import { shallow } from "enzyme";
import { EditPage } from "../../Components/EditPage";
import expenses from "../fixtures/expense";

let wrapper, history, editExpense, removeExpense

beforeEach(() => {
  editExpense = jest.fn(); // spy function
  removeExpense = jest.fn();
  history = { push: jest.fn() }; // spy function
  wrapper = shallow(
    <EditPage
      history={history}
      editExpense={editExpense}
      removeExpense={removeExpense}
      expense={expenses[0]}
    />
  );
});

test("Should render EditPage correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("Should handler Edit Expense", ()=>{
    wrapper.find("ExpenseForm").prop("onSubmit")({description: "demo"})
    expect(history.push).toHaveBeenLastCalledWith("/")
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, {description: "demo"})
})

test("Should handler Remove Expense", ()=>{
    wrapper.find("button").simulate("click")
    expect(history.push).toHaveBeenLastCalledWith("/")
    expect(removeExpense).toHaveBeenLastCalledWith({
        id: expenses[0].id
    })
})