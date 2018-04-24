import React,{Component} from 'react';

class Footer extends Component{
    render(){
        return (
            <div className="footer-div">
                <span className = "footer-div-span">
                    <span>Home</span>
                    <span>Feature</span>
                    <span>Support</span>
                    <span>Contact</span>
                </span>
                <span className="footer-div-copy">&copy 2009 Software Company. All rights reserved</span>  
            </div>
        )
    }
}

export default Footer;