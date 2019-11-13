import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';




const RightComponent= (props) => {
  return(

        <div className="projectBlock">
        <Fade left>
            <div className="projectContent">
                <a href={props.linkToPass} target="_blank">
                <h1>{props.restTitle}</h1></a>
                <p>{props.rest}</p>
                <img src={props.icons} className="ft_icon" alt="ft_icon" /> 
            </div>
        </Fade>
        <Fade right>
            <div className="imgProject">
                <a href={props.linkToPass} target="_blank">
                    <img src={props.restMcIp} className="projectImg" alt="projectImg" />
                </a>
            </div>
        </Fade>      
        </div>
  )
};


export default RightComponent;