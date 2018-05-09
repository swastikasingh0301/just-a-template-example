import React,{Component} from 'react';

class Home extends Component{
    render(){
        return(
            <div className="home-body-div"> 
                <div className="home-body-div-left"> 
                    <h2 className="home-body-heading">Smart & Concise Product Tagline</h2>
                    <p className="home-body-text">SiliconApp is a Powerful piece of software that is meant to unleash the power of your computer 
                    by running a series of optimizations designed specially for 64-bit operating system.</p>
                </div>
                <div className="home-body-div-right">
                    <img src="src/images/softwareProduct.jpg" className="home-body-image"/>
                </div>    
            </div>
        ) 
    }
}

export default Home;