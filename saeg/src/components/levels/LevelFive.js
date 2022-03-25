import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Draggable from 'react-draggable';
import { wrongFunction, correctFunction } from '../../functions/SoundFunctions';
import { Link } from 'react-router-dom';

export default class LevelFive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            nums: [],
            stepOneLeft: [],
            stepOneRight: [],
            stepTwo1: [],
            stepTwo2: [],
            stepTwo3: [],
            stepTwo4: [],
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
            stepFour5: [],
            stepFour6: [],
            stepFour7: [],
            stepFour8: [],
            stepFour9: [],
            stepFour10: [],
            stepFour11: [],
            stepFour12: [],
            stepFour13: [],
            stepFour14: [],
            stepFour15: [],
            stepFour16: [],
            stepFive1: [],
            stepFive2: [],
            stepFive3: [],
            stepFive4: [],
            stepFive5: [],
            stepFive6: [],
            stepFive7: [],
            stepFive8: [],
            stepFive9: [],
            stepFive10: [],
            stepFive11: [],
            stepFive12: [],
            stepFive13: [],
            stepFive14: [],
            stepFive15: [],
            stepFive16: [],
            stepFive17: [],
            stepFive18: [],
            stepSeven1: [],
            stepSeven2: [],
            stepSeven3: [],
            stepSeven4: [],
            stepSeven5: [],
            stepSeven6: [],
            stepSeven7: [],
            stepSeven8: [],
            stepSeven9: [],
            stepSeven10: [],
            stepSeven11: [],
            stepSeven12: [],
            stepSeven13: [],
            stepSeven14: [],
            stepSeven15: [],
            stepSeven16: [],
            stepSeven17: [],
            stepSeven18: [],
            stepSeven19: [],
            stepEight1: [],
            stepEight2: [],
            stepEight3: [],
            stepEight4: [],
            stepEight5: [],
            stepEight6: [],
            stepEight7: [],
            stepEight8: [],
            stepEight9: [],
            stepEight10: [],
            stepEight11: [],
            stepEight12: [],
            stepEight13: [],
            stepEight14: [],
            stepEight15: [],
            stepEight16: [],
            stepNine1: [],
            stepNine2: [],
            stepNine3: [],
            stepNine4: [],
            stepNine5: [],
            stepNine6: [],
            stepNine7: [],
            stepNine8: [],
            stepTen1: [],
            stepTen2: [],
            stepTen3: [],
            stepTen4: [],
            stepEleven1: [],
            stepEleven2: [],
            stepTwelve: [],
            arrayTwo: null,
            arrayThree: null,
            arrayFour: null,
            arrayFive: null,
            arraySix: null,
            arraySeven: null,
            arrayEight: null,
            arrayNine: null,
            arrayTen: null,
            arrayEleven: null,
            arrayTwelve: null,
        }
        for (let i=0; i<50; i++) {
            // add 50 random integers between 1 and 100 to nums array
            this.state.nums.push(Math.floor(Math.random() * 101));
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
                                if (this.state.stepOneLeft.length>=25) {
                                    let temp = [...this.state.nums].slice(0, 25);
                                    for (let i=0; i<25; i++) {
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
                                if (this.state.stepOneRight.length>=25) {
                                    let temp = [...this.state.nums].slice(25);
                                    for (let i=0; i<25; i++) {
                                        if (!temp.includes(this.state.stepOneRight[i])) {
                                            wrongFunction();
                                            window.location.reload();
                                        } else {
                                            temp.splice(temp.indexOf(this.state.stepOneRight[i]), 1);
                                        }
                                    }
                                    correctFunction();
                                    let arrayTwo1 = [...this.state.nums].slice(0, 25).map((value, index) => {
                                        return (
                                            <Draggable>
                                                <Button key={index} onClick={
                                                    () => {
                                                        console.log(this.state.counter)
                                                        if (this.state.counter===2) {
                                                            
                                                            this.state.stepTwo1.push(value);
                                                            if (this.state.stepTwo1.length>=13) {
                                                                let temp = [...this.state.nums].slice(0, 13);
                                                                for (let i = 0; i < 13; i++) {
                                                                    if (!temp.includes(this.state.stepTwo1[i])) {
                                                                        wrongFunction();
                                                                        window.location.reload();
                                                                    } else {
                                                                        temp.splice(temp.indexOf(this.state.stepTwo1[i]), 1);
                                                                    }
                                                                }
                                                                correctFunction();
                                                                this.setState({
                                                                    counter: 3,
                                                                })
                                                            }
                                                        } else if (this.state.counter===3) {
                                                            this.state.stepTwo2.push(value);
                                                            if (this.state.stepTwo2.length >= 12) {
                                                                let temp = [...this.state.nums].slice(13, 25);
                                                                for (let i = 0; i < 12; i++) {
                                                                    if (!temp.includes(this.state.stepTwo2[i])) {
                                                                        wrongFunction();
                                                                        window.location.reload();
                                                                    } else {
                                                                        temp.splice(temp.indexOf(this.state.stepTwo2[i]), 1);
                                                                    }
                                                                }
                                                                correctFunction();
                                                                this.setState({
                                                                    counter: 4,
                                                                });
                                                            }
                                                        }
                                                    }
                                                }>
                                                {value}
                                                </Button>
                                            </Draggable>
                                        )
                                    })
                                    let arrayTwo2 = [...this.state.nums].slice(25).map((value, index) => {
                                        return (
                                            <Draggable>
                                                <Button key={index} onClick={
                                                    () => {
                                                        if (this.state.counter===4) {
                                                            this.state.stepTwo3.push(value);
                                                            if (this.state.stepTwo3.length >= 13) {
                                                                let temp = [...this.state.nums].slice(25, 38);
                                                                for (let i = 0; i < 13; i++) {
                                                                    if (!temp.includes(this.state.stepTwo3[i])) {
                                                                        wrongFunction();
                                                                        window.location.reload();
                                                                    } else {
                                                                        temp.splice(temp.indexOf(this.state.stepTwo3[i]), 1);
                                                                    }
                                                                }
                                                                correctFunction();
                                                                this.setState({
                                                                    counter: 5,
                                                                });
                                                            }
                                                        } else if (this.state.counter===5) {
                                                            this.state.stepTwo4.push(value);
                                                            if (this.state.stepTwo4.length >= 12) {
                                                                let temp = [...this.state.nums].slice(38);
                                                                for (let i = 0; i < 12; i++) {
                                                                    if (!temp.includes(this.state.stepTwo4[i])) {
                                                                        wrongFunction();
                                                                        window.location.reload();
                                                                    } else {
                                                                        temp.splice(temp.indexOf(this.state.stepTwo4[i]), 1);
                                                                    }
                                                                }
                                                                correctFunction();
                                                                let arrayThree1 = [...this.state.nums].slice(0, 13).map((value, index) => {
                                                                    return (
                                                                        <Draggable>
                                                                            <Button value={index} onClick={
                                                                                () => {
                                                                                    if (this.state.counter===6) {
                                                                                        this.state.stepThree1.push(value);
                                                                                        if (this.state.stepThree1.length >= 7) {
                                                                                            let temp = [...this.state.nums].slice(0, 7);
                                                                                            for (let i=0; i<7; i++) {
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
                                                                                        if (this.state.stepThree2.length >= 6) {
                                                                                            let temp = [...this.state.nums].slice(7, 13);
                                                                                            for (let i=0; i<6; i++) {
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
                                                                                    }
                                                                                }
                                                                            }>
                                                                            {value}
                                                                            </Button>
                                                                        </Draggable>
                                                                    )
                                                                })
                                                                let arrayThree2 = [...this.state.nums].slice(13, 25).map((value, index) => {
                                                                    return (
                                                                        <Draggable>
                                                                            <Button value={index} onClick={
                                                                                () => {
                                                                                    if (this.state.counter===8) {
                                                                                        this.state.stepThree3.push(value);
                                                                                        if (this.state.stepThree3.length >= 6) {
                                                                                            let temp = [...this.state.nums].slice(13, 19);
                                                                                            for (let i=0; i<6; i++) {
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
                                                                                        if (this.state.stepThree4.length >= 6) {
                                                                                            let temp = [...this.state.nums].slice(19, 25);
                                                                                            for (let i=0; i<6; i++) {
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
                                                                                    }
                                                                                }
                                                                            }>
                                                                            {value}
                                                                            </Button>
                                                                        </Draggable>
                                                                    )
                                                                })
                                                                let arrayThree3 = [...this.state.nums].slice(25, 38).map((value, index) => {
                                                                    return (
                                                                        <Draggable>
                                                                            <Button value={index} onClick={
                                                                                () => {
                                                                                    if (this.state.counter===10) {
                                                                                        this.state.stepThree5.push(value);
                                                                                        if (this.state.stepThree5.length >= 7) {
                                                                                            let temp = [...this.state.nums].slice(25, 32);
                                                                                            for (let i=0; i<7; i++) {
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
                                                                                        if (this.state.stepThree6.length >= 6) {
                                                                                            let temp = [...this.state.nums].slice(32, 38);
                                                                                            for (let i=0; i<6; i++) {
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
                                                                                    }
                                                                                }
                                                                            }>
                                                                            {value}
                                                                            </Button>
                                                                        </Draggable>
                                                                    )
                                                                })
                                                                let arrayThree4 = [...this.state.nums].slice(38).map((value, index) => {
                                                                    return (
                                                                        <Draggable>
                                                                            <Button value={index} onClick={
                                                                                () => {
                                                                                    if (this.state.counter===12) {
                                                                                        this.state.stepThree7.push(value);
                                                                                        if (this.state.stepThree7.length >= 6) {
                                                                                            let temp = [...this.state.nums].slice(38, 44);
                                                                                            for (let i=0; i<6; i++) {
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
                                                                                        if (this.state.stepThree8.length >= 6) {
                                                                                            let temp = [...this.state.nums].slice(44);
                                                                                            for (let i=0; i<6; i++) {
                                                                                                if (!temp.includes(this.state.stepThree8[i])) {
                                                                                                    wrongFunction();
                                                                                                    window.location.reload();
                                                                                                } else {
                                                                                                    temp.splice(temp.indexOf(this.state.stepThree8[i]), 1);
                                                                                                }
                                                                                            }
                                                                                            correctFunction();
                                                                                            let arrayFour1 = [...this.state.nums].slice(0, 7).map((value, index) => {
                                                                                                return (
                                                                                                    <Draggable>
                                                                                                        <Button key={index} onClick={
                                                                                                            () => {
                                                                                                                if (this.state.counter===14) {
                                                                                                                    this.state.stepFour1.push(value);
                                                                                                                    if (this.state.stepFour1.length >= 4) {
                                                                                                                        let temp = [...this.state.nums].slice(0, 4);
                                                                                                                        for (let i=0; i<4; i++) {
                                                                                                                            if (!temp.includes(this.state.stepFour1[i])) {
                                                                                                                                wrongFunction();
                                                                                                                                window.location.reload();
                                                                                                                            } else {
                                                                                                                                temp.splice(temp.indexOf(this.state.stepFour1[i]), 1);
                                                                                                                            }
                                                                                                                        }
                                                                                                                        correctFunction();
                                                                                                                        this.setState({
                                                                                                                            counter: 15,
                                                                                                                        })
                                                                                                                    }
                                                                                                                } else if (this.state.counter===15) {
                                                                                                                    this.state.stepFour2.push(value);
                                                                                                                    if (this.state.stepFour2.length >= 3) {
                                                                                                                        let temp = [...this.state.nums].slice(4, 7);
                                                                                                                        for (let i=0; i<3; i++) {
                                                                                                                            if (!temp.includes(this.state.stepFour2[i])) {
                                                                                                                                wrongFunction();
                                                                                                                                window.location.reload();
                                                                                                                            } else {
                                                                                                                                temp.splice(temp.indexOf(this.state.stepFour2[i]), 1);
                                                                                                                            }
                                                                                                                        }
                                                                                                                        correctFunction();
                                                                                                                        this.setState({
                                                                                                                            counter: 16,
                                                                                                                        })
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }>
                                                                                                            {value}
                                                                                                        </Button>
                                                                                                    </Draggable>
                                                                                                )
                                                                                            })
                                                                                            let arrayFour2 = [...this.state.nums].slice(7, 13).map((value, index) => {
                                                                                                return (
                                                                                                    <Draggable>
                                                                                                        <Button key={index} onClick={
                                                                                                            () => {
                                                                                                                if (this.state.counter===16) {
                                                                                                                    this.state.stepFour3.push(value);
                                                                                                                    if (this.state.stepFour3.length >= 3) {
                                                                                                                        let temp = [...this.state.nums].slice(7, 10);
                                                                                                                        for (let i=0; i<3; i++) {
                                                                                                                            if (!temp.includes(this.state.stepFour3[i])) {
                                                                                                                                wrongFunction();
                                                                                                                                window.location.reload();
                                                                                                                            } else {
                                                                                                                                temp.splice(temp.indexOf(this.state.stepFour3[i]), 1);
                                                                                                                            }
                                                                                                                        }
                                                                                                                        correctFunction();
                                                                                                                        this.setState({
                                                                                                                            counter: 17,
                                                                                                                        })
                                                                                                                    }
                                                                                                                } else if (this.state.counter===17) {
                                                                                                                    this.state.stepFour4.push(value);
                                                                                                                    if (this.state.stepFour4.length >= 3) {
                                                                                                                        let temp = [...this.state.nums].slice(10, 13);
                                                                                                                        for (let i=0; i<3; i++) {
                                                                                                                            if (!temp.includes(this.state.stepFour4[i])) {
                                                                                                                                wrongFunction();
                                                                                                                                window.location.reload();
                                                                                                                            } else {
                                                                                                                                temp.splice(temp.indexOf(this.state.stepFour4[i]), 1);
                                                                                                                            }
                                                                                                                        }
                                                                                                                        correctFunction();
                                                                                                                        this.setState({
                                                                                                                            counter: 18,
                                                                                                                        })
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }>
                                                                                                            {value}
                                                                                                        </Button>
                                                                                                    </Draggable>
                                                                                                )
                                                                                            })
                                                                                            let arrayFour3 = [...this.state.nums].slice(13, 19).map((value, index) => {
                                                                                                return (
                                                                                                    <Draggable>
                                                                                                        <Button key={index} onClick={
                                                                                                            () => {
                                                                                                                if (this.state.counter===18) {
                                                                                                                    this.state.stepFour5.push(value);
                                                                                                                    if (this.state.stepFour5.length >= 3) {
                                                                                                                        let temp = [...this.state.nums].slice(13, 16);
                                                                                                                        for (let i=0; i<3; i++) {
                                                                                                                            if (!temp.includes(this.state.stepFour5[i])) {
                                                                                                                                wrongFunction();
                                                                                                                                window.location.reload();
                                                                                                                            } else {
                                                                                                                                temp.splice(temp.indexOf(this.state.stepFour5[i]), 1);
                                                                                                                            }
                                                                                                                        }
                                                                                                                        correctFunction();
                                                                                                                        this.setState({
                                                                                                                            counter: 19,
                                                                                                                        })
                                                                                                                    }
                                                                                                                } else if (this.state.counter===19) {
                                                                                                                    this.state.stepFour6.push(value);
                                                                                                                    if (this.state.stepFour6.length >= 3) {
                                                                                                                        let temp = [...this.state.nums].slice(16, 19);
                                                                                                                        for (let i=0; i<3; i++) {
                                                                                                                            if (!temp.includes(this.state.stepFour6[i])) {
                                                                                                                                wrongFunction();
                                                                                                                                window.location.reload();
                                                                                                                            } else {
                                                                                                                                temp.splice(temp.indexOf(this.state.stepFour6[i]), 1);
                                                                                                                            }
                                                                                                                        }
                                                                                                                        correctFunction();
                                                                                                                        this.setState({
                                                                                                                            counter: 20,
                                                                                                                        })
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }>
                                                                                                            {value}
                                                                                                        </Button>
                                                                                                    </Draggable>
                                                                                                )
                                                                                            })
                                                                                            let arrayFour4 = [...this.state.nums].slice(19, 25).map((value, index) => {
                                                                                                return (
                                                                                                    <Draggable>
                                                                                                        <Button key={index} onClick={
                                                                                                            () => {
                                                                                                                if (this.state.counter===20) {
                                                                                                                    this.state.stepFour7.push(value);
                                                                                                                    if (this.state.stepFour7.length >= 3) {
                                                                                                                        let temp = [...this.state.nums].slice(19, 22);
                                                                                                                        for (let i=0; i<3; i++) {
                                                                                                                            if (!temp.includes(this.state.stepFour7[i])) {
                                                                                                                                wrongFunction();
                                                                                                                                window.location.reload();
                                                                                                                            } else {
                                                                                                                                temp.splice(temp.indexOf(this.state.stepFour7[i]), 1);
                                                                                                                            }
                                                                                                                        }
                                                                                                                        correctFunction();
                                                                                                                        this.setState({
                                                                                                                            counter: 21,
                                                                                                                        })
                                                                                                                    }
                                                                                                                } else if (this.state.counter===21) {
                                                                                                                    this.state.stepFour8.push(value);
                                                                                                                    if (this.state.stepFour8.length >= 3) {
                                                                                                                        let temp = [...this.state.nums].slice(22, 25);
                                                                                                                        for (let i=0; i<3; i++) {
                                                                                                                            if (!temp.includes(this.state.stepFour8[i])) {
                                                                                                                                wrongFunction();
                                                                                                                                window.location.reload();
                                                                                                                            } else {
                                                                                                                                temp.splice(temp.indexOf(this.state.stepFour8[i]), 1);
                                                                                                                            }
                                                                                                                        }
                                                                                                                        correctFunction();
                                                                                                                        this.setState({
                                                                                                                            counter: 22,
                                                                                                                        })
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }>
                                                                                                            {value}
                                                                                                        </Button>
                                                                                                    </Draggable>
                                                                                                )
                                                                                            })
                                                                                            let arrayFour5 = [...this.state.nums].slice(25, 32).map((value, index) => {
                                                                                                return (
                                                                                                    <Draggable>
                                                                                                        <Button key={index} onClick={
                                                                                                            () => {
                                                                                                                if (this.state.counter===22) {
                                                                                                                    this.state.stepFour9.push(value);
                                                                                                                    if (this.state.stepFour9.length >= 4) {
                                                                                                                        let temp = [...this.state.nums].slice(25, 29);
                                                                                                                        for (let i=0; i<4; i++) {
                                                                                                                            if (!temp.includes(this.state.stepFour9[i])) {
                                                                                                                                wrongFunction();
                                                                                                                                window.location.reload();
                                                                                                                            } else {
                                                                                                                                temp.splice(temp.indexOf(this.state.stepFour9[i]), 1);
                                                                                                                            }
                                                                                                                        }
                                                                                                                        correctFunction();
                                                                                                                        this.setState({
                                                                                                                            counter: 23,
                                                                                                                        })
                                                                                                                    }
                                                                                                                } else if (this.state.counter===23) {
                                                                                                                    this.state.stepFour10.push(value);
                                                                                                                    if (this.state.stepFour10.length >= 3) {
                                                                                                                        let temp = [...this.state.nums].slice(29, 32);
                                                                                                                        for (let i=0; i<3; i++) {
                                                                                                                            if (!temp.includes(this.state.stepFour10[i])) {
                                                                                                                                wrongFunction();
                                                                                                                                window.location.reload();
                                                                                                                            } else {
                                                                                                                                temp.splice(temp.indexOf(this.state.stepFour10[i]), 1);
                                                                                                                            }
                                                                                                                        }
                                                                                                                        correctFunction();
                                                                                                                        this.setState({
                                                                                                                            counter: 24,
                                                                                                                        })
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }>
                                                                                                            {value}
                                                                                                        </Button>
                                                                                                    </Draggable>
                                                                                                )
                                                                                            })
                                                                                            let arrayFour6 = [...this.state.nums].slice(32, 38).map((value, index) => {
                                                                                                return (
                                                                                                    <Draggable>
                                                                                                        <Button key={index} onClick={
                                                                                                            () => {
                                                                                                                if (this.state.counter===24) {
                                                                                                                    this.state.stepFour11.push(value);
                                                                                                                    if (this.state.stepFour11.length >= 3) {
                                                                                                                        let temp = [...this.state.nums].slice(32, 35);
                                                                                                                        for (let i=0; i<3; i++) {
                                                                                                                            if (!temp.includes(this.state.stepFour11[i])) {
                                                                                                                                wrongFunction();
                                                                                                                                window.location.reload();
                                                                                                                            } else {
                                                                                                                                temp.splice(temp.indexOf(this.state.stepFour11[i]), 1);
                                                                                                                            }
                                                                                                                        }
                                                                                                                        correctFunction();
                                                                                                                        this.setState({
                                                                                                                            counter: 25,
                                                                                                                        })
                                                                                                                    }
                                                                                                                } else if (this.state.counter===25) {
                                                                                                                    this.state.stepFour12.push(value);
                                                                                                                    if (this.state.stepFour12.length >= 3) {
                                                                                                                        let temp = [...this.state.nums].slice(35, 38);
                                                                                                                        for (let i=0; i<3; i++) {
                                                                                                                            if (!temp.includes(this.state.stepFour12[i])) {
                                                                                                                                wrongFunction();
                                                                                                                                window.location.reload();
                                                                                                                            } else {
                                                                                                                                temp.splice(temp.indexOf(this.state.stepFour12[i]), 1);
                                                                                                                            }
                                                                                                                        }
                                                                                                                        correctFunction();
                                                                                                                        this.setState({
                                                                                                                            counter: 26,
                                                                                                                        })
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }>
                                                                                                            {value}
                                                                                                        </Button>
                                                                                                    </Draggable>
                                                                                                )
                                                                                            })
                                                                                            let arrayFour7 = [...this.state.nums].slice(38, 44).map((value, index) => {
                                                                                                return (
                                                                                                    <Draggable>
                                                                                                        <Button key={index} onClick={
                                                                                                            () => {
                                                                                                                if (this.state.counter===26) {
                                                                                                                    this.state.stepFour13.push(value);
                                                                                                                    if (this.state.stepFour13.length >= 3) {
                                                                                                                        let temp = [...this.state.nums].slice(38, 41);
                                                                                                                        for (let i=0; i<3; i++) {
                                                                                                                            if (!temp.includes(this.state.stepFour13[i])) {
                                                                                                                                wrongFunction();
                                                                                                                                window.location.reload();
                                                                                                                            } else {
                                                                                                                                temp.splice(temp.indexOf(this.state.stepFour13[i]), 1);
                                                                                                                            }
                                                                                                                        }
                                                                                                                        correctFunction();
                                                                                                                        this.setState({
                                                                                                                            counter: 27,
                                                                                                                        })
                                                                                                                    }
                                                                                                                } else if (this.state.counter===27) {
                                                                                                                    this.state.stepFour14.push(value);
                                                                                                                    if (this.state.stepFour14.length >= 3) {
                                                                                                                        let temp = [...this.state.nums].slice(41, 44);
                                                                                                                        for (let i=0; i<3; i++) {
                                                                                                                            if (!temp.includes(this.state.stepFour14[i])) {
                                                                                                                                wrongFunction();
                                                                                                                                window.location.reload();
                                                                                                                            } else {
                                                                                                                                temp.splice(temp.indexOf(this.state.stepFour14[i]), 1);
                                                                                                                            }
                                                                                                                        }
                                                                                                                        correctFunction();
                                                                                                                        this.setState({
                                                                                                                            counter: 28,
                                                                                                                        })
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }>
                                                                                                            {value}
                                                                                                        </Button>
                                                                                                    </Draggable>
                                                                                                )
                                                                                            })
                                                                                            let arrayFour8 = [...this.state.nums].slice(44, 50).map((value, index) => {
                                                                                                return (
                                                                                                    <Draggable>
                                                                                                        <Button key={index} onClick={
                                                                                                            () => {
                                                                                                                if (this.state.counter===28) {
                                                                                                                    this.state.stepFour15.push(value);
                                                                                                                    if (this.state.stepFour15.length >= 3) {
                                                                                                                        let temp = [...this.state.nums].slice(44, 47);
                                                                                                                        for (let i=0; i<3; i++) {
                                                                                                                            if (!temp.includes(this.state.stepFour15[i])) {
                                                                                                                                wrongFunction();
                                                                                                                                window.location.reload();
                                                                                                                            } else {
                                                                                                                                temp.splice(temp.indexOf(this.state.stepFour15[i]), 1);
                                                                                                                            }
                                                                                                                        }
                                                                                                                        correctFunction();
                                                                                                                        this.setState({
                                                                                                                            counter: 29,
                                                                                                                        })
                                                                                                                    }
                                                                                                                } else if (this.state.counter===29) {
                                                                                                                    this.state.stepFour16.push(value);
                                                                                                                    if (this.state.stepFour16.length >= 3) {
                                                                                                                        let temp = [...this.state.nums].slice(47, 50);
                                                                                                                        for (let i=0; i<3; i++) {
                                                                                                                            if (!temp.includes(this.state.stepFour16[i])) {
                                                                                                                                wrongFunction();
                                                                                                                                window.location.reload();
                                                                                                                            } else {
                                                                                                                                temp.splice(temp.indexOf(this.state.stepFour16[i]), 1);
                                                                                                                            }
                                                                                                                        }
                                                                                                                        let arrayFive1 = [...this.state.nums].slice(0, 4).map((value, index) => {
                                                                                                                            return (
                                                                                                                                <Draggable>
                                                                                                                                    <Button key={index} onClick={
                                                                                                                                        () => {
                                                                                                                                            if (this.state.counter===30) {
                                                                                                                                                this.state.stepFive1.push(value);
                                                                                                                                                if (this.state.stepFive1.length >= 2) {
                                                                                                                                                    let temp = [...this.state.nums].slice(0, 2);
                                                                                                                                                    for (let i=0; i<2; i++) {
                                                                                                                                                        if (!temp.includes(this.state.stepFive1[i])) {
                                                                                                                                                            wrongFunction();
                                                                                                                                                            window.location.reload();
                                                                                                                                                        } else {
                                                                                                                                                            temp.splice(temp.indexOf(this.state.stepFive1[i]), 1);
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                    correctFunction();
                                                                                                                                                    this.setState({
                                                                                                                                                        counter: 31,
                                                                                                                                                    })
                                                                                                                                                }
                                                                                                                                            } else if (this.state.counter===31) {
                                                                                                                                                this.state.stepFive2.push(value);
                                                                                                                                                if (this.state.stepFive2.length >= 2) {
                                                                                                                                                    let temp = [...this.state.nums].slice(2, 4);
                                                                                                                                                    for (let i=0; i<2; i++) {
                                                                                                                                                        if (!temp.includes(this.state.stepFive2[i])) {
                                                                                                                                                            wrongFunction();
                                                                                                                                                            window.location.reload();
                                                                                                                                                        } else {
                                                                                                                                                            temp.splice(temp.indexOf(this.state.stepFive2[i]), 1);
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                    correctFunction();
                                                                                                                                                    this.setState({
                                                                                                                                                        counter: 32,
                                                                                                                                                    })
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }>{value}</Button>
                                                                                                                                </Draggable>
                                                                                                                            )
                                                                                                                        })
                                                                                                                        let arrayFive2 = [...this.state.nums].slice(4, 7).map((value, index) => {
                                                                                                                            return (
                                                                                                                                <Draggable>
                                                                                                                                    <Button key={index} onClick={
                                                                                                                                        () => {
                                                                                                                                            if (this.state.counter===32) {
                                                                                                                                                this.state.stepFive3.push(value);
                                                                                                                                                if (this.state.stepFive3.length >= 2) {
                                                                                                                                                    let temp = [...this.state.nums].slice(4, 6);
                                                                                                                                                    for (let i=0; i<2; i++) {
                                                                                                                                                        if (!temp.includes(this.state.stepFive3[i])) {
                                                                                                                                                            wrongFunction();
                                                                                                                                                            window.location.reload();
                                                                                                                                                        } else {
                                                                                                                                                            temp.splice(temp.indexOf(this.state.stepFive3[i]), 1);
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                    correctFunction();
                                                                                                                                                    this.setState({
                                                                                                                                                        counter: 33,
                                                                                                                                                    })
                                                                                                                                                }
                                                                                                                                            } else if (this.state.counter===33) {
                                                                                                                                                if (value !== this.state.nums[6]) {
                                                                                                                                                    wrongFunction();
                                                                                                                                                } else {
                                                                                                                                                    correctFunction();
                                                                                                                                                    this.setState({
                                                                                                                                                        counter: 34,
                                                                                                                                                    })
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }>
                                                                                                                                        {value}
                                                                                                                                    </Button>
                                                                                                                                </Draggable>
                                                                                                                            )
                                                                                                                        })
                                                                                                                        let arrayFive3 = [...this.state.nums].slice(7, 10).map((value, index) => {
                                                                                                                            return (
                                                                                                                                <Draggable>
                                                                                                                                    <Button key={index} onClick={
                                                                                                                                        () => {
                                                                                                                                            if (this.state.counter===34) {
                                                                                                                                                this.state.stepFive4.push(value);
                                                                                                                                                if (this.state.stepFive4.length >= 2) {
                                                                                                                                                    let temp = [...this.state.nums].slice(7, 9);
                                                                                                                                                    for (let i=0; i<2; i++) {
                                                                                                                                                        if (!temp.includes(this.state.stepFive4[i])) {
                                                                                                                                                            wrongFunction();
                                                                                                                                                            window.location.reload();
                                                                                                                                                        } else {
                                                                                                                                                            temp.splice(temp.indexOf(this.state.stepFive4[i]), 1);
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                    correctFunction();
                                                                                                                                                    this.setState({
                                                                                                                                                        counter: 35,
                                                                                                                                                    })
                                                                                                                                                }
                                                                                                                                            } else if (this.state.counter===35) {
                                                                                                                                                if (value !== this.state.nums[9]) {
                                                                                                                                                    wrongFunction();
                                                                                                                                                } else {
                                                                                                                                                    correctFunction();
                                                                                                                                                    this.setState({
                                                                                                                                                        counter: 36,
                                                                                                                                                    })
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }>
                                                                                                                                        {value}
                                                                                                                                    </Button>
                                                                                                                                </Draggable>
                                                                                                                            )
                                                                                                                        })
                                                                                                                        let arrayFive4 = [...this.state.nums].slice(10, 13).map((value, index) => {
                                                                                                                            return (
                                                                                                                                <Draggable>
                                                                                                                                    <Button key={index} onClick={
                                                                                                                                        () => {
                                                                                                                                            if (this.state.counter===36) {
                                                                                                                                                this.state.stepFive5.push(value);
                                                                                                                                                if (this.state.stepFive5.length >= 2) {
                                                                                                                                                    let temp = [...this.state.nums].slice(10, 12);
                                                                                                                                                    for (let i=0; i<2; i++) {
                                                                                                                                                        if (!temp.includes(this.state.stepFive5[i])) {
                                                                                                                                                            wrongFunction();
                                                                                                                                                            window.location.reload();
                                                                                                                                                        } else {
                                                                                                                                                            temp.splice(temp.indexOf(this.state.stepFive5[i]), 1);
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                    correctFunction();
                                                                                                                                                    this.setState({
                                                                                                                                                        counter: 37,
                                                                                                                                                    })
                                                                                                                                                }
                                                                                                                                            } else if (this.state.counter===37) {
                                                                                                                                                if (value !== this.state.nums[12]) {
                                                                                                                                                    wrongFunction();
                                                                                                                                                } else {
                                                                                                                                                    correctFunction();
                                                                                                                                                    this.setState({
                                                                                                                                                        counter: 38,
                                                                                                                                                    })
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }>
                                                                                                                                        {value}
                                                                                                                                    </Button>
                                                                                                                                </Draggable>
                                                                                                                            )
                                                                                                                        })
                                                                                                                        let arrayFive5 = [...this.state.nums].slice(13, 16).map((value, index) => {
                                                                                                                            return (
                                                                                                                                <Draggable>
                                                                                                                                    <Button key={index} onClick={
                                                                                                                                        () => {
                                                                                                                                            if (this.state.counter===38) {
                                                                                                                                                this.state.stepFive6.push(value);
                                                                                                                                                if (this.state.stepFive6.length >= 2) {
                                                                                                                                                    let temp = [...this.state.nums].slice(13, 15);
                                                                                                                                                    for (let i=0; i<2; i++) {
                                                                                                                                                        if (!temp.includes(this.state.stepFive6[i])) {
                                                                                                                                                            wrongFunction();
                                                                                                                                                            window.location.reload();
                                                                                                                                                        } else {
                                                                                                                                                            temp.splice(temp.indexOf(this.state.stepFive6[i]), 1);
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                    correctFunction();
                                                                                                                                                    this.setState({
                                                                                                                                                        counter: 39,
                                                                                                                                                    })
                                                                                                                                                }
                                                                                                                                            } else if (this.state.counter===39) {
                                                                                                                                                if (value !== this.state.nums[15]) {
                                                                                                                                                    wrongFunction();
                                                                                                                                                } else {
                                                                                                                                                    correctFunction();
                                                                                                                                                    this.setState({
                                                                                                                                                        counter: 40,
                                                                                                                                                    })
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }>
                                                                                                                                        {value}
                                                                                                                                    </Button>
                                                                                                                                </Draggable>
                                                                                                                            )
                                                                                                                        })
                                                                                                                        let arrayFive6 = [...this.state.nums].slice(16, 19).map((value, index) => {
                                                                                                                            return (
                                                                                                                                <Draggable>
                                                                                                                                    <Button key={index} onClick={
                                                                                                                                        () => {
                                                                                                                                            if (this.state.counter===40) {
                                                                                                                                                this.state.stepFive7.push(value);
                                                                                                                                                if (this.state.stepFive7.length >= 2) {
                                                                                                                                                    let temp = [...this.state.nums].slice(16, 18);
                                                                                                                                                    for (let i=0; i<2; i++) {
                                                                                                                                                        if (!temp.includes(this.state.stepFive7[i])) {
                                                                                                                                                            wrongFunction();
                                                                                                                                                            window.location.reload();
                                                                                                                                                        } else {
                                                                                                                                                            temp.splice(temp.indexOf(this.state.stepFive7[i]), 1);
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                    correctFunction();
                                                                                                                                                    this.setState({
                                                                                                                                                        counter: 41,
                                                                                                                                                    })
                                                                                                                                                }
                                                                                                                                            } else if (this.state.counter===41) {
                                                                                                                                                if (value !== this.state.nums[18]) {
                                                                                                                                                    wrongFunction();
                                                                                                                                                } else {
                                                                                                                                                    correctFunction();
                                                                                                                                                    this.setState({
                                                                                                                                                        counter: 42,
                                                                                                                                                    })
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }>
                                                                                                                                        {value}
                                                                                                                                    </Button>
                                                                                                                                </Draggable>
                                                                                                                            )
                                                                                                                        })
                                                                                                                        let arrayFive7 = [...this.state.nums].slice(19, 22).map((value, index) => {
                                                                                                                            return (
                                                                                                                                <Draggable>
                                                                                                                                    <Button key={index} onClick={
                                                                                                                                        () => {
                                                                                                                                            if (this.state.counter===42) {
                                                                                                                                                this.state.stepFive8.push(value);
                                                                                                                                                if (this.state.stepFive8.length >= 2) {
                                                                                                                                                    let temp = [...this.state.nums].slice(19, 21);
                                                                                                                                                    for (let i=0; i<2; i++) {
                                                                                                                                                        if (!temp.includes(this.state.stepFive8[i])) {
                                                                                                                                                            wrongFunction();
                                                                                                                                                            window.location.reload();
                                                                                                                                                        } else {
                                                                                                                                                            temp.splice(temp.indexOf(this.state.stepFive8[i]), 1);
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                    correctFunction();
                                                                                                                                                    this.setState({
                                                                                                                                                        counter: 43,
                                                                                                                                                    })
                                                                                                                                                }
                                                                                                                                            } else if (this.state.counter===43) {
                                                                                                                                                if (value !== this.state.nums[21]) {
                                                                                                                                                    wrongFunction();
                                                                                                                                                } else {
                                                                                                                                                    correctFunction();
                                                                                                                                                    this.setState({
                                                                                                                                                        counter: 44,
                                                                                                                                                    })
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }>
                                                                                                                                        {value}
                                                                                                                                    </Button>
                                                                                                                                </Draggable>
                                                                                                                            )
                                                                                                                        })
                                                                                                                        let arrayFive8 = [...this.state.nums].slice(22, 25).map((value, index) => {
                                                                                                                            return (
                                                                                                                                <Draggable>
                                                                                                                                    <Button key={index} onClick={
                                                                                                                                        () => {
                                                                                                                                            if (this.state.counter===44) {
                                                                                                                                                this.state.stepFive9.push(value);
                                                                                                                                                if (this.state.stepFive9.length >= 2) {
                                                                                                                                                    let temp = [...this.state.nums].slice(22, 24);
                                                                                                                                                    for (let i=0; i<2; i++) {
                                                                                                                                                        if (!temp.includes(this.state.stepFive9[i])) {
                                                                                                                                                            wrongFunction();
                                                                                                                                                            window.location.reload();
                                                                                                                                                        } else {
                                                                                                                                                            temp.splice(temp.indexOf(this.state.stepFive9[i]), 1);
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                    correctFunction();
                                                                                                                                                    this.setState({
                                                                                                                                                        counter: 45,
                                                                                                                                                    })
                                                                                                                                                }
                                                                                                                                            } else if (this.state.counter===45) {
                                                                                                                                                if (value !== this.state.nums[24]) {
                                                                                                                                                    wrongFunction();
                                                                                                                                                } else {
                                                                                                                                                    correctFunction();
                                                                                                                                                    this.setState({
                                                                                                                                                        counter: 46,
                                                                                                                                                    })
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }>
                                                                                                                                        {value}
                                                                                                                                    </Button>
                                                                                                                                </Draggable>
                                                                                                                            )
                                                                                                                        })
                                                                                                                        let arrayFive9 = [...this.state.nums].slice(25, 29).map((value, index) => {
                                                                                                                            return (
                                                                                                                                <Draggable>
                                                                                                                                    <Button key={index} onClick={
                                                                                                                                        () => {
                                                                                                                                            if (this.state.counter===46) {
                                                                                                                                                this.state.stepFive10.push(value);
                                                                                                                                                if (this.state.stepFive10.length >= 2) {
                                                                                                                                                    let temp = [...this.state.nums].slice(25, 27);
                                                                                                                                                    for (let i=0; i<2; i++) {
                                                                                                                                                        if (!temp.includes(this.state.stepFive10[i])) {
                                                                                                                                                            wrongFunction();
                                                                                                                                                            window.location.reload();
                                                                                                                                                        } else {
                                                                                                                                                            temp.splice(temp.indexOf(this.state.stepFive10[i]), 1);
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                    correctFunction();
                                                                                                                                                    this.setState({
                                                                                                                                                        counter: 47,
                                                                                                                                                    })
                                                                                                                                                }
                                                                                                                                            } else if (this.state.counter===47) {
                                                                                                                                                this.state.stepFive11.push(value);
                                                                                                                                                if (this.state.stepFive11.length >= 2) {
                                                                                                                                                    let temp = [...this.state.nums].slice(27, 29);
                                                                                                                                                    for (let i=0; i<2; i++) {
                                                                                                                                                        if (!temp.includes(this.state.stepFive11[i])) {
                                                                                                                                                            wrongFunction();
                                                                                                                                                            window.location.reload();
                                                                                                                                                        } else {
                                                                                                                                                            temp.splice(temp.indexOf(this.state.stepFive11[i]), 1);
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                    correctFunction();
                                                                                                                                                    this.setState({
                                                                                                                                                        counter: 48,
                                                                                                                                                    })
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }>
                                                                                                                                        {value}
                                                                                                                                    </Button>
                                                                                                                                </Draggable>
                                                                                                                            )
                                                                                                                        })
                                                                                                                        let arrayFive10 = [...this.state.nums].slice(29, 32).map((value, index) => {
                                                                                                                            return (
                                                                                                                                <Draggable>
                                                                                                                                    <Button key={index} onClick={
                                                                                                                                        () => {
                                                                                                                                            if (this.state.counter===48) {
                                                                                                                                                this.state.stepFive12.push(value);
                                                                                                                                                if (this.state.stepFive12.length >= 2) {
                                                                                                                                                    let temp = [...this.state.nums].slice(29, 31);
                                                                                                                                                    for (let i=0; i<2; i++) {
                                                                                                                                                        if (!temp.includes(this.state.stepFive12[i])) {
                                                                                                                                                            wrongFunction();
                                                                                                                                                            window.location.reload();
                                                                                                                                                        } else {
                                                                                                                                                            temp.splice(temp.indexOf(this.state.stepFive12[i]), 1);
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                    correctFunction();
                                                                                                                                                    this.setState({
                                                                                                                                                        counter: 49,
                                                                                                                                                    })
                                                                                                                                                }
                                                                                                                                            } else if (this.state.counter===49) {
                                                                                                                                                if (value !== this.state.nums[31]) {
                                                                                                                                                    wrongFunction();
                                                                                                                                                } else {
                                                                                                                                                    correctFunction();
                                                                                                                                                    this.setState({
                                                                                                                                                        counter: 50,
                                                                                                                                                    })
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }>
                                                                                                                                        {value}
                                                                                                                                    </Button>
                                                                                                                                </Draggable>
                                                                                                                            )
                                                                                                                        })
                                                                                                                        let arrayFive11 = [...this.state.nums].slice(32, 35).map((value, index) => {
                                                                                                                            return (
                                                                                                                                <Draggable>
                                                                                                                                    <Button key={index} onClick={
                                                                                                                                        () => {
                                                                                                                                            if (this.state.counter===50) {
                                                                                                                                                this.state.stepFive13.push(value);
                                                                                                                                                if (this.state.stepFive13.length >= 2) {
                                                                                                                                                    let temp = [...this.state.nums].slice(32, 34);
                                                                                                                                                    for (let i=0; i<2; i++) {
                                                                                                                                                        if (!temp.includes(this.state.stepFive13[i])) {
                                                                                                                                                            wrongFunction();
                                                                                                                                                            window.location.reload();
                                                                                                                                                        } else {
                                                                                                                                                            temp.splice(temp.indexOf(this.state.stepFive13[i]), 1);
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                    correctFunction();
                                                                                                                                                    this.setState({
                                                                                                                                                        counter: 51,
                                                                                                                                                    })
                                                                                                                                                }
                                                                                                                                            } else if (this.state.counter===51) {
                                                                                                                                                if (value !== this.state.nums[34]) {
                                                                                                                                                    wrongFunction();
                                                                                                                                                } else {
                                                                                                                                                    correctFunction();
                                                                                                                                                    this.setState({
                                                                                                                                                        counter: 52,
                                                                                                                                                    })
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }>
                                                                                                                                        {value}
                                                                                                                                    </Button>
                                                                                                                                </Draggable>
                                                                                                                            )
                                                                                                                        })
                                                                                                                        let arrayFive12 = [...this.state.nums].slice(35, 38).map((value, index) => {
                                                                                                                            return (
                                                                                                                                <Draggable>
                                                                                                                                    <Button key={index} onClick={
                                                                                                                                        () => {
                                                                                                                                            if (this.state.counter===52) {
                                                                                                                                                this.state.stepFive14.push(value);
                                                                                                                                                if (this.state.stepFive14.length >= 2) {
                                                                                                                                                    let temp = [...this.state.nums].slice(35, 37);
                                                                                                                                                    for (let i=0; i<2; i++) {
                                                                                                                                                        if (!temp.includes(this.state.stepFive14[i])) {
                                                                                                                                                            wrongFunction();
                                                                                                                                                            window.location.reload();
                                                                                                                                                        } else {
                                                                                                                                                            temp.splice(temp.indexOf(this.state.stepFive14[i]), 1);
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                    correctFunction();
                                                                                                                                                    this.setState({
                                                                                                                                                        counter: 53,
                                                                                                                                                    })
                                                                                                                                                }
                                                                                                                                            } else if (this.state.counter===53) {
                                                                                                                                                if (value !== this.state.nums[37]) {
                                                                                                                                                    wrongFunction();
                                                                                                                                                } else {
                                                                                                                                                    correctFunction();
                                                                                                                                                    this.setState({
                                                                                                                                                        counter: 54,
                                                                                                                                                    })
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }>
                                                                                                                                        {value}
                                                                                                                                    </Button>
                                                                                                                                </Draggable>
                                                                                                                            )
                                                                                                                        })
                                                                                                                        let arrayFive13 = [...this.state.nums].slice(38, 41).map((value, index) => {
                                                                                                                            return (
                                                                                                                                <Draggable>
                                                                                                                                    <Button key={index} onClick={
                                                                                                                                        () => {
                                                                                                                                            if (this.state.counter===54) {
                                                                                                                                                this.state.stepFive15.push(value);
                                                                                                                                                if (this.state.stepFive15.length >= 2) {
                                                                                                                                                    let temp = [...this.state.nums].slice(38, 40);
                                                                                                                                                    for (let i=0; i<2; i++) {
                                                                                                                                                        if (!temp.includes(this.state.stepFive15[i])) {
                                                                                                                                                            wrongFunction();
                                                                                                                                                            window.location.reload();
                                                                                                                                                        } else {
                                                                                                                                                            temp.splice(temp.indexOf(this.state.stepFive15[i]), 1);
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                    correctFunction();
                                                                                                                                                    this.setState({
                                                                                                                                                        counter: 55,
                                                                                                                                                    })
                                                                                                                                                }
                                                                                                                                            } else if (this.state.counter===55) {
                                                                                                                                                if (value !== this.state.nums[40]) {
                                                                                                                                                    wrongFunction();
                                                                                                                                                } else {
                                                                                                                                                    correctFunction();
                                                                                                                                                    this.setState({
                                                                                                                                                        counter: 56,
                                                                                                                                                    })
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }>
                                                                                                                                        {value}
                                                                                                                                    </Button>
                                                                                                                                </Draggable>
                                                                                                                            )
                                                                                                                        })
                                                                                                                        let arrayFive14 = [...this.state.nums].slice(41, 44).map((value, index) => {
                                                                                                                            return (
                                                                                                                                <Draggable>
                                                                                                                                    <Button key={index} onClick={
                                                                                                                                        () => {
                                                                                                                                            if (this.state.counter===56) {
                                                                                                                                                this.state.stepFive16.push(value);
                                                                                                                                                if (this.state.stepFive16.length >= 2) {
                                                                                                                                                    let temp = [...this.state.nums].slice(41, 43);
                                                                                                                                                    for (let i=0; i<2; i++) {
                                                                                                                                                        if (!temp.includes(this.state.stepFive16[i])) {
                                                                                                                                                            wrongFunction();
                                                                                                                                                            window.location.reload();
                                                                                                                                                        } else {
                                                                                                                                                            temp.splice(temp.indexOf(this.state.stepFive16[i]), 1);
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                    correctFunction();
                                                                                                                                                    this.setState({
                                                                                                                                                        counter: 57,
                                                                                                                                                    })
                                                                                                                                                }
                                                                                                                                            } else if (this.state.counter===57) {
                                                                                                                                                if (value !== this.state.nums[43]) {
                                                                                                                                                    wrongFunction();
                                                                                                                                                } else {
                                                                                                                                                    correctFunction();
                                                                                                                                                    this.setState({
                                                                                                                                                        counter: 58,
                                                                                                                                                    })
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }>
                                                                                                                                        {value}
                                                                                                                                    </Button>
                                                                                                                                </Draggable>
                                                                                                                            )
                                                                                                                        })
                                                                                                                        let arrayFive15 = [...this.state.nums].slice(44, 47).map((value, index) => {
                                                                                                                            return (
                                                                                                                                <Draggable>
                                                                                                                                    <Button key={index} onClick={
                                                                                                                                        () => {
                                                                                                                                            if (this.state.counter===58) {
                                                                                                                                                this.state.stepFive17.push(value);
                                                                                                                                                if (this.state.stepFive17.length >= 2) {
                                                                                                                                                    let temp = [...this.state.nums].slice(44, 46);
                                                                                                                                                    for (let i=0; i<2; i++) {
                                                                                                                                                        if (!temp.includes(this.state.stepFive17[i])) {
                                                                                                                                                            wrongFunction();
                                                                                                                                                            window.location.reload();
                                                                                                                                                        } else {
                                                                                                                                                            temp.splice(temp.indexOf(this.state.stepFive17[i]), 1);
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                    correctFunction();
                                                                                                                                                    this.setState({
                                                                                                                                                        counter: 59,
                                                                                                                                                    })
                                                                                                                                                }
                                                                                                                                            } else if (this.state.counter===59) {
                                                                                                                                                if (value !== this.state.nums[46]) {
                                                                                                                                                    wrongFunction();
                                                                                                                                                } else {
                                                                                                                                                    correctFunction();
                                                                                                                                                    this.setState({
                                                                                                                                                        counter: 60,
                                                                                                                                                    })
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }>
                                                                                                                                        {value}
                                                                                                                                    </Button>
                                                                                                                                </Draggable>
                                                                                                                            )
                                                                                                                        })
                                                                                                                        let arrayFive16 = [...this.state.nums].slice(47, 50).map((value, index) => {
                                                                                                                            return (
                                                                                                                                <Draggable>
                                                                                                                                    <Button key={index} onClick={
                                                                                                                                        () => {
                                                                                                                                            if (this.state.counter===60) {
                                                                                                                                                this.state.stepFive18.push(value);
                                                                                                                                                if (this.state.stepFive18.length >= 2) {
                                                                                                                                                    let temp = [...this.state.nums].slice(47, 49);
                                                                                                                                                    for (let i=0; i<2; i++) {
                                                                                                                                                        if (!temp.includes(this.state.stepFive18[i])) {
                                                                                                                                                            wrongFunction();
                                                                                                                                                            window.location.reload();
                                                                                                                                                        } else {
                                                                                                                                                            temp.splice(temp.indexOf(this.state.stepFive18[i]), 1);
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                    correctFunction();
                                                                                                                                                    this.setState({
                                                                                                                                                        counter: 61,
                                                                                                                                                    })
                                                                                                                                                }
                                                                                                                                            } else if (this.state.counter===61) {
                                                                                                                                                if (value !== this.state.nums[49]) {
                                                                                                                                                    wrongFunction();
                                                                                                                                                } else {
                                                                                                                                                    correctFunction();
                                                                                                                                                    let arraySix1 = [...this.state.nums].slice(0, 2).map((value, index) => {
                                                                                                                                                        return (
                                                                                                                                                            <Draggable>
                                                                                                                                                                <Button key={index} onClick={
                                                                                                                                                                    () => {
                                                                                                                                                                        if (this.state.counter===62) {
                                                                                                                                                                            if (value !== this.state.nums[0]) {
                                                                                                                                                                                wrongFunction();
                                                                                                                                                                            } else {
                                                                                                                                                                                correctFunction();
                                                                                                                                                                                this.setState({
                                                                                                                                                                                    counter: 63,
                                                                                                                                                                                })
                                                                                                                                                                            }
                                                                                                                                                                        } else if (this.state.counter===63) {
                                                                                                                                                                            if (value !== this.state.nums[1]) {
                                                                                                                                                                                wrongFunction();
                                                                                                                                                                            } else {
                                                                                                                                                                                correctFunction();
                                                                                                                                                                                this.setState({
                                                                                                                                                                                    counter: 64,
                                                                                                                                                                                })
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }>
                                                                                                                                                                    {value}
                                                                                                                                                                </Button>
                                                                                                                                                            </Draggable>
                                                                                                                                                        )
                                                                                                                                                    })
                                                                                                                                                    let arraySix2 = [...this.state.nums].slice(2, 4).map((value, index) => {
                                                                                                                                                        return (
                                                                                                                                                            <Draggable>
                                                                                                                                                                <Button key={index} onClick={
                                                                                                                                                                    () => {
                                                                                                                                                                        if (this.state.counter===64) {
                                                                                                                                                                            if (value !== this.state.nums[2]) {
                                                                                                                                                                                wrongFunction();
                                                                                                                                                                            } else {
                                                                                                                                                                                correctFunction();
                                                                                                                                                                                this.setState({
                                                                                                                                                                                    counter: 65,
                                                                                                                                                                                })
                                                                                                                                                                            }
                                                                                                                                                                        } else if (this.state.counter===65) {
                                                                                                                                                                            if (value !== this.state.nums[3]) {
                                                                                                                                                                                wrongFunction();
                                                                                                                                                                            } else {
                                                                                                                                                                                correctFunction();
                                                                                                                                                                                this.setState({
                                                                                                                                                                                    counter: 66,
                                                                                                                                                                                })
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }>
                                                                                                                                                                    {value}
                                                                                                                                                                </Button>
                                                                                                                                                            </Draggable>
                                                                                                                                                        )
                                                                                                                                                    })
                                                                                                                                                    let arraySix3 = [...this.state.nums].slice(4, 6).map((value, index) => {
                                                                                                                                                        return (
                                                                                                                                                            <Draggable>
                                                                                                                                                                <Button key={index} onClick={
                                                                                                                                                                    () => {
                                                                                                                                                                        if (this.state.counter===66) {
                                                                                                                                                                            if (value !== this.state.nums[4]) {
                                                                                                                                                                                wrongFunction();
                                                                                                                                                                            } else {
                                                                                                                                                                                correctFunction();
                                                                                                                                                                                this.setState({
                                                                                                                                                                                    counter: 67,
                                                                                                                                                                                })
                                                                                                                                                                            }
                                                                                                                                                                        } else if (this.state.counter===67) {
                                                                                                                                                                            if (value !== this.state.nums[5]) {
                                                                                                                                                                                wrongFunction();
                                                                                                                                                                            } else {
                                                                                                                                                                                correctFunction();
                                                                                                                                                                                this.setState({
                                                                                                                                                                                    counter: 68,
                                                                                                                                                                                })
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }>
                                                                                                                                                                    {value}
                                                                                                                                                                </Button>
                                                                                                                                                            </Draggable>
                                                                                                                                                        )
                                                                                                                                                    })
                                                                                                                                                    let arraySix4 = [...this.state.nums].slice(7, 9).map((value, index) => {
                                                                                                                                                        return (
                                                                                                                                                            <Draggable>
                                                                                                                                                                <Button key={index} onClick={
                                                                                                                                                                    () => {
                                                                                                                                                                        if (this.state.counter===68) {
                                                                                                                                                                            if (value !== this.state.nums[7]) {
                                                                                                                                                                                wrongFunction();
                                                                                                                                                                            } else {
                                                                                                                                                                                correctFunction();
                                                                                                                                                                                this.setState({
                                                                                                                                                                                    counter: 69,
                                                                                                                                                                                })
                                                                                                                                                                            }
                                                                                                                                                                        } else if (this.state.counter===69) {
                                                                                                                                                                            if (value !== this.state.nums[8]) {
                                                                                                                                                                                wrongFunction();
                                                                                                                                                                            } else {
                                                                                                                                                                                correctFunction();
                                                                                                                                                                                this.setState({
                                                                                                                                                                                    counter: 70,
                                                                                                                                                                                })
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }>
                                                                                                                                                                    {value}
                                                                                                                                                                </Button>
                                                                                                                                                            </Draggable>
                                                                                                                                                        )
                                                                                                                                                    })
                                                                                                                                                    let arraySix5 = [...this.state.nums].slice(10, 12).map((value, index) => {
                                                                                                                                                        return (
                                                                                                                                                            <Draggable>
                                                                                                                                                                <Button key={index} onClick={
                                                                                                                                                                    () => {
                                                                                                                                                                        if (this.state.counter===70) {
                                                                                                                                                                            if (value !== this.state.nums[10]) {
                                                                                                                                                                                wrongFunction();
                                                                                                                                                                            } else {
                                                                                                                                                                                correctFunction();
                                                                                                                                                                                this.setState({
                                                                                                                                                                                    counter: 71,
                                                                                                                                                                                })
                                                                                                                                                                            }
                                                                                                                                                                        } else if (this.state.counter===71) {
                                                                                                                                                                            if (value !== this.state.nums[11]) {
                                                                                                                                                                                wrongFunction();
                                                                                                                                                                            } else {
                                                                                                                                                                                correctFunction();
                                                                                                                                                                                this.setState({
                                                                                                                                                                                    counter: 72,
                                                                                                                                                                                })
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }>
                                                                                                                                                                    {value}
                                                                                                                                                                </Button>
                                                                                                                                                            </Draggable>
                                                                                                                                                        )
                                                                                                                                                    })
                                                                                                                                                    let arraySix6 = [...this.state.nums].slice(13, 15).map((value, index) => {
                                                                                                                                                        return (
                                                                                                                                                            <Draggable>
                                                                                                                                                                <Button key={index} onClick={
                                                                                                                                                                    () => {
                                                                                                                                                                        if (this.state.counter===72) {
                                                                                                                                                                            if (value !== this.state.nums[13]) {
                                                                                                                                                                                wrongFunction();
                                                                                                                                                                            } else {
                                                                                                                                                                                correctFunction();
                                                                                                                                                                                this.setState({
                                                                                                                                                                                    counter: 73,
                                                                                                                                                                                })
                                                                                                                                                                            }
                                                                                                                                                                        } else if (this.state.counter===73) {
                                                                                                                                                                            if (value !== this.state.nums[14]) {
                                                                                                                                                                                wrongFunction();
                                                                                                                                                                            } else {
                                                                                                                                                                                correctFunction();
                                                                                                                                                                                this.setState({
                                                                                                                                                                                    counter: 74,
                                                                                                                                                                                })
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }>
                                                                                                                                                                    {value}
                                                                                                                                                                </Button>
                                                                                                                                                            </Draggable>
                                                                                                                                                        )
                                                                                                                                                    })
                                                                                                                                                    let arraySix7 = [...this.state.nums].slice(16, 18).map((value, index) => {
                                                                                                                                                        return (
                                                                                                                                                            <Draggable>
                                                                                                                                                                <Button key={index} onClick={
                                                                                                                                                                    () => {
                                                                                                                                                                        if (this.state.counter===74) {
                                                                                                                                                                            if (value !== this.state.nums[16]) {
                                                                                                                                                                                wrongFunction();
                                                                                                                                                                            } else {
                                                                                                                                                                                correctFunction();
                                                                                                                                                                                this.setState({
                                                                                                                                                                                    counter: 75,
                                                                                                                                                                                })
                                                                                                                                                                            }
                                                                                                                                                                        } else if (this.state.counter===75) {
                                                                                                                                                                            if (value !== this.state.nums[17]) {
                                                                                                                                                                                wrongFunction();
                                                                                                                                                                            } else {
                                                                                                                                                                                correctFunction();
                                                                                                                                                                                this.setState({
                                                                                                                                                                                    counter: 76,
                                                                                                                                                                                })
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }>
                                                                                                                                                                    {value}
                                                                                                                                                                </Button>
                                                                                                                                                            </Draggable>
                                                                                                                                                        )
                                                                                                                                                    })
                                                                                                                                                    let arraySix8 = [...this.state.nums].slice(19, 21).map((value, index) => {
                                                                                                                                                        return (
                                                                                                                                                            <Draggable>
                                                                                                                                                                <Button key={index} onClick={
                                                                                                                                                                    () => {
                                                                                                                                                                        if (this.state.counter===76) {
                                                                                                                                                                            if (value !== this.state.nums[19]) {
                                                                                                                                                                                wrongFunction();
                                                                                                                                                                            } else {
                                                                                                                                                                                correctFunction();
                                                                                                                                                                                this.setState({
                                                                                                                                                                                    counter: 77,
                                                                                                                                                                                })
                                                                                                                                                                            }
                                                                                                                                                                        } else if (this.state.counter===77) {
                                                                                                                                                                            if (value !== this.state.nums[20]) {
                                                                                                                                                                                wrongFunction();
                                                                                                                                                                            } else {
                                                                                                                                                                                correctFunction();
                                                                                                                                                                                this.setState({
                                                                                                                                                                                    counter: 78,
                                                                                                                                                                                })
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }>
                                                                                                                                                                    {value}
                                                                                                                                                                </Button>
                                                                                                                                                            </Draggable>
                                                                                                                                                        )
                                                                                                                                                    })
                                                                                                                                                    let arraySix9 = [...this.state.nums].slice(22, 24).map((value, index) => {
                                                                                                                                                        return (
                                                                                                                                                            <Draggable>
                                                                                                                                                                <Button key={index} onClick={
                                                                                                                                                                    () => {
                                                                                                                                                                        if (this.state.counter===78) {
                                                                                                                                                                            if (value !== this.state.nums[22]) {
                                                                                                                                                                                wrongFunction();
                                                                                                                                                                            } else {
                                                                                                                                                                                correctFunction();
                                                                                                                                                                                this.setState({
                                                                                                                                                                                    counter: 79,
                                                                                                                                                                                })
                                                                                                                                                                            }
                                                                                                                                                                        } else if (this.state.counter===79) {
                                                                                                                                                                            if (value !== this.state.nums[23]) {
                                                                                                                                                                                wrongFunction();
                                                                                                                                                                            } else {
                                                                                                                                                                                correctFunction();
                                                                                                                                                                                this.setState({
                                                                                                                                                                                    counter: 80,
                                                                                                                                                                                })
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }>
                                                                                                                                                                    {value}
                                                                                                                                                                </Button>
                                                                                                                                                            </Draggable>
                                                                                                                                                        )
                                                                                                                                                    })
                                                                                                                                                    let arraySix10 = [...this.state.nums].slice(25, 27).map((value, index) => {
                                                                                                                                                        return (
                                                                                                                                                            <Draggable>
                                                                                                                                                                <Button key={index} onClick={
                                                                                                                                                                    () => {
                                                                                                                                                                        if (this.state.counter===80) {
                                                                                                                                                                            if (value !== this.state.nums[25]) {
                                                                                                                                                                                wrongFunction();
                                                                                                                                                                            } else {
                                                                                                                                                                                correctFunction();
                                                                                                                                                                                this.setState({
                                                                                                                                                                                    counter: 81,
                                                                                                                                                                                })
                                                                                                                                                                            }
                                                                                                                                                                        } else if (this.state.counter===81) {
                                                                                                                                                                            if (value !== this.state.nums[26]) {
                                                                                                                                                                                wrongFunction();
                                                                                                                                                                            } else {
                                                                                                                                                                                correctFunction();
                                                                                                                                                                                this.setState({
                                                                                                                                                                                    counter: 82,
                                                                                                                                                                                })
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }>
                                                                                                                                                                    {value}
                                                                                                                                                                </Button>
                                                                                                                                                            </Draggable>
                                                                                                                                                        )
                                                                                                                                                    })
                                                                                                                                                    let arraySix11 = [...this.state.nums].slice(27, 29).map((value, index) => {
                                                                                                                                                        return (
                                                                                                                                                            <Draggable>
                                                                                                                                                                <Button key={index} onClick={
                                                                                                                                                                    () => {
                                                                                                                                                                        if (this.state.counter===82) {
                                                                                                                                                                            if (value !== this.state.nums[27]) {
                                                                                                                                                                                wrongFunction();
                                                                                                                                                                            } else {
                                                                                                                                                                                correctFunction();
                                                                                                                                                                                this.setState({
                                                                                                                                                                                    counter: 83,
                                                                                                                                                                                })
                                                                                                                                                                            }
                                                                                                                                                                        } else if (this.state.counter===83) {
                                                                                                                                                                            if (value !== this.state.nums[28]) {
                                                                                                                                                                                wrongFunction();
                                                                                                                                                                            } else {
                                                                                                                                                                                correctFunction();
                                                                                                                                                                                this.setState({
                                                                                                                                                                                    counter: 84,
                                                                                                                                                                                })
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }>
                                                                                                                                                                    {value}
                                                                                                                                                                </Button>
                                                                                                                                                            </Draggable>
                                                                                                                                                        )
                                                                                                                                                    })
                                                                                                                                                    let arraySix12 = [...this.state.nums].slice(29, 31).map((value, index) => {
                                                                                                                                                        return (
                                                                                                                                                            <Draggable>
                                                                                                                                                                <Button key={index} onClick={
                                                                                                                                                                    () => {
                                                                                                                                                                        if (this.state.counter===84) {
                                                                                                                                                                            if (value !== this.state.nums[29]) {
                                                                                                                                                                                wrongFunction();
                                                                                                                                                                            } else {
                                                                                                                                                                                correctFunction();
                                                                                                                                                                                this.setState({
                                                                                                                                                                                    counter: 85,
                                                                                                                                                                                })
                                                                                                                                                                            }
                                                                                                                                                                        } else if (this.state.counter===85) {
                                                                                                                                                                            if (value !== this.state.nums[30]) {
                                                                                                                                                                                wrongFunction();
                                                                                                                                                                            } else {
                                                                                                                                                                                correctFunction();
                                                                                                                                                                                this.setState({
                                                                                                                                                                                    counter: 86,
                                                                                                                                                                                })
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }>
                                                                                                                                                                    {value}
                                                                                                                                                                </Button>
                                                                                                                                                            </Draggable>
                                                                                                                                                        )
                                                                                                                                                    })
                                                                                                                                                    let arraySix13 = [...this.state.nums].slice(32, 34).map((value, index) => {
                                                                                                                                                        return (
                                                                                                                                                            <Draggable>
                                                                                                                                                                <Button key={index} onClick={
                                                                                                                                                                    () => {
                                                                                                                                                                        if (this.state.counter===86) {
                                                                                                                                                                            if (value !== this.state.nums[32]) {
                                                                                                                                                                                wrongFunction();
                                                                                                                                                                            } else {
                                                                                                                                                                                correctFunction();
                                                                                                                                                                                this.setState({
                                                                                                                                                                                    counter: 87,
                                                                                                                                                                                })
                                                                                                                                                                            }
                                                                                                                                                                        } else if (this.state.counter===87) {
                                                                                                                                                                            if (value !== this.state.nums[33]) {
                                                                                                                                                                                wrongFunction();
                                                                                                                                                                            } else {
                                                                                                                                                                                correctFunction();
                                                                                                                                                                                this.setState({
                                                                                                                                                                                    counter: 88,
                                                                                                                                                                                })
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }>
                                                                                                                                                                    {value}
                                                                                                                                                                </Button>
                                                                                                                                                            </Draggable>
                                                                                                                                                        )
                                                                                                                                                    })
                                                                                                                                                    let arraySix14 = [...this.state.nums].slice(35, 37).map((value, index) => {
                                                                                                                                                        return (
                                                                                                                                                            <Draggable>
                                                                                                                                                                <Button key={index} onClick={
                                                                                                                                                                    () => {
                                                                                                                                                                        if (this.state.counter===88) {
                                                                                                                                                                            if (value !== this.state.nums[35]) {
                                                                                                                                                                                wrongFunction();
                                                                                                                                                                            } else {
                                                                                                                                                                                correctFunction();
                                                                                                                                                                                this.setState({
                                                                                                                                                                                    counter: 89,
                                                                                                                                                                                })
                                                                                                                                                                            }
                                                                                                                                                                        } else if (this.state.counter===89) {
                                                                                                                                                                            if (value !== this.state.nums[36]) {
                                                                                                                                                                                wrongFunction();
                                                                                                                                                                            } else {
                                                                                                                                                                                correctFunction();
                                                                                                                                                                                this.setState({
                                                                                                                                                                                    counter: 90,
                                                                                                                                                                                })
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }>
                                                                                                                                                                    {value}
                                                                                                                                                                </Button>
                                                                                                                                                            </Draggable>
                                                                                                                                                        )
                                                                                                                                                    })
                                                                                                                                                    let arraySix15 = [...this.state.nums].slice(38, 40).map((value, index) => {
                                                                                                                                                        return (
                                                                                                                                                            <Draggable>
                                                                                                                                                                <Button key={index} onClick={
                                                                                                                                                                    () => {
                                                                                                                                                                        if (this.state.counter===90) {
                                                                                                                                                                            if (value !== this.state.nums[38]) {
                                                                                                                                                                                wrongFunction();
                                                                                                                                                                            } else {
                                                                                                                                                                                correctFunction();
                                                                                                                                                                                this.setState({
                                                                                                                                                                                    counter: 91,
                                                                                                                                                                                })
                                                                                                                                                                            }
                                                                                                                                                                        } else if (this.state.counter===91) {
                                                                                                                                                                            if (value !== this.state.nums[39]) {
                                                                                                                                                                                wrongFunction();
                                                                                                                                                                            } else {
                                                                                                                                                                                correctFunction();
                                                                                                                                                                                this.setState({
                                                                                                                                                                                    counter: 92,
                                                                                                                                                                                })
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }>
                                                                                                                                                                    {value}
                                                                                                                                                                </Button>
                                                                                                                                                            </Draggable>
                                                                                                                                                        )
                                                                                                                                                    })
                                                                                                                                                    let arraySix16 = [...this.state.nums].slice(41, 43).map((value, index) => {
                                                                                                                                                        return (
                                                                                                                                                            <Draggable>
                                                                                                                                                                <Button key={index} onClick={
                                                                                                                                                                    () => {
                                                                                                                                                                        if (this.state.counter===92) {
                                                                                                                                                                            if (value !== this.state.nums[41]) {
                                                                                                                                                                                wrongFunction();
                                                                                                                                                                            } else {
                                                                                                                                                                                correctFunction();
                                                                                                                                                                                this.setState({
                                                                                                                                                                                    counter: 93,
                                                                                                                                                                                })
                                                                                                                                                                            }
                                                                                                                                                                        } else if (this.state.counter===93) {
                                                                                                                                                                            if (value !== this.state.nums[42]) {
                                                                                                                                                                                wrongFunction();
                                                                                                                                                                            } else {
                                                                                                                                                                                correctFunction();
                                                                                                                                                                                this.setState({
                                                                                                                                                                                    counter: 94,
                                                                                                                                                                                })
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }>
                                                                                                                                                                    {value}
                                                                                                                                                                </Button>
                                                                                                                                                            </Draggable>
                                                                                                                                                        )
                                                                                                                                                    })
                                                                                                                                                    let arraySix17 = [...this.state.nums].slice(44, 46).map((value, index) => {
                                                                                                                                                        return (
                                                                                                                                                            <Draggable>
                                                                                                                                                                <Button key={index} onClick={
                                                                                                                                                                    () => {
                                                                                                                                                                        if (this.state.counter===94) {
                                                                                                                                                                            if (value !== this.state.nums[44]) {
                                                                                                                                                                                wrongFunction();
                                                                                                                                                                            } else {
                                                                                                                                                                                correctFunction();
                                                                                                                                                                                this.setState({
                                                                                                                                                                                    counter: 95,
                                                                                                                                                                                })
                                                                                                                                                                            }
                                                                                                                                                                        } else if (this.state.counter===95) {
                                                                                                                                                                            if (value !== this.state.nums[45]) {
                                                                                                                                                                                wrongFunction();
                                                                                                                                                                            } else {
                                                                                                                                                                                correctFunction();
                                                                                                                                                                                this.setState({
                                                                                                                                                                                    counter: 96,
                                                                                                                                                                                })
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }>
                                                                                                                                                                    {value}
                                                                                                                                                                </Button>
                                                                                                                                                            </Draggable>
                                                                                                                                                        )
                                                                                                                                                    })
                                                                                                                                                    let arraySix18 = [...this.state.nums].slice(47, 49).map((value, index) => {
                                                                                                                                                        return (
                                                                                                                                                            <Draggable>
                                                                                                                                                                <Button key={index} onClick={
                                                                                                                                                                    () => {
                                                                                                                                                                        if (this.state.counter===96) {
                                                                                                                                                                            if (value !== this.state.nums[47]) {
                                                                                                                                                                                wrongFunction();
                                                                                                                                                                            } else {
                                                                                                                                                                                correctFunction();
                                                                                                                                                                                this.setState({
                                                                                                                                                                                    counter: 97,
                                                                                                                                                                                })
                                                                                                                                                                            }
                                                                                                                                                                        } else if (this.state.counter===97) {
                                                                                                                                                                            if (value !== this.state.nums[48]) {
                                                                                                                                                                                wrongFunction();
                                                                                                                                                                            } else {
                                                                                                                                                                                correctFunction();
                                                                                                                                                                                let arraySeven1 = [...this.state.nums].slice(0, 2).map((value, index) => {
                                                                                                                                                                                    return (
                                                                                                                                                                                        <Draggable>
                                                                                                                                                                                            <Button 
                                                                                                                                                                                                key={index}
                                                                                                                                                                                                style={{
                                                                                                                                                                                                    marginTop: "5%",
                                                                                                                                                                                                    marginLeft: "0.25%",
                                                                                                                                                                                                }}
                                                                                                                                                                                                onClick={
                                                                                                                                                                                                    () => {
                                                                                                                                                                                                        if (this.state.counter===98) {
                                                                                                                                                                                                            this.state.stepSeven1.push(value);
                                                                                                                                                                                                            if (this.state.stepSeven1.length >= 2) {
                                                                                                                                                                                                                let order = [...this.state.nums].slice(0, 2).sort((a, b) => a - b);
                                                                                                                                                                                                                for (let i=0; i<order.length; i++) {
                                                                                                                                                                                                                    if (order[i]!==this.state.stepSeven1[i]) {
                                                                                                                                                                                                                        wrongFunction();
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                }
                                                                                                                                                                                                                correctFunction();
                                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                                    counter: 99,
                                                                                                                                                                                                                })
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
                                                                                                                                                                                let arraySeven2 = [...this.state.nums].slice(2, 4).map((value, index) => {
                                                                                                                                                                                    return (
                                                                                                                                                                                        <Draggable>
                                                                                                                                                                                            <Button 
                                                                                                                                                                                                key={index}
                                                                                                                                                                                                style={{
                                                                                                                                                                                                    marginTop: "5%",
                                                                                                                                                                                                    marginLeft: "0.25%",
                                                                                                                                                                                                }}
                                                                                                                                                                                                onClick={
                                                                                                                                                                                                    () => {
                                                                                                                                                                                                        if (this.state.counter===99) {
                                                                                                                                                                                                            this.state.stepSeven2.push(value);
                                                                                                                                                                                                            if (this.state.stepSeven2.length >= 2) {
                                                                                                                                                                                                                let order = [...this.state.nums].slice(2, 4).sort((a, b) => a - b);
                                                                                                                                                                                                                for (let i=0; i<order.length; i++) {
                                                                                                                                                                                                                    if (order[i]!==this.state.stepSeven2[i]) {
                                                                                                                                                                                                                        wrongFunction();
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                }
                                                                                                                                                                                                                correctFunction();
                                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                                    counter: 100,
                                                                                                                                                                                                                })
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
                                                                                                                                                                                let arraySeven3 = [...this.state.nums].slice(4, 6).map((value, index) => {
                                                                                                                                                                                    return (
                                                                                                                                                                                        <Draggable>
                                                                                                                                                                                            <Button 
                                                                                                                                                                                                key={index}
                                                                                                                                                                                                style={{
                                                                                                                                                                                                    marginTop: "5%",
                                                                                                                                                                                                    marginLeft: "0.25%",
                                                                                                                                                                                                }}
                                                                                                                                                                                                onClick={
                                                                                                                                                                                                    () => {
                                                                                                                                                                                                        if (this.state.counter===100) {
                                                                                                                                                                                                            this.state.stepSeven3.push(value);
                                                                                                                                                                                                            if (this.state.stepSeven3.length >= 2) {
                                                                                                                                                                                                                let order = [...this.state.nums].slice(4, 6).sort((a, b) => a - b);
                                                                                                                                                                                                                for (let i=0; i<order.length; i++) {
                                                                                                                                                                                                                    if (order[i]!==this.state.stepSeven3[i]) {
                                                                                                                                                                                                                        wrongFunction();
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                }
                                                                                                                                                                                                                correctFunction();
                                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                                    counter: 101,
                                                                                                                                                                                                                })
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
                                                                                                                                                                                let arraySeven4 = [...this.state.nums].slice(7, 9).map((value, index) => {
                                                                                                                                                                                    return (
                                                                                                                                                                                        <Draggable>
                                                                                                                                                                                            <Button 
                                                                                                                                                                                                key={index}
                                                                                                                                                                                                style={{
                                                                                                                                                                                                    marginTop: "5%",
                                                                                                                                                                                                    marginLeft: "0.25%",
                                                                                                                                                                                                }}
                                                                                                                                                                                                onClick={
                                                                                                                                                                                                    () => {
                                                                                                                                                                                                        if (this.state.counter===101) {
                                                                                                                                                                                                            this.state.stepSeven4.push(value);
                                                                                                                                                                                                            if (this.state.stepSeven4.length >= 2) {
                                                                                                                                                                                                                let order = [...this.state.nums].slice(7, 9).sort((a, b) => a - b);
                                                                                                                                                                                                                for (let i=0; i<order.length; i++) {
                                                                                                                                                                                                                    if (order[i]!==this.state.stepSeven4[i]) {
                                                                                                                                                                                                                        wrongFunction();
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                }
                                                                                                                                                                                                                correctFunction();
                                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                                    counter: 102,
                                                                                                                                                                                                                })
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
                                                                                                                                                                                let arraySeven5 = [...this.state.nums].slice(10, 12).map((value, index) => {
                                                                                                                                                                                    return (
                                                                                                                                                                                        <Draggable>
                                                                                                                                                                                            <Button 
                                                                                                                                                                                                key={index}
                                                                                                                                                                                                style={{
                                                                                                                                                                                                    marginTop: "5%",
                                                                                                                                                                                                    marginLeft: "0.25%",
                                                                                                                                                                                                }}
                                                                                                                                                                                                onClick={
                                                                                                                                                                                                    () => {
                                                                                                                                                                                                        if (this.state.counter===102) {
                                                                                                                                                                                                            this.state.stepSeven5.push(value);
                                                                                                                                                                                                            if (this.state.stepSeven5.length >= 2) {
                                                                                                                                                                                                                let order = [...this.state.nums].slice(10, 12).sort((a, b) => a - b);
                                                                                                                                                                                                                for (let i=0; i<order.length; i++) {
                                                                                                                                                                                                                    if (order[i]!==this.state.stepSeven5[i]) {
                                                                                                                                                                                                                        wrongFunction();
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                }
                                                                                                                                                                                                                correctFunction();
                                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                                    counter: 103,
                                                                                                                                                                                                                })
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
                                                                                                                                                                                let arraySeven6 = [...this.state.nums].slice(13, 15).map((value, index) => {
                                                                                                                                                                                    return (
                                                                                                                                                                                        <Draggable>
                                                                                                                                                                                            <Button 
                                                                                                                                                                                                key={index}
                                                                                                                                                                                                style={{
                                                                                                                                                                                                    marginTop: "5%",
                                                                                                                                                                                                    marginLeft: "0.25%",
                                                                                                                                                                                                }}
                                                                                                                                                                                                onClick={
                                                                                                                                                                                                    () => {
                                                                                                                                                                                                        if (this.state.counter===103) {
                                                                                                                                                                                                            this.state.stepSeven6.push(value);
                                                                                                                                                                                                            if (this.state.stepSeven6.length >= 2) {
                                                                                                                                                                                                                let order = [...this.state.nums].slice(13, 15).sort((a, b) => a - b);
                                                                                                                                                                                                                for (let i=0; i<order.length; i++) {
                                                                                                                                                                                                                    if (order[i]!==this.state.stepSeven6[i]) {
                                                                                                                                                                                                                        wrongFunction();
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                }
                                                                                                                                                                                                                correctFunction();
                                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                                    counter: 104,
                                                                                                                                                                                                                })
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
                                                                                                                                                                                let arraySeven7 = [...this.state.nums].slice(16, 18).map((value, index) => {
                                                                                                                                                                                    return (
                                                                                                                                                                                        <Draggable>
                                                                                                                                                                                            <Button 
                                                                                                                                                                                                key={index}
                                                                                                                                                                                                style={{
                                                                                                                                                                                                    marginTop: "5%",
                                                                                                                                                                                                    marginLeft: "0.25%",
                                                                                                                                                                                                }}
                                                                                                                                                                                                onClick={
                                                                                                                                                                                                    () => {
                                                                                                                                                                                                        if (this.state.counter===104) {
                                                                                                                                                                                                            this.state.stepSeven7.push(value);
                                                                                                                                                                                                            if (this.state.stepSeven7.length >= 2) {
                                                                                                                                                                                                                let order = [...this.state.nums].slice(16, 18).sort((a, b) => a - b);
                                                                                                                                                                                                                for (let i=0; i<order.length; i++) {
                                                                                                                                                                                                                    if (order[i]!==this.state.stepSeven7[i]) {
                                                                                                                                                                                                                        wrongFunction();
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                }
                                                                                                                                                                                                                correctFunction();
                                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                                    counter: 105,
                                                                                                                                                                                                                })
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
                                                                                                                                                                                let arraySeven8 = [...this.state.nums].slice(19, 21).map((value, index) => {
                                                                                                                                                                                    return (
                                                                                                                                                                                        <Draggable>
                                                                                                                                                                                            <Button 
                                                                                                                                                                                                key={index}
                                                                                                                                                                                                style={{
                                                                                                                                                                                                    marginTop: "5%",
                                                                                                                                                                                                    marginLeft: "0.25%",
                                                                                                                                                                                                }}
                                                                                                                                                                                                onClick={
                                                                                                                                                                                                    () => {
                                                                                                                                                                                                        if (this.state.counter===105) {
                                                                                                                                                                                                            this.state.stepSeven8.push(value);
                                                                                                                                                                                                            if (this.state.stepSeven8.length >= 2) {
                                                                                                                                                                                                                let order = [...this.state.nums].slice(19, 21).sort((a, b) => a - b);
                                                                                                                                                                                                                for (let i=0; i<order.length; i++) {
                                                                                                                                                                                                                    if (order[i]!==this.state.stepSeven8[i]) {
                                                                                                                                                                                                                        wrongFunction();
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                }
                                                                                                                                                                                                                correctFunction();
                                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                                    counter: 106,
                                                                                                                                                                                                                })
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
                                                                                                                                                                                let arraySeven9 = [...this.state.nums].slice(22, 24).map((value, index) => {
                                                                                                                                                                                    return (
                                                                                                                                                                                        <Draggable>
                                                                                                                                                                                            <Button 
                                                                                                                                                                                                key={index}
                                                                                                                                                                                                style={{
                                                                                                                                                                                                    marginTop: "5%",
                                                                                                                                                                                                    marginLeft: "0.25%",
                                                                                                                                                                                                }}
                                                                                                                                                                                                onClick={
                                                                                                                                                                                                    () => {
                                                                                                                                                                                                        if (this.state.counter===106) {
                                                                                                                                                                                                            this.state.stepSeven9.push(value);
                                                                                                                                                                                                            if (this.state.stepSeven9.length >= 2) {
                                                                                                                                                                                                                let order = [...this.state.nums].slice(22, 24).sort((a, b) => a - b);
                                                                                                                                                                                                                for (let i=0; i<order.length; i++) {
                                                                                                                                                                                                                    if (order[i]!==this.state.stepSeven9[i]) {
                                                                                                                                                                                                                        wrongFunction();
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                }
                                                                                                                                                                                                                correctFunction();
                                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                                    counter: 107,
                                                                                                                                                                                                                })
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
                                                                                                                                                                                let arraySeven10 = [...this.state.nums].slice(25, 27).map((value, index) => {
                                                                                                                                                                                    return (
                                                                                                                                                                                        <Draggable>
                                                                                                                                                                                            <Button 
                                                                                                                                                                                                key={index}
                                                                                                                                                                                                style={{
                                                                                                                                                                                                    marginTop: "5%",
                                                                                                                                                                                                    marginLeft: "0.25%",
                                                                                                                                                                                                }}
                                                                                                                                                                                                onClick={
                                                                                                                                                                                                    () => {
                                                                                                                                                                                                        if (this.state.counter===107) {
                                                                                                                                                                                                            this.state.stepSeven10.push(value);
                                                                                                                                                                                                            if (this.state.stepSeven10.length >= 2) {
                                                                                                                                                                                                                let order = [...this.state.nums].slice(25, 27).sort((a, b) => a - b);
                                                                                                                                                                                                                for (let i=0; i<order.length; i++) {
                                                                                                                                                                                                                    if (order[i]!==this.state.stepSeven10[i]) {
                                                                                                                                                                                                                        wrongFunction();
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                }
                                                                                                                                                                                                                correctFunction();
                                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                                    counter: 108,
                                                                                                                                                                                                                })
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
                                                                                                                                                                                let arraySeven11 = [...this.state.nums].slice(27, 29).map((value, index) => {
                                                                                                                                                                                    return (
                                                                                                                                                                                        <Draggable>
                                                                                                                                                                                            <Button 
                                                                                                                                                                                                key={index}
                                                                                                                                                                                                style={{
                                                                                                                                                                                                    marginTop: "5%",
                                                                                                                                                                                                    marginLeft: "0.25%",
                                                                                                                                                                                                }}
                                                                                                                                                                                                onClick={
                                                                                                                                                                                                    () => {
                                                                                                                                                                                                        if (this.state.counter===108) {
                                                                                                                                                                                                            this.state.stepSeven11.push(value);
                                                                                                                                                                                                            if (this.state.stepSeven11.length >= 2) {
                                                                                                                                                                                                                let order = [...this.state.nums].slice(27, 29).sort((a, b) => a - b);
                                                                                                                                                                                                                for (let i=0; i<order.length; i++) {
                                                                                                                                                                                                                    if (order[i]!==this.state.stepSeven11[i]) {
                                                                                                                                                                                                                        wrongFunction();
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                }
                                                                                                                                                                                                                correctFunction();
                                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                                    counter: 109,
                                                                                                                                                                                                                })
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
                                                                                                                                                                                let arraySeven12 = [...this.state.nums].slice(29, 31).map((value, index) => {
                                                                                                                                                                                    return (
                                                                                                                                                                                        <Draggable>
                                                                                                                                                                                            <Button 
                                                                                                                                                                                                key={index}
                                                                                                                                                                                                style={{
                                                                                                                                                                                                    marginTop: "5%",
                                                                                                                                                                                                    marginLeft: "0.25%",
                                                                                                                                                                                                }}
                                                                                                                                                                                                onClick={
                                                                                                                                                                                                    () => {
                                                                                                                                                                                                        if (this.state.counter===109) {
                                                                                                                                                                                                            this.state.stepSeven12.push(value);
                                                                                                                                                                                                            if (this.state.stepSeven12.length >= 2) {
                                                                                                                                                                                                                let order = [...this.state.nums].slice(29, 31).sort((a, b) => a - b);
                                                                                                                                                                                                                for (let i=0; i<order.length; i++) {
                                                                                                                                                                                                                    if (order[i]!==this.state.stepSeven12[i]) {
                                                                                                                                                                                                                        wrongFunction();
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                }
                                                                                                                                                                                                                correctFunction();
                                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                                    counter: 110,
                                                                                                                                                                                                                })
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
                                                                                                                                                                                let arraySeven13 = [...this.state.nums].slice(32, 34).map((value, index) => {
                                                                                                                                                                                    return (
                                                                                                                                                                                        <Draggable>
                                                                                                                                                                                            <Button 
                                                                                                                                                                                                key={index}
                                                                                                                                                                                                style={{
                                                                                                                                                                                                    marginTop: "5%",
                                                                                                                                                                                                    marginLeft: "0.25%",
                                                                                                                                                                                                }}
                                                                                                                                                                                                onClick={
                                                                                                                                                                                                    () => {
                                                                                                                                                                                                        if (this.state.counter===110) {
                                                                                                                                                                                                            this.state.stepSeven13.push(value);
                                                                                                                                                                                                            if (this.state.stepSeven13.length >= 2) {
                                                                                                                                                                                                                let order = [...this.state.nums].slice(32, 34).sort((a, b) => a - b);
                                                                                                                                                                                                                for (let i=0; i<order.length; i++) {
                                                                                                                                                                                                                    if (order[i]!==this.state.stepSeven13[i]) {
                                                                                                                                                                                                                        wrongFunction();
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                }
                                                                                                                                                                                                                correctFunction();
                                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                                    counter: 111,
                                                                                                                                                                                                                })
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
                                                                                                                                                                                let arraySeven14 = [...this.state.nums].slice(35, 37).map((value, index) => {
                                                                                                                                                                                    return (
                                                                                                                                                                                        <Draggable>
                                                                                                                                                                                            <Button 
                                                                                                                                                                                                key={index}
                                                                                                                                                                                                style={{
                                                                                                                                                                                                    marginTop: "5%",
                                                                                                                                                                                                    marginLeft: "0.25%",
                                                                                                                                                                                                }}
                                                                                                                                                                                                onClick={
                                                                                                                                                                                                    () => {
                                                                                                                                                                                                        if (this.state.counter===111) {
                                                                                                                                                                                                            this.state.stepSeven14.push(value);
                                                                                                                                                                                                            if (this.state.stepSeven14.length >= 2) {
                                                                                                                                                                                                                let order = [...this.state.nums].slice(35, 37).sort((a, b) => a - b);
                                                                                                                                                                                                                for (let i=0; i<order.length; i++) {
                                                                                                                                                                                                                    if (order[i]!==this.state.stepSeven14[i]) {
                                                                                                                                                                                                                        wrongFunction();
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                }
                                                                                                                                                                                                                correctFunction();
                                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                                    counter: 112,
                                                                                                                                                                                                                })
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
                                                                                                                                                                                let arraySeven15 = [...this.state.nums].slice(38, 40).map((value, index) => {
                                                                                                                                                                                    return (
                                                                                                                                                                                        <Draggable>
                                                                                                                                                                                            <Button 
                                                                                                                                                                                                key={index}
                                                                                                                                                                                                style={{
                                                                                                                                                                                                    marginTop: "5%",
                                                                                                                                                                                                    marginLeft: "0.25%",
                                                                                                                                                                                                }}
                                                                                                                                                                                                onClick={
                                                                                                                                                                                                    () => {
                                                                                                                                                                                                        if (this.state.counter===112) {
                                                                                                                                                                                                            this.state.stepSeven15.push(value);
                                                                                                                                                                                                            if (this.state.stepSeven15.length >= 2) {
                                                                                                                                                                                                                let order = [...this.state.nums].slice(38, 40).sort((a, b) => a - b);
                                                                                                                                                                                                                for (let i=0; i<order.length; i++) {
                                                                                                                                                                                                                    if (order[i]!==this.state.stepSeven15[i]) {
                                                                                                                                                                                                                        wrongFunction();
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                }
                                                                                                                                                                                                                correctFunction();
                                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                                    counter: 113,
                                                                                                                                                                                                                })
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
                                                                                                                                                                                let arraySeven16 = [...this.state.nums].slice(41, 43).map((value, index) => {
                                                                                                                                                                                    return (
                                                                                                                                                                                        <Draggable>
                                                                                                                                                                                            <Button 
                                                                                                                                                                                                key={index}
                                                                                                                                                                                                style={{
                                                                                                                                                                                                    marginTop: "5%",
                                                                                                                                                                                                    marginLeft: "0.25%",
                                                                                                                                                                                                }}
                                                                                                                                                                                                onClick={
                                                                                                                                                                                                    () => {
                                                                                                                                                                                                        if (this.state.counter===113) {
                                                                                                                                                                                                            this.state.stepSeven16.push(value);
                                                                                                                                                                                                            if (this.state.stepSeven16.length >= 2) {
                                                                                                                                                                                                                let order = [...this.state.nums].slice(41, 43).sort((a, b) => a - b);
                                                                                                                                                                                                                for (let i=0; i<order.length; i++) {
                                                                                                                                                                                                                    if (order[i]!==this.state.stepSeven16[i]) {
                                                                                                                                                                                                                        wrongFunction();
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                }
                                                                                                                                                                                                                correctFunction();
                                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                                    counter: 114,
                                                                                                                                                                                                                })
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
                                                                                                                                                                                let arraySeven17 = [...this.state.nums].slice(44, 46).map((value, index) => {
                                                                                                                                                                                    return (
                                                                                                                                                                                        <Draggable>
                                                                                                                                                                                            <Button 
                                                                                                                                                                                                key={index}
                                                                                                                                                                                                style={{
                                                                                                                                                                                                    marginTop: "5%",
                                                                                                                                                                                                    marginLeft: "0.25%",
                                                                                                                                                                                                }}
                                                                                                                                                                                                onClick={
                                                                                                                                                                                                    () => {
                                                                                                                                                                                                        if (this.state.counter===114) {
                                                                                                                                                                                                            this.state.stepSeven17.push(value);
                                                                                                                                                                                                            if (this.state.stepSeven17.length >= 2) {
                                                                                                                                                                                                                let order = [...this.state.nums].slice(44, 46).sort((a, b) => a - b);
                                                                                                                                                                                                                for (let i=0; i<order.length; i++) {
                                                                                                                                                                                                                    if (order[i]!==this.state.stepSeven17[i]) {
                                                                                                                                                                                                                        wrongFunction();
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                }
                                                                                                                                                                                                                correctFunction();
                                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                                    counter: 115,
                                                                                                                                                                                                                })
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
                                                                                                                                                                                let arraySeven18 = [...this.state.nums].slice(47, 49).map((value, index) => {
                                                                                                                                                                                    return (
                                                                                                                                                                                        <Draggable>
                                                                                                                                                                                            <Button 
                                                                                                                                                                                                key={index}
                                                                                                                                                                                                style={{
                                                                                                                                                                                                    marginTop: "5%",
                                                                                                                                                                                                    marginLeft: "0.25%",
                                                                                                                                                                                                }}
                                                                                                                                                                                                onClick={
                                                                                                                                                                                                    () => {
                                                                                                                                                                                                        if (this.state.counter===115) {
                                                                                                                                                                                                            this.state.stepSeven18.push(value);
                                                                                                                                                                                                            if (this.state.stepSeven18.length >= 2) {
                                                                                                                                                                                                                let order = [...this.state.nums].slice(47, 49).sort((a, b) => a - b);
                                                                                                                                                                                                                for (let i=0; i<order.length; i++) {
                                                                                                                                                                                                                    if (order[i]!==this.state.stepSeven18[i]) {
                                                                                                                                                                                                                        wrongFunction();
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                }
                                                                                                                                                                                                                correctFunction();
                                                                                                                                                                                                                let aEight1 = [...this.state.nums].slice(0, 2).sort((a,b)=>a-b);
                                                                                                                                                                                                                aEight1.push(...[...this.state.nums].slice(2, 4).sort((a,b)=>a-b));
                                                                                                                                                                                                                let arrayEight1 = aEight1.map((value, index) => {
                                                                                                                                                                                                                    return (
                                                                                                                                                                                                                        <Draggable>
                                                                                                                                                                                                                            <Button
                                                                                                                                                                                                                                style={{
                                                                                                                                                                                                                                    marginTop: "5%",
                                                                                                                                                                                                                                    marginLeft: "0.25%",
                                                                                                                                                                                                                                }}
                                                                                                                                                                                                                                key={index}
                                                                                                                                                                                                                                onClick={
                                                                                                                                                                                                                                    () => {
                                                                                                                                                                                                                                        if (this.state.counter===116) {
                                                                                                                                                                                                                                            this.state.stepEight1.push(value);
                                                                                                                                                                                                                                            if (this.state.stepEight1.length >= 2) {
                                                                                                                                                                                                                                                let order = [...this.state.nums].slice(0,4).sort((a,b)=>a-b);
                                                                                                                                                                                                                                                for (let i=0; i<order.length; i++) {
                                                                                                                                                                                                                                                    if (order[i]!==this.state.stepEight1[i]) {
                                                                                                                                                                                                                                                        wrongFunction();
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                correctFunction();
                                                                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                                                                    counter: 117,
                                                                                                                                                                                                                                                })
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
                                                                                                                                                                                                                let aEight2 = [...this.state.nums].slice(4, 6).sort((a,b)=>a-b);
                                                                                                                                                                                                                aEight2.push(this.state.nums[6]);
                                                                                                                                                                                                                let arrayEight2 = aEight2.map((value, index) => {
                                                                                                                                                                                                                    return (
                                                                                                                                                                                                                        <Draggable>
                                                                                                                                                                                                                            <Button
                                                                                                                                                                                                                                style={{
                                                                                                                                                                                                                                    marginTop: "5%",
                                                                                                                                                                                                                                    marginLeft: "0.25%",
                                                                                                                                                                                                                                }}
                                                                                                                                                                                                                                key={index}
                                                                                                                                                                                                                                onClick={
                                                                                                                                                                                                                                    () => {
                                                                                                                                                                                                                                        if (this.state.counter===117) {
                                                                                                                                                                                                                                            this.state.stepEight2.push(value);
                                                                                                                                                                                                                                            if (this.state.stepEight2.length >= 2) {
                                                                                                                                                                                                                                                let order = [...this.state.nums].slice(4,7).sort((a,b)=>a-b);
                                                                                                                                                                                                                                                for (let i=0; i<order.length; i++) {
                                                                                                                                                                                                                                                    if (order[i]!==this.state.stepEight2[i]) {
                                                                                                                                                                                                                                                        wrongFunction();
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                correctFunction();
                                                                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                                                                    counter: 118,
                                                                                                                                                                                                                                                })
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
                                                                                                                                                                                                                let aEight3 = [...this.state.nums].slice(7, 9).sort((a,b)=>a-b);
                                                                                                                                                                                                                aEight3.push(this.state.nums[9]);
                                                                                                                                                                                                                let arrayEight3 = aEight3.map((value, index) => {
                                                                                                                                                                                                                    return (
                                                                                                                                                                                                                        <Draggable>
                                                                                                                                                                                                                            <Button
                                                                                                                                                                                                                                style={{
                                                                                                                                                                                                                                    marginTop: "5%",
                                                                                                                                                                                                                                    marginLeft: "0.25%",
                                                                                                                                                                                                                                }}
                                                                                                                                                                                                                                key={index}
                                                                                                                                                                                                                                onClick={
                                                                                                                                                                                                                                    () => {
                                                                                                                                                                                                                                        if (this.state.counter===118) {
                                                                                                                                                                                                                                            this.state.stepEight3.push(value);
                                                                                                                                                                                                                                            if (this.state.stepEight3.length >= 2) {
                                                                                                                                                                                                                                                let order = [...this.state.nums].slice(7, 10).sort((a,b)=>a-b);
                                                                                                                                                                                                                                                for (let i=0; i<order.length; i++) {
                                                                                                                                                                                                                                                    if (order[i]!==this.state.stepEight3[i]) {
                                                                                                                                                                                                                                                        wrongFunction();
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                correctFunction();
                                                                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                                                                    counter: 119,
                                                                                                                                                                                                                                                })
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
                                                                                                                                                                                                                let aEight4 = [...this.state.nums].slice(10, 12).sort((a,b)=>a-b);
                                                                                                                                                                                                                aEight4.push(this.state.nums[12]);
                                                                                                                                                                                                                let arrayEight4 = aEight4.map((value, index) => {
                                                                                                                                                                                                                    return (
                                                                                                                                                                                                                        <Draggable>
                                                                                                                                                                                                                            <Button
                                                                                                                                                                                                                                style={{
                                                                                                                                                                                                                                    marginTop: "5%",
                                                                                                                                                                                                                                    marginLeft: "0.25%",
                                                                                                                                                                                                                                }}
                                                                                                                                                                                                                                key={index}
                                                                                                                                                                                                                                onClick={
                                                                                                                                                                                                                                    () => {
                                                                                                                                                                                                                                        if (this.state.counter===119) {
                                                                                                                                                                                                                                            this.state.stepEight4.push(value);
                                                                                                                                                                                                                                            if (this.state.stepEight4.length >= 2) {
                                                                                                                                                                                                                                                let order = [...this.state.nums].slice(10, 13).sort((a,b)=>a-b);
                                                                                                                                                                                                                                                for (let i=0; i<order.length; i++) {
                                                                                                                                                                                                                                                    if (order[i]!==this.state.stepEight4[i]) {
                                                                                                                                                                                                                                                        wrongFunction();
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                correctFunction();
                                                                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                                                                    counter: 120,
                                                                                                                                                                                                                                                })
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
                                                                                                                                                                                                                let aEight5 = [...this.state.nums].slice(13, 15).sort((a,b)=>a-b);
                                                                                                                                                                                                                aEight5.push(this.state.nums[15]);
                                                                                                                                                                                                                let arrayEight5 = aEight5.map((value, index) => {
                                                                                                                                                                                                                    return (
                                                                                                                                                                                                                        <Draggable>
                                                                                                                                                                                                                            <Button
                                                                                                                                                                                                                                style={{
                                                                                                                                                                                                                                    marginTop: "5%",
                                                                                                                                                                                                                                    marginLeft: "0.25%",
                                                                                                                                                                                                                                }}
                                                                                                                                                                                                                                key={index}
                                                                                                                                                                                                                                onClick={
                                                                                                                                                                                                                                    () => {
                                                                                                                                                                                                                                        if (this.state.counter===120) {
                                                                                                                                                                                                                                            this.state.stepEight5.push(value);
                                                                                                                                                                                                                                            if (this.state.stepEight5.length >= 2) {
                                                                                                                                                                                                                                                let order = [...this.state.nums].slice(13, 16).sort((a,b)=>a-b);
                                                                                                                                                                                                                                                for (let i=0; i<order.length; i++) {
                                                                                                                                                                                                                                                    if (order[i]!==this.state.stepEight5[i]) {
                                                                                                                                                                                                                                                        wrongFunction();
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                correctFunction();
                                                                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                                                                    counter: 121,
                                                                                                                                                                                                                                                })
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
                                                                                                                                                                                                                let aEight6 = [...this.state.nums].slice(16, 18).sort((a,b)=>a-b);
                                                                                                                                                                                                                aEight6.push(this.state.nums[18]);
                                                                                                                                                                                                                let arrayEight6 = aEight6.map((value, index) => {
                                                                                                                                                                                                                    return (
                                                                                                                                                                                                                        <Draggable>
                                                                                                                                                                                                                            <Button
                                                                                                                                                                                                                                style={{
                                                                                                                                                                                                                                    marginTop: "5%",
                                                                                                                                                                                                                                    marginLeft: "0.25%",
                                                                                                                                                                                                                                }}
                                                                                                                                                                                                                                key={index}
                                                                                                                                                                                                                                onClick={
                                                                                                                                                                                                                                    () => {
                                                                                                                                                                                                                                        if (this.state.counter===121) {
                                                                                                                                                                                                                                            this.state.stepEight6.push(value);
                                                                                                                                                                                                                                            if (this.state.stepEight6.length >= 2) {
                                                                                                                                                                                                                                                let order = [...this.state.nums].slice(16, 19).sort((a,b)=>a-b);
                                                                                                                                                                                                                                                for (let i=0; i<order.length; i++) {
                                                                                                                                                                                                                                                    if (order[i]!==this.state.stepEight6[i]) {
                                                                                                                                                                                                                                                        wrongFunction();
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                correctFunction();
                                                                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                                                                    counter: 122,
                                                                                                                                                                                                                                                })
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
                                                                                                                                                                                                                let aEight7 = [...this.state.nums].slice(19, 21).sort((a,b)=>a-b);
                                                                                                                                                                                                                aEight7.push(this.state.nums[21]);
                                                                                                                                                                                                                let arrayEight7 = aEight7.map((value, index) => {
                                                                                                                                                                                                                    return (
                                                                                                                                                                                                                        <Draggable>
                                                                                                                                                                                                                            <Button
                                                                                                                                                                                                                                style={{
                                                                                                                                                                                                                                    marginTop: "5%",
                                                                                                                                                                                                                                    marginLeft: "0.25%",
                                                                                                                                                                                                                                }}
                                                                                                                                                                                                                                key={index}
                                                                                                                                                                                                                                onClick={
                                                                                                                                                                                                                                    () => {
                                                                                                                                                                                                                                        if (this.state.counter===122) {
                                                                                                                                                                                                                                            this.state.stepEight7.push(value);
                                                                                                                                                                                                                                            if (this.state.stepEight7.length >= 2) {
                                                                                                                                                                                                                                                let order = [...this.state.nums].slice(19, 22).sort((a,b)=>a-b);
                                                                                                                                                                                                                                                for (let i=0; i<order.length; i++) {
                                                                                                                                                                                                                                                    if (order[i]!==this.state.stepEight7[i]) {
                                                                                                                                                                                                                                                        wrongFunction();
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                correctFunction();
                                                                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                                                                    counter: 123,
                                                                                                                                                                                                                                                })
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
                                                                                                                                                                                                                let aEight8 = [...this.state.nums].slice(22, 24).sort((a,b)=>a-b);
                                                                                                                                                                                                                aEight8.push(this.state.nums[24]);
                                                                                                                                                                                                                let arrayEight8 = aEight8.map((value, index) => {
                                                                                                                                                                                                                    return (
                                                                                                                                                                                                                        <Draggable>
                                                                                                                                                                                                                            <Button
                                                                                                                                                                                                                                style={{
                                                                                                                                                                                                                                    marginTop: "5%",
                                                                                                                                                                                                                                    marginLeft: "0.25%",
                                                                                                                                                                                                                                }}
                                                                                                                                                                                                                                key={index}
                                                                                                                                                                                                                                onClick={
                                                                                                                                                                                                                                    () => {
                                                                                                                                                                                                                                        if (this.state.counter===123) {
                                                                                                                                                                                                                                            this.state.stepEight8.push(value);
                                                                                                                                                                                                                                            if (this.state.stepEight8.length >= 2) {
                                                                                                                                                                                                                                                let order = [...this.state.nums].slice(22, 25).sort((a,b)=>a-b);
                                                                                                                                                                                                                                                for (let i=0; i<order.length; i++) {
                                                                                                                                                                                                                                                    if (order[i]!==this.state.stepEight8[i]) {
                                                                                                                                                                                                                                                        wrongFunction();
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                correctFunction();
                                                                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                                                                    counter: 124,
                                                                                                                                                                                                                                                })
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
                                                                                                                                                                                                                let aEight9 = [...this.state.nums].slice(25, 27).sort((a,b)=>a-b);
                                                                                                                                                                                                                aEight9.push(...[...this.state.nums].slice(27, 29).sort((a,b)=>a-b));
                                                                                                                                                                                                                let arrayEight9 = aEight9.map((value, index) => {
                                                                                                                                                                                                                    return (
                                                                                                                                                                                                                        <Draggable>
                                                                                                                                                                                                                            <Button
                                                                                                                                                                                                                                style={{
                                                                                                                                                                                                                                    marginTop: "5%",
                                                                                                                                                                                                                                    marginLeft: "0.25%",
                                                                                                                                                                                                                                }}
                                                                                                                                                                                                                                key={index}
                                                                                                                                                                                                                                onClick={
                                                                                                                                                                                                                                    () => {
                                                                                                                                                                                                                                        if (this.state.counter===124) {
                                                                                                                                                                                                                                            this.state.stepEight9.push(value);
                                                                                                                                                                                                                                            if (this.state.stepEight9.length >= 2) {
                                                                                                                                                                                                                                                let order = [...this.state.nums].slice(25,29).sort((a,b)=>a-b);
                                                                                                                                                                                                                                                for (let i=0; i<order.length; i++) {
                                                                                                                                                                                                                                                    if (order[i]!==this.state.stepEight9[i]) {
                                                                                                                                                                                                                                                        wrongFunction();
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                correctFunction();
                                                                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                                                                    counter: 125,
                                                                                                                                                                                                                                                })
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
                                                                                                                                                                                                                let aEight10 = [...this.state.nums].slice(29, 31).sort((a,b)=>a-b);
                                                                                                                                                                                                                aEight10.push(this.state.nums[31]);
                                                                                                                                                                                                                let arrayEight10 = aEight10.map((value, index) => {
                                                                                                                                                                                                                    return (
                                                                                                                                                                                                                        <Draggable>
                                                                                                                                                                                                                            <Button
                                                                                                                                                                                                                                style={{
                                                                                                                                                                                                                                    marginTop: "5%",
                                                                                                                                                                                                                                    marginLeft: "0.25%",
                                                                                                                                                                                                                                }}
                                                                                                                                                                                                                                key={index}
                                                                                                                                                                                                                                onClick={
                                                                                                                                                                                                                                    () => {
                                                                                                                                                                                                                                        if (this.state.counter===125) {
                                                                                                                                                                                                                                            this.state.stepEight10.push(value);
                                                                                                                                                                                                                                            if (this.state.stepEight10.length >= 2) {
                                                                                                                                                                                                                                                let order = [...this.state.nums].slice(29, 32).sort((a,b)=>a-b);
                                                                                                                                                                                                                                                for (let i=0; i<order.length; i++) {
                                                                                                                                                                                                                                                    if (order[i]!==this.state.stepEight10[i]) {
                                                                                                                                                                                                                                                        wrongFunction();
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                correctFunction();
                                                                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                                                                    counter: 126,
                                                                                                                                                                                                                                                })
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
                                                                                                                                                                                                                let aEight11 = [...this.state.nums].slice(32, 34).sort((a,b)=>a-b);
                                                                                                                                                                                                                aEight11.push(this.state.nums[34]);
                                                                                                                                                                                                                let arrayEight11 = aEight11.map((value, index) => {
                                                                                                                                                                                                                    return (
                                                                                                                                                                                                                        <Draggable>
                                                                                                                                                                                                                            <Button
                                                                                                                                                                                                                                style={{
                                                                                                                                                                                                                                    marginTop: "5%",
                                                                                                                                                                                                                                    marginLeft: "0.25%",
                                                                                                                                                                                                                                }}
                                                                                                                                                                                                                                key={index}
                                                                                                                                                                                                                                onClick={
                                                                                                                                                                                                                                    () => {
                                                                                                                                                                                                                                        if (this.state.counter===126) {
                                                                                                                                                                                                                                            this.state.stepEight11.push(value);
                                                                                                                                                                                                                                            if (this.state.stepEight11.length >= 2) {
                                                                                                                                                                                                                                                let order = [...this.state.nums].slice(32,35).sort((a,b)=>a-b);
                                                                                                                                                                                                                                                for (let i=0; i<order.length; i++) {
                                                                                                                                                                                                                                                    if (order[i]!==this.state.stepEight11[i]) {
                                                                                                                                                                                                                                                        wrongFunction();
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                correctFunction();
                                                                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                                                                    counter: 127,
                                                                                                                                                                                                                                                })
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
                                                                                                                                                                                                                let aEight12 = [...this.state.nums].slice(35, 37).sort((a,b)=>a-b);
                                                                                                                                                                                                                aEight12.push(this.state.nums[37]);
                                                                                                                                                                                                                let arrayEight12 = aEight12.map((value, index) => {
                                                                                                                                                                                                                    return (
                                                                                                                                                                                                                        <Draggable>
                                                                                                                                                                                                                            <Button
                                                                                                                                                                                                                                style={{
                                                                                                                                                                                                                                    marginTop: "5%",
                                                                                                                                                                                                                                    marginLeft: "0.25%",
                                                                                                                                                                                                                                }}
                                                                                                                                                                                                                                key={index}
                                                                                                                                                                                                                                onClick={
                                                                                                                                                                                                                                    () => {
                                                                                                                                                                                                                                        if (this.state.counter===127) {
                                                                                                                                                                                                                                            this.state.stepEight12.push(value);
                                                                                                                                                                                                                                            if (this.state.stepEight12.length >= 2) {
                                                                                                                                                                                                                                                let order = [...this.state.nums].slice(35, 38).sort((a,b)=>a-b);
                                                                                                                                                                                                                                                for (let i=0; i<order.length; i++) {
                                                                                                                                                                                                                                                    if (order[i]!==this.state.stepEight12[i]) {
                                                                                                                                                                                                                                                        wrongFunction();
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                correctFunction();
                                                                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                                                                    counter: 128,
                                                                                                                                                                                                                                                })
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
                                                                                                                                                                                                                let aEight13 = [...this.state.nums].slice(38, 40).sort((a,b)=>a-b);
                                                                                                                                                                                                                aEight13.push(this.state.nums[40]);
                                                                                                                                                                                                                let arrayEight13 = aEight13.map((value, index) => {
                                                                                                                                                                                                                    return (
                                                                                                                                                                                                                        <Draggable>
                                                                                                                                                                                                                            <Button
                                                                                                                                                                                                                                style={{
                                                                                                                                                                                                                                    marginTop: "5%",
                                                                                                                                                                                                                                    marginLeft: "0.25%",
                                                                                                                                                                                                                                }}
                                                                                                                                                                                                                                key={index}
                                                                                                                                                                                                                                onClick={
                                                                                                                                                                                                                                    () => {
                                                                                                                                                                                                                                        if (this.state.counter===128) {
                                                                                                                                                                                                                                            this.state.stepEight13.push(value);
                                                                                                                                                                                                                                            if (this.state.stepEight13.length >= 2) {
                                                                                                                                                                                                                                                let order = [...this.state.nums].slice(38, 41).sort((a,b)=>a-b);
                                                                                                                                                                                                                                                for (let i=0; i<order.length; i++) {
                                                                                                                                                                                                                                                    if (order[i]!==this.state.stepEight13[i]) {
                                                                                                                                                                                                                                                        wrongFunction();
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                correctFunction();
                                                                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                                                                    counter: 129,
                                                                                                                                                                                                                                                })
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
                                                                                                                                                                                                                let aEight14 = [...this.state.nums].slice(41, 43).sort((a,b)=>a-b);
                                                                                                                                                                                                                aEight14.push(this.state.nums[43]);
                                                                                                                                                                                                                let arrayEight14 = aEight14.map((value, index) => {
                                                                                                                                                                                                                    return (
                                                                                                                                                                                                                        <Draggable>
                                                                                                                                                                                                                            <Button
                                                                                                                                                                                                                                style={{
                                                                                                                                                                                                                                    marginTop: "5%",
                                                                                                                                                                                                                                    marginLeft: "0.25%",
                                                                                                                                                                                                                                }}
                                                                                                                                                                                                                                key={index}
                                                                                                                                                                                                                                onClick={
                                                                                                                                                                                                                                    () => {
                                                                                                                                                                                                                                        if (this.state.counter===129) {
                                                                                                                                                                                                                                            this.state.stepEight14.push(value);
                                                                                                                                                                                                                                            if (this.state.stepEight14.length >= 2) {
                                                                                                                                                                                                                                                let order = [...this.state.nums].slice(41, 44).sort((a,b)=>a-b);
                                                                                                                                                                                                                                                for (let i=0; i<order.length; i++) {
                                                                                                                                                                                                                                                    if (order[i]!==this.state.stepEight14[i]) {
                                                                                                                                                                                                                                                        wrongFunction();
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                correctFunction();
                                                                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                                                                    counter: 130,
                                                                                                                                                                                                                                                })
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
                                                                                                                                                                                                                let aEight15 = [...this.state.nums].slice(44, 46).sort((a,b)=>a-b);
                                                                                                                                                                                                                aEight15.push(this.state.nums[46]);
                                                                                                                                                                                                                let arrayEight15 = aEight15.map((value, index) => {
                                                                                                                                                                                                                    return (
                                                                                                                                                                                                                        <Draggable>
                                                                                                                                                                                                                            <Button
                                                                                                                                                                                                                                style={{
                                                                                                                                                                                                                                    marginTop: "5%",
                                                                                                                                                                                                                                    marginLeft: "0.25%",
                                                                                                                                                                                                                                }}
                                                                                                                                                                                                                                key={index}
                                                                                                                                                                                                                                onClick={
                                                                                                                                                                                                                                    () => {
                                                                                                                                                                                                                                        if (this.state.counter===130) {
                                                                                                                                                                                                                                            this.state.stepEight15.push(value);
                                                                                                                                                                                                                                            if (this.state.stepEight15.length >= 2) {
                                                                                                                                                                                                                                                let order = [...this.state.nums].slice(44, 47).sort((a,b)=>a-b);
                                                                                                                                                                                                                                                for (let i=0; i<order.length; i++) {
                                                                                                                                                                                                                                                    if (order[i]!==this.state.stepEight15[i]) {
                                                                                                                                                                                                                                                        wrongFunction();
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                correctFunction();
                                                                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                                                                    counter: 131,
                                                                                                                                                                                                                                                })
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
                                                                                                                                                                                                                let aEight16 = [...this.state.nums].slice(47, 49).sort((a,b)=>a-b);
                                                                                                                                                                                                                aEight16.push(this.state.nums[49]);
                                                                                                                                                                                                                let arrayEight16 = aEight16.map((value, index) => {
                                                                                                                                                                                                                    return (
                                                                                                                                                                                                                        <Draggable>
                                                                                                                                                                                                                            <Button
                                                                                                                                                                                                                                style={{
                                                                                                                                                                                                                                    marginTop: "5%",
                                                                                                                                                                                                                                    marginLeft: "0.25%",
                                                                                                                                                                                                                                }}
                                                                                                                                                                                                                                key={index}
                                                                                                                                                                                                                                onClick={
                                                                                                                                                                                                                                    () => {
                                                                                                                                                                                                                                        if (this.state.counter===131) {
                                                                                                                                                                                                                                            this.state.stepEight16.push(value);
                                                                                                                                                                                                                                            if (this.state.stepEight16.length >= 2) {
                                                                                                                                                                                                                                                let order = [...this.state.nums].slice(47, 50).sort((a,b)=>a-b);
                                                                                                                                                                                                                                                for (let i=0; i<order.length; i++) {
                                                                                                                                                                                                                                                    if (order[i]!==this.state.stepEight16[i]) {
                                                                                                                                                                                                                                                        wrongFunction();
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                correctFunction();
                                                                                                                                                                                                                                                let aNine1 = [...this.state.nums].slice(0, 4).sort((a,b)=>a-b);
                                                                                                                                                                                                                                                aNine1.push(...[...this.state.nums].slice(4, 7).sort((a,b)=>a-b));
                                                                                                                                                                                                                                                let arrayNine1 = aNine1.map((value, index) => {
                                                                                                                                                                                                                                                    return (
                                                                                                                                                                                                                                                        <Draggable>
                                                                                                                                                                                                                                                            <Button
                                                                                                                                                                                                                                                                style={{
                                                                                                                                                                                                                                                                    marginTop: "5%",
                                                                                                                                                                                                                                                                    marginLeft: "0.25%",
                                                                                                                                                                                                                                                                }}
                                                                                                                                                                                                                                                                key={index}
                                                                                                                                                                                                                                                                onClick={
                                                                                                                                                                                                                                                                    () => {
                                                                                                                                                                                                                                                                        if (this.state.counter===132) {
                                                                                                                                                                                                                                                                            this.state.stepNine1.push(value);
                                                                                                                                                                                                                                                                            if (this.state.stepNine1.length >= 7) {
                                                                                                                                                                                                                                                                                let order = [...this.state.nums].slice(0, 7).sort((a,b)=>a-b);
                                                                                                                                                                                                                                                                                for (let i=0; i<order.length; i++) {
                                                                                                                                                                                                                                                                                    if (this.state.stepNine1[i] !== order[i]) {
                                                                                                                                                                                                                                                                                        wrongFunction();
                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                correctFunction();
                                                                                                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                                                                                                    counter: 133,
                                                                                                                                                                                                                                                                                })
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
                                                                                                                                                                                                                                                let aNine2 = [...this.state.nums].slice(7, 10).sort((a,b)=>a-b);
                                                                                                                                                                                                                                                aNine2.push(...[...this.state.nums].slice(10, 13).sort((a,b)=>a-b));
                                                                                                                                                                                                                                                let arrayNine2 = aNine2.map((value, index) => {
                                                                                                                                                                                                                                                    return (
                                                                                                                                                                                                                                                        <Draggable>
                                                                                                                                                                                                                                                            <Button
                                                                                                                                                                                                                                                                style={{
                                                                                                                                                                                                                                                                    marginTop: "5%",
                                                                                                                                                                                                                                                                    marginLeft: "0.25%",
                                                                                                                                                                                                                                                                }}
                                                                                                                                                                                                                                                                key={index}
                                                                                                                                                                                                                                                                onClick={
                                                                                                                                                                                                                                                                    () => {
                                                                                                                                                                                                                                                                        if (this.state.counter===133) {
                                                                                                                                                                                                                                                                            this.state.stepNine2.push(value);
                                                                                                                                                                                                                                                                            if (this.state.stepNine2.length >= 6) {
                                                                                                                                                                                                                                                                                let order = [...this.state.nums].slice(7, 13).sort((a,b)=>a-b);
                                                                                                                                                                                                                                                                                for (let i=0; i<order.length; i++) {
                                                                                                                                                                                                                                                                                    if (this.state.stepNine2[i] !== order[i]) {
                                                                                                                                                                                                                                                                                        wrongFunction();
                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                correctFunction();
                                                                                                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                                                                                                    counter: 134,
                                                                                                                                                                                                                                                                                })
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
                                                                                                                                                                                                                                                let aNine3 = [...this.state.nums].slice(13, 16).sort((a,b)=>a-b);
                                                                                                                                                                                                                                                aNine3.push(...[...this.state.nums].slice(16, 19).sort((a,b)=>a-b));
                                                                                                                                                                                                                                                let arrayNine3 = aNine3.map((value, index) => {
                                                                                                                                                                                                                                                    return (
                                                                                                                                                                                                                                                        <Draggable>
                                                                                                                                                                                                                                                            <Button
                                                                                                                                                                                                                                                                style={{
                                                                                                                                                                                                                                                                    marginTop: "5%",
                                                                                                                                                                                                                                                                    marginLeft: "0.25%",
                                                                                                                                                                                                                                                                }}
                                                                                                                                                                                                                                                                key={index}
                                                                                                                                                                                                                                                                onClick={
                                                                                                                                                                                                                                                                    () => {
                                                                                                                                                                                                                                                                        if (this.state.counter===134) {
                                                                                                                                                                                                                                                                            this.state.stepNine3.push(value);
                                                                                                                                                                                                                                                                            if (this.state.stepNine3.length >= 6) {
                                                                                                                                                                                                                                                                                let order = [...this.state.nums].slice(13, 19).sort((a,b)=>a-b);
                                                                                                                                                                                                                                                                                for (let i=0; i<order.length; i++) {
                                                                                                                                                                                                                                                                                    if (this.state.stepNine3[i] !== order[i]) {
                                                                                                                                                                                                                                                                                        wrongFunction();
                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                correctFunction();
                                                                                                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                                                                                                    counter: 135,
                                                                                                                                                                                                                                                                                })
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
                                                                                                                                                                                                                                                let aNine4 = [...this.state.nums].slice(19, 22).sort((a,b)=>a-b);
                                                                                                                                                                                                                                                aNine4.push(...[...this.state.nums].slice(22, 25).sort((a,b)=>a-b));
                                                                                                                                                                                                                                                let arrayNine4 = aNine4.map((value, index) => {
                                                                                                                                                                                                                                                    return (
                                                                                                                                                                                                                                                        <Draggable>
                                                                                                                                                                                                                                                            <Button
                                                                                                                                                                                                                                                                style={{
                                                                                                                                                                                                                                                                    marginTop: "5%",
                                                                                                                                                                                                                                                                    marginLeft: "0.25%",
                                                                                                                                                                                                                                                                }}
                                                                                                                                                                                                                                                                key={index}
                                                                                                                                                                                                                                                                onClick={
                                                                                                                                                                                                                                                                    () => {
                                                                                                                                                                                                                                                                        if (this.state.counter===135) {
                                                                                                                                                                                                                                                                            this.state.stepNine4.push(value);
                                                                                                                                                                                                                                                                            if (this.state.stepNine4.length >= 6) {
                                                                                                                                                                                                                                                                                let order = [...this.state.nums].slice(19, 25).sort((a,b)=>a-b);
                                                                                                                                                                                                                                                                                for (let i=0; i<order.length; i++) {
                                                                                                                                                                                                                                                                                    if (this.state.stepNine4[i] !== order[i]) {
                                                                                                                                                                                                                                                                                        wrongFunction();
                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                correctFunction();
                                                                                                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                                                                                                    counter: 136,
                                                                                                                                                                                                                                                                                })
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
                                                                                                                                                                                                                                                let aNine5 = [...this.state.nums].slice(25, 29).sort((a,b)=>a-b);
                                                                                                                                                                                                                                                aNine5.push(...[...this.state.nums].slice(29, 32).sort((a,b)=>a-b));
                                                                                                                                                                                                                                                let arrayNine5 = aNine5.map((value, index) => {
                                                                                                                                                                                                                                                    return (
                                                                                                                                                                                                                                                        <Draggable>
                                                                                                                                                                                                                                                            <Button
                                                                                                                                                                                                                                                                style={{
                                                                                                                                                                                                                                                                    marginTop: "5%",
                                                                                                                                                                                                                                                                    marginLeft: "0.25%",
                                                                                                                                                                                                                                                                }}
                                                                                                                                                                                                                                                                key={index}
                                                                                                                                                                                                                                                                onClick={
                                                                                                                                                                                                                                                                    () => {
                                                                                                                                                                                                                                                                        if (this.state.counter===136) {
                                                                                                                                                                                                                                                                            this.state.stepNine5.push(value);
                                                                                                                                                                                                                                                                            if (this.state.stepNine5.length >= 7) {
                                                                                                                                                                                                                                                                                let order = [...this.state.nums].slice(25, 32).sort((a,b)=>a-b);
                                                                                                                                                                                                                                                                                for (let i=0; i<order.length; i++) {
                                                                                                                                                                                                                                                                                    if (this.state.stepNine5[i] !== order[i]) {
                                                                                                                                                                                                                                                                                        wrongFunction();
                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                correctFunction();
                                                                                                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                                                                                                    counter: 137,
                                                                                                                                                                                                                                                                                })
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
                                                                                                                                                                                                                                                let aNine6 = [...this.state.nums].slice(32, 35).sort((a,b)=>a-b);
                                                                                                                                                                                                                                                aNine6.push(...[...this.state.nums].slice(35, 38).sort((a,b)=>a-b));
                                                                                                                                                                                                                                                let arrayNine6 = aNine6.map((value, index) => {
                                                                                                                                                                                                                                                    return (
                                                                                                                                                                                                                                                        <Draggable>
                                                                                                                                                                                                                                                            <Button
                                                                                                                                                                                                                                                                style={{
                                                                                                                                                                                                                                                                    marginTop: "5%",
                                                                                                                                                                                                                                                                    marginLeft: "0.25%",
                                                                                                                                                                                                                                                                }}
                                                                                                                                                                                                                                                                key={index}
                                                                                                                                                                                                                                                                onClick={
                                                                                                                                                                                                                                                                    () => {
                                                                                                                                                                                                                                                                        if (this.state.counter===137) {
                                                                                                                                                                                                                                                                            this.state.stepNine6.push(value);
                                                                                                                                                                                                                                                                            if (this.state.stepNine6.length >= 6) {
                                                                                                                                                                                                                                                                                let order = [...this.state.nums].slice(32, 38).sort((a,b)=>a-b);
                                                                                                                                                                                                                                                                                for (let i=0; i<order.length; i++) {
                                                                                                                                                                                                                                                                                    if (this.state.stepNine6[i] !== order[i]) {
                                                                                                                                                                                                                                                                                        wrongFunction();
                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                correctFunction();
                                                                                                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                                                                                                    counter: 138,
                                                                                                                                                                                                                                                                                })
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
                                                                                                                                                                                                                                                let aNine7 = [...this.state.nums].slice(38, 41).sort((a,b)=>a-b);
                                                                                                                                                                                                                                                aNine7.push(...[...this.state.nums].slice(41, 44).sort((a,b)=>a-b));
                                                                                                                                                                                                                                                let arrayNine7 = aNine7.map((value, index) => {
                                                                                                                                                                                                                                                    return (
                                                                                                                                                                                                                                                        <Draggable>
                                                                                                                                                                                                                                                            <Button
                                                                                                                                                                                                                                                                style={{
                                                                                                                                                                                                                                                                    marginTop: "5%",
                                                                                                                                                                                                                                                                    marginLeft: "0.25%",
                                                                                                                                                                                                                                                                }}
                                                                                                                                                                                                                                                                key={index}
                                                                                                                                                                                                                                                                onClick={
                                                                                                                                                                                                                                                                    () => {
                                                                                                                                                                                                                                                                        if (this.state.counter===138) {
                                                                                                                                                                                                                                                                            this.state.stepNine7.push(value);
                                                                                                                                                                                                                                                                            if (this.state.stepNine7.length >= 6) {
                                                                                                                                                                                                                                                                                let order = [...this.state.nums].slice(38, 44).sort((a,b)=>a-b);
                                                                                                                                                                                                                                                                                for (let i=0; i<order.length; i++) {
                                                                                                                                                                                                                                                                                    if (this.state.stepNine7[i] !== order[i]) {
                                                                                                                                                                                                                                                                                        wrongFunction();
                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                correctFunction();
                                                                                                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                                                                                                    counter: 139,
                                                                                                                                                                                                                                                                                })
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
                                                                                                                                                                                                                                                let aNine8 = [...this.state.nums].slice(44, 47).sort((a,b)=>a-b);
                                                                                                                                                                                                                                                aNine8.push(...[...this.state.nums].slice(47, 50).sort((a,b)=>a-b));
                                                                                                                                                                                                                                                let arrayNine8 = aNine8.map((value, index) => {
                                                                                                                                                                                                                                                    return (
                                                                                                                                                                                                                                                        <Draggable>
                                                                                                                                                                                                                                                            <Button
                                                                                                                                                                                                                                                                style={{
                                                                                                                                                                                                                                                                    marginTop: "5%",
                                                                                                                                                                                                                                                                    marginLeft: "0.25%",
                                                                                                                                                                                                                                                                }}
                                                                                                                                                                                                                                                                key={index}
                                                                                                                                                                                                                                                                onClick={
                                                                                                                                                                                                                                                                    () => {
                                                                                                                                                                                                                                                                        if (this.state.counter===139) {
                                                                                                                                                                                                                                                                            this.state.stepNine8.push(value);
                                                                                                                                                                                                                                                                            if (this.state.stepNine8.length >= 6) {
                                                                                                                                                                                                                                                                                let order = [...this.state.nums].slice(44, 50).sort((a,b)=>a-b);
                                                                                                                                                                                                                                                                                for (let i=0; i<order.length; i++) {
                                                                                                                                                                                                                                                                                    if (this.state.stepNine8[i] !== order[i]) {
                                                                                                                                                                                                                                                                                        wrongFunction();
                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                correctFunction();
                                                                                                                                                                                                                                                                                let aTen1 = [...this.state.nums].slice(0, 7).sort((a,b)=>a-b);
                                                                                                                                                                                                                                                                                aTen1.push(...[...this.state.nums].slice(7, 13).sort((a,b)=>a-b));
                                                                                                                                                                                                                                                                                let arrayTen1 = aTen1.map((value, index) => {
                                                                                                                                                                                                                                                                                    return (
                                                                                                                                                                                                                                                                                        <Draggable>
                                                                                                                                                                                                                                                                                            <Button
                                                                                                                                                                                                                                                                                                style={{
                                                                                                                                                                                                                                                                                                    marginTop: "5%",
                                                                                                                                                                                                                                                                                                    marginLeft: "0.25%",
                                                                                                                                                                                                                                                                                                }}
                                                                                                                                                                                                                                                                                                key={index}
                                                                                                                                                                                                                                                                                                onClick={
                                                                                                                                                                                                                                                                                                    () => {
                                                                                                                                                                                                                                                                                                        if (this.state.counter===140) {
                                                                                                                                                                                                                                                                                                            this.state.stepTen1.push(value);
                                                                                                                                                                                                                                                                                                            if (this.state.stepTen1.length >= 13) {
                                                                                                                                                                                                                                                                                                                let order = [...this.state.nums].slice(0, 13).sort((a,b)=>a-b);
                                                                                                                                                                                                                                                                                                                for (let i=0; i<order.length; i++) {
                                                                                                                                                                                                                                                                                                                    if (this.state.stepTen1[i] !== order[i]) {
                                                                                                                                                                                                                                                                                                                        wrongFunction();
                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                correctFunction();
                                                                                                                                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                                                                                                                                    counter: 141,
                                                                                                                                                                                                                                                                                                                })
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
                                                                                                                                                                                                                                                                                let aTen2 = [...this.state.nums].slice(13, 19).sort((a,b)=>a-b);
                                                                                                                                                                                                                                                                                aTen2.push(...[...this.state.nums].slice(19, 25).sort((a,b)=>a-b));
                                                                                                                                                                                                                                                                                let arrayTen2 = aTen2.map((value, index) => {
                                                                                                                                                                                                                                                                                    return (
                                                                                                                                                                                                                                                                                        <Draggable>
                                                                                                                                                                                                                                                                                            <Button
                                                                                                                                                                                                                                                                                                style={{
                                                                                                                                                                                                                                                                                                    marginTop: "5%",
                                                                                                                                                                                                                                                                                                    marginLeft: "0.25%",
                                                                                                                                                                                                                                                                                                }}
                                                                                                                                                                                                                                                                                                key={index}
                                                                                                                                                                                                                                                                                                onClick={
                                                                                                                                                                                                                                                                                                    () => {
                                                                                                                                                                                                                                                                                                        if (this.state.counter===141) {
                                                                                                                                                                                                                                                                                                            this.state.stepTen2.push(value);
                                                                                                                                                                                                                                                                                                            if (this.state.stepTen2.length >= 12) {
                                                                                                                                                                                                                                                                                                                let order = [...this.state.nums].slice(13, 25).sort((a,b)=>a-b);
                                                                                                                                                                                                                                                                                                                for (let i=0; i<order.length; i++) {
                                                                                                                                                                                                                                                                                                                    if (this.state.stepTen2[i] !== order[i]) {
                                                                                                                                                                                                                                                                                                                        wrongFunction();
                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                correctFunction();
                                                                                                                                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                                                                                                                                    counter: 142,
                                                                                                                                                                                                                                                                                                                })
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
                                                                                                                                                                                                                                                                                let aTen3 = [...this.state.nums].slice(25, 32).sort((a,b)=>a-b);
                                                                                                                                                                                                                                                                                aTen3.push(...[...this.state.nums].slice(32, 38).sort((a,b)=>a-b));
                                                                                                                                                                                                                                                                                let arrayTen3 = aTen3.map((value, index) => {
                                                                                                                                                                                                                                                                                    return (
                                                                                                                                                                                                                                                                                        <Draggable>
                                                                                                                                                                                                                                                                                            <Button
                                                                                                                                                                                                                                                                                                style={{
                                                                                                                                                                                                                                                                                                    marginTop: "5%",
                                                                                                                                                                                                                                                                                                    marginLeft: "0.25%",
                                                                                                                                                                                                                                                                                                }}
                                                                                                                                                                                                                                                                                                key={index}
                                                                                                                                                                                                                                                                                                onClick={
                                                                                                                                                                                                                                                                                                    () => {
                                                                                                                                                                                                                                                                                                        if (this.state.counter===142) {
                                                                                                                                                                                                                                                                                                            this.state.stepTen3.push(value);
                                                                                                                                                                                                                                                                                                            if (this.state.stepTen3.length >= 13) {
                                                                                                                                                                                                                                                                                                                let order = [...this.state.nums].slice(25, 38).sort((a,b)=>a-b);
                                                                                                                                                                                                                                                                                                                for (let i=0; i<order.length; i++) {
                                                                                                                                                                                                                                                                                                                    if (this.state.stepTen3[i] !== order[i]) {
                                                                                                                                                                                                                                                                                                                        wrongFunction();
                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                correctFunction();
                                                                                                                                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                                                                                                                                    counter: 143,
                                                                                                                                                                                                                                                                                                                })
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
                                                                                                                                                                                                                                                                                let aTen4 = [...this.state.nums].slice(38, 44).sort((a,b)=>a-b);
                                                                                                                                                                                                                                                                                aTen4.push(...[...this.state.nums].slice(44, 50).sort((a,b)=>a-b));
                                                                                                                                                                                                                                                                                let arrayTen4 = aTen4.map((value, index) => {
                                                                                                                                                                                                                                                                                    return (
                                                                                                                                                                                                                                                                                        <Draggable>
                                                                                                                                                                                                                                                                                            <Button
                                                                                                                                                                                                                                                                                                style={{
                                                                                                                                                                                                                                                                                                    marginTop: "5%",
                                                                                                                                                                                                                                                                                                    marginLeft: "0.25%",
                                                                                                                                                                                                                                                                                                }}
                                                                                                                                                                                                                                                                                                key={index}
                                                                                                                                                                                                                                                                                                onClick={
                                                                                                                                                                                                                                                                                                    () => {
                                                                                                                                                                                                                                                                                                        if (this.state.counter===143) {
                                                                                                                                                                                                                                                                                                            this.state.stepTen4.push(value);
                                                                                                                                                                                                                                                                                                            if (this.state.stepTen4.length >= 12) {
                                                                                                                                                                                                                                                                                                                let order = [...this.state.nums].slice(38, 50).sort((a,b)=>a-b);
                                                                                                                                                                                                                                                                                                                for (let i=0; i<order.length; i++) {
                                                                                                                                                                                                                                                                                                                    if (this.state.stepTen4[i] !== order[i]) {
                                                                                                                                                                                                                                                                                                                        wrongFunction();
                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                correctFunction();
                                                                                                                                                                                                                                                                                                                let aEleven1 = [...this.state.nums].slice(0, 13).sort((a,b)=>a-b);
                                                                                                                                                                                                                                                                                                                aEleven1.push(...[...this.state.nums].slice(13, 25).sort((a,b)=>a-b));
                                                                                                                                                                                                                                                                                                                let arrayEleven1 = aEleven1.map((value, index) => {
                                                                                                                                                                                                                                                                                                                    return (
                                                                                                                                                                                                                                                                                                                        <Draggable>
                                                                                                                                                                                                                                                                                                                            <Button
                                                                                                                                                                                                                                                                                                                                key={index}
                                                                                                                                                                                                                                                                                                                                style={{
                                                                                                                                                                                                                                                                                                                                    marginTop: "5%",
                                                                                                                                                                                                                                                                                                                                    marginLeft: "0.25%",
                                                                                                                                                                                                                                                                                                                                }}
                                                                                                                                                                                                                                                                                                                                onClick={
                                                                                                                                                                                                                                                                                                                                    () => {
                                                                                                                                                                                                                                                                                                                                        if (this.state.counter===144) {
                                                                                                                                                                                                                                                                                                                                            this.state.stepEleven1.push(value);
                                                                                                                                                                                                                                                                                                                                            if (this.state.stepEleven1.length >= 25) {
                                                                                                                                                                                                                                                                                                                                                let order = [...this.state.nums].slice(0, 25).sort((a,b)=>a-b);
                                                                                                                                                                                                                                                                                                                                                for (let i=0; i<order.length; i++) {
                                                                                                                                                                                                                                                                                                                                                    if (this.state.stepEleven1[i] !== order[i]) {
                                                                                                                                                                                                                                                                                                                                                        wrongFunction();
                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                correctFunction();
                                                                                                                                                                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                                                                                                                                                                    counter: 145,
                                                                                                                                                                                                                                                                                                                                                })
                                                                                                                                                                                                                                                                                                                                                
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
                                                                                                                                                                                                                                                                                                                let aEleven2 = [...this.state.nums].slice(25, 38).sort((a,b)=>a-b);
                                                                                                                                                                                                                                                                                                                aEleven2.push(...[...this.state.nums].slice(38, 50).sort((a,b)=>a-b));
                                                                                                                                                                                                                                                                                                                let arrayEleven2 = aEleven2.map((value, index) => {
                                                                                                                                                                                                                                                                                                                    return (
                                                                                                                                                                                                                                                                                                                        <Draggable>
                                                                                                                                                                                                                                                                                                                            <Button
                                                                                                                                                                                                                                                                                                                                style={{
                                                                                                                                                                                                                                                                                                                                    marginTop: "5%",
                                                                                                                                                                                                                                                                                                                                    marginLeft: "0.25%",
                                                                                                                                                                                                                                                                                                                                }}
                                                                                                                                                                                                                                                                                                                                key={index}
                                                                                                                                                                                                                                                                                                                                onClick={
                                                                                                                                                                                                                                                                                                                                    () => {
                                                                                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                                                                        if (this.state.counter===145) {
                                                                                                                                                                                                                                                                                                                                            this.state.stepEleven2.push(value);
                                                                                                                                                                                                                                                                                                                                            if (this.state.stepEleven2.length >= 25) {
                                                                                                                                                                                                                                                                                                                                                let order = [...this.state.nums].slice(25).sort((a,b)=>a-b);
                                                                                                                                                                                                                                                                                                                                                for (let i=0; i<order.length; i++) {
                                                                                                                                                                                                                                                                                                                                                    if (this.state.stepEleven2[i] !== order[i]) {
                                                                                                                                                                                                                                                                                                                                                        wrongFunction();
                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                correctFunction();
                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                let a12 = [...this.state.nums].slice(0, 25).sort((a,b) => a-b);
                                                                                                                                                                                                                                                                                                                                                a12.push(...[...this.state.nums].slice(25).sort((a,b) => a-b));
                                                                                                                                                                                                                                                                                                                                                let arrayTwelve = a12.map((value, index) => {
                                                                                                                                                                                                                                                                                                                                                    return (
                                                                                                                                                                                                                                                                                                                                                        <Draggable>
                                                                                                                                                                                                                                                                                                                                                            <Button
                                                                                                                                                                                                                                                                                                                                                                style={{
                                                                                                                                                                                                                                                                                                                                                                    marginTop: "5%",
                                                                                                                                                                                                                                                                                                                                                                    marginLeft: "0.25%",
                                                                                                                                                                                                                                                                                                                                                                }}
                                                                                                                                                                                                                                                                                                                                                                key={index}
                                                                                                                                                                                                                                                                                                                                                                onClick={
                                                                                                                                                                                                                                                                                                                                                                    () => {
                                                                                                                                                                                                                                                                                                                                                                        if (this.state.counter===146) {
                                                                                                                                                                                                                                                                                                                                                                            this.state.stepTwelve.push(value);
                                                                                                                                                                                                                                                                                                                                                                            if (this.state.stepTwelve.length >= 50) {
                                                                                                                                                                                                                                                                                                                                                                                let order = [...this.state.nums].sort((a,b) => a-b);
                                                                                                                                                                                                                                                                                                                                                                                for (let i=0; i<order.length; i++) {
                                                                                                                                                                                                                                                                                                                                                                                    if (order[i] !== this.state.stepTwelve[i]) {
                                                                                                                                                                                                                                                                                                                                                                                        wrongFunction();
                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                correctFunction();
                                                                                                                                                                                                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                                                                                                                                                                                                    counter: 147,
                                                                                                                                                                                                                                                                                                                                                                                })
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
                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                                                                                                                                                                    counter: 146,
                                                                                                                                                                                                                                                                                                                                                    arrayTwelve: arrayTwelve,
                                                                                                                                                                                                                                                                                                                                                })
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
                                                                                                                                                                                                                                                                                                                const arrayEleven = (
                                                                                                                                                                                                                                                                                                                    <div>
                                                                                                                                                                                                                                                                                                                        {arrayEleven1} {arrayEleven2}
                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                )
                                                                                                                                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                                                                                                                                    counter: 144,
                                                                                                                                                                                                                                                                                                                    arrayEleven: arrayEleven,
                                                                                                                                                                                                                                                                                                                })
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
                                                                                                                                                                                                                                                                                const arrayTen = (
                                                                                                                                                                                                                                                                                    <div>
                                                                                                                                                                                                                                                                                        {arrayTen1} {arrayTen2} {arrayTen3} {arrayTen4} 
                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                )
                                                                                                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                                                                                                    counter: 140,
                                                                                                                                                                                                                                                                                    arrayTen: arrayTen,
                                                                                                                                                                                                                                                                                })
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
                                                                                                                                                                                                                                                const arrayNine = (
                                                                                                                                                                                                                                                    <div>
                                                                                                                                                                                                                                                        {arrayNine1} {arrayNine2} {arrayNine3} {arrayNine4} {arrayNine5} {arrayNine6} {arrayNine7} {arrayNine8} 
                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                )
                                                                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                                                                    counter: 132,
                                                                                                                                                                                                                                                    arrayNine: arrayNine,
                                                                                                                                                                                                                                                })
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
                                                                                                                                                                                                                
                                                                                                                                                                                                                const arrayEight = (
                                                                                                                                                                                                                    <div>
                                                                                                                                                                                                                        {arrayEight1} {arrayEight2} {arrayEight3} {arrayEight4} {arrayEight5} {arrayEight6} {arrayEight7} {arrayEight8} {arrayEight9} {arrayEight10} {arrayEight11} {arrayEight12} {arrayEight13} {arrayEight14} {arrayEight15} {arrayEight16} 
                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                )
                                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                                    counter: 116,
                                                                                                                                                                                                                    arrayEight: arrayEight,
                                                                                                                                                                                                                })
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
                                                                                                                                                                                const arraySeven = (
                                                                                                                                                                                    <div>
                                                                                                                                                                                        {arraySeven1} {arraySeven2} {arraySeven3} {arraySeven4} {arraySeven5} {arraySeven6} {arraySeven7} {arraySeven8} {arraySeven9} {arraySeven10} {arraySeven11} {arraySeven12} {arraySeven13} {arraySeven14} {arraySeven15} {arraySeven16} {arraySeven17} {arraySeven18} 
                                                                                                                                                                                    </div>
                                                                                                                                                                                )
                                                                                                                                                                                this.setState({
                                                                                                                                                                                    counter: 98,
                                                                                                                                                                                    arraySeven: arraySeven,
                                                                                                                                                                                })
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }>
                                                                                                                                                                    {value}
                                                                                                                                                                </Button>
                                                                                                                                                            </Draggable>
                                                                                                                                                        )
                                                                                                                                                    })
                                                                                                                                                    const arraySix = (
                                                                                                                                                        <div>
                                                                                                                                                            {arraySix1} {arraySix2} {arraySix3} {arraySix4} {arraySix5} {arraySix6} {arraySix7} {arraySix8} {arraySix9} {arraySix10} {arraySix11} {arraySix12} {arraySix13} {arraySix14} {arraySix15} {arraySix16} {arraySix17} {arraySix18}
                                                                                                                                                        </div>
                                                                                                                                                    )
                                                                                                                                                    this.setState({
                                                                                                                                                        counter: 62,
                                                                                                                                                        arraySix: arraySix,
                                                                                                                                                    })
                                                                                                                                                }
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
                                                                                                                                {arrayFive1} {arrayFive2} {arrayFive3} {arrayFive4} {arrayFive5} {arrayFive6} {arrayFive7} {arrayFive8} {arrayFive9} {arrayFive10} {arrayFive11} {arrayFive12} {arrayFive13} {arrayFive14} {arrayFive15} {arrayFive16} 
                                                                                                                            </div>
                                                                                                                        )
                                                                                                                        correctFunction();
                                                                                                                        this.setState({
                                                                                                                            counter: 30,
                                                                                                                            arrayFive: arrayFive,
                                                                                                                        })
                                                                                                                    }
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
                                                                })
                                                                const arrayThree = (
                                                                    <div>
                                                                        {arrayThree1} {arrayThree2} {arrayThree3} {arrayThree4}
                                                                    </div>
                                                                )
                                                                this.setState({
                                                                    counter: 6,
                                                                    arrayThree: arrayThree,
                                                                })
                                                            }
                                                        }
                                                    }
                                                }>
                                                {value}
                                                </Button>
                                            </Draggable>
                                        )
                                    })
                                    const arrayTwo = (
                                        <div>
                                            {arrayTwo1} {arrayTwo2}
                                        </div>
                                    )
                                    this.setState({
                                        counter: 2,
                                        arrayTwo: arrayTwo,
                                    })
                                }
                            }
                        }
                    }>
                        {value}
                    </Button>
                </Draggable>
            )
        })

        return (
            <div style={{
                marginLeft: "10%",
                marginRight: "10%",
            }}>
                <h1>Level Four</h1>
                <h2>MergeSort Algorithm</h2>
                <h5>Ensure NOT to double click buttons</h5>
                <h5>ONLY FIREFOX COMPATIBLE</h5>
                <h4>Perform all steps of the MergeSort Algorithm taught to you in Levels 1 and 2 to complete this level. Feedback will be given to help you.</h4>
                {arrayOne}
                {this.state.arrayTwo}
                {this.state.arrayThree}
                {this.state.arrayFour}
                {this.state.arrayFive}
                {this.state.arraySix}
                {this.state.arraySeven}
                {this.state.arrayEight}
                {this.state.arrayNine}
                {this.state.arrayTen}
                {this.state.arrayEleven}
                {this.state.arrayTwelve}
                <br />
                <Link to ="/levels">
                    <Button style={{marginTop: "2%"}} variant="secondary" >Return to Level Select</Button>
                </Link>
                <br />
            </div>
        )
    }
}