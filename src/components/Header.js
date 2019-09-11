import React from 'react'
import {Link} from "react-router-dom";
import {API_URL} from "../constants";
import {withRouter} from "react-router-dom";
// import {Button} from 'react-bootstrap'

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            imageSource: '/patricia_front/src/images/Logo.png',
            authenticated: !!localStorage.getItem('user'),
            userType: 'non_staff'
        }
    }
    renderRegisterButton(){
        if(this.state.authenticated){
            return ""
        } else {
            return (<Link to="/register" style={{textDecoration: 'none', color: 'white'}}>
                <button className={'headerButtonStyle'}>
                    Register
                </button>
            </Link>);
        }
    }

    logout = () => {
        let token = localStorage.getItem('token');
        fetch(API_URL+'logout/', {
            method: 'post',
            headers: new Headers({
                'Authorization': 'Token '+token,
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
        })
            .then(response => {
                return response.json();
            })
            .then(body => {
                localStorage.clear();
                this.props.history.push('/');
        })
            .catch(error=> {
                console.log(error);
        });
    }

    renderHeaderButton(){
        if(this.state.authenticated){
            return (
                <button className={'headerButtonStyle'} onClick={this.logout}>Logout</button>
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
        console.log(localStorage.getItem('user')==="null");
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

export default withRouter(Header);