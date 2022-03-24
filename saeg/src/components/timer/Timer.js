import React, { Component } from 'react';

let timerInterval = 80;
 let mseconds=0;
 let Seconds=0;
 let minutes=0;
 let hours=0;
    let timer; 
    function makeTimer(){
      mseconds+=1;
     /* for (var i = 0; i < 1000; i++) {
  Seconds ++;
mseconds =0;
} */
   if(mseconds!== 0 && mseconds==10000){
          Seconds++;
          mseconds =0;
      }
     if(Seconds!== 0 && Seconds==60){
          minutes++;
          Seconds =0;
      }
     if (minutes!= 0 && minutes==60){
          hours++;
          minutes=0;
      }
  }
export default class Timer extends Component {
   
   constructor(props){
    super(props)
    this.state = {Number : 0}
    this.makeTimer()
  }
  
  makeTimer(){
    setInterval(() => {
        this.setState(prevState =>{
            
        })
       /* let seconds;
        let minutes =0;
        let hours=0;
        let timerInterval=10;
        seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes ++;// reset timer to be within 32 bit size
    }*/
    //setInterval(makeTimer, timerInterval);
        this.setState({number: mseconds})
    })
  }

  render(){
     setInterval(makeTimer,timerInterval);
    return (
      <div>
        <h1>
         Time: {hours}:{minutes}:{Seconds}:{mseconds}
        </h1>
      </div>
    )
  }
}
//give tag to head
//document.innerHTML
//reference the ID of the tag by using GetElementById
//input the tag of the header field that you are using
//
   /*constructor(props){

    super(props)
    this.state = {Number : 0}
    this.makeTimer()
  }
  
  makeTimer(){
    setInterval(() => {
        this.setState(prevState =>{
            
        })
        let timer;
        let timerInterval=10;
        timer++;
    if (timer == 4294967295) {
        timer = Math.floor(1000 * Math.random()); // reset timer to be within 32 bit size
    }
    setInterval(makeTimer, timerInterval);
      /*let rand = 0
      rand += 1
      rand += 1
      rand += 1
      rand += 1
        this.setState({number: timer})
    }, 300)
  }

  render(){
    return (
      <div>
        <h1>
          Random Number : 
          {this.state.number}
        </h1>
      </div>
    )
  }
}*/
        /*constructor(props){
          super(props)
          this.state = {sec: 0}
          this.TimerFunction()
        }
        
        TimerFunction(){
          setInterval(() => {
            let Seconds = 0
           for (var i = 0; i < 10; i++) {
  Seconds ++;
} 
for (var i = 10; i < 20; i++) {
  Seconds ++;
} 
              this.setState({sec: Seconds})
          }, 4000)
        }
        render(){
          return (
            <div className="Timer">
              <h4>
            
                {this.state.sec}
              </h4>
            </div>
          )
        
      }
    }*/////////////////////////
        
      
               /* if(sec=60){
                    min = prevState.min +1;
                    sec=0
                }
                if (min=60){
                    hour= prevState.hour +1;
                    min=0;
                }*/
        /*constructor(){
             super();
                     
                    this.state={
                        sec: 0,
                        min: 0,
                        hour:0,
                        
                     }
                     
                }
        setInterval=()=>{
            
            this.setState(prevState =>{
                return{sec:prevState.sec +1,
                }
                },1000);
                
            };
    
    render(){
        return (
        <div className="Timer">
        <h4>{this.state.sec}:{this.state.min}:{this.state.hour}</h4>
        </div>
        ) 
    }
}*/



    /*constructor(){
        super();
         function TimerFunction (){
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
            }
            return sec,min,hour
        }
        this.state={
            sec: 0,
            min: 0,
            hour:0,
         }
         
    }
   
    render(){

        return (
        <div className="Timer">
        <h4>{this.state.sec}:{this.state.min}:{this.state.hour}</h4>
        </div>
        ) 
    }
    

}*/
/*ComponentDidMount(){
        
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