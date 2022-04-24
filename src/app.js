/*
   
*/

// ES6 syntax
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux'; // API from react-redux library
import {AppRouters} from "./Routers/AppRouters";
import "normalize.css/normalize.css"; // giúp tất cả browser và OS có chung style của apps
import "react-dates/lib/css/_datepicker.css";

import configureStore from "./store/configureStore";
import getVisibleExpenses from "./selectors/expenses"

// import firebase
// import './firebase/firebase.js'

const store = configureStore();

//console.log(test)

// store.dispatch(ADD_EXPENSES({description: "Water Bill" , amount: 4500,createAt:moment().add(4,"days").valueOf()}))
// store.dispatch(ADD_EXPENSES({description: "Gas Bill", amount: 10000, createAt: moment().valueOf()}))
// store.dispatch(ADD_EXPENSES({description: "Electric Bill", amount: 2000, createAt: moment().subtract(4, "days").valueOf()}))
//store.dispatch(setTextForFilter("bill"))

const state = store.getState();

console.log(state)

const visibleExpenses = getVisibleExpenses(state.expenses, state.filter)
//console.log(visibleExpenses)

const jsx = (
    <Provider store = {store}>
        <AppRouters />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById("app-id"));
