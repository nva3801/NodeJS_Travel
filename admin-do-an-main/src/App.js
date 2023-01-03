import logo from './logo.svg';
import './App.css';
import MainLayout from './pages/Layout/MainLayout';
import { BrowserRouter as Router, Route, Switch, Redirect, useRouteMatch } from "react-router-dom";
import { useEffect, useState } from 'react';
import Login from './pages/Auth/Login';
import useToken from './pages/Auth/useToken';
import Register from './pages/Auth/Register';
import RoutesMain from './routes/main.routes';
import './common/Style/table.css'
import LoginRoutes from './routes/Login.routes';

function App() {

  return (
    <div className="App">
      <LoginRoutes />
    </div>
  );
}

export default App;
