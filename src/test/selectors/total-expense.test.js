import totalExpense from "../../selectors/total-expense";
import expenses from "../fixtures/expense"
test("should get 0 if no expenses", () =>{
    const result = totalExpense([])
    expect(result).toBe(0)
})

test("Should get total expenses correctly", ()=>{
    const result = totalExpense(expenses)
    expect(result).toBe(3000)
})

test("Should get one single expense correctly",()=>{
    const result = totalExpense([expenses[0]])
    expect(result).toBe(1000)
})