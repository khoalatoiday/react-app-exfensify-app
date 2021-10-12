import { ADD_EXPENSES, EDIT_EXPENSE, REMOVE_EXPENSES } from "../../actions/expenses";

// expect().toEqual(Object) dùng cho Object và Array
test("Should remove your expense", ()=>{
    const result = REMOVE_EXPENSES({id:"123"})
    expect(result).toEqual({
        type: 'REMOVE_EXPENSES',
        expense:{
            id: "123"
        }
    })
})

test("Should Edit Your Expense", ()=>{
    const result = EDIT_EXPENSE("123",{note: "New Value"})
    expect(result).toEqual({
        type: 'EDIT_EXPENSES',
        id: "123",
        updates: {note:"New Value"}
    })
})

test("Should add expense with provide value", ()=>{
    const expense = {
        description: "note",
        amount: 123,
        note: "something",
        createAt: 1000
    }
    const result = ADD_EXPENSES(expense)
    expect(result).toEqual({
       expense:{
        ...expense,
        id: expect.any(String)
       },
       type: "ADD_EXPENSES"
    })
})

 test("Should Add expense with default value", ()=>{
     const result = ADD_EXPENSES()
     expect(result).toEqual({
         type: "ADD_EXPENSES",
         expense: {
             id: expect.any(String),
             description: '',
             note: '',
             amount: 0,
             createAt: 0
         }
     })
 })