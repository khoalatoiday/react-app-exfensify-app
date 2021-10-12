import { NavLink } from "react-router-dom";
import React from "react";
const HeaderPage = () => (
  <header>
    <h1>Exfensify app</h1>
    <li>
      <NavLink to="/help" activeClassName="is-active">
        Help Page
      </NavLink>
    </li>
    <li>
      <NavLink to="/create" activeClassName="is-active">
        Create Page
      </NavLink>
    </li>
    <li>
      <NavLink to="/" activeClassName="is-active" exact={true}>
        Home Page
      </NavLink>{" "}
    </li>
  </header>
);

export { HeaderPage as default };
