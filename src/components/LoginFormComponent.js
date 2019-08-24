import React from 'react'

class LoginFormComponent extends React.Component{
    render(){
        return(
            <div className={'login-form'}>
                <form>
                    <div>
                        <label htmlFor={'username'}>Email / Username</label><br/>
                        <input type={'text'} name={'username'} id={'username'}/>
                    </div>
                    <div className={'form-item-container'}>
                        <label htmlFor={'password'}>Password</label><br/>
                        <input type={'password'}/>
                    </div>
                    <div className={'login-button-container'}>
                        <input type={'submit'} className={'login-button'}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginFormComponent;