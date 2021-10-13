/*
   
    - TẠO folder component và tách các RC ra 
    - Source Map hay dev tool - 1 feature của Webpack -> giúp debug và viết code tốt hơn, set up tại file webpack.config.js
    - Webpack dev server: npm i webpack-dev-server
    - plugin của babel: transform-class-properties giúp chuyển es5 class properites sang es6 property initialize syntax
    + ngắn gọn hơn, không phải dùng hàm bind() để trói buộc this của hàm vào Class name (xem ví dụ chuyển đổi ở AddOption.js)

    - RC có thể có closed tag: <RC>some JSX code </RC> -> khi đó RC sẽ có props.children = some JSX code
    - React Modal: tạo một RC dựa vào thư viện thứ 3 react-modal, có thể tùy ý hiển/ẩn lên trên tất cả các RC khác 
với các feature trong thư viện ( dùng cho ứng dụng hiện ra content về selectOption mỗi khi click)

 Styling our app: 
 -Ta sẽ sử dụng .scss để styling webpack app. Do browser chỉ hiểu .css nên ta cần 1 tool để convert từ .scss sang .css giống như
 babel đã làm với jsx và ES6. -> cài sass-loader,css-loader, style-loader để convert (cần cài thêm node-sass) (thiết lập tại file webpack.config.js)
 

 -------------------------------------------------------------------------------------------------------------------------------------
    - Server side vs client side: tại client side, ta sẽ gửi request đầu tiên tới server-side để nhận respone đầu tiên là render page đầu tiên của
    app(index). Tuy nhiên từ các page phía sau của app, ta không cần phải gửi request đến server-side nữa mà có thể tự render page ở bên
    client-side bằng việc sử dụng HTML5 history API của browser Điều này giúp tiết kiệm thời gian và nhanh hơn. Cơ chế này đã có từ lâu 
    và React Router là một trong các tool như vậy
    - API của react-router-dom: BrowserRouter dùng để tạo router sử dụng HTML5 history API để đồng bộ các UI với các URL, Route để tạo page
    ,set up với URL và component -> thẻ BrowserRouter chứa các thẻ Route
    - Route có 2 props quan trọng: path để match khi có URL set up, component để render đúng RC cần thiết, ngoài ra còn có prop là
    exact: true để chỉ kích hoạt route khi match đúng với URL. 
    -Ngoài ra cần props historyApiFallBack để nói với tất cả các page 404 tại server side là hãy quay lại page index.html, tại index.html
     đã có load các route khác từ bundle.js( setup tại webpack.config.js) -> prop xử lý render các page khác chỉ ở client-side
     - Thẻ <Switch> trong react-router-dom: sẽ match thẻ Route hoặc Redirect đúng và đầu tiên nó gặp phải, sau đó sẽ dừng lại (giống logic switch()..case:..)
     - Set up link giữa các page: có thể render page mà không phải refresh(khá giống AJAX) -> sử dụng thẻ API <Link> trong react-router-dom
    , thẻ <NavLink> tương tự thẻ <Link> nhưng nó có thể thêm vài style hợp với navbar
     - Organize: tách code router ra 1 folder Routers riêng, tách RC sang 1 folder Component riêng
     - Router feature: các Route có props riêng chứa các props quan trọng như history dùng để redirect data từ page này sang page khác,
     location.hash chứa câu lệnh hash #..., location.search chứa câu lênh query ?key=value..., edit/:nameYouWant thì location.match.params.nameYouWant chứa thông tin nameYouWant  
    -----------------------------------------------------------------------------------------------------------------------
    REDUX
    - Trong một complex app, sẽ không có một PARENT COMPONENT LỚN NHẤT NÀO CẢ -> sẽ có nhiều TREE COMPONENTS-> parent không có nhiều component state. 
    Nếu chỉ có 1 TREE CONPONENT, việc lấy data giữa các child và parent sẽ trở nên phức tạp bởi child chỉ có thể lấy data nó cần thông qua 
    parent -> Nếu Tree có nhiều level tức sẽ phải mất nhiều code trung gian không cần thiết để truyền data/method cho child đó dưới dạng 
    props thông qua các child level cao hơn.Hệ thống communicate nhiều hơn và các RC sẽ không thực sự "Reusble" bởi các RC ở level thấp hơn 
    sẽ đòi hỏi nhiều code trung gian hơn. -> Hệ thống 1 TREE COMPONENT không còn thích hợp vì các RC sẽ không thực sự reusable, cần quá nhiều
    code trung gian không cần thiết gây giảm hiệu năng
    -> REDUX sinh ra với mục đích cung cấp cho "child" data của parent mà nó cần và method giúp thay đổi data của parent một cách nhanh chóng 
    bằng việc để các child tương tác global với data/method. Lưu ý cơ chế state và props ta vẫn sử dụng xuyên suốt chỉ là thay đổi cách xây
    dựng hệ thống của app
    - Lí thuyết về REDUX 1 reducer thay đổi chỉ 1 state component  (firstReduxExampleNoRC.js) và REDUX nhiều reducer thay đổi nhiều
    state conponent(xem ở secondReduxExampleNoRC.js)
    ------------------------------------------------------------------------------------------------------------------------
    React with Redux
    - Đầu tiên tạo các file riêng rẽ chứa action, store, selectors và reducers
    - Higher Order Component(playground)
    - Connecting store and component với React-redux library
    + <Provider> là một RC có tác dụng cung cấp một store đã tạo cho tất cả các RC bên trong nó bằng cách tạo một props có tên là
    store
    + connect(): xem ở Components/ExpensesList.js
    - Dispatch action từ RC được connect với redux store: xem tai Component/ExpenseListFilter.js
    - sortBy (ExpensesListFilter.js)
    - Tạo UI cho add expense và edit expense (ExpenseForm.js, AddExpensePage.js, EditPage.js)
    - Set up date picker: tạo một bảng lịch có thể chọn được ngày với API của react-dates library, giá trị ngày được chọn sẽ được
    format dưới dạng là một moment (trong moment library). moment library thường được sử dụng để xử lý với thời gian (ExpenseForm.js)
    - Tích hợp ADD_EXPENSE cho UI, add expenses cho redux store(ExpenseForm.js , AddExpensePage.js)
    - Tích hợp EDIT_EXPENSE cho UI, chỉnh sửa expense và cập nhật redux store (ExpenseForm.js, EditPage.js)
    - Xóa expense (EditPage.js)
    - set up redux devtool
    -filter By Date, in ra expense trong thời gian đã chọn với API của react-redux library(ExpensesListFilter.js, selectors/expenses.js)
    ---------------------------------------------------------------------------------------------------------------------
    Ôn lại JEST: JEST được phát triển bởi facebook, test framework tốt nhất cho react app
        Test function
    - set up JEST và cài lệnh tại scripts của package.json, tạo floder test và tên file phải có dạng .test.js bởi JEST chỉ tìm các file này
    - Xem API JEST tại docs: đặc biệt là global và expect tạo assersion (demo.test.js)
    - Tạo file chứa data để test(test/fixtures/expense.js)
    - Tạo test cho action expenses (test/actions/expenses.test.js)
    - Tạo test cho action filter (test/actions/filter.test.js)
    - Tạo test selector expenses (test/selectors/expense.test.js)
    - Tạo test reducer filter (test/reducers/filter.test.js)
    - Tạo test reducer expense (test/reducers/expense.test.js)

        Test RC Component trên UI
    - Test Header Component: test/component/Header.test.js (lí thuyết test với JEST snapshot và các tool)
    - Cài tool enzyme và enzyme-adapter-react-17, raf, enzyme-to-json để render các RC component phức tạp hơn: set up jest.config.json, setupTests.js
        + enzyme-adapter-react-17 (setupFiles trong jest.config.json)
        + raf ~ request animate folyfill cho browser
        + enzyme-to-json (snapshotSerializers trong jest.config.json) -> tự động JSON các file có sử dụng enzyme
    - Test ExpensesList: test/component/ExpensesList.test.js, test DashBoardPage, test NotFoundPage
    - Mock Libary với JEST: sử dụng manual mocks -> trong quá trình test, thay vì phải truy cập database, website hay library thực sự
    với dữ liệu thật, ta có thể test với dữ liệu giả được khai báo với manual mocks (test/__mocks__)
    + B1: tạo folder __mocks__
    + B2: đặt tên file với library muốn mock: moment.js trong __mocks__
    + B3: định nghĩa lại các API với dữ liệu giả trong file được tạo, export chúng
    - Test các RC có event hanlder (test/component/ExpensesForm.test.js)
    - spy function tạo các hàm giả để test(test các hàm được truyền vào RC dưới dạng props) (ExpenseForm, AddExpensePage,EditPage).test.js
    - Test AddExpensePage, EditPage (test/components/AddExpensePage.test.js, test/components/AddExpensePage.test.js)
    - Refactoring các file React Component: tách các hàm sự kiện ra riêng nếu liên quan đến dispatch action -> sử dụng 
    mapDispatchToProps cho connect RC 
    - test ExpenseListFilter RC với spy function và API enzyme
----------------------------------------------------------------------------------------------------------------------------
    ÔN TẬP DEPLOYING
    - Install Git
    - Integrate Git: Git gồm 4 giai đoạn: Untracked File, Unstaged Changes, Stage Changes, Commits
    + Untracked File: file không được git theo dõi
    + Unstaged Changes: sau khi các file được commit, nếu có sự thay đổi và lưu lại thì file mới đó sẽ nằm trong unstaged Changes
    + Stage Changes: file trong này sẽ trong trạng thái chuẩn bị để Commit
    + Commits: tạo save point và đưa vào respo
    -  Các lệnh để integrate:
    + Git init: tạo direction git resposity
    + Git status: xem trạng thái thay đổi các giai đoạn của git
    + ignore git: tạo file .gitignore chứa các file không muốn commit
    + Git add: thêm untracked file hoặc unchange stage(nếu có thay đổi ở file và muốn cập nhật)  vào stage changes
    + Git commit -message ="" : commit và tracking tất cả các file trong stage changes
    + git log: in ra lịch sử gần nhất commit
    - Set up ssh key và connect với github: 
    + Kiểm tra có ssh key chưa: ls -a ~/.ssh
    + Tạo ssh key nếu chưa có: ssh-keygen -t rsa 4096 -C "youremail@gmail.com"
    + Sử dụng ssh agent: eval "$(ssh-agent -s)" và ssh-add ~/.ssh/id_rsa
    + Copy ssh public key lên clipboard: clip < ~/.ssh/id_rsa.pub và dán vào mục sshkey của github
    + Connecting: ssh -T git@github.com
    - Push code lên github/heroku: command trên website
    - Cập nhật lại github/heroku: cập nhật lại git(add,commit) rùi push lại với lệnh: git push

    ---------------------
    - Set up Production Webpack (package.json, webpack.config.js)
    - Creating separate CSS files: tách file CSS ra vì để trong 1 file bundle.js sẽ khiến hiệu năng giảm(quá to): sử dụng 
    mini-css-extract-plugin(webpack 5) giúp tách text ra khỏi bundle.js và tạo 1 file riêng
    - production with express server: tạo folder express server (ôn lại 1 chút express)
    - Set up heroku(ôn lại)
    + heroku login : login và set authotication
    + heroku create
    + git remote -v để xem các remote (bản chất là ta push code lên remove rùi heroku lấy code từ đó)
    + git push heroku main
    - Để deploy lên browser ta cần làm 2 việc: để heroku chạy express server và thứ 2 là để heroku chạy webpack(vì những file như
    bundle.js, styles.css không cần phải push lên vì chúng vốn được tạo ra khi run webpack) (2 việc này sẽ set up trong package.json)
    -> Sau đó ta chạy các deploy command
    - Muốn cập nhật lại heroku thì cập nhật lại git rùi push lại với: git push heroku main
    - npm i production: chỉ cài module mà không ở dev-dependency và đưa lên live domain
*/

