/* mỗi Reducer function chỉ có 1 trong các nghiệp vụ(ứng dụng): ADD_EXPENSE, REMOVE_EXPENSE, EDIT_EXPENSE, SORT_BY_DATE, SORT_BY_AMOUNT,
 SET_START_DATE, SET_END_DATE -> viết mỗi nghiệp vụ là 1 reducer function rồi sử dụng combinedReducer để ghép lại thành 1 hàm Reducer chung
 -> Multiple Reducers
- Sử dụng concat hoặc spread operator ... với array sẽ giúp không thay đổi array mà thay vào đó là tạo một array mới với các phần tử được thêm vào
- Sử dụng spead operator với Object: tương tự với Array, Object = {...OtherObject} -> Object sẽ có toàn bộ key-value của OtherObject ngoài ra
còn có thể overide các key-value. Tuy nhiên vì đây là ES6 syntax không hỗ trợ trên browser nên ta cần babel-plugin-transform-object-rest-spread
và thiết lập plugin tại file .babelrc

- Ogranzize file để kết hợp redux và RC: tách ra làm các file: actions, reducers, selectors(query data từ store ~ hàm xử lý query data), store
*/

import { createStore, combineReducers } from "redux";

const uuid = require("uuid");

const ADD_EXPENSES = ({
  description = "",
  note = "",
  amount = 0,
  createAt = 0,
} = {}) => ({
  type: "ADD_EXPENSES",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createAt,
  },
});

const REMOVE_EXPENSES = ({ id } = {}) => ({
  type: "REMOVE_EXPENSES",
  expense: {
    id,
  },
});

const EDIT_EXPENSE = (id, updates) => ({
  // updates là một Object
  type: "EDIT_EXPENSES",
  id,
  updates,
});

//Expenses Reducer
const expensesDefaultValueState = [];
// tại node đầu tiên thì không có state -> set up state = DefaultState
const expensesReducer = (state = expensesDefaultValueState, action) => {
  switch (action.type) {
    case "ADD_EXPENSES":
      return [...state, action.expense]; // new array với toàn bộ phần tử trong state + action.expense
    case "REMOVE_EXPENSES":
      return state.filter((expense) => action.expense.id != expense.id); // trả về một dãy thỏa mãn điều kiện
    case "EDIT_EXPENSES":
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates,
          };
        }else{
          return {
            ...expense
          }
        }
      });
    default:
      return state;
  }
};

const setTextForFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text,
});

const storeByAmount = () => ({
  type: "STORE_BY_AMOUNT",
});

const storeByDate = () => ({
  type: "STORE_BY_DATE",
});

const setStartDate = (startDate = 0) => ({
  type: "SET_START_DATE",
  startDate,
});

const setEndDate = (endDate = 0) => ({
  type: "SET_END_DATE",
  endDate,
});

// Filter Reducer
const filterDefaultValueState = {
  text: "",
  sortBy: "",
  startDate: undefined,
  endDate: undefined,
};
const filterReducer = (state = filterDefaultValueState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text,
      };
    case "STORE_BY_DATE":
      return {
        ...state,
        sortBy: "date",
      };
    case "STORE_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount",
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate,
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate,
      };
    default:
      return state;
  }
};

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch =
      typeof startDate !== "number" || expense.createAt >= startDate;
    const endDateMatch =
      typeof endDate !== "number" || expense.createAt <= endDate;
    const textMatch = expense.description
      .toLowerCase()
      .includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch;
  }).sort((firstEle,secondEle) =>{
    if(sortBy === 'date'){
      
      return firstEle.createAt < secondEle.createAt? 1 : -1 // nếu xảy ra điều kiện thì đẩy secondEle lên trước -> sắp xếp giảm dần
    }
    if(sortBy === 'amount'){
      
      return firstEle.amount > secondEle.amount? 1: -1  // nếu xảy ra điều kiện thì đẩy secondEle lên trước -> sắp xếp tăng dần
    }
  });
};

//create store using combineReducers(là một Object có value là các reducer function)
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filter: filterReducer,
  })
);

store.subscribe(() => {
  const state = store.getState();
  const getVisibleExpense = getVisibleExpenses(state.expenses, state.filter);
  console.log(getVisibleExpense);
});

const expenseOne = store.dispatch(
  ADD_EXPENSES({ description: "First", amount: 100, createAt: 1000 })
);

const expenseTwo = store.dispatch(
  ADD_EXPENSES({ description: "Second", amount: 150, createAt: 1200 })
);


//store.dispatch(REMOVE_EXPENSES({ id: expenseOne.expense.id }));

// store.dispatch(EDIT_EXPENSE(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextForFilter("f"));
// store.dispatch(setTextForFilter());
store.dispatch(storeByAmount());
store.dispatch(storeByDate());
// store.dispatch(setStartDate(125));
// store.dispatch(setEndDate(1250));

const test = [1,45,4,3]
console.log(test.sort((a,b)=> {
  return a<b? 1 : -1 // nếu a<b thì đẩy b lên đầu -> giảm dần
}))
