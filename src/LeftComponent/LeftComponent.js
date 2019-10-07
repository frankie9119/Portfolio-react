import React, { Component } from 'react';
import rest from './restaurantsMcIp.png';


const LeftComponent= (props) => {
  return(

<div className="t_project flex_container wrap">
                                <div>
                                <a href={props.linkToPass} target="_blank">
				<img src={props.restMcIp} className="restaurantsMcIp" alt="restaurantsMcIp" /></a>


                </div>
                <div className="todos_project">
                    <a href={props.linkToPass} target="_blank">
                                    <h1>{props.restTitle}</h1></a>
                <p>{props.rest}</p>
                </div>

                
</div>


  )
};


export default LeftComponent;