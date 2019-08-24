import React from 'react'
import ChatComponent from "./ChatComponent";

class Body extends React.Component{
    render() {
        // const chatBubble = require('../images/conversation.png');
        return(
            <div>
                <div className={'chat-component-container'}>
                {/*<div>*/}
                    <ChatComponent/>
                </div>
                {/*<div style={{backgroundColor: '#20a3b2', position: 'fixed',*/}
                {/*    bottom: '120px', right: 0, height: 30, fontFamily: 'Marcellus', color: 'white',*/}
                {/*    borderStyle: 'solid', borderColor: 'white', borderWidth: '2px',*/}
                {/*    width: 250, textAlign: 'center', float: 'right'*/}
                {/*}}>*/}
                {/*    <div style={{paddingTop: 7}}>*/}
                {/*        <span >Chat With Patricia ... <img src={chatBubble} alt={"chat bubble"} width={15} height={15}/></span>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default Body