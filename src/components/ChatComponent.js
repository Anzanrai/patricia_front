import React from 'react';
import {addResponseMessage, Chat} from "react-chat-popup";
import {CHAT_API_URL} from "../constants";

class ChatComponent extends React.Component {
    componentDidMount() {

        addResponseMessage("Hi! This is Patricia. How can I help you today?");
    }

    handleNewUserMessage = (newMessage) => {
        console.log(newMessage);
        fetch(CHAT_API_URL, {
            method: 'POST',
            // headers: {
            //     Accept: 'application/json',
            //     'Content-Type': 'application/json',
            // },
            body: JSON.stringify({
                sender: "Anjan",
                message: newMessage
            }),
        }).then(response => response.json()).then(res => {
            let responseMessage = res[0]['text'];
            console.log(responseMessage);
            addResponseMessage(responseMessage);
        });
        //logic to make api call for the user input statement goes here.
        // addResponseMessage("Hello");
    };

    render() {
        return (
            <Chat handleNewUserMessage = {this.handleNewUserMessage}/>
        );
    }
}

export default ChatComponent;
