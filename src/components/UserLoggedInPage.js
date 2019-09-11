import React from 'react'
import {withRouter} from "react-router";
import Header from './Header';
import UserBanner from "./UserBanner";
import ChatComponent from "./ChatComponent";

class UserLoggedInPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user: JSON.parse(localStorage.getItem('user'))
        }
    }
    render() {
        return(
            <div>
                <Header/>
                <UserBanner username={this.state.user.first_name}/>
                <ChatComponent username={this.state.user.first_name}/>
            </div>
        );
    }
}

export default withRouter(UserLoggedInPage);