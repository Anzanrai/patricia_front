import React from 'react'
import Header from "./Header";
import LoginFormComponent from "./LoginFormComponent";
import Footer from "./Footer";
import ChatComponent from "./ChatComponent";
import {withRouter} from "react-router-dom";

class LoginPage extends React.Component {
    render() {
        return(
            <div>
                <Header/>
                <div className={'login-page-body'}>
                    <LoginFormComponent/>
                </div>
                <Footer/>
                <ChatComponent/>
            </div>
        );
    }
}

export default withRouter(LoginPage);