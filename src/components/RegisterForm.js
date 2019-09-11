import React from 'react';
import axios from "axios";
import {isEmpty} from "lodash";
import {API_URL} from "../constants";
import {withRouter} from "react-router-dom";

class RegisterForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            firstName : '',
            middleName: '',
            lastName: '',
            password: '',
            confirmPassword: '',
            username: '',
            email: '',
            errors: {
                password: [],
                confirmPassword: []
            }
        };
    }

    checkPassword = () => {
        console.log(this.state);
        debugger
        if(!isEmpty(this.state.password)){
            if(this.state.password === this.state.confirmPassword){
                return true;
            } else {
                this.setState(prevState => {
                    let errors = Object.assign({}, prevState.errors);
                    errors.confirmPassword = ['Confirmation Password does not match.'];
                    return {errors};
                });
                return false;
            }
        } else {
            this.setState(prevState => {
                let errors = Object.assign({}, prevState.errors);
                errors.password = ['Password Field cannot be empty.'];
                return {errors};
            });
            return false
        }
    };

    displaySuccessMessage = () => {
        alert("User registered successfully.");
        this.props.history.push('/login');
    };

    handleErrorMessage = (error) => {
        console.log(error.response.data);
        this.setState({...this.state,
        errors: error.response.data});
    };

    registerUser = () => {
        let {state} = this;
        let formData = {};
        if(this.checkPassword()){
            formData.first_name = state.firstName;
            formData.middle_name = state.middleName;
            formData.last_name = state.lastName;
            formData.email = state.email;
            formData.password = state.password;
            formData.username = state.username;
            axios
                .post(API_URL+"registers/", formData)
                .then(response => this.displaySuccessMessage())
                .catch(error => this.handleErrorMessage(error))
        }
        console.log(formData);
        console.log(this.state);

    };

    setValue = (keyName, e) => {
        console.log(keyName, e.target.value);
        this.setState({[keyName]: e.target.value, errors: {[keyName]: []}});
    };

    render() {
        let {state} = this;
        console.log(state);
        return(
            <div>
                <div className={'register-form-container'}>
                    <div>
                        <label htmlFor={'firstName'}>First Name *</label><br/>
                        {this.state.errors.firstName ?
                            <span className={'warning-message'}>
                                {this.state.errors.firstName[0]}
                            </span> : ""}
                        <input type='text' id={'firstName'} name={'firstName'} value={state.firstName} onChange={
                            (e) => this.setValue('firstName', e)} required/>
                    </div>
                    <div className={'form-item-container'}>
                        <label htmlFor={'middleName'}>Middle Name</label><br/>
                        {this.state.errors.middleName ?
                            <span className={'warning-message'}>
                                {this.state.errors.middleName[0]}
                            </span> : ""}
                        <input type='text' id={'middleName'} name={'middleName'} onChange={
                            (e) => this.setValue('middleName', e)} value={state.middleName}/>
                    </div>
                    <div className={'form-item-container'}>
                        <label htmlFor={'lastName'}>Last Name *</label><br/>
                        {this.state.errors.lastName ?
                            <span className={'warning-message'}>
                                {this.state.errors.lastName[0]}
                            </span> : ""}
                        <input type='text' id={'lastName'} name={'lastName'} onChange={
                            (e) => this.setValue('lastName', e)} value={state.lastName} required/>
                    </div>
                    <div className={'form-item-container'}>
                        <label htmlFor={'username'}>Username *</label><br/>
                        {this.state.errors.username ?
                            <span className={'warning-message'}>
                                {this.state.errors.username[0]}
                            </span>: ""}<br/>
                        <input type='text' id={'username'} name={'username'} onChange={
                            (e) => this.setValue('username', e)} value={state.username} required/>
                    </div>
                    <div className={'form-item-container'}>
                        <label htmlFor={'email'}>Email *</label><br/>
                        {this.state.errors.email ?
                            <span className={'warning-message'}>
                                {this.state.errors.email[0]}
                            </span> : ""}
                        <input type='text' id={'email'} name={'email'} onChange={(e) => this.setValue('email', e)} value={state.email} required/>
                    </div>
                    <div className={'form-item-container'}>
                        <label htmlFor={'password'}>Password *</label><br/>
                        {this.state.errors.password ?
                            <span className={'warning-message'}>
                                {this.state.errors.password[0]}
                            </span> : ""}
                        <input type='password' id={'password'} name={'password'} onChange={(e) => this.setValue('password', e)} value={state.password} required/>
                    </div>
                    <div className={'form-item-container'}>
                        <label htmlFor={'confirm-password'}>Confirm Password *</label><br/>
                        {this.state.errors.confirmPassword ?
                            <span className={'warning-message'}>
                                {this.state.errors.confirmPassword[0]}
                            </span> : ""}
                        <input type='password' id={'confirm-password'} name={'confirm-password'} onChange={
                            (e) => this.setValue('confirmPassword', e)}
                               value={state.confirmPassword} required/>
                    </div>
                    <div className={'form-item-container'}>
                        <input type='submit' value='Register' className={'login-button'} onClick={this.registerUser}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(RegisterForm);