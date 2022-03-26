import React, { Component } from 'react';

export default class Timer extends Component {
   
   constructor(props){
        super(props)
        this.state = {
            sec: 0,
            min: 0,
            hour: 0 
        };
        setInterval(() => {
            this.setState((prevState) => {
                let newSec = prevState.sec + 1;
                let newMin = prevState.min;
                let newHour = prevState.hour;
                if (newSec > 59) {
                    newMin += 1;
                    newSec = 0;
                } 
                if (newMin > 59) {
                    newHour += 1;
                    newMin = 0;
                }
    
                return {
                    sec: newSec,
                    min: newMin,
                    hour: newHour
                }
            });
        }, 1000);
    }
  
  render(){
    return (
      <div>
        <h3>
            {this.state.sec < 10 && 
                <div>
                    Time: {this.state.min}:0{this.state.sec}
                </div>
            }
            {this.state.sec > 9 &&
                <div>
                    Time: {this.state.min}:{this.state.sec}
                </div>
            }
        </h3>
      </div>
    )
  }
}

 