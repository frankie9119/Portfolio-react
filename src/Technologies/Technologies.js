import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';




const Technologies = (props) => {
    return (
        
            <div className="techBlock">
                <p className="tech_p">I am mainly working with this technologies:</p>
                <Fade down>
                <i className="tech_icons fab fa-js-square"></i>
                </Fade>
                <Fade up>
                <i className="tech_icons fab fa-react"></i>
                </Fade>
                <Fade down>
                <i className="tech_icons fab fa-html5"></i>
                </Fade>
                <Fade up>
                <i className="tech_icons fab fa-css3"></i> 
                </Fade>
                <Fade down>
                <i className="tech_icons fab fa-bootstrap"></i>
                </Fade>
                <Fade up>
                <i className="tech_icons fab fa-wordpress"></i>
                </Fade>    
            </div>
          
    )
};


export default Technologies;