import React,{Component} from 'react';
import Footer from './footer';

class LowerBody extends Component{
    render(){
        return(
            <div className="main-content-lower">
                <div>
                    <img className="download-image" src="src/images/download.png" />
                    <span className="download-image-text">
                        <p className="download">Download</p>
                        <p>30 days free trial</p>
                    </span>

                    <img className="locker-image" src="src/images/locker.png" />
                    <span className="locker-image-text">
                        <p className="locker">Buy Now</p>
                        <p>start only from $29.99</p>
                    </span>

                    <img className="question-image" src="src/images/question.png" />
                    <span className="question-image-text">
                        <p className="question">Live Support</p>
                        <p>F.A.Q and expert Forums</p>
                    </span>
                    <hr className="main-content-line" />
                    <div className="main-content-div-left">
                        <h3 className="main-content-heading">MAIN FEATURES DESCRIPTION</h3>
                        <hr className="heading-line" />
                        <ul className="main-content-list">
                            <li>Beautiful and unique GUI, offers an easy to use workflow and highly polished visual cues.</li>
                            <li>Straight nine' the curve, flatnin' the hills. Someday the mountain will get them.</li>
                            <li>But the law never will.Makin' their way, the only way they know how.</li>
                        </ul>
                        <ul className="main-content-list-second">
                            <li>Beautiful and unique GUI, offers an easy to use workflow and highly polished visual cues.</li>
                            <li>Straight nine' the curve, flatnin' the hills. Someday the mountain will get them.</li>
                            <li>But the law never will.Makin' their way, the only way they know how.</li>
                        </ul>
                        <hr className="heading-line" />
                        <div className="main-content-button">
                            <button>View All The Features <i className="fa fa-arrow-circle-o-right"></i></button>
                        </div>
                    </div>
                    <div className="main-content-div-right">
                        <h3 className="main-content-heading-right">TAKE A CLOSER LOOK</h3>
                        <hr className="heading-line-second" />
                        <p>Curios about AppStorm? Check the interface screenshots below:</p>
                        <img className="main-content-div-right-image" src="src/images/screenshots.png" />
                        <hr className="heading-line-second" />
                        <div className="main-content-button">
                            <button>Download Latest Update <i className="fa fa-arrow-circle-o-right"></i></button>
                        </div>
                    </div>    
                </div>
                <Footer />
            </div>
        )
    }
}

export default LowerBody;