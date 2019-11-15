import React from 'react';
import speaker3 from './speaker3.png';
import Flip from 'react-reveal/Flip';



class Latest extends React.Component {

    render() {

        return (


                <div className="latest">
                    <Flip bottom> 
                        <img src={speaker3} alt="speaker" className="speaker"/>
                    </Flip>
                    <p>Latest work</p>
                </div> 
   
        )
    }
}

export default Latest; 