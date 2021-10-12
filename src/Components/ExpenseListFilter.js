// lí thuyết HOC và cơ chế connect xem lại ở ExpensesList.js, HigherOrderComponent.js
// dispatch from connected RC
/*
    - Tất cả các RC được connect với redux store đều có 1 props là dispatch giúp dispatch action
    - Connect RC mỗi khi dispatch action -> sẽ thay đổi state trong redux store -> re-render lại -> khá giống AJAX
*/
import React from "react";
import { connect } from "react-redux";
import {
  setTextForFilter,
  storeByAmount,
  storeByDate,
  setEndDate,
  setStartDate,
} from "../actions/filter";
import { DateRangePicker } from "react-dates";

// props của ExpenseListFilter được lấy từ props của HOC chứa nó, export phục vụ việc test
export class ExpenseListFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: null,
    };
    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.onTextChange = this.onTextChange.bind(this)
    this.onSortChange = this.onSortChange.bind(this)
  }

  onDatesChange({ startDate, endDate }) {
    this.setState(() => {
      this.props.setStartDate(startDate);
      this.props.setEndDate(endDate);
    });
  }

  onFocusChange(focused) {
    this.setState(() => ({
      focused,
    }));
  }

  onTextChange(e){
    this.props.setTextForFilter(e.target.value);
  }

  onSortChange (e){
    const choosen = e.target.value; // lấy giá trị của option được chọn
    if (choosen === "date") {
      this.props.storeByDate();
    } else if (choosen === "amount") {
      this.props.storeByAmount();
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filter.text}
          onChange={this.onTextChange}
        />
        <select
          value={this.props.filter.sortBy}
          onChange={this.onSortChange}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDateId="your_unique_start_date_id"
          endDateId="your_unique_end_date_id"
          startDate={this.props.filter.startDate}
          endDate={this.props.filter.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.focused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

const mapStateStoreToProps = (state) => {
  return {
    filter: state.filter,
  };
};

const mapDispatchToProps = (dispatch) =>{
  return {
    setTextForFilter: (text) => dispatch(setTextForFilter(text)),
    storeByAmount: () => dispatch(storeByAmount()),
    storeByDate: () => dispatch(storeByDate()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
  }
}

export default connect(mapStateStoreToProps, mapDispatchToProps)(ExpenseListFilter);
