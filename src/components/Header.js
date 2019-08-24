import React from 'react'
// import {Redirect} from "react-router";
// import LoginPage from "./LoginPage";
import {Link} from "react-router-dom";
// import {Button} from 'react-bootstrap'

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: false,
            imageSource: '/patricia_front/src/images/Logo.png',
            style : {

            }
        }
    }
    renderRegisterButton(){
        if(this.state.loggedIn){
            return ""
        } else {
            return (<Link to="/register" style={{textDecoration: 'none', color: 'white'}}>
                <button className={'headerButtonStyle'}>
                    Register
                </button>
            </Link>);
        }
    }

    renderHeaderButton(){
        if(this.state.loggedIn){
            return (
                <button className={'headerButtonStyle'}>Logout</button>
            )
        } else {
            return (
                <div style={{marginLeft: 5}}>
                    <Link to="/login" style={{textDecoration: 'none', color: 'white'}}>
                        <button className={'headerButtonStyle'}>
                            Login
                        </button>
                    </Link>
                </div>
            )
        }
    }

    render() {
        // let {style} = this.state;
        const logo = require('../images/Logo.png');
        return (
            <div className={'headerContainer'}>
                <div>
                    <Link to='/'>
                        <img src={logo} alt={"Patricia"} width={200} height={50}/>
                    </Link>
                </div>
                <div className={'leftFlex'}>
                    <div className={'headerButtonContainerStyle'}>
                        {this.renderRegisterButton()}
                        {this.renderHeaderButton()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;