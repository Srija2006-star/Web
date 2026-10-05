import React from "react";
import './App.css';
function App(){
  let name = "Srija";
  function msg(){
    alert("Button Clicked");
  }
  return(
    <div className="container">
      <h1 className="title">Welcome to My First App</h1>
      <p>This is my first React app. My name is {name}.</p>
      <button className="btn" onClick={msg}>Click Me</button>
      <input  className="input" type="text" placeholder="Type something..." />
    </div>
  )
}
export default App