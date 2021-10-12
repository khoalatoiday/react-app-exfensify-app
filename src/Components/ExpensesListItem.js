import React from "react";
import { Link } from "react-router-dom";

// sử dụng với expense={expense}
// const Item = (props) => (
//     <div>
//         <p>{props.expense.description}</p>
//         <p>{props.expense.createAt} - {props.expense.amount}</p>
//     </div>
// )

// sử dụng với {...expense} -> khi đó props của Item chính là Object expense
const Item = ({ id, description, amount, createAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {createAt} - {amount}
    </p>
  </div>
);

export default Item
