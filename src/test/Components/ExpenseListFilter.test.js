import React from "react";
import { ExpenseListFilter } from "../../Components/ExpenseListFilter";
import filters from "../fixtures/filter";
import { shallow } from "enzyme";
import { DateRangePicker } from "react-dates";
import moment from "moment"
let setTextForFilter,
  storeByAmount,
  storeByDate,
  setStartDate,
  setEndDate,
  wrapper;

beforeEach(() => {
  setTextForFilter = jest.fn();
  storeByAmount = jest.fn();
  storeByDate = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilter
      setTextForFilter={setTextForFilter}
      storeByAmount={storeByAmount}
      storeByDate={storeByDate}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      filter={filters[0]}
    />
  );
});

test("Should render ExpenseListFilter correctly with default filter", () => {
  expect(wrapper).toMatchSnapshot();
});

test("Should render ExpenseListFilter correctly with provide filter", () => {
  wrapper.setProps({
    // API enzyme
    filter: filters[1],
  });

  expect(wrapper).toMatchSnapshot();
});

test("Should set Text For Filter", ()=>{
    const text = "something"
    wrapper.find("input").simulate("change",{
        target: {value: text}
    })
    expect(setTextForFilter).toHaveBeenLastCalledWith(text)
})

test("Should store By Amount", ()=>{
    const amount ="amount"
    wrapper.find("select").simulate("change",{ // mô phỏng event với argu là event, định nghĩa lại API trong event
        target:{value: amount}
    })
    expect(storeByAmount).toHaveBeenLastCalledWith()
})

test("Should store By Date", ()=>{
    const date ="date"
    wrapper.find("select").simulate("change",{
        target:{value: date}
    })
    expect(storeByDate).toHaveBeenLastCalledWith()
})

test("Should set Start Date, end Date correctly", ()=>{
  const startDate = moment()
  const endDate = moment().add(4,"days")
  wrapper.find(DateRangePicker).prop("onDatesChange")({
    startDate,
    endDate
  })
  expect(setStartDate).toHaveBeenLastCalledWith(startDate)
  expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

test("Should set focused correctly on calendar", ()=>{
  const focused = "endDate"
  wrapper.find(DateRangePicker).prop("onFocusChange")(focused)
  expect(wrapper.state("focused")).toBe(focused)
})
