import React from 'react'
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            style : {
                homeBackgroundStyle: {
                    imageURL : "/home/unknownDevil/Documents/patricia_front/src/images/botImage.jpg",
                }
            }
        }
    }

    render() {
        return(
            <div>
                <Header/>
                <Body/>
                <Footer/>
            </div>
        );
    }
}

export default Home;