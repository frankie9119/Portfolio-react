import React from 'react';
import me from './me3.png';
import speaker3 from './speaker3.png';


class Header extends React.Component {

    render() {

        return (

            <div className="headerComponent">
                <div className="my_img col-lg-5 col-md-5 col-sm-5">
                    <img src={me} alt="my_img" className="my_img"/>
                </div>
                <div className="p col-lg-7 col-md-7 col-sm-7">
                    <p>Hey, I am FRANCESCO.</p>
                    <p>I am a WEB DEVELOPER.</p>
                    <p>I graduated with a BA in Front End Developer</p>
                    <p>from OpenClassrooms and</p>
                    <p>I am looking for career opportunity.</p>
                    <p>Code is my passion, my life style and I just love it! </p>
                </div>
                <div className="latest">
                    <img src={speaker3} alt="speaker" className="speaker"/>
                    <p>Latest work</p>
                </div> 
            </div>      
        )
    }
}

export default Header;        

        