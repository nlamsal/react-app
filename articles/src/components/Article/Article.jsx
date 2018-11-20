import React from "react";
import AppRoutes from "./../Routes/AppRoutes";
import Navbar from "./../Navbar/Navbar";

class Article extends React.Component {
  constructor(props) {
    super(props);
    console.log("props in the article component is ", props);
  }

  render() {
    return (
      <div>
        <Navbar />
        <div>
          <AppRoutes />
        </div>
      </div>
    );
  }
}

export default Article;
