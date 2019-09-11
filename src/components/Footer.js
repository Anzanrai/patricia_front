import React from 'react'
import FooterBar from "./FooterBar";

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            style: {
                footerContainerStyle: {
                    backgroundColor: '#20a3b2',
                    height: 50,
                    fontFamily: "Marcellus",
                    color: 'white',
                    position: 'fixed',
                    width: '100%',
                    bottom: 0
                },
                footerContentContainerStyle: {
                    paddingLeft: 50,
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'flex-start'
                },
                footerContentStyle: {
                    paddingLeft: 20,
                    paddingTop: 20,
                    style: 'none',
                },
                footerTrademarkStyle: {
                    paddingLeft: 70,
                    paddingTop: 10,
                    fontWeight: 'bold',
                    // color: 'white'
                }
            }
        }
    }
    render(){
        // let {style} = this.state;
        return(
            <div className={'footer-container'}>
                <FooterBar/>
                <div className={'footer-content-container'}>
                    <span className={'footer-content'}>Product</span>
                    <span className={'footer-content'}>About</span>
                </div>
            </div>

        );
    }
}

export default Footer;