import React from "react";
import { Switch, Route } from "react-router-dom";
import NewArticle from "../Form/NewArticle";
import List from "./../List/List";
import LoginForm from "./../Form/LoginForm";

const AppRoutes = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={List} />
        <Route path="/list" component={List} />
        <Route path="/new" component={NewArticle} />
      </Switch>
    </div>
  );
};

export default AppRoutes;
