import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import AppRoutes from "../Routes/AppRoutes";
import { Router } from "react-router-dom";
import { history } from "../../helper/history";
import { PrivateRoute } from "./../Routes/PrivateRoute";
import List from "./../List/List";
import Login from "../Login/Login";
import Article from "../Article/Article";
import NewArticle from "../Form/NewArticle";

class App extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;

    console.log("App js ", this.props);
    history.listen((location, action) => {
      // clear alert on location change
      //dispatch(alertActions.clear());
      
    });
  }

  render() {
    return (
      <Router history={history}>
        <div className="container">
          <PrivateRoute path="/" component={Article} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;

{
  /* <Router history={history}>
  <div />
</Router>; */
}
