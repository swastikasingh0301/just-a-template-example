import React, {Component} from 'react';

class Features extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="features-body-div-left">
                    <p className="features-body-text">SiliconApp is always ready for the new operating system. Catalogue Ionic's architecture is extremely modular. Furthermore, because it was built using a very popular Yeoman generator for the Ionic framework,
                        you can be sure that it follows several best practices.</p>    
                </div>
                <div className="features-body-div-right">
                    <img className="features-body-img" src="src/images/siliconAppLaptop.jpg" />
                </div>
                <div className="features-body-div-lower">
                    <div className="features-lower-left">
                        <img className="features-body-lower-img" src="src/images/siliconAppClock2.jpg" />
                    </div>
                    <div className="features-lower-right">
                        <p className="features-body-lower-text">SiliconApp is always ready for the new operating system. Catalogue Ionic's architecture is extremely modular. Furthermore, because it was built using a very popular Yeoman generator for the Ionic framework,
                        you can be sure that it follows several best practices.</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Features;