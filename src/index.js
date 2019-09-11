import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import 'normalize.css';
import './css/style.css';
import { BrowserRouter, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import LoggedInPage from "./components/UserLoggedInPage";
import Provider from "react-redux/es/components/Provider";
import chatBotApp from "./reducers/rootReducer";
import {createStore} from "redux";
import AdminHomePage from "./components/AdminHomePage";
// import {Provider} from "react-redux";
// import
const history = createBrowserHistory();
const store = createStore(chatBotApp);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter history={history}>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/login" exact component={LoginPage}/>
                <Route path="/register" exact component={RegisterPage}/>
                <Route path="/home" exact component={LoggedInPage}/>
                <Route path="/adminHome" component={AdminHomePage}/>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
serviceWorker.unregister();
