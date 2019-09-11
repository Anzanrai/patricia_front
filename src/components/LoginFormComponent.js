import React from 'react'
import {API_URL} from "../constants";
import {withRouter} from "react-router-dom";

class LoginFormComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            error: {
                loginError: ['']
            },
            loggedIn: false
        }
    }

    onChange = (keyName, e) => {
        // console.log(keyName, e.target.value);
        this.setState({[keyName]: e.target.value});
    };

    handleSuccessResponse = (response) => {
        console.log(response);
        // let data = response.data;
        let user = response['user'];
        let user_token = response['token'];
        console.log(user, user_token);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', user_token);
        this.setState({...this.state,
            loggedIn: true});
        if(user.user_type === "User"){
            this.props.history.push('/home');
        }
        else{
            this.props.history.push('/adminHome')
        }
    };

    handleErrorMessage = (errorResponse) => {
        // if(error.response.status == )
        console.log(errorResponse.response.status);
        // console.log(error.response.data.error);
        if(errorResponse.response.status === 404){
            console.log('reached at error catch section');
            this.setState({...this.state, error: [errorResponse.response.data.error]});
        }
        // console.log(error.response);
    };

    submit = () => {
        let {state} = this;
        let formData = new FormData();
        formData.append('username', state.username);
        formData.append('password', state.password);
        let url = API_URL + "login/";
        // console.log(url);
        fetch(url, {
            method: 'post',
            body: formData
        })
            .then(res => {return res.json()})
            .then(response_data => this.handleSuccessResponse(response_data))
            .catch(error => {console.log(error)})
    };

    render(){
        return(
            <div className={'login-form'}>
                {this.state.error.loginError ?
                    <span className={'warning-message'}>
                                {this.state.error.loginError[0]}
                    </span> : ""}
                <div>
                    <label htmlFor={'username'}>Email / Username</label><br/>
                    <input type={'text'} name={'username'} id={'username'} onChange={(e) => this.onChange('username', e)}/>
                </div>
                <div className={'form-item-container'}>
                    <label htmlFor={'password'}>Password</label><br/>
                    <input type={'password'} name={'password'} id={'password'} onChange={(e) => this.onChange('password', e)}/>
                </div>
                <div className={'login-button-container'}>
                    <input type={'submit'} className={'login-button'} onClick={this.submit}/>
                </div>
            </div>
        );
    }
}

export default withRouter(LoginFormComponent);