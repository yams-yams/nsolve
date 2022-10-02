import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Browse from '../Browse/Browse';
import CodeEditor from '../CodeEditor/CodeEditor';
import Create from '../Create/Create';
import Login from '../Login/Login';
import useToken from './useToken';
import Navbar from '../Navbar/Navbar';

function App(props) {

  
  const { token, setToken } = useToken();
  console.log(token);
  if (!token) {
    return <Login setToken={setToken} />
  }

  return(
    <div className="wrapper">
      <Navbar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <h1>NSolve</h1>
      <BrowserRouter>
        <Routes>
          <Route 
            path="/dashboard"
            element={<Dashboard />}
            />
          <Route 
            path="/browse"
            element={<Browse />}/>  
          <Route
            path="/create"
            element={<Create />}/>
          <Route
            path="/edit"
            element={<CodeEditor />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
