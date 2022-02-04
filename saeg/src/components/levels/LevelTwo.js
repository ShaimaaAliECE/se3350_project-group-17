import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Draggable from 'react-draggable';


export default class LevelTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            message: 'Click or drag onto the line the 5 elements on the left',
            arrayTwo: null,
            nums: [],
            stepOneLeft: [],
            stepOneRight: [],
        }
        for (let i=0; i<10; i++) {
            // add 10 random integers between 1 and 20 to nums array
            this.state.nums.push(Math.floor(Math.random() * 21));
        }
    }
    render() {
        const arrayOne = [...this.state.nums].map((value, index) => {
            return (
                <Draggable>
                    <Button key={index} onClick={
                        () => {
                            if (this.state.counter===0) {
                                this.state.stepOneLeft.push(value);
                                if (this.state.stepOneLeft.length>=5) {
                                    let temp = [...this.state.nums].slice(0, 5);
                                    // allows zero mistakes for now
                                    for (let i=0; i<5; i++) {
                                        if (!temp.includes(this.state.stepOneLeft[i])) {
                                            alert("wrong");
                                            window.location.reload();
                                        } else {
                                            temp.splice(temp.indexOf(this.state.stepOneLeft[i]), 1);
                                        }
                                    }
                                    alert("correct");
                                    this.setState({
                                        counter: 1,
                                        message: 'Click or drag onto the line the 5 elements on the right',
                                    });
                                }
                            } else if (this.state.counter===1) {
                                this.state.stepOneRight.push(value);
                                if (this.state.stepOneRight.length>=5) {
                                    let temp = [...this.state.nums].slice(5);
                                    // allows zero mistakes for now
                                    for (let i=0; i<5; i++) {
                                        if (!temp.includes(this.state.stepOneRight[i])) {
                                            alert("wrong");
                                            window.location.reload();
                                        } else {
                                            temp.splice(temp.indexOf(this.state.stepOneRight[i]), 1);
                                        }
                                    }
                                    alert("correct");
                                    const array2Left = [...this.state.nums].slice(0, 5).map((value) => {
                                        return (
                                            <Draggable>
                                                <Button key={index} 
                                                    style={{
                                                        marginTop: "10%",
                                                    }}
                                                    variant="secondary"
                                                    onClick={
                                                        () => {
                                                            // add stuff for 2nd level left
                                                        }
                                                    }
                                                >
                                                    {value}
                                                </Button>
                                            </Draggable>
                                        )
                                    });
                                    const array2Right = [...this.state.nums].slice(5).map((value) => {
                                        return (
                                            <Draggable>
                                                <Button key={index}
                                                    variant="secondary"
                                                    style={{
                                                        marginTop: "10%",
                                                    }}
                                                    onClick={
                                                        () => {
                                                            // add stuff for 2nd level
                                                        }
                                                    }
                                                >
                                                    {value}
                                                </Button>
                                            </Draggable>
                                        )
                                    });
                                    const arrayTwo = (
                                        <div>
                                            {array2Left} {array2Right}
                                        </div>
                                    );
                                    this.setState({
                                        arrayTwo: arrayTwo,
                                        counter: 2,
                                        message: 'Click or drag the 3 elements on the left half of the left array'
                                    });
                                }
                            }
                        }
                    }>{value}</Button>
                </Draggable>
            )
        });
        return (
            <div>
                <h1>Level One</h1>
                <h2>MergeSort Algorithm</h2>
                <h3>{this.state.message}</h3>
                {arrayOne}
                <h3>________________    ________________</h3>
                {this.state.arrayTwo}
            </div>
        )
    }
}