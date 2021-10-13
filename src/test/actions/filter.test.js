import { setStartDate, setEndDate, storeByAmount, storeByDate, setTextForFilter } from "../../actions/filter";
import moment from "moment";

test("should set Start Date for filter", ()=>{
    const result = setStartDate(moment(0))
    expect(result).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test("should set end Date for filter", ()=>{
    const result = setEndDate(moment(0))
    expect(result).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test("Should set provide value for text filter", ()=>{
    const text= "demo"
    const result = setTextForFilter(text)
    expect(result).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    })
})

test("Should set default value for text filter", ()=>{
    const result = setTextForFilter()
    expect(result).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ""
    })
})

test("Should sort by Amount", ()=>{
    const result = storeByAmount()
    expect(result).toEqual({
        type: "STORE_BY_AMOUNT"
    })
})