// ES6 syntax
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux'; // API from react-redux library
import {AppRouters} from "./Routers/AppRouters";
import "normalize.css/normalize.css"; // giúp tất cả browser và OS có chung style của app
import "./style/style.scss";
import "react-dates/lib/css/_datepicker.css";
import moment from "moment";

import configureStore from "./store/configureStore";
import { ADD_EXPENSES, EDIT_EXPENSE, REMOVE_EXPENSES } from "./actions/expenses";
import {setEndDate, storeByAmount,storeByDate, setTextForFilter, setStartDate} from "./actions/filter"
import getVisibleExpenses from "./selectors/expenses"

const store = configureStore();

store.dispatch(ADD_EXPENSES({description: "Water Bill" , amount: 4500,createAt:moment().add(4,"days").valueOf()}))
store.dispatch(ADD_EXPENSES({description: "Gas Bill", amount: 10000, createAt: moment().valueOf()}))
store.dispatch(ADD_EXPENSES({description: "Electric Bill", amount: 2000, createAt: moment().subtract(4, "days").valueOf()}))
// store.dispatch(setTextForFilter("bill"))

const state = store.getState();

const visibleExpenses = getVisibleExpenses(state.expenses, state.filter)
console.log(visibleExpenses)

const jsx = (
    <Provider store = {store}>
        <AppRouters />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById("app-id"));
