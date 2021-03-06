import { createStore, combineReducers } from "redux";
import expensesReducer from "../reducers/expenses";
import filterReducer from "../reducers/filter";

export default () => {
  //create store using combineReducers(là một Object có value là các reducer function)
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filter: filterReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
