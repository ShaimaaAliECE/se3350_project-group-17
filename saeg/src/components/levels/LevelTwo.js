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
            arrayThree: null,
            nums: [],
            stepOneLeft: [],
            stepOneRight: [],
            stepTwoLeft1: [],
            stepTwoLeft2: [],
            stepTwoRight1: [],
            stepTwoRight2: [],
        }
        for (let i=0; i<10; i++) {
            // add 10 random integers between 1 and 20 to nums array
            this.state.nums.push(Math.floor(Math.random() * 21));
        }
    }
    render() {
        //TODO: add audio feedback where we have alerts
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
                                                        marginTop: "5%",
                                                    }}
                                                    variant="secondary"
                                                    onClick={
                                                        () => {
                                                            if (this.state.counter===2) {
                                                                this.state.stepTwoLeft1.push(value);
                                                                if (this.state.stepTwoLeft1.length>=3) {
                                                                    let temp = [...this.state.nums].slice(0, 3);
                                                                    for (let i=0; i<3; i++) {
                                                                        if (!temp.includes(this.state.stepTwoLeft1[i])) {
                                                                            alert("wrong");
                                                                            window.location.reload();
                                                                        } else {
                                                                            temp.splice(temp.indexOf(this.state.stepTwoLeft1[i]), 1);
                                                                        }
                                                                    }
                                                                    alert("correct");
                                                                    this.setState({
                                                                        counter: 3,
                                                                        message:  'Click or drag the 2 elements on the right half of the left array',
                                                                    });
                                                                }
                                                            } else if (this.state.counter===3) {
                                                                this.state.stepTwoLeft2.push(value);
                                                                if (this.state.stepTwoLeft2.length>=2) {
                                                                    let temp = [...this.state.nums].slice(3, 5);
                                                                    for (let i=0; i<2; i++) {
                                                                        if (!temp.includes(this.state.stepTwoLeft2[i])) {
                                                                            alert("wrong");
                                                                            window.location.reload();
                                                                        } else {
                                                                            temp.splice(temp.indexOf(this.state.stepTwoLeft2[i]), 1);
                                                                        }
                                                                    }
                                                                    alert("correct");
                                                                    this.setState({
                                                                        counter: 4,
                                                                        message:  'Click or drag the 3 elements on the left half of the right array',
                                                                    });
                                                                }
                                                            }
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
                                                        marginTop: "5%",
                                                    }}
                                                    onClick={
                                                        () => {
                                                            if (this.state.counter===4) {
                                                                this.state.stepTwoRight1.push(value);
                                                                if (this.state.stepTwoRight1.length>=3) {
                                                                    let temp = [...this.state.nums].slice(5, 8);
                                                                    for (let i=0; i<3; i++) {
                                                                        if (!temp.includes(this.state.stepTwoRight1[i])) {
                                                                            alert("wrong");
                                                                            window.location.reload();
                                                                        } else {
                                                                            temp.splice(temp.indexOf(this.state.stepTwoRight1[i]), 1);
                                                                        }
                                                                    }
                                                                    alert("correct");
                                                                    this.setState({
                                                                        counter: 5,
                                                                        message:  'Click or drag the 2 elements on the right half of the right array',
                                                                    });
                                                                }
                                                            } else if (this.state.counter===5) {
                                                                this.state.stepTwoRight2.push(value);
                                                                if (this.state.stepTwoRight2.length>=2) {
                                                                    let temp = [...this.state.nums].slice(8, 10);
                                                                    for (let i=0; i<2; i++) {
                                                                        if (!temp.includes(this.state.stepTwoRight2[i])) {
                                                                            alert("wrong");
                                                                            window.location.reload();
                                                                        } else {
                                                                            temp.splice(temp.indexOf(this.state.stepTwoRight2[i]), 1);
                                                                        }
                                                                    }
                                                                    alert("correct");
                                                                    // TODO: set up the onClick for all button maps included in arrayThree
                                                                    const array3Left1 = [...this.state.nums].slice(0, 3).map((value) => {
                                                                        return (
                                                                            <Draggable>
                                                                                <Button key={index}
                                                                                    variant="success"
                                                                                    style={{
                                                                                        marginTop: "5%",
                                                                                    }}
                                                                                    onClick={
                                                                                        () => {

                                                                                        }
                                                                                    }
                                                                                    >
                                                                                    {value}
                                                                                </Button>
                                                                            </Draggable>
                                                                        )
                                                                    });
                                                                    const array3Left2 = [...this.state.nums].slice(3, 5).map((value) => {
                                                                        return (
                                                                            <Draggable>
                                                                                <Button key={index}
                                                                                    variant="success"
                                                                                    style={{
                                                                                        marginTop: "5%",
                                                                                    }}
                                                                                    onClick={
                                                                                        () => {
                                                                                            
                                                                                        }
                                                                                    }
                                                                                    >
                                                                                    {value}
                                                                                </Button>
                                                                            </Draggable>
                                                                        )
                                                                    });
                                                                    const array3Right1 = [...this.state.nums].slice(5, 8).map((value) => {
                                                                        return (
                                                                            <Draggable>
                                                                                <Button key={index}
                                                                                    variant="success"
                                                                                    style={{
                                                                                        marginTop: "5%",
                                                                                    }}
                                                                                    onClick={
                                                                                        () => {
                                                                                            
                                                                                        }
                                                                                    }
                                                                                    >
                                                                                    {value}
                                                                                </Button>
                                                                            </Draggable>
                                                                        )
                                                                    });
                                                                    const array3Right2 = [...this.state.nums].slice(8, 10).map((value) => {
                                                                        return (
                                                                            <Draggable>
                                                                                <Button key={index}
                                                                                    variant="success"
                                                                                    style={{
                                                                                        marginTop: "5%",
                                                                                    }}
                                                                                    onClick={
                                                                                        () => {
                                                                                            
                                                                                        }
                                                                                    }
                                                                                    >
                                                                                    {value}
                                                                                </Button>
                                                                            </Draggable>
                                                                        )
                                                                    });
                                                                    const arrayThree = (
                                                                        <div>
                                                                            {array3Left1} {array3Left2} {array3Right1} {array3Right2}
                                                                            {/* TODO: fix the following lines */}
                                                                            <h3>_________ ______ _________ ______</h3>
                                                                        </div>
                                                                    );
                                                                    this.setState({
                                                                        counter: 6,
                                                                        message:  'Click or drag the 2 leftmost elements on the 1st subarray from the left in the 3rd row',
                                                                        arrayThree: arrayThree,
                                                                    });
                                                                }
                                                            }
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
                                            {/* TODO: fix the format of the lines below */}
                                            <h3>_________ ______ _________ ______</h3>
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
            <div style={{
                marginLeft: "20%",
            }}
            >
                <h1>Level One</h1>
                <h2>MergeSort Algorithm</h2>
                <h4>Ensure NOT to double click buttons</h4>
                <h4>Perform each step left-to-right</h4>
                <br />
                <h3>{this.state.message}</h3>
                {arrayOne}
                <h3>________________ __________________</h3>
                {this.state.arrayTwo}
                {this.state.arrayThree}
            </div>
        )
    }
}