import React from "react";

const LoginForm = props => {
  return (
    <div className="col-md-8">
      <form onSubmit={props.handleSubmit}>
        <div className="form-group">
          <label htmlFor="userName">Username:</label>
          <input
            type="text"
            className="form-control"
            id="userName"
            placeholder="Enter username"
            name="userName"
            onChange={props.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
            name="password"
            onChange={props.handleChange}
          />
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" name="remember" /> Remember me
          </label>
        </div>
        <button type="submit" className="btn btn-default">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
