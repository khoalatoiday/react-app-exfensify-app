/*
    - Tạo Form cho add Expense và edit Expense
    - Sử dụng regular expression(regux101)
    - Tạo lịch với react-dates library và format kiểu của thời gian với Object Moment
*/

import moment from "moment";
import React from "react";
import { SingleDatePicker } from "react-dates"; // sử dụng với Object moment

import "react-dates/initialize";


export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense? props.expense.description : '',
      note: props.expense? props.expense.note : "",
      amount: props.expense? (props.expense.amount/100).toString() : '',
      createAt: props.expense? moment(props.expense.createAt) : moment(),
      focused: false,
      error: "",
    };
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({
      description,
    }));
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({
      note,
    }));
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    // sử dụng rerular expression để tạo điều kiện là phải là 1 số có nhiều nhất 2 số 0 sau dấu phẩy
    if (!amount || amount.match(/^\d*(\.\d{0,2})?$/gm)) {
      this.setState(() => ({
        amount,
      }));
    }
  };

  onDateChange = (createAt) => {
    if (createAt) {
      this.setState(() => ({
        createAt,
      }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({
      focused,
    }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({
        error: "Please provide amount and desciption",
      }));
    } else {
      this.setState(() => ({
        error: "",
      }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createAt: this.state.createAt.valueOf(),
        note: this.state.note,
      });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          {this.state.error && (
            <p>
              <strong>{this.state.error}</strong>
            </p>
          )}
          <input
            type="text"
            placeholder="description"
            autoFocus
            onChange={this.onDescriptionChange}
            value={this.state.description}
          />
          <input
            type="text"
            placeholder="Amount"
            onChange={this.onAmountChange}
            value={this.state.amount}
          />

          <SingleDatePicker
            date={this.state.createAt} // khởi tạo date
            onDateChange={this.onDateChange}
            focused={this.state.focused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <br />
          <textarea
            placeholder="Add a note for your expense(optional)"
            onChange={this.onNoteChange}
          ></textarea>
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}
