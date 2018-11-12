import React from "react";
import { connect } from "react-redux";
import { fetchArticles } from "../../actions/articles-actions";
import articles from "./../../reducers/articleReducer";

const mapStateToProps = state => {
  console.log("articles are : ", state);
  return { articles: state.articles };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log("dispatching ajax call");
  console.log(ownProps);
  // debugger;
  return {
    loadArticles: () => dispatch(fetchArticles())
  };
};

class ConnectedList extends React.Component {
  constructor(props) {
    super(props);
    console.log("logging props and state");
    console.log(this.props);
    this.props.loadArticles();
  }

  render() {
    const articles = this.props.articles;
    return (
      <ul className="list-group list-group-flush">
        {articles.map(el => (
          <li className="list-group-item" key={el.id}>
            {el.title}
          </li>
        ))}
      </ul>
    );
  }
}

const List = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);
export default List;
