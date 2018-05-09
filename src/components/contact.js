import React, {Component} from 'react';

class Contact extends Component{
    render(){
        return(
            <div>
                <div className="contact-div-left">
                    <h2 className="contact-heading">Contact </h2>
                    <p className="contact-info">
                        You can contact us at: <br />
                        SiliconApp Software Pvt Ltd. <br />
                        #90, 3rd floor, <br />
                        SomePlaceHereInBangalore,<br />
                        Bangalore, India.<br />
                        swastika123@example.com,<br />
                        +91-1234567890
                    </p>
                </div>
                <div className="contact-div-right">
                    <img className="contact-image" src="src/images/siliconAppContact3.jpg" />
                </div>    
            </div>
        )
    }
}

export default Contact;