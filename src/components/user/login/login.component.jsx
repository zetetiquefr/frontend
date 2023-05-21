import React from "react";
import SignupComponent from "../signup/signup.component";
import "./login.component.css";
import AuthApi from "../../../services/Auth.api";
import Storage from "../../../services/Storage";
import Swal from "sweetalert2";
import UserApi from "../../../services/User.api";

export default class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.isLogin = true;
    this.state = {
      email: "",
      password: "",
    };
  }

  changeSignup = () => {
    this.isLogin = false;
    this.forceUpdate();
  };

  isSignupComponent = () => {
    return <SignupComponent />;
  };

  handleFormChange = (event) => {
    event.preventDefault();

    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value });
  };

  validForm = async (event) => {
    event.preventDefault();

    const response = await AuthApi.login(this.state.email, this.state.password);

    if (response && response.token) {
      const user = await UserApi.getByEmail(this.state.email, response.token)

      Storage.setLoginToken(response.token);
      Storage.setUserInfo(user);
      window.location.href = "/forum";
      return;
    }
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Login failed!",
    });
  };

  isLoginComponent = () => {
    return (
      <div className="parent">
        <h2 className="login_text black">LogIn</h2>
        <form onSubmit={this.validForm} className="form">
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
          <div className="submit_btn">
            <button className="btn btn-primary">LogIn</button>
          </div>
        </form>
        <div className="signup_div">
          <a onClick={this.changeSignup} className="black">
            Sign Up
          </a>
        </div>
      </div>
    );
  };

  render = () => {
    if (this.isLogin === true) {
      return this.isLoginComponent();
    }
    return this.isSignupComponent();
  };
}
