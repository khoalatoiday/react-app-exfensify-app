import React from "react";
import { shallow } from "enzyme";
import ExpensesListItem from "../../Components/ExpensesListItem"
import expenses from "../fixtures/expense"

test("Should render Expenese List Item",()=>{
    const wrapper = shallow(<ExpensesListItem expense = {expenses[0]}/>)
    expect(wrapper).toMatchSnapshot()
})