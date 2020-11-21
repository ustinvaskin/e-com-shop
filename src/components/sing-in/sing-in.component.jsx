import React, { useState } from "react";

import FromInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sing-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault(this.setState({ email: "", password: "" }));
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form action="" onSubmit={this.handleSubmit}>
          <FromInput
            type="emal"
            name="email"
            id=""
            value={this.state.email}
            required="true"
            handleChange={this.handleChange}
            label="email"
          />
          <FromInput
            type="password"
            name="password"
            id=""
            value={this.state.password}
            required="true"
            handleChange={this.handleChange}
            label="password"
          />
          <CustomButton type="submit" value="submit">
            Sign In
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
