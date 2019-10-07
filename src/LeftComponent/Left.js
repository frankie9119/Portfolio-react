import React, { Component } from 'react';
import rest from './gameImac-copia.jpg';


const LeftComponent= (props) => {
  return(

<div className="row t_project flex_container wrap">
                
                <div className="todos_project">
                    <a href="https://todos-react-app.000webhostapp.com/" target="_blank"></a>
                <h1>Todos React Project</h1>
                <p>{props.rest}</p>
                </div>
                <div>
                        <video className="VideoPlayer" loop autoPlay muted>
                            <source src='http://francasadei.com/video/todos-video.mp4' type="video/mp4"/>
                        </video>


                </div>
                
</div>


  )
};


export default LeftComponent;