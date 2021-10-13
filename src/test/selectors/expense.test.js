import getVisibleExpenses from "../../selectors/expenses";
import moment from "moment";
import expenses from "../fixtures/expense"

test("should select expenses with provide text and sort by amount incre", ()=>{
    const filter ={
        text: 'i',
        sortBy : "amount",
        startDate: undefined,
        endDate : undefined
    }

    const result = getVisibleExpenses(expenses, filter)
    expect(result).toEqual([expenses[0], expenses[2]])
})

test("should select expenses with provide startDate and sort by date decre",()=>{
    const filter ={
        text: '',
        sortBy : "date",
        startDate: moment(0).subtract(2,'days'), 
        endDate : undefined
    }
    const result = getVisibleExpenses(expenses, filter)
    expect(result).toEqual([expenses[2], expenses[1]])    
})

test("should select expenses with provide startDate, endDate and sort by date decre",()=>{
    const filter ={
        text: '',
        sortBy : "date",
        startDate: moment(0).subtract(5,'days'),
        endDate : moment(0).add(5, 'days')
    }
    const result = getVisibleExpenses(expenses, filter)
    expect(result).toEqual([expenses[2], expenses[1], expenses[0]])    
})