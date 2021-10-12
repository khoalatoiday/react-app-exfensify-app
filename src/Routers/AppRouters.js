import { BrowserRouter, Route, Switch} from "react-router-dom"; // import API
import ExpenseDashBoardPage from "../Components/ExpenseDashBoardPage";
import AddExpensePage from "../Components/AddExpensePage";
import HeaderPage from "../Components/HeaderPage";
import HelpPage from "../Components/HelpPage";
import EditPage from "../Components/EditPage";
import NotFoundPage from "../Components/NotFoundPage";
import React from "react";
const AppRouters = ()=> (
    <BrowserRouter>
      <div>
        <HeaderPage />
        <Switch>
          <Route path="/" component={ExpenseDashBoardPage} exact={true} />
          <Route path="/create" component={AddExpensePage} exact={true} />
          <Route path="/help" component={HelpPage} exact={true} />
          <Route path="/edit/:id" component={EditPage}  />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );

export {AppRouters}