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
    this.state = {
      msg: "count start!",
      count: 0,
      flag: true,
    };
    this.doAction = this.doAction.bind(this);
  }

  doAction(event) {
    this.setState({
      count: this.state.count + 1,
      msg: "*** count:" + this.state.count + " ***",
      flag: !this.state.flag,
    });
  }
  render() {
    return (
      <div>
        <h1 className="bg-primary text-white display-4">React</h1>
        <div className="container">
          <p className="subtitle">Show message.</p>
                    {this.state.flag? 
          <div className="alert alert-warning text-right">
            <p className="h5 mb-4">count: {this.state.msg}</p>
            </div>:
          <div className="alert alert-warning text-left">
            <p className="h5 mb-4">{this.state.msg}</p>
            </div>
                    }
          <div className="alert alert-warning text-center">
            <button className="btn btn-primary" onClick={this.doAction}>
              Click
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
