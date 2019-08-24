import React from 'react'
import Header from "./Header";
import LoginFormComponent from "./LoginFormComponent";
import Footer from "./Footer";
import ChatComponent from "./ChatComponent";

class LoginPage extends React.Component {
    render() {
        return(
            <div>
                <Header/>
                <LoginFormComponent/>
                <Footer/>
                <ChatComponent/>
            </div>
        );
    }
}

export default LoginPage