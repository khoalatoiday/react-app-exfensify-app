/*
    - Sử dụng các API của enzyme cùng toMatchSnapshot của JEST để test RC Component
    - shallow được sử dụng để test JSX code
    - JEST sẽ tạo một snapshot và lưu result được tạo bởi shallow vào snapshot với expect(result).toMatchSnapshot(). Nếu 
    nó được chạy lần đầu thì nó sẽ tạo mới snapshot. Trong trường hợp đã tạo rồi thì khi chạy toMatchSnapshot() thì hệ thống 
    sẽ so sánh result với snapshot đã tồn tại
    - Nếu muốn cập nhật snapshot thì chọn "u"
*/

import React from "react";
import HeaderPage from "../../Components/HeaderPage";
import { shallow } from "enzyme";
// import toJSON from "enzyme-to-json" // set up "snapshotSerializers" tại jest.config.json thì không cần phải gọi API liên tục nữa
test("Should render Header component correctly", () => {
  const wrapper = shallow(<HeaderPage />);
//   expect(toJSON(wrapper)).toMatchSnapshot();
  expect(wrapper).toMatchSnapshot();
});
