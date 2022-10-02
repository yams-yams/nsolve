import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Browse from './components/Browse/Browse';
import Login from './components/Login/Login';

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken === null || userToken === void 0 ? void 0 : userToken.token;
}

function App(props) {
  const token = getToken();

  if (!token) {
    return /*#__PURE__*/React.createElement(Login, {
      setToken: setToken
    });
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/React.createElement("h1", null, "NSolve"), /*#__PURE__*/React.createElement(BrowserRouter, null, /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
    path: "/dashboard",
    element: /*#__PURE__*/React.createElement(Dashboard, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/browse",
    element: /*#__PURE__*/React.createElement(Browse, null)
  }))));
}

export default App;