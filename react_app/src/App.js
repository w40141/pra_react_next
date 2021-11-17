import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Rect from "./Rect";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super();
    this.title = props.title;
    this.message = props.message;
  }
  render() {
    return (
      <div>
        <h1 className="bg-primary text-white display-4">React</h1>
        <div className="container">
          <p className="subtitle">{this.title}</p>
          <p>{this.message}</p>
          <Rect x="200" y="200" w="200" h="200" c="cyan" />
          <Rect x="300" y="300" w="200" h="200" c="magenta" />
        </div>
      </div>
    );
  }
}
export default App;
