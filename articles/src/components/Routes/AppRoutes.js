import React from "react";
import { Switch, Route } from "react-router-dom";
import Form from "../Form/NewArticle";
import List from "./../List/List";

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/new" component={Form} />
      <Route exact path="/list" component={List} />
    </Switch>
  );
};

export default AppRoutes;
