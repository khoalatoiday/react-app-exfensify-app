import React from "react";
import moment from "moment";
import ExpenseForm from "../../Components/ExpenseForm";
import expenses from "../fixtures/expense";
import { shallow } from "enzyme";
import { SingleDatePicker } from 'react-dates';
test("Should render ExpenseForm with default value", () => {
  const result = shallow(<ExpenseForm />);
  expect(result).toMatchSnapshot();
});

test("Should render ExpenseForm with provide value", () => {
  const result = shallow(<ExpenseForm expense={expenses[0]} />);
  expect(result).toMatchSnapshot();
});

/* test event hanlder với các API của enzyme
    - shallowObject.find(node): tìm node(HTML tag, JSX code) trong RC 
    - shallowObject.state('name Of props in state'): trả về state hiện tại của RC hoặc một props cụ thể của state() 
    - simulate("event handler", {}): test mô phỏng sự kiện với agru 1 là tên của event, agru 2 là Object định nghĩa lại các API của event đó. 
    và truyền dữ liệu giả vào. Do khi test thì sẽ không có event thật
    - at(index): truy cập index của 1 node
*/
test("Should render error for invalid form submission", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find("form").simulate("submit", { preventDefault: () => {} }); // định nghĩa lại API preventDefault của event, submit nhưng không truyền vào dữ liệu giả vào
  expect(wrapper.state("error").length).toBeGreaterThan(0); // truy cập state.error và kiểm tra có lớn hơn 0?
  expect(wrapper).toMatchSnapshot();
});

test("Should set description on input change", () => {
  const value = "new description";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("input").at(0).simulate("change", { target: { value } }); // agru 2 của simuate định nghĩa lại API của event và truyền dữ liệu giả vào
  expect(wrapper.state("description")).toBe(value);
});

test("Should set note on input change", () => {
  const note = "new note";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("textarea").simulate("change", { target: { value: note } });
  expect(wrapper.state("note")).toBe(note);
});

test("Should set amount if input is valid", () => {
  const amount = "25.30";
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find("input")
    .at(1)
    .simulate("change", { target: { value: amount } });
  expect(wrapper.state("amount")).toBe(amount);
});

test("Should NOT set amount if input is invalid", () => {
  const amount = "25.320";
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find("input")
    .at(1)
    .simulate("change", { target: { value: amount } });
  expect(wrapper.state("amount")).toBe(""); // "" là default value ta đã set trong <ExpenseForm/>
});

// spy function ~ tạo hàm giả thay cho hàm kích hoạt ở bên trong 1 event handler nào đó
test("Should call onSubmit prop for valid form submission", ()=>{
  const onSubmitSpy = jest.fn() // tạo hàm spy
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>)
  wrapper.find("form").simulate("submit", {
    preventDefault: ()=>{}
  })
  expect(wrapper.state("error")).toBe("")
  expect(onSubmitSpy).toHaveBeenLastCalledWith({ // gọi hàm giả với agru
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createAt: expenses[0].createAt
  })
})

test("Should set new date on date change", ()=>{
  const now = moment()
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find(SingleDatePicker).prop('onDateChange')(now) // truy cập prop "onDateChange" của note "SingleDatePicker" và truyền agru là now
  expect(wrapper.state("createAt")).toEqual(now)
})

test("Should set focus on focus change",()=>{
  const result = true
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find(SingleDatePicker).prop("onFocusChange")({focused: result})
  expect(wrapper.state("focused")).toBe(result)
})