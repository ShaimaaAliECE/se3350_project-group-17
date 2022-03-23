import React, { Component } from 'react';

            var sec =0;
            var min = 0;
            var hour = 0;
export default class Timer extends Component {
   
    constructor()
    {
        
        super();
         function TimerFunction(){

            var sec=0;
       
            var hour=0;
        
            while(true){
                 sec+=1;
                 
                 if(sec==60){
                    var min= min +1;
                     sec=0;
                 }
                 if(min==60){
                     hour = hour +1;
                     min=0;
                 }
                 //print(hour+":"+min+":"+sec);
            }
            return sec,min,hour
            
        
        }
        this.state={
            sec: TimerFunction.sec,
            min: 0,
            hour:0,
        }
    }
    /*componentDidMount(){
        
        setInterval(() => {
            
           this.setState(prevState => {
                return{
                    sec,
                    min,
                    hour,
                }
               
           },1000);
        }
        )
   }*/

    render(){
      
        return (
        <div className="Timer">
        <h4>{this.state.sec}:{this.state.min}:{this.state.hour}</h4>
        </div>
        ) 
    }
    
}
/*
function TimerFunction(){

    var sec=0;
    var min=0
    var hour=0;

    while(true){
        sec+=1;
         
         if(sec==60){
            min= TimerMinutes +1;
             sec=0;
         }
         if(min==60){
             hour = hour +1;
             min=0;
         }
         print(hour+":"+min+":"+sec);
    }
    

}
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
            */


//MY CODE ABOVE



    /*
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
}*/
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
 