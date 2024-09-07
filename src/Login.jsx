import React, { Component } from "react";
import './scss/login.css';
// import CustomForm from "../common/Form";

import { loginAction, loadUser, loadTranslations } from "./components/common/service/authenticationService";
// import LoginRegistrationNavbar from "../public/includes/LoginRegistrationNavbar";
// import properties from '../../common_properties.json';
// import PublicFooter from "../public/includes/PublicFooter";
// import './DemoForm.css';

class Login extends Component {
  state = {
    data: { username: "", password: "" },
    welcomeMessage: "Register as Supplier/Customer/Admin",
    adminLoginMessage: "",
    userLoginMessage: "",
    errors: {},
  };



  componentDidMount() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("authorities");
    localStorage.removeItem("translations");
  }
  updateReditectState(url) {
    window.location = url;
    window.location.href = url;
    window.location.replace(url);

    window.open(url)
    window.open(url, "_self")
    window.open(url, '_blank');
    window.open(url, 'newWindow');
    window.open(url, 'newwin');

    //window.location.reload(true);
  }
  sleep = async (msec) => {
    return new Promise(resolve => setTimeout(resolve, msec));
  }

  doSubmit = async (event) => {
    event.preventDefault();
    this.login(event);
    return;
  }
  login = (event) => {
    const thisContext = this;
    const formData = new FormData(event.target),
      formDataObj = Object.fromEntries(formData.entries());
    // alert(JSON.stringify(formDataObj));
    loginAction(formDataObj.username, formDataObj.password).then(
      function (result) {
        if (result) {
          thisContext.loadUserDetails(result);
        } else {
//           this.setState(prevState => ({
//             userLoginMessage: "login failed!"
//           }));
        }
        return;
      }
    );

  }

  loadUserDetails = (result) => {
    const thisContext = this;
    loadUser().then(
      function (userIsLoaded) {
        if (userIsLoaded) {
          let user = localStorage.getItem("user");
          if (result && (user != null && user != undefined)) {
            let userObj = JSON.parse(user);
            loadTranslations("en").then(
              function () {
                console.log('translations loaded!');
                if (userObj.membershipType != null && userObj.membershipType != undefined) {
                  if ((userObj.membershipType == 'SUPERADMIN')
                    || (userObj.membershipType == 'ADMIN')) {
                    // thisContext.setState({ redirect: '/admin' });
                    // thisContext.updateReditectState('/');
                    // thisContext.updateReditectState('/admin/dashboard');
                  } else if (userObj.membershipType == 'VENDOR'
                    || userObj.membershipType == 'SUPPLIER') {
                    // thisContext.setState({ redirect: '/supplierPanel' });
                    thisContext.updateReditectState('/supplierPanel');
                  } else if (userObj.membershipType == 'CUSTOMER') {
                    // thisContext.setState({ redirect: '/customerPanel' });
                    thisContext.updateReditectState('/customerPanel');
                  }
                }
                thisContext.updateReditectState('/');
              }

            );

          }
        }
        return;
      }
    );
  }
  render() {
    const { data, errors } = this.state;

    return (
      <React.Fragment>
        <div class="login-page">
          <div class="login-container">
            <h1>Login to Strategy Dashboard</h1>
            <form onSubmit={this.doSubmit}>
              <div class="input-group">
                <label for="username">Username:</label>
                <input type="text" placeholder="Enter Username" id="username" name="username" required />
              </div>
              <div class="input-group">
                <label for="password">Password:</label>
                <input type="password" placeholder="Enter Password" id="password" name="password" required />
              </div>
              <div class="input-group">
                <button type="submit">Login</button>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
