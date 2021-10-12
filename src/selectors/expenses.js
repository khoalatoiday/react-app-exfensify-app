import moment from "moment";

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  // retrun a new array thỏa mãn các điều kiện
  return expenses
    .filter((expense) => {
      const createAtMoment = moment(expense.createAt);
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createAtMoment, "day")
        : true; // moment query doc, startDate có <= thời gian được tạo của expense
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(createAtMoment, "day")
        : true; // endDate có >= thời gian được tạo của expense
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((firstEle, secondEle) => {
      if (sortBy === "date") {
        return firstEle.createAt < secondEle.createAt ? 1 : -1; // nếu xảy ra điều kiện thì đẩy secondEle lên trước -> sắp xếp giảm dần
      }
      if (sortBy === "amount") {
        return firstEle.amount > secondEle.amount ? 1 : -1; // nếu xảy ra điều kiện thì đẩy secondEle lên trước -> sắp xếp tăng dần
      }
    });
};

export { getVisibleExpenses as default };
