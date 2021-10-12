/*
  -createStore() lưu trữ data global, getState() ~ return current state tree
  -dispatch Object Action with type property
      +thay đổi state trong redux với Actions- một Object được gửi tới store
      +dispatch action ~ gửi action cho store, type là property bắt buộc của Object Action và có thể dựa vào nó để set up các 
      dynamic state value cho các property khác cho Object Action
  -subscribe() được gọi mỗi khi Object Action được dispatch and unsubscribe is the return of subscribe() 
  to stop execution of subscribe() tại 1 thời điểm nào đó
  - Refactoring and Orgranzing lại code dispatch: tại code dispatch thay vì truyền vào đó 1 Object Action ta sẽ truyền vào đó 1 hàm
  trả về 1 Object Action -> ngắn gọn, reusable hơn và chỉ xử lý ở các method return Object Action
  - 1. Reducer là một pure function tức output của nó phụ thuộc hoàn toàn vào input là Object state hay state hiện tại và Object action được dispatch
  trả về là 1 Object state tiếp theo, là một agru của createStore(reducer).
      2. Không bao giờ gán giá trị trực tiếp cho state hay action trong reducer mà chỉ đọc nó
  -> Tuy nhiên trong VD này ta chỉ thay đổi 1 state component là số count, khi thay đổi nhiều state component  hơn ta sẽ cần đến combinedReducers (xem ở secondReduxExample.js)
*/
// import redux library

import { createStore } from "redux";

// tại node đầu tiên thì không có state -> set up state = { count: 0 } hay Default Object
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      // return state tiếp theo của tree
      return {
        count: state.count + action.incrementBy,
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy,
      };
    case "RESET":
      return {
        count: action.resetCount
      };
    case "SET101":
      return {
        count: action.count,
      };
    default:
      // trả về state hiện tại
      return state;
  }
});

// subscribe() được gọi mỗi khi có 1 action được dispatch vào store
//để unsubcribe tại một thời điểm nào đó -> gọi giá trị trả về của hàm subscribe()
const unsubscribe = store.subscribe(() => {
  console.log(store.getState()); // return current state tree
});

// nếu có Object truyền vào hàm thì destructuring, nếu không thì set Object Default = {}
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy, // dynamic value state
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy,
});

const resetCount = () =>({
  type: "RESET",
  resetCount : 0
})

const setCount = ({count} = {}) => ({
  type: "SET101",
  count
})

// store.dispatch({
//   type: "DECREMENT",
// });

store.dispatch(incrementCount());

store.dispatch(incrementCount({ incrementBy: 10 }));

store.dispatch(resetCount());

store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 5 }));
//unsubscribe() // sẽ dừng hàm subscribe() tại điểm này

store.dispatch(setCount({count: 101}));
