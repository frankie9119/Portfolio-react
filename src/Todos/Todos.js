import React, { Component } from 'react';


const Todos= (props) => {
  return(

<div className="t_project flex_container wrap">
                
                <div className="todos_project">
                    <a href="https://todos-react-app.000webhostapp.com/" target="_blank">
                <h1>Todos React Project</h1></a>
                <p>{props.rest}</p>
                </div>
                <div><a href="https://todos-react-app.000webhostapp.com/" target="_blank">
                        <video className="VideoPlayer restaurantsMcIp " loop autoPlay muted>
                        
                            <source src='http://francasadei.com/video/todos-video.mp4' type="video/mp4"/>
                        
                        </video></a>


                </div>
                
</div>


  )
};


export default Todos;