import React, { Component } from "react";
import "./App.css";
import Navbar from "../Navbar/Navbar";
import AppRoutes from "../Routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Navbar />
          <div>
            <AppRoutes />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
