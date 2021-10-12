//Expenses Reducer
const expensesDefaultValueState = [];
// tại node đầu tiên thì không có state -> set up state = DefaultState
export default (state = expensesDefaultValueState, action) => {
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
