import React from 'react'
import Header from "./Header";
// import Footer from "./Footer";
import Body from "./Body";
// import FooterBar from "./FooterBar";
import Footer from "./Footer";
// import Login from "./LoginFormComponent";

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            style : {
                homeBackgroundStyle: {
                    imageURL : "/home/unknownDevil/Documents/patricia_front/src/images/botImage.jpg",
                    // backgroundImage : `url(${this.state.style.imageURL})`,
                }
            }
        }
    }

    render() {
        return(
            <div className={'home-bg'}>
                <Header/>
                <Body/>
                <Footer/>
            </div>
        );
    }
}

export default Home;