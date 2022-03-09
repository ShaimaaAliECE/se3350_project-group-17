import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Draggable from 'react-draggable';
import { wrongFunction, correctFunction } from '../../functions/SoundFunctions';
import { Link } from 'react-router-dom';

export default class LevelFour extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
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
            stepThree3: [],
            stepThree4: [],
            stepThree5: [],
            stepThree6: [],
            stepThree7: [],
            stepThree8: [],
            stepFour1: [],
            stepFour2: [],
            stepFour3: [],
            stepFour4: [],
            arrayTwo: null,
            arrayThree: null,
            arrayFour: null,
            arrayFive: null,
        }
        for (let i=0; i<20; i++) {
            // add 10 random integers between 1 and 20 to nums array
            this.state.nums.push(Math.floor(Math.random() * 21));
        }
        this.state.answer.push([this.state.nums].sort((a, b) => a - b));
        console.log(this.state.answer);
    }

    render() {
        const arrayOne = [...this.state.nums].map((value, index) => {
            return (
                <Draggable>
                    <Button key={index} onClick={
                        () => {
                            if (this.state.counter===0) {
                                this.state.stepOneLeft.push(value);
                                if (this.state.stepOneLeft.length>=10) {
                                    let temp = [...this.state.nums].slice(0, 10);
                                    // allows zero mistakes for now
                                    for (let i=0; i<10; i++) {
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
                                    });
                                }
                            } else if (this.state.counter===1) {
                                this.state.stepOneRight.push(value);
                                if (this.state.stepOneRight.length>=10) {
                                    let temp = [...this.state.nums].slice(10);
                                    // allows zero mistakes for now
                                    for (let i=0; i<10; i++) {
                                        if (!temp.includes(this.state.stepOneRight[i])) {
                                            wrongFunction();
                                            window.location.reload();
                                        } else {
                                            temp.splice(temp.indexOf(this.state.stepOneRight[i]), 1);
                                        }
                                    }
                                    correctFunction();
                                    let arrayTwo1 = [...this.state.nums].slice(0, 10).map((value, index) => {
                                        return (
                                            <Draggable>
                                                <Button key={index} onClick={
                                                    () => {
                                                        if (this.state.counter===2) {
                                                            this.state.stepTwoLeft1.push(value);
                                                            if (this.state.stepTwoLeft1.length>=5) {
                                                                let temp = [...this.state.nums].slice(0, 5);
                                                                for (let i = 0; i < 5; i++) {
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
                                                                })
                                                            }
                                                        } else if (this.state.counter===3) {
                                                            this.state.stepTwoLeft2.push(value);
                                                            if (this.state.stepTwoLeft2.length >= 5) {
                                                                let temp = [...this.state.nums].slice(5, 10);
                                                                for (let i = 0; i < 5; i++) {
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
                                                                });
                                                            }
                                                        } else {
                                                            wrongFunction();
                                                        }
                                                    }
                                                }>
                                                    {value}
                                                </Button>
                                            </Draggable>
                                        )
                                    });
                                    let arrayTwo2 = [...this.state.nums].slice(10).map((value, index) => {
                                        return (
                                            <Draggable>
                                                <Button key={index} onClick={
                                                    () => {
                                                        if (this.state.counter===4) {
                                                            this.state.stepTwoRight1.push(value);
                                                            if (this.state.stepTwoRight1.length>=5) {
                                                                let temp = [...this.state.nums].slice(10, 15);
                                                                for (let i = 0; i < 5; i++) {
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
                                                                });
                                                            }
                                                        } else if (this.state.counter===5) {
                                                            this.state.stepTwoRight1.push(value);
                                                            if (this.state.stepTwoRight1.length>=5) {
                                                                let temp = [...this.state.nums].slice(15);
                                                                for (let i = 0; i < 5; i++) {
                                                                    if (!temp.includes(this.state.stepTwoRight2[i])) {
                                                                        wrongFunction();
                                                                        window.location.reload();
                                                                    } else {
                                                                        temp.splice(temp.indexOf(this.state.stepTwoRight2[i]), 1);
                                                                    }
                                                                }
                                                                correctFunction();
                                                                let arrayThree1 = [...this.state.nums].slice(0, 5).map((value, index) => {
                                                                    return (
                                                                        <Draggable>
                                                                            <Button key={index} onClick={
                                                                                () => {
                                                                                    if (this.state.counter===6) {
                                                                                        this.state.stepThree1.push(value);
                                                                                        if (this.state.stepThree1.length>=3) {
                                                                                            let temp = [...this.state.nums].slice(0, 3);
                                                                                            for (let i = 0; i < 3; i++) {
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
                                                                                            })
                                                                                        }
                                                                                    } else if (this.state.counter===7) {
                                                                                        this.state.stepThree2.push(value);
                                                                                        if (this.state.stepThree2.length>=2) {
                                                                                            let temp = [...this.state.nums].slice(3, 5);
                                                                                            for (let i = 0; i < 2; i++) {
                                                                                                if (!temp.includes(this.state.stepThree2[i])) {
                                                                                                    wrongFunction();
                                                                                                    window.location.reload();
                                                                                                } else {
                                                                                                    temp.splice(temp.indexOf(this.state.stepThree2[i]), 1);
                                                                                                }
                                                                                            }
                                                                                            correctFunction();
                                                                                            this.setState({
                                                                                                counter: 8,
                                                                                            })
                                                                                        }
                                                                                    } else {
                                                                                        wrongFunction();
                                                                                    }
                                                                                }
                                                                            }>
                                                                                {value}
                                                                            </Button>
                                                                        </Draggable>
                                                                    )
                                                                });
                                                                let arrayThree2 = [...this.state.nums].slice(5, 10).map((value, index) => {
                                                                    return (
                                                                        <Draggable>
                                                                            <Button key={index} onClick={
                                                                                () => {
                                                                                    if (this.state.counter===8) {
                                                                                        this.state.stepThree3.push(value);
                                                                                        if (this.state.stepThree3.length>=3) {
                                                                                            let temp = [...this.state.nums].slice(5, 8);
                                                                                            for (let i = 0; i < 3; i++) {
                                                                                                if (!temp.includes(this.state.stepThree3[i])) {
                                                                                                    wrongFunction();
                                                                                                    window.location.reload();
                                                                                                } else {
                                                                                                    temp.splice(temp.indexOf(this.state.stepThree3[i]), 1);
                                                                                                }
                                                                                            }
                                                                                            correctFunction();
                                                                                            this.setState({
                                                                                                counter: 9,
                                                                                            })
                                                                                        }
                                                                                    } else if (this.state.counter===9) {
                                                                                        this.state.stepThree4.push(value);
                                                                                        if (this.state.stepThree4.length>=2) {
                                                                                            let temp = [...this.state.nums].slice(8, 10);
                                                                                            for (let i = 0; i < 2; i++) {
                                                                                                if (!temp.includes(this.state.stepThree4[i])) {
                                                                                                    wrongFunction();
                                                                                                    window.location.reload();
                                                                                                } else {
                                                                                                    temp.splice(temp.indexOf(this.state.stepThree4[i]), 1);
                                                                                                }
                                                                                            }
                                                                                            correctFunction();
                                                                                            this.setState({
                                                                                                counter: 10,
                                                                                            })
                                                                                        }
                                                                                    } else {
                                                                                        wrongFunction();
                                                                                    }
                                                                                }
                                                                            }>
                                                                                {value}
                                                                            </Button>
                                                                        </Draggable>
                                                                    )
                                                                });
                                                                let arrayThree3 = [...this.state.nums].slice(10, 15).map((value, index) => {
                                                                    return (
                                                                        <Draggable>
                                                                            <Button key={index} onClick={
                                                                                () => {
                                                                                    if (this.state.counter===10) {
                                                                                        this.state.stepThree5.push(value);
                                                                                        if (this.state.stepThree5.length>=3) {
                                                                                            let temp = [...this.state.nums].slice(10, 13);
                                                                                            for (let i = 0; i < 3; i++) {
                                                                                                if (!temp.includes(this.state.stepThree5[i])) {
                                                                                                    wrongFunction();
                                                                                                    window.location.reload();
                                                                                                } else {
                                                                                                    temp.splice(temp.indexOf(this.state.stepThree5[i]), 1);
                                                                                                }
                                                                                            }
                                                                                            correctFunction();
                                                                                            this.setState({
                                                                                                counter: 11,
                                                                                            })
                                                                                        }
                                                                                    } else if (this.state.counter===11) {
                                                                                        this.state.stepThree6.push(value);
                                                                                        if (this.state.stepThree6.length>=2) {
                                                                                            let temp = [...this.state.nums].slice(13, 15);
                                                                                            for (let i = 0; i < 2; i++) {
                                                                                                if (!temp.includes(this.state.stepThree6[i])) {
                                                                                                    wrongFunction();
                                                                                                    window.location.reload();
                                                                                                } else {
                                                                                                    temp.splice(temp.indexOf(this.state.stepThree6[i]), 1);
                                                                                                }
                                                                                            }
                                                                                            correctFunction();
                                                                                            this.setState({
                                                                                                counter: 12,
                                                                                            })
                                                                                        }
                                                                                    } else {
                                                                                        wrongFunction();
                                                                                    }
                                                                                }
                                                                            }>
                                                                                {value}
                                                                            </Button>
                                                                        </Draggable>
                                                                    )
                                                                });
                                                                let arrayThree4 = [...this.state.nums].slice(15).map((value, index) => {
                                                                    return (
                                                                        <Draggable>
                                                                            <Button key={index} onClick={
                                                                                () => {
                                                                                    if (this.state.counter===12) {
                                                                                        this.state.stepThree7.push(value);
                                                                                        if (this.state.stepThree7.length>=3) {
                                                                                            let temp = [...this.state.nums].slice(15, 18);
                                                                                            for (let i = 0; i < 3; i++) {
                                                                                                if (!temp.includes(this.state.stepThree7[i])) {
                                                                                                    wrongFunction();
                                                                                                    window.location.reload();
                                                                                                } else {
                                                                                                    temp.splice(temp.indexOf(this.state.stepThree7[i]), 1);
                                                                                                }
                                                                                            }
                                                                                            correctFunction();
                                                                                            this.setState({
                                                                                                counter: 13,
                                                                                            })
                                                                                        }
                                                                                    } else if (this.state.counter===13) {
                                                                                        this.state.stepThree8.push(value);
                                                                                        if (this.state.stepThree8.length>=2) {
                                                                                            let temp = [...this.state.nums].slice(18);
                                                                                            for (let i = 0; i < 2; i++) {
                                                                                                if (!temp.includes(this.state.stepThree8[i])) {
                                                                                                    wrongFunction();
                                                                                                    window.location.reload();
                                                                                                } else {
                                                                                                    temp.splice(temp.indexOf(this.state.stepThree8[i]), 1);
                                                                                                }
                                                                                            }
                                                                                            correctFunction();
                                                                                            // 4th array (split into 3, 2, 3, 2, 3, 2, 3, 2)
                                                                                            let arrayFour1 = [...this.state.nums].slice(0, 3).map((value, index) => {
                                                                                                return (
                                                                                                    <Draggable>
                                                                                                        <Button key={index} onClick={
                                                                                                            () => {
                                                                                                                if (this.state.counter===14) {
                                                                                                                    this.state.stepFour1.push(value);
                                                                                                                    if (this.state.stepFour1.length>=2) {
                                                                                                                        let temp = [...this.state.nums].slice(0, 2);
                                                                                                                        for (let i=0; i < 2; i++) {
                                                                                                                            if (!temp.includes(this.state.stepFour1[i])) {
                                                                                                                                wrongFunction();
                                                                                                                                window.location.reload();
                                                                                                                            } else {
                                                                                                                                temp.splice(temp.indexOf(this.state.stepFour1[i]), 1);
                                                                                                                            }
                                                                                                                        }
                                                                                                                        correctFunction();
                                                                                                                    }
                                                                                                                    this.setState({
                                                                                                                        counter: 15,
                                                                                                                    })
                                                                                                                } else if (this.state.counter===15) {
                                                                                                                    if (value !== this.state.nums[2]) {
                                                                                                                        wrongFunction();
                                                                                                                    }
                                                                                                                    correctFunction();
                                                                                                                    this.setState({
                                                                                                                        counter: 16,
                                                                                                                    })
                                                                                                                } else {
                                                                                                                    wrongFunction();
                                                                                                                }
                                                                                                            }
                                                                                                        }>
                                                                                                            {value}
                                                                                                        </Button>
                                                                                                    </Draggable>
                                                                                                )
                                                                                            })
                                                                                            let arrayFour2 = [...this.state.nums].slice(3, 5).map((value, index) => {
                                                                                                return (
                                                                                                    <Draggable>
                                                                                                        <Button key={index} onClick={
                                                                                                            () => {
                                                                                                                if (this.state.counter===16) {
                                                                                                                    if (value !== this.state.nums[3]) {
                                                                                                                        wrongFunction();
                                                                                                                    }
                                                                                                                    correctFunction();
                                                                                                                    this.setState({
                                                                                                                        counter: 17,
                                                                                                                    })
                                                                                                                } else if (this.state.counter===17) {
                                                                                                                    if (value !== this.state.nums[4]) {
                                                                                                                        wrongFunction();
                                                                                                                    }
                                                                                                                    correctFunction();
                                                                                                                    this.setState({
                                                                                                                        counter: 18,
                                                                                                                    })
                                                                                                                } else {
                                                                                                                    wrongFunction();
                                                                                                                }
                                                                                                            }
                                                                                                        }>
                                                                                                            {value}
                                                                                                        </Button>
                                                                                                    </Draggable>
                                                                                                )
                                                                                            })
                                                                                            let arrayFour3 = [...this.state.nums].slice(5, 8).map((value, index) => {
                                                                                                return (
                                                                                                    <Draggable>
                                                                                                        <Button key={index} onClick={
                                                                                                            () => {
                                                                                                                if (this.state.counter===18) {
                                                                                                                    this.state.stepFour2.push(value);
                                                                                                                    if (this.state.stepFour2.length>=2) {
                                                                                                                        let temp = [...this.state.nums].slice(5, 7);
                                                                                                                        for (let i=0; i < 2; i++) {
                                                                                                                            if (!temp.includes(this.state.stepFour2[i])) {
                                                                                                                                wrongFunction();
                                                                                                                                window.location.reload();
                                                                                                                            } else {
                                                                                                                                temp.splice(temp.indexOf(this.state.stepFour2[i]), 1);
                                                                                                                            }
                                                                                                                        }
                                                                                                                        correctFunction();
                                                                                                                    }
                                                                                                                    this.setState({
                                                                                                                        counter: 19,
                                                                                                                    })
                                                                                                                } else if (this.state.counter===19) {
                                                                                                                    if (value !== this.state.nums[7]) {
                                                                                                                        wrongFunction();
                                                                                                                    }
                                                                                                                    correctFunction();
                                                                                                                    this.setState({
                                                                                                                        counter: 20,
                                                                                                                    })
                                                                                                                } else {
                                                                                                                    wrongFunction();
                                                                                                                }
                                                                                                            }
                                                                                                        }>
                                                                                                            {value}
                                                                                                        </Button>
                                                                                                    </Draggable>
                                                                                                )
                                                                                            })
                                                                                            let arrayFour4 = [...this.state.nums].slice(8, 10).map((value, index) => {
                                                                                                return (
                                                                                                    <Draggable>
                                                                                                        <Button key={index} onClick={
                                                                                                            () => {
                                                                                                                if (this.state.counter===20) {
                                                                                                                    if (value !== this.state.nums[8]) {
                                                                                                                        wrongFunction();
                                                                                                                    }
                                                                                                                    correctFunction();
                                                                                                                    this.setState({
                                                                                                                        counter: 21,
                                                                                                                    })
                                                                                                                } else if (this.state.counter===21) {
                                                                                                                    if (value !== this.state.nums[9]) {
                                                                                                                        wrongFunction();
                                                                                                                    }
                                                                                                                    correctFunction();
                                                                                                                    this.setState({
                                                                                                                        counter: 22,
                                                                                                                    })
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
                                                                                            })
                                                                                            let arrayFour5 = [...this.state.nums].slice(10, 13).map((value, index) => {
                                                                                                return (
                                                                                                    <Draggable>
                                                                                                        <Button key={index} onClick={
                                                                                                            () => {
                                                                                                                if (this.state.counter===22) {
                                                                                                                    this.state.stepFour3.push(value);
                                                                                                                    if (this.state.stepFour3.length>=2) {
                                                                                                                        let temp = [...this.state.nums].slice(10, 12);
                                                                                                                        for (let i=0; i < 2; i++) {
                                                                                                                            if (!temp.includes(this.state.stepFour3[i])) {
                                                                                                                                wrongFunction();
                                                                                                                                window.location.reload();
                                                                                                                            } else {
                                                                                                                                temp.splice(temp.indexOf(this.state.stepFour3[i]), 1);
                                                                                                                            }
                                                                                                                        }
                                                                                                                        correctFunction();
                                                                                                                    }
                                                                                                                    this.setState({
                                                                                                                        counter: 23,
                                                                                                                    })
                                                                                                                } else if (this.state.counter===23) {
                                                                                                                    if (value !== this.state.nums[12]) {
                                                                                                                        wrongFunction();
                                                                                                                    }
                                                                                                                    correctFunction();
                                                                                                                    this.setState({
                                                                                                                        counter: 24,
                                                                                                                    })
                                                                                                                } else {
                                                                                                                    wrongFunction();
                                                                                                                }
                                                                                                            }
                                                                                                        }>
                                                                                                            {value}
                                                                                                        </Button>
                                                                                                    </Draggable>
                                                                                                )
                                                                                            })
                                                                                            let arrayFour6 = [...this.state.nums].slice(13, 15).map((value, index) => {
                                                                                                return (
                                                                                                    <Draggable>
                                                                                                        <Button key={index} onClick={
                                                                                                            () => {
                                                                                                                if (this.state.counter===24) {
                                                                                                                    if (value !== this.state.nums[13]) {
                                                                                                                        wrongFunction();
                                                                                                                    }
                                                                                                                    correctFunction();
                                                                                                                    this.setState({
                                                                                                                        counter: 25,
                                                                                                                    })
                                                                                                                } else if (this.state.counter===25) {
                                                                                                                    if (value !== this.state.nums[14]) {
                                                                                                                        wrongFunction();
                                                                                                                    }
                                                                                                                    correctFunction();
                                                                                                                    this.setState({
                                                                                                                        counter: 26,
                                                                                                                    })
                                                                                                                } else {
                                                                                                                    wrongFunction();
                                                                                                                }
                                                                                                            }
                                                                                                        }>
                                                                                                            {value}
                                                                                                        </Button>
                                                                                                    </Draggable>
                                                                                                )
                                                                                            })
                                                                                            let arrayFour7 = [...this.state.nums].slice(15, 18).map((value, index) => {
                                                                                                return (
                                                                                                    <Draggable>
                                                                                                        <Button key={index} onClick={
                                                                                                            () => {
                                                                                                                if (this.state.counter===26) {
                                                                                                                    this.state.stepFour4.push(value);
                                                                                                                    if (this.state.stepFour4.length>=2) {
                                                                                                                        let temp = [...this.state.nums].slice(15, 17);
                                                                                                                        for (let i=0; i < 2; i++) {
                                                                                                                            if (!temp.includes(this.state.stepFour4[i])) {
                                                                                                                                wrongFunction();
                                                                                                                                window.location.reload();
                                                                                                                            } else {
                                                                                                                                temp.splice(temp.indexOf(this.state.stepFour4[i]), 1);
                                                                                                                            }
                                                                                                                        }
                                                                                                                        correctFunction();
                                                                                                                    }
                                                                                                                    this.setState({
                                                                                                                        counter: 27,
                                                                                                                    })
                                                                                                                } else if (this.state.counter===27) {
                                                                                                                    if (value !== this.state.nums[17]) {
                                                                                                                        wrongFunction();
                                                                                                                    }
                                                                                                                    correctFunction();
                                                                                                                    this.setState({
                                                                                                                        counter: 28,
                                                                                                                    })
                                                                                                                } else {
                                                                                                                    wrongFunction();
                                                                                                                }
                                                                                                            }
                                                                                                        }>
                                                                                                            {value}
                                                                                                        </Button>
                                                                                                    </Draggable>
                                                                                                )
                                                                                            })
                                                                                            let arrayFour8 = [...this.state.nums].slice(18).map((value, index) => {
                                                                                                return (
                                                                                                    <Draggable>
                                                                                                        <Button key={index} onClick={
                                                                                                            () => {
                                                                                                                if (this.state.counter===28) {
                                                                                                                    if (value !== this.state.nums[18]) {
                                                                                                                        wrongFunction();
                                                                                                                    }
                                                                                                                    correctFunction();
                                                                                                                    this.setState({
                                                                                                                        counter: 29,
                                                                                                                    })
                                                                                                                } else if (this.state.counter===29) {
                                                                                                                    if (value !== this.state.nums[19]) {
                                                                                                                        wrongFunction();
                                                                                                                    }
                                                                                                                    correctFunction();
                                                                                                                    // 5th row 2, 2, 2, 2
                                                                                                                    let arrayFive1 = [...this.state.nums].slice(0, 2).map((value, index) => {
                                                                                                                        return (
                                                                                                                            <Draggable>
                                                                                                                                <Button key={index} onClick={
                                                                                                                                    () => {
                                                                                                                                        if (this.state.counter===30) {
                                                                                                                                            if (value!==this.state.nums[0]) {
                                                                                                                                                wrongFunction();
                                                                                                                                            }
                                                                                                                                            correctFunction();
                                                                                                                                            this.setState({
                                                                                                                                                counter: 31,
                                                                                                                                            })
                                                                                                                                        } else if (this.state.counter===31) {
                                                                                                                                            if (value!==this.state.nums[1]) {
                                                                                                                                                wrongFunction();
                                                                                                                                            }
                                                                                                                                            correctFunction();
                                                                                                                                            this.setState({
                                                                                                                                                counter: 32,
                                                                                                                                            })
                                                                                                                                        } else {
                                                                                                                                            wrongFunction();
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }>
                                                                                                                                    {value}
                                                                                                                                </Button>
                                                                                                                            </Draggable>
                                                                                                                        )
                                                                                                                    });
                                                                                                                    let arrayFive2 = [...this.state.nums].slice(5, 7).map((value, index) => {
                                                                                                                        return (
                                                                                                                            <Draggable>
                                                                                                                                <Button key={index} onClick={
                                                                                                                                    () => {
                                                                                                                                        if (this.state.counter===32) {
                                                                                                                                            if (value!==this.state.nums[5]) {
                                                                                                                                                wrongFunction();
                                                                                                                                            }
                                                                                                                                            correctFunction();
                                                                                                                                            this.setState({
                                                                                                                                                counter: 33,
                                                                                                                                            })
                                                                                                                                        } else if (this.state.counter===33) {
                                                                                                                                            if (value!==this.state.nums[6]) {
                                                                                                                                                wrongFunction();
                                                                                                                                            }
                                                                                                                                            correctFunction();
                                                                                                                                            this.setState({
                                                                                                                                                counter: 34,
                                                                                                                                            })
                                                                                                                                        } else {
                                                                                                                                            wrongFunction();
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }>
                                                                                                                                    {value}
                                                                                                                                </Button>
                                                                                                                            </Draggable>
                                                                                                                        )
                                                                                                                    })
                                                                                                                    let arrayFive3 = [...this.state.nums].slice(10, 12).slice.map((value, index) => {
                                                                                                                        return (
                                                                                                                            <Draggable>
                                                                                                                                <Button key={index} onClick={
                                                                                                                                    () => {
                                                                                                                                        if (this.state.counter===34) {
                                                                                                                                            if (value!==this.state.nums[10]) {
                                                                                                                                                wrongFunction();
                                                                                                                                            }
                                                                                                                                            correctFunction();
                                                                                                                                            this.setState({
                                                                                                                                                counter: 35,
                                                                                                                                            })
                                                                                                                                        } else if (this.state.counter===35) {
                                                                                                                                            if (value!==this.state.nums[11]) {
                                                                                                                                                wrongFunction();
                                                                                                                                            }
                                                                                                                                            correctFunction();
                                                                                                                                            this.setState({
                                                                                                                                                counter: 36,
                                                                                                                                            })
                                                                                                                                        } else {
                                                                                                                                            wrongFunction();
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }>
                                                                                                                                    {value}
                                                                                                                                </Button>
                                                                                                                            </Draggable>
                                                                                                                        )
                                                                                                                    })
                                                                                                                    let arrayFive4 = [...this.state.nums].slice(15, 17).map((value, index) => {
                                                                                                                        return (
                                                                                                                            <Draggable>
                                                                                                                                <Button key={index} onClick={
                                                                                                                                    () => {
                                                                                                                                        if (this.state.counter===36) {
                                                                                                                                            if (value!==this.state.nums[15]) {
                                                                                                                                                wrongFunction();
                                                                                                                                            }
                                                                                                                                            correctFunction();
                                                                                                                                            this.setState({
                                                                                                                                                counter: 37,
                                                                                                                                            })
                                                                                                                                        } else if (this.state.counter===37) {
                                                                                                                                            if (value!==this.state.nums[16]) {
                                                                                                                                                wrongFunction();
                                                                                                                                            }
                                                                                                                                            correctFunction();
                                                                                                                                            // TODO: first merging step
                                                                                                                                            this.setState({
                                                                                                                                                counter: 38,
                                                                                                                                            })
                                                                                                                                        } else {
                                                                                                                                            wrongFunction();
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }>
                                                                                                                                    {value}
                                                                                                                                </Button>
                                                                                                                            </Draggable>
                                                                                                                        )
                                                                                                                    })
                                                                                                                    const arrayFive = (
                                                                                                                        <div>
                                                                                                                            {arrayFive1} {arrayFive2} {arrayFive3} {arrayFive4}
                                                                                                                        </div>
                                                                                                                    )
                                                                                                                    this.setState({
                                                                                                                        counter: 30,
                                                                                                                        arrayFive: arrayFive,
                                                                                                                    })
                                                                                                                } else {
                                                                                                                    wrongFunction();
                                                                                                                }
                                                                                                            }
                                                                                                        }>
                                                                                                            {value}
                                                                                                        </Button>
                                                                                                    </Draggable>
                                                                                                )
                                                                                            })
                                                                                            const arrayFour = (
                                                                                                <div>
                                                                                                    {arrayFour1} {arrayFour2} {arrayFour3} {arrayFour4} {arrayFour5} {arrayFour6} {arrayFour7} {arrayFour8}
                                                                                                </div>
                                                                                            )
                                                                                            this.setState({
                                                                                                counter: 14,
                                                                                                arrayFour: arrayFour,
                                                                                            })
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }>
                                                                                {value}
                                                                            </Button>
                                                                        </Draggable>
                                                                    )
                                                                });
                                                                const arrayThree = (
                                                                    <div>
                                                                        {arrayThree1} {arrayThree2} {arrayThree3} {arrayThree4}
                                                                    </div>
                                                                )
                                                                this.setState({
                                                                    counter: 6,
                                                                    arrayThree: arrayThree,
                                                                });
                                                            }
                                                        } else {
                                                            wrongFunction();
                                                        }
                                                    }
                                                }>
                                                    {value}
                                                </Button>
                                            </Draggable>
                                        )
                                    });
                                    const arrayTwo = (
                                        <div>
                                            {arrayTwo1} {arrayTwo2}
                                        </div>
                                    );
                                    this.setState({
                                        counter: 2,
                                        arrayTwo: arrayTwo,
                                    });
                            } else {
                                wrongFunction();
                            }
                        }
                    }
                    }
                    >
                        {value}
                    </Button>
                </Draggable>
            )
        })
        
        return (
            <div style={{
                marginLeft: "20%",
                marginRight: "20%",
            }}>
                <h1>Level Three</h1>
                <h2>MergeSort Algorithm</h2>
                <h5>Ensure NOT to double click buttons</h5>
                <h5>ONLY FIREFOX COMPATIBLE</h5>
                <h4>Perform all steps of the MergeSort Algorithm taught to you in Levels 1 and 2 to complete this level. Feedback will be given to help you.</h4>
                {arrayOne}
                {this.state.arrayTwo}
                {this.state.arrayThree}
                {this.state.arrayFour}
                {this.state.arrayFive}
                <br />
                <Link to ="/levels">
                    <Button style={{marginTop: "2%"}} variant="secondary" >Return to Level Select</Button>
                </Link>
                <br />
            </div>
        )
    }

}