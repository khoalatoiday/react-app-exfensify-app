// Higher Order Component(HOC): là một RC render một RC khác
// tác dụng: resuse code(HOC component), render hijacking, props manipulation
import ReactDOM from "react-dom";
import React from "react";

// props của Info RC được chuyển từ HOC. cơ chế chuyển thì ở hàm requireAuthentication
const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The Info is: {props.info}</p>
  </div>
);

// Hàm tạo Higer Order Component
const requireAuthentication = (WrappedComponent) => {
  // return stateless functional component
  return (
    props // props này là của HOC, ta sẽ copy toàn bộ props vào trong WrappedComponent với Spread Object syntax
  ) => (
    <div>
      {props.isAdmin && <p>This is private!!!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};


const AuthInfo = requireAuthentication(Info); // HOC

// HOC nhận props rùi chuyển cho Info RC
ReactDOM.render(
  <AuthInfo isAdmin={true} info="This is second info" />,
  document.getElementById("app-id2")
);
