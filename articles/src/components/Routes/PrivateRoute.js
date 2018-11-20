import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
// import { PrivateRoute } from "./PrivateRoute";

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    render={props =>
      localStorage.getItem("user") ? (
        <Component />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

// class PrivateRoute extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log("Private route:   props is ", props);
//   }

//   render() {
//     // const { rest } = this.props.rest;
//     // const { Component } = this.props.Component;

//     return (
//       <Route
//         // {...rest}
//         render={props =>
//           localStorage.getItem("user") ? (
//             <Component {...props} />
//           ) : (
//             <Redirect
//               to={{ pathname: "/login", state: { from: props.location } }}
//             />
//           )
//         }
//       />
//     );
//   }
// }

export default PrivateRoute;
