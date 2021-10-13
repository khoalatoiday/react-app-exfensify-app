import React from "react";
import {AddExpensePage} from "../../Components/AddExpensePage";
import {shallow} from "enzyme"
import expenses from "../fixtures/expense"

let history, addExpense, wrapper

// reuse spy function
beforeEach(()=>{
    addExpense = jest.fn()
    history = {push: jest.fn()}
    wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history}/>)
})

test("Should render AddExpensePage correctly", ()=>{
    expect(wrapper).toMatchSnapshot()
})

test("Should handler submit", ()=>{
    wrapper.find("ExpenseForm").prop("onSubmit")(expenses[0])
    expect(history.push).toHaveBeenLastCalledWith("/")
    expect(addExpense).toHaveBeenLastCalledWith(expenses[0])
})