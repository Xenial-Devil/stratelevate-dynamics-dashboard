// import config from "../../../config.json";
import axios from "axios";
// import { useHistory } from 'react-router-dom';
const tokenKey = "token";
// const apiUrl = "http://localhost:8080/api";

export function doRegister(username, password, fullName) {
  return new Promise((resolve, reject) => {
    if (username && password) {
      let credentials = {
        username: username,
        password: password,
      };
      let url = "http://localhost:8080/api/register";
      axios
        .post(url, credentials)
        .then((response) => {
          localStorage.removeItem(tokenKey);
          localStorage.setItem(tokenKey, response.data.token);
          resolve(true);
        })
        .catch((err) => {
          resolve(false);
        });
    } else {
      resolve(false);
    }
  });
}

export function loginAction(username, password) {
  return new Promise((resolve, reject) => {
    if (username && password) {
      let credentials = {
        username: username,
        password: password,
      };
      let url = "http://localhost:8080/api/user/authenticate";
      axios
        .post(url, credentials)
        .then((response) => {
          if (response.data.status === 'SUCCESS') {
            localStorage.removeItem(tokenKey);
            localStorage.setItem(tokenKey, response.data.token);
            resolve(true);
          } else {
            alert("Username password mismatch.");
          }

        })
        .catch((err) => {
          alert('Error details' + err);
          resolve(false);
        });
    } else {
      alert('error occured 2!');
      resolve(false);
    }
  });
}
export function logout() {
  localStorage.removeItem(tokenKey);
}
export async function checkAuthentication() {
  return userDetails();
}
export async function loadUser() {
  return userDetails();
}

async function userDetails() {
  // Get the current 'global' time from an API using Promise
  return new Promise((resolve, reject) => {
    let token = localStorage.getItem("token");
    if (token === null || token === "null" || token === '') {
      resolve(false);
      return;
    }
    var config = {
      headers: { Authorization: "Bearer " + token },
    };
    let url = "http://localhost:8080/api/user";
    axios
      .get(url, config)
      .then((response) => {
        let authorities = response.data.authorities;
        if (authorities.length > 0 && response.data.activated) {
          let user = {
            "firstName": response.data.firstName,
            "lastName": response.data.lastName,
            "email": response.data.email,
            "companyId": response.data.companyId,
            "membershipId": response.data.membershipId,
            "membershipType": response.data.membershipType
          };
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("authorities", JSON.stringify(authorities));
          resolve(true);
        } else {
          resolve(false);
        }

      })
      .catch((err) => {
        if (err === 'Error: Request failed with status code 401') {
          resolve(false);
        } else if (err === 'Error: Request failed with status code 500') {
          resolve(false);
        } else {
          reject('Service Invokation error!');
        }
      });
  });
}

export async function loadTranslations(activeLanguage) {
  // Get the current 'global' time from an API using Promise
  return new Promise((resolve, reject) => {
    let token = localStorage.getItem("token");
    if (token === null || token === "null" || token === '') {
      resolve(false);
      return;
    }
    var config = {
      headers: { Authorization: "Bearer " + token },
    };
    let url = "http://localhost:8080/api/i18n/v2?language=" + activeLanguage;
    axios
      .get(url, config)
      .then((response) => {
        let translations = response.data;
        if (translations) {
          localStorage.setItem("activeLanguage", activeLanguage);
          localStorage.setItem("translations", JSON.stringify(translations));
          resolve(true);
        } else {
          resolve(false);
        }

      })
      .catch((err) => {
        if (err === 'Error: Request failed with status code 401') {
          resolve(false);
        } else if (err === 'Error: Request failed with status code 500') {
          resolve(false);
        } else {
          reject('Service Invokation error!');
        }
      });
  });
}