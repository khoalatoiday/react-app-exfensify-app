import React from "react";
import ExpenseDashBoard from "../../Components/ExpenseDashBoardPage"
import { shallow } from "enzyme";

test("Should render dashboard page", ()=>{
    const wrapper = shallow(<ExpenseDashBoard />)
    expect(wrapper).toMatchSnapshot()
})