import React, { Component } from 'react';
import rest from './restaurantsMcIp.png';


const LeftComponent= (props) => {
  return(

            <div className="projectBlock">
                <div>
                    <a href={props.linkToPass} target="_blank">
				    <img src={props.restMcIp} className="projectImg" alt="projectImg" /></a>
                </div>
                <div className="projectContent">
                    <a href={props.linkToPass} target="_blank">
                    <h1>{props.restTitle}</h1></a>
                    <p>{props.rest}</p>
                    <img src={props.icons} className="ft_icon" alt="ft_icon" />                    
                </div>
            </div>
    )
};


export default LeftComponent;