import React,{Component} from 'react';

class Support extends Component{
    render(){
        return (
            <React.Fragment>
                <div className = "support-div-left">
                    <img className="support-image" src="src/images/siliconAppMobile2.jpg" />
                    <p className="support-div-text">One of the key factors to choose a framework today are the tools we have to learn to fully understand and utilize it well.
                         As we already have a lot (Docker, Git, Rails, Django, Node.js, .NET) that can help us in deploying, versioning, providing servers, and for APIs — there’s only too much we can learn. 
                        And this can especially feel overwhelming for beginners.
                    </p>
                </div>        
            </React.Fragment>
        )
    }
}

export default Support;