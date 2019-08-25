import React from 'react';
import axios from "axios";

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
        };
        // this.handleFirstNameChange = this.setValue.bind(this, 'firstName');
    }

    checkPassword = () => {
        console.log(this.state);
        return this.state.password === this.state.confirmPassword;
    };

    displaySuccessMessage = () => {
        alert("User registered successfully.")
    };

    registerUser = () => {
        let {state} = this;
        let formData = {};
        if(this.checkPassword()){
            formData.firstName = state.firstName;
            formData.middleName = state.middleName;
            formData.lastName = state.lastName;
            formData.email = state.email;
            formData.password = state.password;
            formData.username = state.username;
        }
        console.log(formData);
        axios
            .post("http://localhost:8000/register/", formData).then(response => this.displaySuccessMessage())
    };

    setValue = (keyName, e) => {
        console.log(keyName, e.target.value);
        this.setState({[keyName]: e.target.value});
    };

    render() {
        let {state} = this;
        return(
            <div>
                <div className={'register-form-container'}>
                    <div>
                        <label htmlFor={'firstName'}>First Name *</label><br/>
                        <input type='text' id={'firstName'} name={'firstName'} value={state.firstName} onChange={
                            (e) => this.setValue('firstName', e)} required/>
                    </div>
                    <div className={'form-item-container'}>
                        <label htmlFor={'middleName'}>Middle Name</label><br/>
                        <input type='text' id={'middleName'} name={'middleName'} onChange={
                            (e) => this.setValue('middleName', e)} value={state.middleName}/>
                    </div>
                    <div className={'form-item-container'}>
                        <label htmlFor={'lastName'}>Last Name *</label><br/>
                        <input type='text' id={'lastName'} name={'lastName'} onChange={
                            (e) => this.setValue('lastName', e)} value={state.lastName} required/>
                    </div>
                    <div className={'form-item-container'}>
                        <label htmlFor={'username'}>Username *</label><br/>
                        <input type='text' id={'username'} name={'username'} onChange={
                            (e) => this.setValue('username', e)} value={state.username} required/>
                    </div>
                    <div className={'form-item-container'}>
                        <label htmlFor={'email'}>Email *</label><br/>
                        <input type='text' id={'email'} name={'email'} onChange={(e) => this.setValue('email', e)} value={state.email} required/>
                    </div>
                    <div className={'form-item-container'}>
                        <label htmlFor={'password'}>Password *</label><br/>
                        <input type='password' id={'password'} name={'password'} onChange={(e) => this.setValue('password', e)} value={state.password} required/>
                    </div>
                    <div className={'form-item-container'}>
                        <label htmlFor={'confirm-password'}>Confirm Password *</label><br/>
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

export default RegisterForm;