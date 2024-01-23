import React, { Component } from "react";

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
      count: 0,
    };
  }

  componentDidMount() {
    console.log("This is Simple Component");
  }

  componentDidUpdate( prevState) {
    if (this.state.toggle !== prevState.toggle  || this.state.count !== prevState.count) {
      console.log("This is a simple component");
    }
  }

//   or you can remove strictmode from main.jsx strictmode renders each component in react twice 

  setToggle = () => {
    this.setState((prevState) => {
      return {
        toggle: !prevState.toggle,
      };
    });
  };

  handleCounter = () => {
    if (this.state.toggle) {
      this.setState((prevState) => {
        return {
          count: prevState.count + 1,
        };
      });
    }
  };

  render() {
    return (
      <>
        <div>
          <h1>Simple Component</h1>
          <br />
          <p>{this.state.count}</p>
          <button onClick={this.setToggle}>Set toggle</button>
          <button onClick={this.handleCounter}>Counter</button>
        </div>
      </>
    );
  }
}
