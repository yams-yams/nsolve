import React, { useState } from "react";
import PropTypes from 'prop-types';

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  }).then(data => data.json());
}

export default function Login({
  setToken
}) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "login-wrapper"
  }, /*#__PURE__*/React.createElement("h1", null, "Welcome to nSolve!"), /*#__PURE__*/React.createElement("h2", null, "Please Login below"), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("p", null, "Username"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    onChange: e => setUserName(e.target.value)
  })), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("p", null, "Password"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    onChange: e => setPassword(e.target.value)
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Submit"))));
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired
};