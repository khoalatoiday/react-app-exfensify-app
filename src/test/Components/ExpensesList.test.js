import React from "react";
import { shallow } from "enzyme";
import {ExpensesList} from "../../Components/ExpensesList";
import expenses from "../fixtures/expense"

test("Should render expensesList", ()=>{
    const wrapper = shallow(<ExpensesList expenses={expenses}/>)
    expect(wrapper).toMatchSnapshot()
})

test("Should NOT render expensesList", ()=>{
    const wrapper = shallow(<ExpensesList expenses={[]}/>)
    expect(wrapper).toMatchSnapshot()
})

