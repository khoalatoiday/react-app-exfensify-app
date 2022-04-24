const sumReducer = (preValue, curValue) => preValue + curValue

export default (expenses) =>{
    return expenses.map(expense => expense.amount).reduce(sumReducer,0)
}