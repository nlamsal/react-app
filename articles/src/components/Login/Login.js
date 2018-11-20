import React, { Component } from "react";
import { connect } from "react-redux";
import LoginForm from "../Form/LoginForm";
import { loginActions } from "./../../actions/login-action";

class LoginPage extends Component {
  constructor(props) {
    localStorage.clear();
    super(props);
    console.log("props is ", props);

    this.state = {
      userName: "",
      password: ""
    };
    //this.props.actions.logout();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    this.props.actions.login(this.state.userName, this.state.password);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <LoginForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      login: (userName, password) => {
        dispatch(loginActions.login(userName, password));
      },
      logout: () => dispatch(loginActions.logout())
    }
  };
};

const mapStateToProps = state => {
  return { userName: state.userName, password: state.password };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
