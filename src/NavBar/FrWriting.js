import React, { Component } from 'react';

const FrWriting= (props) => {

	let ReactRotatingText = require('react-rotating-text');

  return(
            <div className="rotatingText">
                <ReactRotatingText items={['Francesco', '_', 'Welcome to my website']} />            
            </div>
  )
};


export default FrWriting;

