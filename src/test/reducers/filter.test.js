import filterReducer from "../../reducers/filter";
import moment from "moment"


test("Should set up state correctly with default state", () => {
  const state = filterReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "",
    startDate: moment().startOf("month"), // manipulate moment docs, Object moment, not vale
    endDate: moment().endOf("month"),
  });
});

test("Should set sortBy to date with defaut state", () => {
  const state = filterReducer(undefined, { type: "STORE_BY_DATE" });
  expect(state.sortBy).toBe("date");
});


test("Should set text filter with provide state", ()=>{
    const currentState ={
        text: "test",
        sortBy: "",
        startDate: undefined,
        endDate: undefined,
    }
    const action = {
        type: "SET_TEXT_FILTER",
        text: "demo"
    }
    const state = filterReducer(currentState, action)
    expect(state.text).toBe("demo")
})

test("Should set text startDate with provide state", ()=>{
    const currentState ={
        text: "test",
        sortBy: "",
        startDate: undefined,
        endDate: undefined,
    }
    const action = {
        type: "SET_START_DATE",
        startDate: moment(0)
    }
    const state = filterReducer(currentState, action)
    expect(state.startDate).toEqual(moment(0))
})

test("Should set text endDate with provide state", ()=>{
    const currentState ={
        text: "test",
        sortBy: "",
        startDate: undefined,
        endDate: undefined,
    }
    const action = {
        type: "SET_END_DATE",
        endDate: moment(0)
    }
    const state = filterReducer(currentState, action)
    expect(state.endDate).toEqual(moment(0))
})

