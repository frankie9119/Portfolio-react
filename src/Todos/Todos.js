import React, { Component } from 'react';


const Todos= (props) => {
  return(

		<div className="projectBlock">
		                
            <div className="projectContent">
                <a href="https://todos-react-app.000webhostapp.com/" target="_blank">
            		<h1>Todos React Project</h1>
            	</a>
            	<p>{props.rest}</p>
                <img src={props.todosIcons} className="ft_icon" alt="ft_icon" />
            </div>
            <div>
            	<a href="https://todos-react-app.000webhostapp.com/" target="_blank">
                    <video className="VideoPlayer projectImg " loop autoPlay muted>
                    	<source src='http://francasadei.com/video/todos-video.mp4' type="video/mp4"/>
                    </video>
                </a>
            </div>
		                
		</div>

  )
};


export default Todos;