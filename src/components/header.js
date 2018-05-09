import React,{Component} from 'react';
import {Link, Route, Switch } from "react-router-dom";
import Home from './home';
import Features from './features';
import Support from './support';
import Contact from './contact';

class Header extends Component{
    render(){
        return (
            <div className="header">
                <img className="header-logo-image" src = "src/images/siliconAppHeadingLogo.png" />
                <span><Link to='/contact'>Contact</Link></span>
                <span><Link to='/support'>Support</Link></span>
                <span><Link to='/features'>Features</Link></span>
                <span><Link to='/'>Home</Link></span>

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/features" component={Features} />
                    <Route exact path="/support" component={Support} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
            </div>
        )
    }
}

export default Header;