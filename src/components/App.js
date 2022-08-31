import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  return (
    <div id="main">
        <h1 data-ns-test="project-name">Project Name - Let's Play</h1>
        
        <div data-ns-test="project-description">
          <h2>Project Description</h2>
          <p>A online plateform to organise sports events.</p>
        </div>      
    </div>
    
  )
}

export default App;
