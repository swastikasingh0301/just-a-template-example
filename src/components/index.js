import React, {Component} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Header from './header';
import UpperBody from './upperBody';
import LowerBody from './lowerBody';

class Main extends Component{
    render(){
        return(
            <React.Fragment>
                <Router>
                    <Header />
                </Router>
                <UpperBody />
                <LowerBody />
            </React.Fragment>
        ) 
    }
}

export default Main;