import React from 'react'
import Header from "./Header";
import Footer from "./Footer";
import ChatComponent from "./ChatComponent";
import RegisterForm from "./RegisterForm";
// import Header from "react-chat-popup/lib/components/Header/index";

class RegisterPage extends React.Component{
    render() {
        return(
            <div>
                <Header/>
                <RegisterForm/>
                <Footer/>
                <ChatComponent/>
            </div>
        );
    }
}

export default RegisterPage;