import React, {Component} from 'react';
import Header from './header';
import UpperBody from './upperBody';
import LowerBody from './lowerBody';

class Main extends Component{
    render(){
        return(
            <React.Fragment>
                <Header />,
                <UpperBody />,
                <LowerBody />
            </React.Fragment>
        ) 
    }
}

export default Main;