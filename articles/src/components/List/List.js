import React from "react";
import { connect } from "react-redux";
import { fetchArticles } from "../../actions/articles-actions";
import articles from "./../../reducers/articleReducer";

const mapStateToProps = state => {
  console.log("Fetched articles are : ", state);
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
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Content</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            {articles.map(el => (
              <tr key={el.id}>
                <td>{el.title}</td>
                <td>{el.description}</td>
                <td>{el.content}</td>
                <td>{el.author}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const List = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);
export default List;
