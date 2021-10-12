const uuid = require("uuid");

const ADD_EXPENSES = ({
  description = "",
  note = "",
  amount = 0,
  createAt = 0,
} = {}) => ({
  type: "ADD_EXPENSES",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createAt,
  },
});

const REMOVE_EXPENSES = ({ id } = {}) => ({
  type: "REMOVE_EXPENSES",
  expense: {
    id,
  },
});

const EDIT_EXPENSE = (id, updates) => ({
  // updates là một Object
  type: "EDIT_EXPENSES",
  id,
  updates,
});

export {ADD_EXPENSES, REMOVE_EXPENSES, EDIT_EXPENSE}