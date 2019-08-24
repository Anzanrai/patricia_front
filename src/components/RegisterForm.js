import React from 'react';

class RegisterForm extends React.Component{
    render() {
        return(
            <div>
                <div className={'register-form-container'}>
                    <div>
                        <label htmlFor={'firstName'}>First Name *</label><br/>
                        <input type='text' id={'firstName'} name={'firstName'} required/>
                    </div>
                    <div className={'form-item-container'}>
                        <label htmlFor={'middleName'}>Middle Name</label><br/>
                        <input type='text' id={'middleName'} name={'middleName'}/>
                    </div>
                    <div className={'form-item-container'}>
                        <label htmlFor={'lastName'}>Last Name *</label><br/>
                        <input type='text' id={'lastName'} name={'lastName'} required/>
                    </div>
                    <div className={'form-item-container'}>
                        <label htmlFor={'username'}>Username *</label><br/>
                        <input type='text' id={'username'} name={'username'} required/>
                    </div>
                    <div className={'form-item-container'}>
                        <label htmlFor={'email'}>Email *</label><br/>
                        <input type='text' id={'email'} name={'email'} required/>
                    </div>
                    <div className={'form-item-container'}>
                        <label htmlFor={'password'}>Password *</label><br/>
                        <input type='text' id={'password'} name={'password'} required/>
                    </div>
                    <div className={'form-item-container'}>
                        <label htmlFor={'confirm-password'}>Confirm Password *</label><br/>
                        <input type='text' id={'confirm-password'} name={'confirm-password'} required/>
                    </div>
                    <div className={'form-item-container'}>
                        <input type='submit' value='Register' className={'login-button'}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterForm;