import React, { Component } from 'react';

export default class Timer extends Component {
    
    render() {
        var TimerSeconds=0;
            var TimerMinutes=0
            var TimerHours=0;
        function Timer(){

            while(1){
                TimerSeconds+=1;
                 
                 if(TimerSeconds==60){
                     TimerMinutes= TimerMinutes +1;
                     TimerSeconds=0;
                 }
                 if(TimerMinutes==60){
                     TimerHours = TimerHours +1;
                     TimerMinutes=0;
                 }
            }
        }
        Timer();
         return (
            <h4>{TimerHours + ":"+TimerMinutes+ ":"+TimerSeconds}</h4>
        )
    }
}
        /*
        while(true) {
            setTimeout(
                () => {
                     while(1){ 
                        TimerSeconds+=1;
                         if(TimerSeconds==60){
                             TimerMinutes= TimerMinutes +1;
                             TimerSeconds=0;
                         }
                         if(TimerMinutes==60){
                             TimerHours = TimerHours +1;
                             TimerMinutes=0;
                         }
                    }
                    

                    /*this.setState({
                        seconds: this.state.seconds + 10,
                    });
                }, 100000000
            )
        }*/
        

/*

    constructor()
    {
        super();

        this.state={
            sec: 0,
            min: 0,
            hour:0,
        }
    }
    

    render(){
        <div className="Timer">
        <h1>{this.state.sec}:{this.state.min}:{this.state.hour}</h1>
        </div>
    }
}
 /* 
 
    

function Timer(){

    var TimerSeconds=0;
    var TimerMinutes=0
    var TimerHours=0;

    while(1){
        TimerSeconds+=1;
         
         if(TimerSeconds==60){
             TimerMinutes= TimerMinutes +1;
             TimerSeconds=0;
         }
         if(TimerMinutes==60){
             TimerHours = TimerHours +1;
             TimerMinutes=0;
         }
    }


} */
