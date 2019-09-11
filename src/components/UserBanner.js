import React from 'react';


class UserBanner extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username : this.props.username
        }
    }
    render() {
        return(
            <div className={'bannerStyleContainer'}>
                <div className={'bannerStyle'}>
                    Welcome, {this.state.username}!!!
                </div>
            </div>
        );
    }
}

export default UserBanner;