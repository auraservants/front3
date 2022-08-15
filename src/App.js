import React from "react";
import palabras from "./data";

class App extends React.Component {
  render() {
    return (
    <div>
      {
        palabras.map((palabra,index) =>
        <h1 key={index} style={{color:"blue",textAlign:"center"}}>{palabra}</h1>)
      }
    </div>
    )
  }
}

export default App;
