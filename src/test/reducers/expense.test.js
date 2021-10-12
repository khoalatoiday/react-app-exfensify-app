import expenses from "../fixtures/expense"
import expensesReducer from "../../reducers/expenses"
import moment from "moment"

test("Should set up state correctly", ()=>{
    const state = expensesReducer(undefined, {type : "@@INIT"})
    expect(state).toEqual([])
})

test("Should remove correct state by id", ()=>{
    const state = expensesReducer(expenses, {
        type: "REMOVE_EXPENSES",
        expense:{
            id: "1"
        }
    })
    expect(state).toEqual([expenses[1], expenses[2]])
})

test("Should not remove if id is not correct", () =>{
    const state = expensesReducer(expenses, {
        type: "REMOVE_EXPENSES",
        expense: {
            id: "abc"
        }
    })
    expect(state).toEqual([...expenses])
})

test("Should add a expense", ()=>{
    const expense = {
        id: "4",
        desrciption: "",
        amount: 0,
        note: "",
        createAt: moment(0)
    }
    const state = expensesReducer(expenses, {
        type: "ADD_EXPENSES",
        expense
    })
    expect(state).toEqual([...expenses, expense])
})

test("Should edit expense with correct id", ()=>{
    const state = expensesReducer(expenses, {
        type: "EDIT_EXPENSES",
        id: expenses[0].id,
        updates: {
            description: "demo"
        }
    })
    expect(state[0]).toEqual({
        id: expenses[0].id,
        description: "demo",
        amount: 1000,
        note: "note",
        createAt: moment(0).subtract(4,'days').valueOf() // 0h 1970 1st trừ đi 4 ngày
    })
})

test("Should NOT edit expense with incorrect id", ()=>{
    const state = expensesReducer(expenses, {
        type: "EDIT_EXPENSES",
        id: "4",
        updates: {
            description: "demo"
        }
    })
    expect(state).toEqual(expenses)
})