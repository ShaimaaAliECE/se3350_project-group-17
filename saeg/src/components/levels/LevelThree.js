import React, { Component } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap'
import Draggable from 'react-draggable';
import { wrongFunction, correctFunction } from '../../functions/SoundFunctions';
import { Link } from 'react-router-dom';

export default class LevelThree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mistakes:0, 
            counter: 0,
            message: 'Click or drag onto the line the 5 elements on the left',
            arrayTwo: null,
            arrayThree: null,
            arrayFour: null,
            arrayFive: null,
            arraySix: null,
            arraySeven: null,
            arrayEight: null,
            answer: [],
            nums: [],
            stepOneLeft: [],
            stepOneRight: [],
            stepTwoLeft1: [],
            stepTwoLeft2: [],
            stepTwoRight1: [],
            stepTwoRight2: [],
            stepThree1: [],
            stepThree2: [],
            stepSixLeft1: [],
            stepSixLeft2: [],
            stepSixRight1: [],
            stepSixRight2: [],
            stepSevenLeft: [],
            stepSevenRight: [],
            stepEight: [],
        }
        for (let i=0; i<10; i++) {
            // add 10 random integers between 1 and 20 to nums array
            this.state.nums.push(Math.floor(Math.random() * 21));
        }
    }
    render() {
        /*TODO: whole component is bad practice (too many indents), fix if u want */

        //TODO: handle case where player clicks button in most recent row with a counter that is not handled (wrong if you don't go left-to-right)
        // above can be handled by reloading w/ alert + audio if you click the wrong array in else if (counter=x || counter=y) block
        
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
                                            wrongFunction();
                                            window.location.reload();
                                        } else {
                                            temp.splice(temp.indexOf(this.state.stepOneLeft[i]), 1);
                                        }
                                    }
                                    correctFunction();
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
                                            wrongFunction();
                                            window.location.reload();
                                        } else {
                                            temp.splice(temp.indexOf(this.state.stepOneRight[i]), 1);
                                        }
                                    }
                                    correctFunction();
                                    const array2Left = [...this.state.nums].slice(0, 5).map((value, index) => {
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
                                                                            wrongFunction();
                                                                            window.location.reload();
                                                                        } else {
                                                                            temp.splice(temp.indexOf(this.state.stepTwoLeft1[i]), 1);
                                                                        }
                                                                    }
                                                                    correctFunction();
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
                                                                            wrongFunction();
                                                                            window.location.reload();
                                                                        } else {
                                                                            temp.splice(temp.indexOf(this.state.stepTwoLeft2[i]), 1);
                                                                        }
                                                                    }
                                                                    correctFunction();
                                                                    this.setState({
                                                                        counter: 4,
                                                                        message:  'Click or drag the 3 elements on the left half of the right array',
                                                                    });
                                                                }
                                                            } else {
                                                                wrongFunction();
                                                            }
                                                        }
                                                    }
                                                >
                                                    {value}
                                                </Button>
                                            </Draggable>
                                        )
                                    });
                                    const array2Right = [...this.state.nums].slice(5).map((value, index) => {
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
                                                                            wrongFunction();
                                                                            window.location.reload();
                                                                        } else {
                                                                            temp.splice(temp.indexOf(this.state.stepTwoRight1[i]), 1);
                                                                        }
                                                                    }
                                                                    correctFunction();
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
                                                                            wrongFunction();
                                                                            window.location.reload();
                                                                        } else {
                                                                            temp.splice(temp.indexOf(this.state.stepTwoRight2[i]), 1);
                                                                        }
                                                                    }
                                                                    correctFunction();
                                                                    const array3Left1 = [...this.state.nums].slice(0, 3).map((value, index) => {
                                                                        return (
                                                                            <Draggable>
                                                                                <Button key={index}
                                                                                    variant="success"
                                                                                    style={{
                                                                                        marginTop: "5%",
                                                                                    }}
                                                                                    onClick={
                                                                                        () => {
                                                                                            if (this.state.counter===6) {
                                                                                                this.state.stepThree1.push(value);
                                                                                                if (this.state.stepThree1.length>=2) {
                                                                                                    let temp = [...this.state.nums].slice(0, 2);                                                                                                    for (let i = 0; i < 2; i++) {
                                                                                                        if (!temp.includes(this.state.stepThree1[i])) {
                                                                                                            wrongFunction();
                                                                                                            window.location.reload();
                                                                                                        } else {
                                                                                                            temp.splice(temp.indexOf(this.state.stepThree1[i]), 1);
                                                                                                        }
                                                                                                    }
                                                                                                    correctFunction();
                                                                                                    this.setState({
                                                                                                        counter: 7,
                                                                                                        message:  'Click or drag the element on the right of the leftmost array on the 3rd row',
                                                                                                    });
                                                                                                }
                                                                                            } else if (this.state.counter===7) {
                                                                                                if (value !== this.state.nums[2]) {
                                                                                                    wrongFunction();
                                                                                                    window.location.reload();
                                                                                                }
                                                                                                correctFunction();
                                                                                                this.setState({
                                                                                                    counter: 8,
                                                                                                    message: 'Click or drag the left element on the 2nd leftmost array on the 3rd row',
                                                                                                });
                                                                                            } else {
                                                                                                wrongFunction();
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                    >
                                                                                    {value}
                                                                                </Button>
                                                                            </Draggable>
                                                                        )
                                                                    });
                                                                    const array3Left2 = [...this.state.nums].slice(3, 5).map((value, index) => {
                                                                        return (
                                                                            <Draggable>
                                                                                <Button key={index}
                                                                                    variant="success"
                                                                                    style={{
                                                                                        marginTop: "5%",
                                                                                    }}
                                                                                    onClick={
                                                                                        () => {
                                                                                            if (this.state.counter===8) {
                                                                                                if (value !== this.state.nums[3]) {
                                                                                                    wrongFunction();
                                                                                                    window.location.reload();
                                                                                                }
                                                                                                correctFunction();
                                                                                                this.setState({
                                                                                                    counter: 9,
                                                                                                    message: 'Click or drag the right element on the 2nd leftmost array on the 3rd row',
                                                                                                });
                                                                                            } else if (this.state.counter===9) {
                                                                                                if (value !== this.state.nums[4]) {
                                                                                                    wrongFunction();
                                                                                                    window.location.reload();
                                                                                                }
                                                                                                correctFunction();
                                                                                                this.setState({
                                                                                                    counter: 10,
                                                                                                    message: 'Click or drag the 2 left elements on the 3rd array from the left on the 3rd row',
                                                                                                });
                                                                                            } else {
                                                                                                wrongFunction();
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                    >
                                                                                    {value}
                                                                                </Button>
                                                                            </Draggable>
                                                                        )
                                                                    });
                                                                    const array3Right1 = [...this.state.nums].slice(5, 8).map((value, index) => {
                                                                        return (
                                                                            <Draggable>
                                                                                <Button key={index}
                                                                                    variant="success"
                                                                                    style={{
                                                                                        marginTop: "5%",
                                                                                    }}
                                                                                    onClick={
                                                                                        () => {
                                                                                            if (this.state.counter===10) {
                                                                                                this.state.stepThree2.push(value);
                                                                                                if (this.state.stepThree2.length>=2) {
                                                                                                    let temp = [...this.state.nums].slice(5, 7);                                                                                                    for (let i = 0; i < 2; i++) {
                                                                                                        if (!temp.includes(this.state.stepThree2[i])) {
                                                                                                            wrongFunction();
                                                                                                            window.location.reload();
                                                                                                        } else {
                                                                                                            temp.splice(temp.indexOf(this.state.stepThree2[i]), 1);
                                                                                                        }
                                                                                                    }
                                                                                                    correctFunction();
                                                                                                    this.setState({
                                                                                                        counter: 11,
                                                                                                        message:  'Click or drag the element on the right of the 3rd array from the left on the 3rd row',
                                                                                                    });
                                                                                                }
                                                                                            } else if (this.state.counter===11) {
                                                                                                if (value !== this.state.nums[7]) {
                                                                                                    wrongFunction();
                                                                                                    window.location.reload();
                                                                                                }
                                                                                                correctFunction();
                                                                                                this.setState({
                                                                                                    counter: 12,
                                                                                                    message: 'Click or drag the left element on the rightmost array on the 3rd row',
                                                                                                });
                                                                                            } else {
                                                                                                wrongFunction();
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                    >
                                                                                    {value}
                                                                                </Button>
                                                                            </Draggable>
                                                                        )
                                                                    });
                                                                    const array3Right2 = [...this.state.nums].slice(8, 10).map((value, index) => {
                                                                        return (
                                                                            <Draggable>
                                                                                <Button key={index}
                                                                                    variant="success"
                                                                                    style={{
                                                                                        marginTop: "5%",
                                                                                    }}
                                                                                    onClick={
                                                                                        () => {
                                                                                            if (this.state.counter===12) {
                                                                                                if (value !== this.state.nums[8]) {
                                                                                                    wrongFunction();
                                                                                                    window.location.reload();
                                                                                                }
                                                                                                correctFunction();
                                                                                                this.setState({
                                                                                                    counter: 13,
                                                                                                    message: 'Click or drag the right element on the rightmost array on the 3rd row',
                                                                                                });
                                                                                            } else if (this.state.counter===13) {
                                                                                                if (value !== this.state.nums[9]) {
                                                                                                    wrongFunction();
                                                                                                    window.location.reload();
                                                                                                }
                                                                                                correctFunction();
                                                                                                const array4Left = [...this.state.nums].slice(0, 2).map((value, index) => {
                                                                                                    return (
                                                                                                        <Draggable>
                                                                                                        <Button
                                                                                                            variant="warning"
                                                                                                            style={{
                                                                                                                marginTop: "5%",
                                                                                                            }}
                                                                                                            key={index}
                                                                                                            onClick={
                                                                                                                () => {
                                                                                                                    if (this.state.counter===14) {
                                                                                                                        if (value !== this.state.nums[0]) {
                                                                                                                            wrongFunction();
                                                                                                                            window.location.reload();
                                                                                                                        }
                                                                                                                        correctFunction();
                                                                                                                        this.setState({
                                                                                                                            counter: 15,
                                                                                                                            message: 'Click or drag right element on the left array on the 4th row',
                                                                                                                        });
                                                                                                                    } else if (this.state.counter===15) {
                                                                                                                        if (value !== this.state.nums[1]) {
                                                                                                                            wrongFunction();
                                                                                                                            window.location.reload();
                                                                                                                        }
                                                                                                                        correctFunction();
                                                                                                                        this.setState({
                                                                                                                            counter: 16,
                                                                                                                            message: 'Click or drag left element on the right array on the 4th row',
                                                                                                                        });
                                                                                                                    } else {
                                                                                                                        wrongFunction();
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        >
                                                                                                            {value}
                                                                                                        </Button>
                                                                                                    </Draggable>
                                                                                                )
                                                                                                });
                                                                                                const array4Right = [...this.state.nums].slice(5, 7).map((value, index) => {
                                                                                                    return (
                                                                                                        <Draggable>
                                                                                                            <Button
                                                                                                                key={index}
                                                                                                                variant="warning"
                                                                                                                style={{
                                                                                                                    marginTop: "5%",
                                                                                                                }}
                                                                                                                onClick={
                                                                                                                    () => {
                                                                                                                        if (this.state.counter===16) {
                                                                                                                            if (value !== this.state.nums[5]) {
                                                                                                                                wrongFunction();
                                                                                                                                window.location.reload();
                                                                                                                            }
                                                                                                                            correctFunction();
                                                                                                                            this.setState({
                                                                                                                                counter: 17,
                                                                                                                                message: 'Click or drag right element on the right array on the 4th row',
                                                                                                                            });
                                                                                                                        } else if (this.state.counter===17) {
                                                                                                                            if (value !== this.state.nums[6]) {
                                                                                                                                wrongFunction();
                                                                                                                                window.location.reload();
                                                                                                                            }
                                                                                                                            correctFunction();
                                                                                                                            const array5Left = [...this.state.nums].slice(0, 2).map((value, index) => {
                                                                                                                                return (
                                                                                                                                    <Draggable>
                                                                                                                                        <Button
                                                                                                                                            key={index}
                                                                                                                                            variant="outline-danger"
                                                                                                                                            style={{
                                                                                                                                                marginTop: "5%",
                                                                                                                                                marginLeft: "0.25%",
                                                                                                                                            }}
                                                                                                                                            onClick={
                                                                                                                                                () => {
                                                                                                                                                    let order = [...this.state.nums].slice(0, 2).sort((a, b) => a - b);
                                                                                                                                                    if (this.state.counter===18) {
                                                                                                                                                        if (value !== order[0]) {
                                                                                                                                                            wrongFunction();
                                                                                                                                                            window.location.reload();
                                                                                                                                                        }
                                                                                                                                                        correctFunction();
                                                                                                                                                        this.setState({
                                                                                                                                                            counter: 19,
                                                                                                                                                            message: 'Click or drag the highest element on the left side of the 5th row',
                                                                                                                                                        });
                                                                                                                                                    } else if (this.state.counter===19) {
                                                                                                                                                        if (value !== order[1]) {
                                                                                                                                                            wrongFunction();
                                                                                                                                                            window.location.reload();
                                                                                                                                                        }
                                                                                                                                                        correctFunction();
                                                                                                                                                        this.setState({
                                                                                                                                                            counter: 20,
                                                                                                                                                            message: 'Click or drag the lowest element on the right side of the 5th row',
                                                                                                                                                        });
                                                                                                                                                    } else {
                                                                                                                                                        wrongFunction();
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        >
                                                                                                                                            {value}
                                                                                                                                        </Button>
                                                                                                                                    </Draggable>
                                                                                                                                )
                                                                                                                            });
                                                                                                                            const array5Right = [...this.state.nums].slice(5, 7).map((value, index) => {
                                                                                                                                return (
                                                                                                                                    <Draggable>
                                                                                                                                        <Button
                                                                                                                                            key={index}
                                                                                                                                            variant="outline-danger"
                                                                                                                                            style={{
                                                                                                                                                marginTop: "5%",
                                                                                                                                                marginLeft: "0.25%",
                                                                                                                                            }}
                                                                                                                                            onClick={
                                                                                                                                                () => {
                                                                                                                                                    let order = [...this.state.nums].slice(5, 7).sort((a, b) => a - b);
                                                                                                                                                    if (this.state.counter===20) {
                                                                                                                                                        if (value !== order[0]) {
                                                                                                                                                            wrongFunction();
                                                                                                                                                            window.location.reload();
                                                                                                                                                        }
                                                                                                                                                        correctFunction();
                                                                                                                                                        this.setState({
                                                                                                                                                            counter: 21,
                                                                                                                                                            message: 'Click or drag the highest element on the right side of the 5th row',
                                                                                                                                                        });
                                                                                                                                                    } else if (this.state.counter===21) {
                                                                                                                                                        if (value !== order[1]) {
                                                                                                                                                            wrongFunction();
                                                                                                                                                            window.location.reload();
                                                                                                                                                        }
                                                                                                                                                        correctFunction();
                                                                                                                                                        let arraySixLeft1 = [...this.state.nums].slice(0, 2).sort((a, b) => a - b);
                                                                                                                                                        arraySixLeft1.push(this.state.nums[2]);
                                                                                                                                                        const array6Left1 = arraySixLeft1.map((value, index) => {
                                                                                                                                                            return (
                                                                                                                                                                <Draggable>
                                                                                                                                                                    <Button
                                                                                                                                                                        key={index}
                                                                                                                                                                        variant="outline-warning"
                                                                                                                                                                        style={{
                                                                                                                                                                            marginTop: "5%",
                                                                                                                                                                            marginLeft: "0.25%",
                                                                                                                                                                        }}
                                                                                                                                                                        onClick={
                                                                                                                                                                            () => {
                                                                                                                                                                                if (this.state.counter===22) {
                                                                                                                                                                                    this.state.stepSixLeft1.push(value);
                                                                                                                                                                                    if (this.state.stepSixLeft1.length >= 3) {
                                                                                                                                                                                        let order = [...this.state.nums].slice(0, 3).sort((a, b) => a - b);
                                                                                                                                                                                        for (let i = 0; i < order.length; i++) {
                                                                                                                                                                                            if (order[i] !== this.state.stepSixLeft1[i]) {
                                                                                                                                                                                                wrongFunction();
                                                                                                                                                                                                window.location.reload();
                                                                                                                                                                                            }
                                                                                                                                                                                        }
                                                                                                                                                                                        correctFunction();
                                                                                                                                                                                        this.setState({
                                                                                                                                                                                            counter: 23,
                                                                                                                                                                                            message: 'Click or drag the elements on the 2nd leftmost side of the 6th row from lowest to highest',
                                                                                                                                                                                        });
                                                                                                                                                                                    }
                                                                                                                                                                                } else {
                                                                                                                                                                                    wrongFunction();
                                                                                                                                                                                }
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    >
                                                                                                                                                                        {value}
                                                                                                                                                                    </Button>
                                                                                                                                                                </Draggable>
                                                                                                                                                            )
                                                                                                                                                        });
                                                                                                                                                        const array6Left2 = [...this.state.nums].slice(3, 5).map((value, index) => {
                                                                                                                                                            return (
                                                                                                                                                                <Draggable>
                                                                                                                                                                    <Button
                                                                                                                                                                        key={index}
                                                                                                                                                                        variant="outline-warning"
                                                                                                                                                                        style={{
                                                                                                                                                                            marginTop: "5%",
                                                                                                                                                                            marginLeft: "0.25%",
                                                                                                                                                                        }}
                                                                                                                                                                        onClick={
                                                                                                                                                                            () => {
                                                                                                                                                                                if (this.state.counter===23) {
                                                                                                                                                                                    this.state.stepSixLeft2.push(value);
                                                                                                                                                                                    if (this.state.stepSixLeft2.length >= 2) {
                                                                                                                                                                                        let order = [...this.state.nums].slice(3, 5).sort((a, b) => a - b);
                                                                                                                                                                                        for (let i = 0; i < order.length; i++) {
                                                                                                                                                                                            if (order[i] !== this.state.stepSixLeft2[i]) {
                                                                                                                                                                                                wrongFunction();
                                                                                                                                                                                                window.location.reload();
                                                                                                                                                                                            }
                                                                                                                                                                                        }
                                                                                                                                                                                        correctFunction();
                                                                                                                                                                                        this.setState({
                                                                                                                                                                                            counter: 24,
                                                                                                                                                                                            message: 'Click or drag the elements on the 2nd rightmost side of the 6th row from lowest to highest',
                                                                                                                                                                                        });
                                                                                                                                                                                    }
                                                                                                                                                                                } else {
                                                                                                                                                                                    wrongFunction();
                                                                                                                                                                                }
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    >
                                                                                                                                                                        {value}
                                                                                                                                                                    </Button>
                                                                                                                                                                </Draggable>
                                                                                                                                                            )
                                                                                                                                                        });
                                                                                                                                                        let arraySixRight1 = [...this.state.nums].slice(5, 7).sort((a, b) => a - b);
                                                                                                                                                        arraySixRight1.push(this.state.nums[7]);
                                                                                                                                                        const array6Right1 = arraySixRight1.map((value, index) => {
                                                                                                                                                            return (
                                                                                                                                                                <Draggable>
                                                                                                                                                                    <Button
                                                                                                                                                                        key={index}
                                                                                                                                                                        variant="outline-warning"
                                                                                                                                                                        style={{
                                                                                                                                                                            marginTop: "5%",
                                                                                                                                                                            marginLeft: "0.25%",
                                                                                                                                                                        }}
                                                                                                                                                                        onClick={
                                                                                                                                                                            () => {
                                                                                                                                                                                if (this.state.counter===24) {
                                                                                                                                                                                    this.state.stepSixRight1.push(value);
                                                                                                                                                                                    if (this.state.stepSixRight1.length >= 3) {
                                                                                                                                                                                        let order = [...this.state.nums].slice(5, 8).sort((a, b) => a - b);
                                                                                                                                                                                        for (let i = 0; i < order.length; i++) {
                                                                                                                                                                                            if (order[i] !== this.state.stepSixRight1[i]) {
                                                                                                                                                                                                wrongFunction();
                                                                                                                                                                                                window.location.reload();
                                                                                                                                                                                            }
                                                                                                                                                                                        }
                                                                                                                                                                                        correctFunction();
                                                                                                                                                                                        this.setState({
                                                                                                                                                                                            counter: 25,
                                                                                                                                                                                            message: 'Click or drag the elements on the rightmost side of the 6th row from lowest to highest',
                                                                                                                                                                                        });
                                                                                                                                                                                    }
                                                                                                                                                                                } else {
                                                                                                                                                                                    wrongFunction();
                                                                                                                                                                                }
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    >
                                                                                                                                                                        {value}
                                                                                                                                                                    </Button>
                                                                                                                                                                </Draggable>
                                                                                                                                                            )
                                                                                                                                                        });
                                                                                                                                                        const array6Right2 = [...this.state.nums].slice(8, 10).map((value, index) => {
                                                                                                                                                            return (
                                                                                                                                                                <Draggable>
                                                                                                                                                                    <Button
                                                                                                                                                                        key={index}
                                                                                                                                                                        variant="outline-warning"
                                                                                                                                                                        style={{
                                                                                                                                                                            marginTop: "5%",
                                                                                                                                                                            marginLeft: "0.25%",
                                                                                                                                                                        }}
                                                                                                                                                                        onClick={
                                                                                                                                                                            () => {
                                                                                                                                                                                if (this.state.counter===25) {
                                                                                                                                                                                    this.state.stepSixRight2.push(value);
                                                                                                                                                                                    if (this.state.stepSixRight2.length >= 2) {
                                                                                                                                                                                        let order = [...this.state.nums].slice(8, 10).sort((a, b) => a - b);
                                                                                                                                                                                        for (let i = 0; i < order.length; i++) {
                                                                                                                                                                                            if (order[i] !== this.state.stepSixRight2[i]) {
                                                                                                                                                                                                wrongFunction();
                                                                                                                                                                                                window.location.reload();
                                                                                                                                                                                            }
                                                                                                                                                                                        }
                                                                                                                                                                                        correctFunction();
                                                                                                                                                                                        let arraySevenLeft = [...this.state.nums].slice(0, 3).sort((a, b) => a - b);
                                                                                                                                                                                        arraySevenLeft.push([...this.state.nums].slice(3, 5).sort((a, b) => a - b)[0]);
                                                                                                                                                                                        arraySevenLeft.push([...this.state.nums].slice(3, 5).sort((a, b) => a - b)[1]);
                                                                                                                                                                                        const array7Left = arraySevenLeft.map((value, index) => {
                                                                                                                                                                                            return (
                                                                                                                                                                                                <Draggable>
                                                                                                                                                                                                    <Button
                                                                                                                                                                                                        key={index}
                                                                                                                                                                                                        variant="outline-success"
                                                                                                                                                                                                        style={{
                                                                                                                                                                                                            marginTop: "5%",
                                                                                                                                                                                                            marginLeft: "0.25%",
                                                                                                                                                                                                        }}
                                                                                                                                                                                                        onClick={
                                                                                                                                                                                                            () => {
                                                                                                                                                                                                                if (this.state.counter===26) {
                                                                                                                                                                                                                    this.state.stepSevenLeft.push(value);
                                                                                                                                                                                                                    if (this.state.stepSevenLeft.length >= 5) {
                                                                                                                                                                                                                        let order = [...this.state.nums].slice(0, 5).sort((a, b) => a - b);
                                                                                                                                                                                                                        for (let i = 0; i < order.length; i++) {
                                                                                                                                                                                                                            if (order[i] !== this.state.stepSevenLeft[i]) {
                                                                                                                                                                                                                                wrongFunction();
                                                                                                                                                                                                                                window.location.reload();
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                        correctFunction();
                                                                                                                                                                                                                        this.setState({
                                                                                                                                                                                                                            counter: 27,
                                                                                                                                                                                                                            message: 'Click or drag the elements on the right side of the 7th row from lowest to highest',
                                                                                                                                                                                                                        });
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                    wrongFunction();
                                                                                                                                                                                                                }
                                                                                                                                                                                                            }
                                                                                                                                                                                                        }
                                                                                                                                                                                                    >
                                                                                                                                                                                                        {value}
                                                                                                                                                                                                    </Button>
                                                                                                                                                                                                </Draggable>
                                                                                                                                                                                            )
                                                                                                                                                                                        });
                                                                                                                                                                                        let arraySevenRight = [...this.state.nums].slice(5, 8).sort((a, b) => a - b);
                                                                                                                                                                                        arraySevenRight.push([...this.state.nums].slice(8, 10).sort((a, b) => a - b)[0]);
                                                                                                                                                                                        arraySevenRight.push([...this.state.nums].slice(8, 10).sort((a, b) => a - b)[1]);
                                                                                                                                                                                        const array7Right = arraySevenRight.map((value, index) => {
                                                                                                                                                                                            return (
                                                                                                                                                                                                <Draggable>
                                                                                                                                                                                                    <Button
                                                                                                                                                                                                        key={index}
                                                                                                                                                                                                        variant="outline-success"
                                                                                                                                                                                                        style={{
                                                                                                                                                                                                            marginTop: "5%",
                                                                                                                                                                                                            marginLeft: "0.25%",
                                                                                                                                                                                                        }}
                                                                                                                                                                                                        onClick={
                                                                                                                                                                                                            () => {
                                                                                                                                                                                                                if (this.state.counter===27) {
                                                                                                                                                                                                                    this.state.stepSevenRight.push(value);
                                                                                                                                                                                                                    if (this.state.stepSevenRight.length >= 5) {
                                                                                                                                                                                                                        let order = [...this.state.nums].slice(5, 10).sort((a, b) => a - b);
                                                                                                                                                                                                                        for (let i = 0; i < order.length; i++) {
                                                                                                                                                                                                                            if (order[i] !== this.state.stepSevenRight[i]) {
                                                                                                                                                                                                                                wrongFunction();
                                                                                                                                                                                                                                window.location.reload();
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                        correctFunction();
                                                                                                                                                                                                                        let arrayFinal = [...this.state.nums].slice(0, 5).sort((a, b) => a - b);
                                                                                                                                                                                                                        let arrayFinalRight = [...this.state.nums].slice(5, 10).sort((a, b) => a - b);
                                                                                                                                                                                                                        for (let i = 0; i < 5; i++) {
                                                                                                                                                                                                                            arrayFinal.push(arrayFinalRight[i]);
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                        const array8Buttons = arrayFinal.map((value, index) => {
                                                                                                                                                                                                                            return (
                                                                                                                                                                                                                                <Draggable>
                                                                                                                                                                                                                                    <Button
                                                                                                                                                                                                                                        key={index}
                                                                                                                                                                                                                                        variant="outline-secondary"
                                                                                                                                                                                                                                        style={{
                                                                                                                                                                                                                                            marginTop: "5%",
                                                                                                                                                                                                                                            marginLeft: "0.25%",
                                                                                                                                                                                                                                        }}
                                                                                                                                                                                                                                        onClick={
                                                                                                                                                                                                                                            () => {
                                                                                                                                                                                                                                                if (this.state.counter===28) {
                                                                                                                                                                                                                                                    this.state.stepEight.push(value);
                                                                                                                                                                                                                                                    if (this.state.stepEight.length >= 10) {
                                                                                                                                                                                                                                                        let order = [...this.state.nums].sort((a, b) => a - b);
                                                                                                                                                                                                                                                        for (let i = 0; i < 10; i++) {
                                                                                                                                                                                                                                                            if (order[i] !== this.state.stepEight[i]) {
                                                                                                                                                                                                                                                                wrongFunction();
                                                                                                                                                                                                                                                                window.location.reload();
                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                        correctFunction();
                                                                                                                                                                                                                                                        // continue
                                                                                                                                                                                                                                                        const answerButtons = [...this.state.nums].sort((a, b) => a - b).map((value, index) => {
                                                                                                                                                                                                                                                            return (
                                                                                                                                                                                                                                                                <Draggable>
                                                                                                                                                                                                                                                                    <Button
                                                                                                                                                                                                                                                                        key={index}
                                                                                                                                                                                                                                                                        variant="outline-primary"
                                                                                                                                                                                                                                                                        style={{
                                                                                                                                                                                                                                                                            marginTop: "5%",
                                                                                                                                                                                                                                                                            marginBottom: "5%",
                                                                                                                                                                                                                                                                        }}
                                                                                                                                                                                                                                                                    >
                                                                                                                                                                                                                                                                        {value}
                                                                                                                                                                                                                                                                    </Button>
                                                                                                                                                                                                                                                                </Draggable>
                                                                                                                                                                                                                                                            )
                                                                                                                                                                                                                                                        });
                                                                                                                                                                                                                                                        const answer = (
                                                                                                                                                                                                                                                            <div>
                                                                                                                                                                                                                                                                {answerButtons}
                                                                                                                                                                                                                                                                <h3>Complete! Try the next level!</h3>
                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                                        this.setState({
                                                                                                                                                                                                                                                            counter: 29,
                                                                                                                                                                                                                                                            answer: answer,
                                                                                                                                                                                                                                                            message: 'Array has been sorted using mergesort!'
                                                                                                                                                                                                                                                        });
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                    wrongFunction();
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                    >
                                                                                                                                                                                                                                    {value}
                                                                                                                                                                                                                                    </Button>
                                                                                                                                                                                                                                </Draggable>
                                                                                                                                                                                                                            )
                                                                                                                                                                                                                        });
                                                                                                                                                                                                                        const arrayEight = (
                                                                                                                                                                                                                            <div>
                                                                                                                                                                                                                                {array8Buttons}
                                                                                                                                                                                                                                <h3>___________________________________</h3>
                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                        )
                                                                                                                                                                                                                        this.setState({
                                                                                                                                                                                                                            counter: 28,
                                                                                                                                                                                                                            arrayEight: arrayEight,
                                                                                                                                                                                                                            message: 'Click or drag the elements on the 8th row from lowest to highest',
                                                                                                                                                                                                                        });
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                    wrongFunction();
                                                                                                                                                                                                                }
                                                                                                                                                                                                            }
                                                                                                                                                                                                        }
                                                                                                                                                                                                    >
                                                                                                                                                                                                        {value}
                                                                                                                                                                                                    </Button>
                                                                                                                                                                                                </Draggable>
                                                                                                                                                                                            )
                                                                                                                                                                                        });
                                                                                                                                                                                        const arraySeven = (
                                                                                                                                                                                            <div>
                                                                                                                                                                                                {array7Left} {array7Right}
                                                                                                                                                                                                <h3>________________ __________________</h3>
                                                                                                                                                                                            </div>
                                                                                                                                                                                        )
                                                                                                                                                                                        this.setState({
                                                                                                                                                                                            counter: 26,
                                                                                                                                                                                            arraySeven: arraySeven,
                                                                                                                                                                                            message: 'Click or drag the elements on the left side of the 7th row from lowest to highest',
                                                                                                                                                                                        });
                                                                                                                                                                                    }
                                                                                                                                                                                } else {
                                                                                                                                                                                    wrongFunction();
                                                                                                                                                                                }
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    >
                                                                                                                                                                        {value}
                                                                                                                                                                    </Button>
                                                                                                                                                                </Draggable>
                                                                                                                                                            )
                                                                                                                                                        });
                                                                                                                                                        const arraySix = (
                                                                                                                                                            <div>
                                                                                                                                                                {array6Left1} {array6Left2} {array6Right1} {array6Right2}
                                                                                                                                                                <h3>_________ ______ _________ ______</h3>
                                                                                                                                                            </div>
                                                                                                                                                        );
                                                                                                                                                        this.setState({
                                                                                                                                                            counter: 22,
                                                                                                                                                            message: 'Click or drag the elements on the leftmost side of the 6th row from lowest to highest',
                                                                                                                                                            arraySix: arraySix,
                                                                                                                                                        });
                                                                                                                                                    } else {
                                                                                                                                                        wrongFunction();
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        >
                                                                                                                                            {value}
                                                                                                                                        </Button>
                                                                                                                                    </Draggable>
                                                                                                                                )
                                                                                                                            });
                                                                                                                            let arrayFive = (
                                                                                                                                <div>
                                                                                                                                    {array5Left} {array5Right}
                                                                                                                                    <h3>_______ _______</h3>
                                                                                                                                </div>
                                                                                                                            );
                                                                                                                            this.setState({
                                                                                                                                counter: 18,
                                                                                                                                arrayFive: arrayFive,
                                                                                                                                message: 'All subarrays are now at size 1.\nClick or drag the lowest element on the left side of the 5th row',
                                                                                                                            });
                                                                                                                        } else {
                                                                                                                            wrongFunction();
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            >
                                                                                                            {value}
                                                                                                            </Button>
                                                                                                        </Draggable>
                                                                                                    )
                                                                                                });
                                                                                                const arrayFour = (
                                                                                                    <div>
                                                                                                        {array4Left} {array4Right}
                                                                                                        <h3>___ ___ ___ ___</h3>
                                                                                                    </div>
                                                                                                )
                                                                                                this.setState({
                                                                                                    counter: 14,
                                                                                                    message: 'Click or drag left element on the left array on the 4th row',
                                                                                                    arrayFour: arrayFour,
                                                                                                });
                                                                                            } else {
                                                                                                wrongFunction();
                                                                                            }
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
                                                                            <h3>______ __ ___ ___ ______ ___ ___ ___</h3>
                                                                        </div>
                                                                    );
                                                                    this.setState({
                                                                        counter: 6,
                                                                        message:  'Click or drag the 2 leftmost elements on the 1st array from the left in the 3rd row',
                                                                        arrayThree: arrayThree,
                                                                    });
                                                                }
                                                            } else {
                                                                wrongFunction();
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
                                            <h3>_________ ______ _________ ______</h3>
                                        </div>
                                    );
                                    this.setState({
                                        arrayTwo: arrayTwo,
                                        counter: 2,
                                        message: 'Click or drag the 3 elements on the left half of the left array'
                                    });
                                }
                            } else {
                                wrongFunction();
                            }
                        }
                    }>{value}</Button>
                </Draggable>
            )
        });
        // TODO: change underscores (all of them) for proper styling
        return (
            <div style={{
                marginLeft: "20%",
                marginRight: "20%",
            }}>
                <h1>Level Three</h1>
                <h2>MergeSort Algorithm</h2>
                <h5>Ensure NOT to double click buttons</h5>
                <h5>ONLY FIREFOX COMPATIBLE</h5>
                <h4>Perform all steps of the MergeSort Algortim taught to you in Levels 1 and 2 to complete this level. Feedback will be given to help you.</h4>
                {arrayOne}
                <h3>________________ __________________</h3>
                {this.state.arrayTwo}
                {this.state.arrayThree}
                {this.state.arrayFour}
                {this.state.arrayFive}
                {this.state.arraySix}
                {this.state.arraySeven}
                {this.state.arrayEight}
                {this.state.answer}
                <br />
                <ButtonGroup style={{marginTop: "2%"}} >
                <button variant="primary" onClick={() => window.location.reload() }>Restart Level</button>
                <button variant="primary" >Change Sorting Algorithm</button>  
                <Link to ="/levels"><button variant="primary">Return to Level Select</button></Link>
                <button variant="primary" onClick={() => window.close() }>Quit Game</button> 
                </ButtonGroup>
                <br />
            </div>
        )
    }
}