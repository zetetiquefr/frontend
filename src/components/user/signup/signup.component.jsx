import React from "react";
import "./signup.component.css";
import LoginComponent from "../login/login.component";
import Swal from "sweetalert2";
import UserApi from "../../../services/User.api";

export default class SignupComponent extends React.Component {
  constructor(props) {
    super(props);
    this.isSignup = true;
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  isLoginComponent = () => {
    return <LoginComponent />;
  };

  changeLogin = () => {
    this.isSignup = false;
    this.forceUpdate();
  };

  validForm = async (event) => {
    event.preventDefault();
    if (this.state.password !== this.state.confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Both passwords must be the same!",
      });
      return;
    }
    if (
      await UserApi.create(
        this.state.name,
        this.state.email,
        this.state.password
      )
    ) {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "User created successfully!",
      });
      this.isSignup = false;
      this.forceUpdate();
    }
  };

  handleFormChange = (event) => {
    event.preventDefault();

    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value });
  };

  isSignupComponent = () => {
    return (
      <div className="parent">
        <h2 className="login_text black">SignUp</h2>
        <form className="form" onSubmit={this.validForm}>
          <div className="input_div">
            <label htmlFor="username" className="black">
              username
            </label>
            <input type="text" name="name" onChange={this.handleFormChange} />
          </div>
          <div className="input_div">
            <label htmlFor="email" className="black">
              email
            </label>
            <input type="email" name="email" onChange={this.handleFormChange} />
          </div>
          <div className="input_div">
            <label htmlFor="password" className="black">
              password
            </label>
            <input
              type="password"
              name="password"
              onChange={this.handleFormChange}
            />
          </div>
          <div className="input_div">
            <label htmlFor="password" className="black">
              confirm password
            </label>
            <input
              type="password"
              name="confirmPassword"
              onChange={this.handleFormChange}
            />
          </div>
          <div className="submit_btn">
            <button className="btn btn-primary">SignUp</button>
          </div>
        </form>
        <div className="signup_div">
          <a onClick={this.changeLogin}>Log in</a>
        </div>
      </div>
    );
  };

  render = () => {
    if (this.isSignup) {
      return this.isSignupComponent();
    }
    return this.isLoginComponent();
  };
}
