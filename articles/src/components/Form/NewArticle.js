import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addArticle } from "../../actions/articles-actions";
import PropTypes from "prop-types";

class NewArticle extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      title: "",
      content: "",
      author: {
        name: ""
      }
    };
    console.log("new article");
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addAuthor = this.addAuthor.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const ID = uuidv1();
    this.setState({ id: ID });
    this.props.addArticle(this.state);
    this.setState({
      id: "",
      title: "",
      content: "",
      author: {
        name: ""
      }
    });
  }

  addAuthor(event) {
    this.setState({ author: { name: event.target.value } });
  }

  render() {
    const { title } = this.state;
    return (
      <div className="col-md-8">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea
              className="form-control"
              id="content"
              value={this.state.content}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              className="form-control"
              id="author"
              value={this.state.author.name}
              onChange={this.addAuthor}
            />
          </div>
          <button type="submit" className="btn btn-success btn-lg">
            SAVE
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
};
NewArticle.propTypes = {
  // title: PropTypes.string.isRequired
};

export default connect(
  null,
  mapDispatchToProps
)(NewArticle);
