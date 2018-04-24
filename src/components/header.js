import React,{Component} from 'react';

class Header extends Component{
    render(){
        return (
            <div className="header">
                <img className="header-logo-image" src = "src/images/siliconAppHeadingLogo.png" />
                <span>Contact</span>
                <span>Support</span>
                <span>Feature</span>
                <span>Home</span>
            </div>
        )
    }
}

export default Header;