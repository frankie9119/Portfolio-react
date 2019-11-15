import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';


const Todos= (props) => {
  return(

		<div className="projectBlock">
		<Fade left>
            <div className="projectContent">
                <a href="https://todos-react-app.000webhostapp.com/" target="_blank">
            		<h1>Todos React Project</h1>
            	</a>
            	<p>{props.rest}</p>
                <img src={props.todosIcons} className="ft_icon" alt="ft_icon" />
            </div>
        </Fade>
        <Fade right>
            <div>
            	<a href="https://todos-react-app.000webhostapp.com/" target="_blank">
                    <video className="VideoPlayer projectImg " loop autoPlay muted>
                    	<source src='http://francasadei.com/static/media/TodosVideo.mp4' type="video/mp4"/>
                    </video>
                </a>
            </div>
		 </Fade>               
		</div>

  )
};


export default Todos;