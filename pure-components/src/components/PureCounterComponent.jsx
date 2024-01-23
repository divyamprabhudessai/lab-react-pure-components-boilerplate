import React from "react";
import{ PureComponent } from "react";

export default class PureCounterComponent extends PureComponent{
    constructor() {
        super();
        this.state = {
          toggle: false,
          count: 0,
        };
      }

      setToggle = () => {
       this.setState({
        toggle : !this.state.toggle
       })
      };
    
      handleCounter = () => {
        if (this.state.toggle === true) {
          
          this.setState({
            count: this.state.count + 1,
          })  
              
          
        }

        else{
            this.setState({
                count: this.state.count
            })
        }
      };
    
      render() {
        console.log(`This is Pure Component`)
        return (
          <>
            <div>
              <h1>Pure Component</h1>
              <br />
              <p>{this.state.count}</p>
              <button onClick={this.setToggle}>Set toggle</button>
              <button onClick={this.handleCounter}>Counter</button>
            </div>
          </>
        );
      }
    }


