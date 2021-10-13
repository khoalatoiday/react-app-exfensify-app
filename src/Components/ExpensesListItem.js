import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";
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
      {moment(createAt).format("dddd, MMMM Do YYYY, h:mm:ss a")} -{" "}
      {numeral(amount / 100).format("$0,0.00")}
    </p>
  </div>
);

export default Item;
