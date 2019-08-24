import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import 'normalize.css';
import './css/style.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";

ReactDOM.render(
    <Router>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={LoginPage}/>
        <Route path="/register" exact component={RegisterPage}/>
    </Router>,
    document.getElementById('root'));
serviceWorker.unregister();
