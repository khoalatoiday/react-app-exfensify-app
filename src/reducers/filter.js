import moment from "moment";

// Filter Reducer
const filterDefaultValueState = {
  text: "",
  sortBy: "",
  startDate: moment().startOf('month'), // manipulate moment docs, Object moment, not vale
  endDate: moment().endOf('month'),
};
export default (state = filterDefaultValueState, action) => {
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
