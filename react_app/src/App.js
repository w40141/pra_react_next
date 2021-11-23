// import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
// import Rect from "./Rect";

let theme = {
  light: {
    styles: {
      backgroundColor: "#f0f9ff",
      color: "#00f",
    },
    head: "bg-primary text-white display-4 mb-4",
    alert: "alert alert-primary my-3",
    text: "text-primary m-3",
    foot: "py-4",
  },
  dark: {
    styles: {
      backgroundColor: "#336",
      color: "#eef",
    },
    head: "bg-secondary text-white display-4 mb-4",
    alert: "alert alert-dark my-3",
    text: "text-light m-3",
    foot: "py-4",
  },
};

const ThemeContext = React.createContext(theme.dark);

class App extends Component {
  static contextType = ThemeContext;
  render() {
    return (
      <div>
        <h1 className="bg-primary text-white display-4">React</h1>
        <div className="container">
          <Title value="Content page"/>
          <Message value="This is content sample."/>
          <Message value="これはテーマのサンプルです。"/>
          <div className={this.context.foot}></div>
        </div>
      </div>
    );
  }
}

class Title extends Component {
  static contextType = ThemeContext;

  render() {
    return (
      <div className={this.context.alert}>
        <h2 style={this.context.style}>{this.props.value}</h2>
      </div>
    );
  }
}

class Message extends Component {
  static contextType = ThemeContext;
  render() {
    return (
      <div className={this.context.alert}>
        <p className={this.context.text}>{this.props.value}</p>
      </div>
    );
  }
}

export default App;
