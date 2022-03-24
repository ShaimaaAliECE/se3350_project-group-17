import React, { Component } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap'
import Draggable from 'react-draggable';
import { wrongFunction, correctFunction } from '../../functions/SoundFunctions';
import { Link } from 'react-router-dom';

export default class LevelFour extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mistakes: 0, 
            counter: 0,
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
            stepSeven1: [],
            stepSeven2: [],
            stepSeven3: [],
            stepSeven4: [],
            stepSeven5: [],
            stepSeven6: [],
            stepSeven7: [],
            stepSeven8: [],
            stepEight1: [],
            stepEight2: [],
            stepEight3: [],
            stepEight4: [],
            stepNine1: [],
            stepNine2: [],
            stepTen: [],
            arrayTwo: null,
            arrayThree: null,
            arrayFour: null,
            arrayFive: null,
            arraySix: null,
            arraySeven: null,
            arrayEight: null,
            arrayNine: null,
            arrayTen: null,
        }
        for (let i=0; i<20; i++) {
            // add 10 random integers between 1 and 20 to nums array
            this.state.nums.push(Math.floor(Math.random() * 51));
        }
    }

    render() {
        const arrayOne = [...this.state.nums].map((value, index) => {
            return (
                <Draggable>
                    <Button key={index} onClick={
                        () => {
                            let wrong = false;
                            let mistakes = 1;
                            if (this.state.counter===0) {
                                this.state.stepOneLeft.push(value);
                                if (this.state.stepOneLeft.length>=10) {
                                    let temp = [...this.state.nums].slice(0, 10);
                                    // allows zero mistakes for now
                                    for (let i=0; i<10; i++) {
                                        if (!temp.includes(this.state.stepOneLeft[i])) {
                                            wrong = true;
                                        } else {
                                            temp.splice(temp.indexOf(this.state.stepOneLeft[i]), 1);
                                        }
                                    }
                                    if (wrong) {
                                        mistakes++;
                                        wrongFunction();
                                        this.setState({
                                            mistakes: this.state.mistakes + 1,
                                        })
                                        if (mistakes >= 3) {
                                            window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                        }
                                    } else {
                                        correctFunction()
                                    }
                                    wrong = false;
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
                                            wrong = true;
                                        } else {
                                            temp.splice(temp.indexOf(this.state.stepOneRight[i]), 1);
                                        }
                                    }
                                    if (wrong) {
                                        mistakes++;
                                        wrongFunction();
                                        this.setState({
                                            mistakes: this.state.mistakes + 1,
                                        })
                                        if (mistakes >= 3) {
                                            window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                        }
                                    } else {
                                        correctFunction()
                                    }
                                    wrong = false;
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
                                                                        wrong = true;
                                                                    } else {
                                                                        temp.splice(temp.indexOf(this.state.stepTwoLeft1[i]), 1);
                                                                    }
                                                                }
                                                                if (wrong) {
                                                                    mistakes++;
                                                                    wrongFunction();
                                                                    this.setState({
                                                                        mistakes: this.state.mistakes + 1,
                                                                    })
                                                                    if (mistakes >= 3) {
                                                                        window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                    }
                                                                } else {
                                                                    correctFunction()
                                                                }
                                                                wrong = false;
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
                                                                        wrong = true;
                                                                    } else {
                                                                        temp.splice(temp.indexOf(this.state.stepTwoLeft2[i]), 1);
                                                                    }
                                                                }
                                                                if (wrong) {
                                                                    mistakes++;
                                                                    wrongFunction();
                                                                    this.setState({
                                                                        mistakes: this.state.mistakes + 1,
                                                                    })
                                                                    if (mistakes >= 3) {
                                                                        window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                    }
                                                                } else {
                                                                    correctFunction()
                                                                }
                                                                wrong = false;
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
                                                                        wrong = true;
                                                                    } else {
                                                                        temp.splice(temp.indexOf(this.state.stepTwoRight1[i]), 1);
                                                                    }
                                                                }
                                                                if (wrong) {
                                                                    mistakes++;
                                                                    wrongFunction();
                                                                    this.setState({
                                                                        mistakes: this.state.mistakes + 1,
                                                                    })
                                                                    if (mistakes >= 3) {
                                                                        window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                    }
                                                                } else {
                                                                    correctFunction()
                                                                }
                                                                wrong = false;
                                                                this.setState({
                                                                    counter: 5,
                                                                });
                                                            }
                                                        } else if (this.state.counter===5) {
                                                            this.state.stepTwoRight2.push(value);
                                                            if (this.state.stepTwoRight2.length>=5) {
                                                                let temp = [...this.state.nums].slice(15);
                                                                for (let i = 0; i < 5; i++) {
                                                                    if (!temp.includes(this.state.stepTwoRight2[i])) {
                                                                        wrong = true;
                                                                    } else {
                                                                        temp.splice(temp.indexOf(this.state.stepTwoRight2[i]), 1);
                                                                    }
                                                                }
                                                                if (wrong) {
                                                                    mistakes++;
                                                                    wrongFunction();
                                                                    this.setState({
                                                                        mistakes: this.state.mistakes + 1,
                                                                    })
                                                                    if (mistakes >= 3) {
                                                                        window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                    }
                                                                } else {
                                                                    correctFunction()
                                                                }
                                                                wrong = false;
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
                                                                                                    wrong = true;
                                                                                                } else {
                                                                                                    temp.splice(temp.indexOf(this.state.stepThree1[i]), 1);
                                                                                                }
                                                                                            }
                                                                                            if (wrong) {
                                                                                                mistakes++;
                                                                                                wrongFunction();
                                                                                                this.setState({
                                                                                                    mistakes: this.state.mistakes + 1,
                                                                                                })
                                                                                                if (mistakes >= 3) {
                                                                                                    window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                }
                                                                                            } else {
                                                                                                correctFunction()
                                                                                            }
                                                                                            wrong = false;
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
                                                                                                    wrong = true;
                                                                                                } else {
                                                                                                    temp.splice(temp.indexOf(this.state.stepThree2[i]), 1);
                                                                                                }
                                                                                            }
                                                                                            if (wrong) {
                                                                                                mistakes++;
                                                                                                wrongFunction();
                                                                                                this.setState({
                                                                                                    mistakes: this.state.mistakes + 1,
                                                                                                })
                                                                                                if (mistakes >= 3) {
                                                                                                    window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                }
                                                                                            } else {
                                                                                                correctFunction()
                                                                                            }
                                                                                            wrong = false;
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
                                                                                                    wrong = true;
                                                                                                } else {
                                                                                                    temp.splice(temp.indexOf(this.state.stepThree3[i]), 1);
                                                                                                }
                                                                                            }
                                                                                            if (wrong) {
                                                                                                mistakes++;
                                                                                                wrongFunction();
                                                                                                this.setState({
                                                                                                    mistakes: this.state.mistakes + 1,
                                                                                                })
                                                                                                if (mistakes >= 3) {
                                                                                                    window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                }
                                                                                            } else {
                                                                                                correctFunction()
                                                                                            }
                                                                                            wrong = false;
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
                                                                                                    wrong = true;
                                                                                                } else {
                                                                                                    temp.splice(temp.indexOf(this.state.stepThree4[i]), 1);
                                                                                                }
                                                                                            }
                                                                                            if (wrong) {
                                                                                                mistakes++;
                                                                                                wrongFunction();
                                                                                                this.setState({
                                                                                                    mistakes: this.state.mistakes + 1,
                                                                                                })
                                                                                                if (mistakes >= 3) {
                                                                                                    window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                }
                                                                                            } else {
                                                                                                correctFunction()
                                                                                            }
                                                                                            wrong = false;
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
                                                                                                    wrong = true;
                                                                                                } else {
                                                                                                    temp.splice(temp.indexOf(this.state.stepThree5[i]), 1);
                                                                                                }
                                                                                            }
                                                                                            if (wrong) {
                                                                                                mistakes++;
                                                                                                wrongFunction();
                                                                                                this.setState({
                                                                                                    mistakes: this.state.mistakes + 1,
                                                                                                })
                                                                                                if (mistakes >= 3) {
                                                                                                    window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                }
                                                                                            } else {
                                                                                                correctFunction()
                                                                                            }
                                                                                            wrong = false;
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
                                                                                                    wrong = true;
                                                                                                } else {
                                                                                                    temp.splice(temp.indexOf(this.state.stepThree6[i]), 1);
                                                                                                }
                                                                                            }
                                                                                            if (wrong) {
                                                                                                mistakes++;
                                                                                                wrongFunction();
                                                                                                this.setState({
                                                                                                    mistakes: this.state.mistakes + 1,
                                                                                                })
                                                                                                if (mistakes >= 3) {
                                                                                                    window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                }
                                                                                            } else {
                                                                                                correctFunction()
                                                                                            }
                                                                                            wrong = false;
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
                                                                                                    wrong = true;
                                                                                                } else {
                                                                                                    temp.splice(temp.indexOf(this.state.stepThree7[i]), 1);
                                                                                                }
                                                                                            }
                                                                                            if (wrong) {
                                                                                                mistakes++;
                                                                                                wrongFunction();
                                                                                                this.setState({
                                                                                                    mistakes: this.state.mistakes + 1,
                                                                                                })
                                                                                                if (mistakes >= 3) {
                                                                                                    window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                }
                                                                                            } else {
                                                                                                correctFunction()
                                                                                            }
                                                                                            wrong = false;
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
                                                                                                    wrong = true;
                                                                                                } else {
                                                                                                    temp.splice(temp.indexOf(this.state.stepThree8[i]), 1);
                                                                                                }
                                                                                            }
                                                                                            if (wrong) {
                                                                                                mistakes++;
                                                                                                wrongFunction();
                                                                                                this.setState({
                                                                                                    mistakes: this.state.mistakes + 1,
                                                                                                })
                                                                                                if (mistakes >= 3) {
                                                                                                    window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                }
                                                                                            } else {
                                                                                                correctFunction()
                                                                                            }
                                                                                            wrong = false;
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
                                                                                                                                wrong = true;
                                                                                                                            } else {
                                                                                                                                temp.splice(temp.indexOf(this.state.stepFour1[i]), 1);
                                                                                                                            }
                                                                                                                        }
                                                                                                                        if (wrong) {
                                                                                                                            mistakes++;
                                                                                                                            wrongFunction();
                                                                                                                            this.setState({
                                                                                                                                mistakes: this.state.mistakes + 1,
                                                                                                                            })
                                                                                                                            if (mistakes >= 3) {
                                                                                                                                window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                            }
                                                                                                                        } else {
                                                                                                                            correctFunction()
                                                                                                                        }
                                                                                                                        wrong = false;
                                                                                                                        this.setState({
                                                                                                                            counter: 15,
                                                                                                                        })
                                                                                                                    }
                                                                                                                } else if (this.state.counter===15) {
                                                                                                                    if (value !== this.state.nums[2]) {
                                                                                                                        wrong = true; 
                                                                                                                    }
                                                                                                                    if (wrong) {
                                                                                                                        mistakes++;
                                                                                                                        wrongFunction();
                                                                                                                        this.setState({
                                                                                                                            mistakes: this.state.mistakes + 1,
                                                                                                                        })
                                                                                                                        if (mistakes >= 3) {
                                                                                                                            window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                        }
                                                                                                                    } else {
                                                                                                                        correctFunction()
                                                                                                                    }
                                                                                                                    wrong = false;
                                                                                                                    this.setState({
                                                                                                                        counter: 16,
                                                                                                                    })
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
                                                                                                                        wrong = true;
                                                                                                                    }
                                                                                                                    if (wrong) {
                                                                                                                        mistakes++;
                                                                                                                        wrongFunction();
                                                                                                                        this.setState({
                                                                                                                            mistakes: this.state.mistakes + 1,
                                                                                                                        })
                                                                                                                        if (mistakes >= 3) {
                                                                                                                            window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                        }
                                                                                                                    } else {
                                                                                                                        correctFunction()
                                                                                                                    }
                                                                                                                    wrong = false;
                                                                                                                    this.setState({
                                                                                                                        counter: 17,
                                                                                                                    })
                                                                                                                } else if (this.state.counter===17) {
                                                                                                                    if (value !== this.state.nums[4]) {
                                                                                                                        wrong = true;
                                                                                                                    }
                                                                                                                    if (wrong) {
                                                                                                                        mistakes++;
                                                                                                                        wrongFunction();
                                                                                                                        this.setState({
                                                                                                                            mistakes: this.state.mistakes + 1,
                                                                                                                        })
                                                                                                                        if (mistakes >= 3) {
                                                                                                                            window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                        }
                                                                                                                    } else {
                                                                                                                        correctFunction()
                                                                                                                    }
                                                                                                                    wrong = false;
                                                                                                                    this.setState({
                                                                                                                        counter: 18,
                                                                                                                    })
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
                                                                                                                                wrong = true;
                                                                                                                            } else {
                                                                                                                                temp.splice(temp.indexOf(this.state.stepFour2[i]), 1);
                                                                                                                            }
                                                                                                                        }
                                                                                                                        if (wrong) {
                                                                                                                            mistakes++;
                                                                                                                            wrongFunction();
                                                                                                                            this.setState({
                                                                                                                                mistakes: this.state.mistakes + 1,
                                                                                                                            })
                                                                                                                            if (mistakes >= 3) {
                                                                                                                                window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                            }
                                                                                                                        } else {
                                                                                                                            correctFunction()
                                                                                                                        }
                                                                                                                        wrong = false;
                                                                                                                        this.setState({
                                                                                                                            counter: 19,
                                                                                                                        })
                                                                                                                    }
                                                                                                                    
                                                                                                                } else if (this.state.counter===19) {
                                                                                                                    if (value !== this.state.nums[7]) {
                                                                                                                        wrong = true;
                                                                                                                    }
                                                                                                                    if (wrong) {
                                                                                                                        mistakes++;
                                                                                                                        wrongFunction();
                                                                                                                        this.setState({
                                                                                                                            mistakes: this.state.mistakes + 1,
                                                                                                                        })
                                                                                                                        if (mistakes >= 3) {
                                                                                                                            window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                        }
                                                                                                                    } else {
                                                                                                                        correctFunction()
                                                                                                                    }
                                                                                                                    wrong = false;
                                                                                                                    this.setState({
                                                                                                                        counter: 20,
                                                                                                                    })
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
                                                                                                                        wrong = true;
                                                                                                                    }
                                                                                                                    if (wrong) {
                                                                                                                        mistakes++;
                                                                                                                        wrongFunction();
                                                                                                                        this.setState({
                                                                                                                            mistakes: this.state.mistakes + 1,
                                                                                                                        })
                                                                                                                        if (mistakes >= 3) {
                                                                                                                            window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                        }
                                                                                                                    } else {
                                                                                                                        correctFunction()
                                                                                                                    }
                                                                                                                    wrong = false;
                                                                                                                    this.setState({
                                                                                                                        counter: 21,
                                                                                                                    })
                                                                                                                } else if (this.state.counter===21) {
                                                                                                                    if (value !== this.state.nums[9]) {
                                                                                                                        wrong = true;
                                                                                                                    }
                                                                                                                    if (wrong) {
                                                                                                                        mistakes++;
                                                                                                                        wrongFunction();
                                                                                                                        this.setState({
                                                                                                                            mistakes: this.state.mistakes + 1,
                                                                                                                        })
                                                                                                                        if (mistakes >= 3) {
                                                                                                                            window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                        }
                                                                                                                    } else {
                                                                                                                        correctFunction()
                                                                                                                    }
                                                                                                                    wrong = false;
                                                                                                                    this.setState({
                                                                                                                        counter: 22,
                                                                                                                    })
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
                                                                                                                                wrong = true;
                                                                                                                            } else {
                                                                                                                                temp.splice(temp.indexOf(this.state.stepFour3[i]), 1);
                                                                                                                            }
                                                                                                                        }
                                                                                                                        if (wrong) {
                                                                                                                            mistakes++;
                                                                                                                            wrongFunction();
                                                                                                                            this.setState({
                                                                                                                                mistakes: this.state.mistakes + 1,
                                                                                                                            })
                                                                                                                            if (mistakes >= 3) {
                                                                                                                                window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                            }
                                                                                                                        } else {
                                                                                                                            correctFunction()
                                                                                                                        }
                                                                                                                        wrong = false;
                                                                                                                        this.setState({
                                                                                                                            counter: 23,
                                                                                                                        })
                                                                                                                    }
                                                                                                                    
                                                                                                                } else if (this.state.counter===23) {
                                                                                                                    if (value !== this.state.nums[12]) {
                                                                                                                        wrong = true;
                                                                                                                    }
                                                                                                                    if (wrong) {
                                                                                                                        mistakes++;
                                                                                                                        wrongFunction();
                                                                                                                        this.setState({
                                                                                                                            mistakes: this.state.mistakes + 1,
                                                                                                                        })
                                                                                                                        if (mistakes >= 3) {
                                                                                                                            window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                        }
                                                                                                                    } else {
                                                                                                                        correctFunction()
                                                                                                                    }
                                                                                                                    wrong = false;
                                                                                                                    this.setState({
                                                                                                                        counter: 24,
                                                                                                                    })
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
                                                                                                                        wrong = true;
                                                                                                                    }
                                                                                                                    if (wrong) {
                                                                                                                        mistakes++;
                                                                                                                        wrongFunction();
                                                                                                                        this.setState({
                                                                                                                            mistakes: this.state.mistakes + 1,
                                                                                                                        })
                                                                                                                        if (mistakes >= 3) {
                                                                                                                            window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                        }
                                                                                                                    } else {
                                                                                                                        correctFunction()
                                                                                                                    }
                                                                                                                    wrong = false;
                                                                                                                    this.setState({
                                                                                                                        counter: 25,
                                                                                                                    })
                                                                                                                } else if (this.state.counter===25) {
                                                                                                                    if (value !== this.state.nums[14]) {
                                                                                                                        wrong = true;
                                                                                                                    }
                                                                                                                    if (wrong) {
                                                                                                                        mistakes++;
                                                                                                                        wrongFunction();
                                                                                                                        this.setState({
                                                                                                                            mistakes: this.state.mistakes + 1,
                                                                                                                        })
                                                                                                                        if (mistakes >= 3) {
                                                                                                                            window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                        }
                                                                                                                    } else {
                                                                                                                        correctFunction()
                                                                                                                    }
                                                                                                                    wrong = false;
                                                                                                                    this.setState({
                                                                                                                        counter: 26,
                                                                                                                    })
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
                                                                                                                                wrong = true;
                                                                                                                            
                                                                                                                            } else {
                                                                                                                                temp.splice(temp.indexOf(this.state.stepFour4[i]), 1);
                                                                                                                            }
                                                                                                                        }
                                                                                                                        if (wrong) {
                                                                                                                            mistakes++;
                                                                                                                            wrongFunction();
                                                                                                                            this.setState({
                                                                                                                                mistakes: this.state.mistakes + 1,
                                                                                                                            })
                                                                                                                            if (mistakes >= 3) {
                                                                                                                                window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                            }
                                                                                                                        } else {
                                                                                                                            correctFunction()
                                                                                                                        }
                                                                                                                        wrong = false;
                                                                                                                        this.setState({
                                                                                                                            counter: 27,
                                                                                                                        })
                                                                                                                    }
                                                                                                                    
                                                                                                                } else if (this.state.counter===27) {
                                                                                                                    if (value !== this.state.nums[17]) {
                                                                                                                        wrong = true;
                                                                                                                    }
                                                                                                                    if (wrong) {
                                                                                                                        mistakes++;
                                                                                                                        wrongFunction();
                                                                                                                        this.setState({
                                                                                                                            mistakes: this.state.mistakes + 1,
                                                                                                                        })
                                                                                                                        if (mistakes >= 3) {
                                                                                                                            window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                        }
                                                                                                                    } else {
                                                                                                                        correctFunction()
                                                                                                                    }
                                                                                                                    wrong = false;
                                                                                                                    this.setState({
                                                                                                                        counter: 28,
                                                                                                                    })
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
                                                                                                                        wrong = true;
                                                                                                                    }
                                                                                                                    if (wrong) {
                                                                                                                        mistakes++;
                                                                                                                        wrongFunction();
                                                                                                                        this.setState({
                                                                                                                            mistakes: this.state.mistakes + 1,
                                                                                                                        })
                                                                                                                        if (mistakes >= 3) {
                                                                                                                            window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                        }
                                                                                                                    } else {
                                                                                                                        correctFunction()
                                                                                                                    }
                                                                                                                    wrong = false;
                                                                                                                    this.setState({
                                                                                                                        counter: 29,
                                                                                                                    })
                                                                                                                } else if (this.state.counter===29) {
                                                                                                                    if (value !== this.state.nums[19]) {
                                                                                                                        wrong = true;
                                                                                                                    }
                                                                                                                    if (wrong) {
                                                                                                                        mistakes++;
                                                                                                                        wrongFunction();
                                                                                                                        this.setState({
                                                                                                                            mistakes: this.state.mistakes + 1,
                                                                                                                        })
                                                                                                                        if (mistakes >= 3) {
                                                                                                                            window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                        }
                                                                                                                    } else {
                                                                                                                        correctFunction()
                                                                                                                    }
                                                                                                                    wrong = false;
                                                                                                                    // 5th row 2, 2, 2, 2
                                                                                                                    let arrayFive1 = [...this.state.nums].slice(0, 2).map((value, index) => {
                                                                                                                        return (
                                                                                                                            <Draggable>
                                                                                                                                <Button key={index} onClick={
                                                                                                                                    () => {
                                                                                                                                        if (this.state.counter===30) {
                                                                                                                                            if (value!==this.state.nums[0]) {
                                                                                                                                                wrong = true;
                                                                                                                                            }
                                                                                                                                            if (wrong) {
                                                                                                                                                mistakes++;
                                                                                                                                                wrongFunction();
                                                                                                                                                this.setState({
                                                                                                                                                    mistakes: this.state.mistakes + 1,
                                                                                                                                                })
                                                                                                                                                if (mistakes >= 3) {
                                                                                                                                                    window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                                                }
                                                                                                                                            } else {
                                                                                                                                                correctFunction()
                                                                                                                                            }
                                                                                                                                            wrong = false;
                                                                                                                                            this.setState({
                                                                                                                                                counter: 31,
                                                                                                                                            })
                                                                                                                                        } else if (this.state.counter===31) {
                                                                                                                                            if (value!==this.state.nums[1]) {
                                                                                                                                                wrong = true;
                                                                                                                                            }
                                                                                                                                            if (wrong) {
                                                                                                                                                mistakes++;
                                                                                                                                                wrongFunction();
                                                                                                                                                this.setState({
                                                                                                                                                    mistakes: this.state.mistakes + 1,
                                                                                                                                                })
                                                                                                                                                if (mistakes >= 3) {
                                                                                                                                                    window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                                                }
                                                                                                                                            } else {
                                                                                                                                                correctFunction()
                                                                                                                                            }
                                                                                                                                            wrong = false;
                                                                                                                                            this.setState({
                                                                                                                                                counter: 32,
                                                                                                                                            })
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
                                                                                                                                                wrong = true;
                                                                                                                                            }
                                                                                                                                            if (wrong) {
                                                                                                                                                mistakes++;
                                                                                                                                                wrongFunction();
                                                                                                                                                this.setState({
                                                                                                                                                    mistakes: this.state.mistakes + 1,
                                                                                                                                                })
                                                                                                                                                if (mistakes >= 3) {
                                                                                                                                                    window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                                                }
                                                                                                                                            } else {
                                                                                                                                                correctFunction()
                                                                                                                                            }
                                                                                                                                            wrong = false;
                                                                                                                                            this.setState({
                                                                                                                                                counter: 33,
                                                                                                                                            })
                                                                                                                                        } else if (this.state.counter===33) {
                                                                                                                                            if (value!==this.state.nums[6]) {
                                                                                                                                                wrong = true;
                                                                                                                                            }
                                                                                                                                            if (wrong) {
                                                                                                                                                mistakes++;
                                                                                                                                                wrongFunction();
                                                                                                                                                this.setState({
                                                                                                                                                    mistakes: this.state.mistakes + 1,
                                                                                                                                                })
                                                                                                                                                if (mistakes >= 3) {
                                                                                                                                                    window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                                                }
                                                                                                                                            } else {
                                                                                                                                                correctFunction()
                                                                                                                                            }
                                                                                                                                            wrong = false;
                                                                                                                                            this.setState({
                                                                                                                                                counter: 34,
                                                                                                                                            })
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }>
                                                                                                                                    {value}
                                                                                                                                </Button>
                                                                                                                            </Draggable>
                                                                                                                        )
                                                                                                                    })
                                                                                                                    let arrayFive3 = [...this.state.nums].slice(10, 12).map((value, index) => {
                                                                                                                        return (
                                                                                                                            <Draggable>
                                                                                                                                <Button key={index} onClick={
                                                                                                                                    () => {
                                                                                                                                        if (this.state.counter===34) {
                                                                                                                                            if (value!==this.state.nums[10]) {
                                                                                                                                                wrong = true;
                                                                                                                                            }
                                                                                                                                            if (wrong) {
                                                                                                                                                mistakes++;
                                                                                                                                                wrongFunction();
                                                                                                                                                this.setState({
                                                                                                                                                    mistakes: this.state.mistakes + 1,
                                                                                                                                                })
                                                                                                                                                if (mistakes >= 3) {
                                                                                                                                                    window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                                                }
                                                                                                                                            } else {
                                                                                                                                                correctFunction()
                                                                                                                                            }
                                                                                                                                            wrong = false;
                                                                                                                                            this.setState({
                                                                                                                                                counter: 35,
                                                                                                                                            })
                                                                                                                                        } else if (this.state.counter===35) {
                                                                                                                                            if (value!==this.state.nums[11]) {
                                                                                                                                                wrong = true;
                                                                                                                                            }
                                                                                                                                            if (wrong) {
                                                                                                                                                mistakes++;
                                                                                                                                                wrongFunction();
                                                                                                                                                this.setState({
                                                                                                                                                    mistakes: this.state.mistakes + 1,
                                                                                                                                                })
                                                                                                                                                if (mistakes >= 3) {
                                                                                                                                                    window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                                                }
                                                                                                                                            } else {
                                                                                                                                                correctFunction()
                                                                                                                                            };
                                                                                                                                            wrong = false;
                                                                                                                                            this.setState({
                                                                                                                                                counter: 36,
                                                                                                                                            })
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
                                                                                                                                                wrong = true;
                                                                                                                                            }
                                                                                                                                            if (wrong) {
                                                                                                                                                mistakes++;
                                                                                                                                                wrongFunction();
                                                                                                                                                this.setState({
                                                                                                                                                    mistakes: this.state.mistakes + 1,
                                                                                                                                                })
                                                                                                                                                if (mistakes >= 3) {
                                                                                                                                                    window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                                                }
                                                                                                                                            } else {
                                                                                                                                                correctFunction()
                                                                                                                                            };
                                                                                                                                            wrong = false;
                                                                                                                                            this.setState({
                                                                                                                                                counter: 37,
                                                                                                                                            })
                                                                                                                                        } else if (this.state.counter===37) {
                                                                                                                                            if (value!==this.state.nums[16]) {
                                                                                                                                                wrong = true;
                                                                                                                                            }
                                                                                                                                            if (wrong) {
                                                                                                                                                mistakes++;
                                                                                                                                                wrongFunction();
                                                                                                                                                this.setState({
                                                                                                                                                    mistakes: this.state.mistakes + 1,
                                                                                                                                                })
                                                                                                                                                if (mistakes >= 3) {
                                                                                                                                                    window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                                                }
                                                                                                                                            } else {
                                                                                                                                                correctFunction()
                                                                                                                                            };
                                                                                                                                            wrong = false;
                                                                                                                                            // first merging step
                                                                                                                                            let arraySix1 = [...this.state.nums].slice(0, 2).map((value, index) => {
                                                                                                                                                return (
                                                                                                                                                    <Draggable>
                                                                                                                                                    <Button
                                                                                                                                                    style={{
                                                                                                                                                        marginTop: "5%",
                                                                                                                                                        marginLeft: "0.25%",
                                                                                                                                                    }}
                                                                                                                                                     key={index} onClick={
                                                                                                                                                        () => {
                                                                                                                                                            let order = [...this.state.nums].slice(0, 2).sort((a, b) => a - b);
                                                                                                                                                            if (this.state.counter===38) {
                                                                                                                                                                if (value !== order[0]) {
                                                                                                                                                                    wrong = true;
                                                                                                                                                                }
                                                                                                                                                                if (wrong) {
                                                                                                                                                                    mistakes++;
                                                                                                                                                                    wrongFunction();
                                                                                                                                                                    this.setState({
                                                                                                                                                                        mistakes: this.state.mistakes + 1,
                                                                                                                                                                    })
                                                                                                                                                                    if (mistakes >= 3) {
                                                                                                                                                                        window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                                                                    }
                                                                                                                                                                } else {
                                                                                                                                                                    correctFunction()
                                                                                                                                                                };
                                                                                                                                                                wrong = false;
                                                                                                                                                                this.setState({
                                                                                                                                                                    counter: 39,
                                                                                                                                                                })
                                                                                                                                                            } else if (this.state.counter===39) {
                                                                                                                                                                if (value!== order[1]) {
                                                                                                                                                                    wrong = true;
                                                                                                                                                                }
                                                                                                                                                                if (wrong) {
                                                                                                                                                                    mistakes++;
                                                                                                                                                                    wrongFunction();
                                                                                                                                                                    this.setState({
                                                                                                                                                                        mistakes: this.state.mistakes + 1,
                                                                                                                                                                    })
                                                                                                                                                                    if (mistakes >= 3) {
                                                                                                                                                                        window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                                                                    }
                                                                                                                                                                } else {
                                                                                                                                                                    correctFunction()
                                                                                                                                                                };
                                                                                                                                                                wrong = false;
                                                                                                                                                                this.setState({
                                                                                                                                                                    counter: 40,
                                                                                                                                                                })
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                    }>
                                                                                                                                                        {value}
                                                                                                                                                    </Button>
                                                                                                                                                </Draggable>
                                                                                                                                                )
                                                                                                                                            })
                                                                                                                                            let arraySix2 = [...this.state.nums].slice(5, 7).map((value, index) => {
                                                                                                                                                return (
                                                                                                                                                    <Draggable>
                                                                                                                                                    <Button
                                                                                                                                                    style={{
                                                                                                                                                        marginTop: "5%",
                                                                                                                                                        marginLeft: "0.25%",
                                                                                                                                                    }}
                                                                                                                                                     key={index} onClick={
                                                                                                                                                        () => {
                                                                                                                                                            let order = [...this.state.nums].slice(5, 7).sort((a, b) => a - b);
                                                                                                                                                            if (this.state.counter===40) {
                                                                                                                                                                if (value !== order[0]) {
                                                                                                                                                                    wrong = true;
                                                                                                                                                                }
                                                                                                                                                                if (wrong) {
                                                                                                                                                                    mistakes++;
                                                                                                                                                                    wrongFunction();
                                                                                                                                                                    this.setState({
                                                                                                                                                                        mistakes: this.state.mistakes + 1,
                                                                                                                                                                    })
                                                                                                                                                                    if (mistakes >= 3) {
                                                                                                                                                                        window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                                                                    }
                                                                                                                                                                } else {
                                                                                                                                                                    correctFunction()
                                                                                                                                                                };
                                                                                                                                                                wrong = false;
                                                                                                                                                                this.setState({
                                                                                                                                                                    counter:41,
                                                                                                                                                                })
                                                                                                                                                            } else if (this.state.counter===41) {
                                                                                                                                                                if (value!== order[1]) {
                                                                                                                                                                    wrong = true;
                                                                                                                                                                }
                                                                                                                                                                if (wrong) {
                                                                                                                                                                    mistakes++;
                                                                                                                                                                    wrongFunction();
                                                                                                                                                                    this.setState({
                                                                                                                                                                        mistakes: this.state.mistakes + 1,
                                                                                                                                                                    })
                                                                                                                                                                    if (mistakes >= 3) {
                                                                                                                                                                        window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                                                                    }
                                                                                                                                                                } else {
                                                                                                                                                                    correctFunction()
                                                                                                                                                                };
                                                                                                                                                                wrong = false;
                                                                                                                                                                this.setState({
                                                                                                                                                                    counter: 42,
                                                                                                                                                                })
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                    }>
                                                                                                                                                        {value}
                                                                                                                                                    </Button>
                                                                                                                                                </Draggable>
                                                                                                                                                )
                                                                                                                                            })
                                                                                                                                            let arraySix3 = [...this.state.nums].slice(10, 12).map((value, index) => {
                                                                                                                                                return (
                                                                                                                                                    <Draggable>
                                                                                                                                                    <Button
                                                                                                                                                    style={{
                                                                                                                                                        marginTop: "5%",
                                                                                                                                                        marginLeft: "0.25%",
                                                                                                                                                    }}
                                                                                                                                                     key={index} onClick={
                                                                                                                                                        () => {
                                                                                                                                                            let order = [...this.state.nums].slice(10, 12).sort((a, b) => a - b);
                                                                                                                                                            if (this.state.counter===42) {
                                                                                                                                                                if (value !== order[0]) {
                                                                                                                                                                    wrong = true;
                                                                                                                                                                }
                                                                                                                                                                if (wrong) {
                                                                                                                                                                    mistakes++;
                                                                                                                                                                    wrongFunction();
                                                                                                                                                                    this.setState({
                                                                                                                                                                        mistakes: this.state.mistakes + 1,
                                                                                                                                                                    })
                                                                                                                                                                    if (mistakes >= 3) {
                                                                                                                                                                        window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                                                                    }
                                                                                                                                                                } else {
                                                                                                                                                                    correctFunction()
                                                                                                                                                                };
                                                                                                                                                                wrong = false;
                                                                                                                                                                this.setState({
                                                                                                                                                                    counter:43,
                                                                                                                                                                })
                                                                                                                                                            } else if (this.state.counter===43) {
                                                                                                                                                                if (value!== order[1]) {
                                                                                                                                                                    wrong = true;
                                                                                                                                                                }
                                                                                                                                                                if (wrong) {
                                                                                                                                                                    mistakes++;
                                                                                                                                                                    wrongFunction();
                                                                                                                                                                    this.setState({
                                                                                                                                                                        mistakes: this.state.mistakes + 1,
                                                                                                                                                                    })
                                                                                                                                                                    if (mistakes >= 3) {
                                                                                                                                                                        window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                                                                    }
                                                                                                                                                                } else {
                                                                                                                                                                    correctFunction()
                                                                                                                                                                };
                                                                                                                                                                wrong = false;
                                                                                                                                                                this.setState({
                                                                                                                                                                    counter: 44,
                                                                                                                                                                })
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                    }>
                                                                                                                                                        {value}
                                                                                                                                                    </Button>
                                                                                                                                                </Draggable>
                                                                                                                                                )
                                                                                                                                            })
                                                                                                                                            let arraySix4 = [...this.state.nums].slice(15, 17).map((value, index) => {
                                                                                                                                                return (
                                                                                                                                                    <Draggable>
                                                                                                                                                    <Button
                                                                                                                                                    style={{
                                                                                                                                                        marginTop: "5%",
                                                                                                                                                        marginLeft: "0.25%",
                                                                                                                                                    }}
                                                                                                                                                     key={index} onClick={
                                                                                                                                                        () => {
                                                                                                                                                            let order = [...this.state.nums].slice(15, 17).sort((a, b) => a - b);
                                                                                                                                                            if (this.state.counter===44) {
                                                                                                                                                                if (value !== order[0]) {
                                                                                                                                                                    wrong = true;
                                                                                                                                                                }
                                                                                                                                                                if (wrong) {
                                                                                                                                                                    mistakes++;
                                                                                                                                                                    wrongFunction();
                                                                                                                                                                    this.setState({
                                                                                                                                                                        mistakes: this.state.mistakes + 1,
                                                                                                                                                                    })
                                                                                                                                                                    if (mistakes >= 3) {
                                                                                                                                                                        window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                                                                    }
                                                                                                                                                                } else {
                                                                                                                                                                    correctFunction()
                                                                                                                                                                };
                                                                                                                                                                wrong = false;
                                                                                                                                                                this.setState({
                                                                                                                                                                    counter:45,
                                                                                                                                                                })
                                                                                                                                                            } else if (this.state.counter===45) {
                                                                                                                                                                if (value!== order[1]) {
                                                                                                                                                                    wrong = true;
                                                                                                                                                                }
                                                                                                                                                                if (wrong) {
                                                                                                                                                                    mistakes++;
                                                                                                                                                                    wrongFunction();
                                                                                                                                                                    this.setState({
                                                                                                                                                                        mistakes: this.state.mistakes + 1,
                                                                                                                                                                    })
                                                                                                                                                                    if (mistakes >= 3) {
                                                                                                                                                                        window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                                                                    }
                                                                                                                                                                } else {
                                                                                                                                                                    correctFunction()
                                                                                                                                                                };
                                                                                                                                                                wrong = false;
                                                                                                                                                                // 2nd merging step (3, 2, 3, 2, 3, 2, 3, 2)
                                                                                                                                                                let a7One = [...this.state.nums].slice(0, 2).sort((a, b) => a - b);
                                                                                                                                                                a7One.push(this.state.nums[2]);
                                                                                                                                                                let arraySeven1 = a7One.map((value, index) => {
                                                                                                                                                                    return (
                                                                                                                                                                        <Draggable>
                                                                                                                                                                            <Button key={index}
                                                                                                                                                                            style={{
                                                                                                                                                                                marginTop: "5%",
                                                                                                                                                                                marginLeft: "0.25%",
                                                                                                                                                                            }}
                                                                                                                                                                            onClick={
                                                                                                                                                                                () => {
                                                                                                                                                                                    if (this.state.counter===46) {
                                                                                                                                                                                        this.state.stepSeven1.push(value);
                                                                                                                                                                                        if (this.state.stepSeven1.length >= 3) {
                                                                                                                                                                                            let order = [...this.state.nums].slice(0, 3).sort((a, b) => a - b);
                                                                                                                                                                                            for (let i = 0; i < order.length; i++) {
                                                                                                                                                                                                if (order[i] !== this.state.stepSeven1[i]) {
                                                                                                                                                                                                    wrong = true;
                                                                                                                                                                                                }
                                                                                                                                                                                            }
                                                                                                                                                                                            if (wrong) {
                                                                                                                                                                                                mistakes++;
                                                                                                                                                                                                wrongFunction();
                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                    mistakes: this.state.mistakes + 1,
                                                                                                                                                                                                })
                                                                                                                                                                                                if (mistakes >= 3) {
                                                                                                                                                                                                    window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                                                                                                }
                                                                                                                                                                                            } else {
                                                                                                                                                                                                correctFunction()
                                                                                                                                                                                            };
                                                                                                                                                                                            wrong = false;
                                                                                                                                                                                            this.setState({
                                                                                                                                                                                                counter: 47,
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
                                                                                                                                                                });
                                                                                                                                                                let a7Two = [...this.state.nums].slice(3, 5);
                                                                                                                                                                let arraySeven2 = a7Two.map((value, index) => {
                                                                                                                                                                    return (
                                                                                                                                                                        <Draggable>
                                                                                                                                                                            <Button key={index}
                                                                                                                                                                            style={{
                                                                                                                                                                                marginTop: "5%",
                                                                                                                                                                                marginLeft: "0.25%",
                                                                                                                                                                            }}
                                                                                                                                                                            onClick={
                                                                                                                                                                                () => {
                                                                                                                                                                                    if (this.state.counter===47) {
                                                                                                                                                                                        this.state.stepSeven2.push(value);
                                                                                                                                                                                        if (this.state.stepSeven2.length >= 2) {
                                                                                                                                                                                            let order = [...this.state.nums].slice(3, 5).sort((a, b) => a - b);
                                                                                                                                                                                            for (let i = 0; i < order.length; i++) {
                                                                                                                                                                                                if (order[i] !== this.state.stepSeven2[i]) {
                                                                                                                                                                                                    wrong = true;
                                                                                                                                                                                                }
                                                                                                                                                                                            }
                                                                                                                                                                                            if (wrong) {
                                                                                                                                                                                                mistakes++;
                                                                                                                                                                                                wrongFunction();
                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                    mistakes: this.state.mistakes + 1,
                                                                                                                                                                                                })
                                                                                                                                                                                                if (mistakes >= 3) {
                                                                                                                                                                                                    window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                                                                                                }
                                                                                                                                                                                            } else {
                                                                                                                                                                                                correctFunction()
                                                                                                                                                                                            };
                                                                                                                                                                                            wrong = false;
                                                                                                                                                                                            this.setState({
                                                                                                                                                                                                counter: 48,
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
                                                                                                                                                                });
                                                                                                                                                                let a7Three = [...this.state.nums].slice(5, 7).sort((a, b) => a - b);
                                                                                                                                                                a7Three.push(this.state.nums[7]);
                                                                                                                                                                let arraySeven3 = a7Three.map((value, index) => {
                                                                                                                                                                    return (
                                                                                                                                                                        <Draggable>
                                                                                                                                                                            <Button key={index}
                                                                                                                                                                            style={{
                                                                                                                                                                                marginTop: "5%",
                                                                                                                                                                                marginLeft: "0.25%",
                                                                                                                                                                            }}
                                                                                                                                                                            onClick={
                                                                                                                                                                                () => {
                                                                                                                                                                                    if (this.state.counter===48) {
                                                                                                                                                                                        this.state.stepSeven3.push(value);
                                                                                                                                                                                        if (this.state.stepSeven3.length >= 3) {
                                                                                                                                                                                            let order = [...this.state.nums].slice(5, 8).sort((a, b) => a - b);
                                                                                                                                                                                            for (let i = 0; i < order.length; i++) {
                                                                                                                                                                                                if (order[i] !== this.state.stepSeven3[i]) {
                                                                                                                                                                                                    wrong = true;

                                                                                                                                                                                                }
                                                                                                                                                                                            }
                                                                                                                                                                                            if (wrong) {
                                                                                                                                                                                                mistakes++;
                                                                                                                                                                                                wrongFunction();
                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                    mistakes: this.state.mistakes + 1,
                                                                                                                                                                                                })
                                                                                                                                                                                                if (mistakes >= 3) {
                                                                                                                                                                                                    window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                                                                                                }
                                                                                                                                                                                            } else {
                                                                                                                                                                                                correctFunction()
                                                                                                                                                                                            };
                                                                                                                                                                                            wrong = false;
                                                                                                                                                                                            this.setState({
                                                                                                                                                                                                counter: 49,
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
                                                                                                                                                                });
                                                                                                                                                                let a7Four = [...this.state.nums].slice(8, 10);
                                                                                                                                                                let arraySeven4 = a7Four.map((value, index) => {
                                                                                                                                                                    return (
                                                                                                                                                                        <Draggable>
                                                                                                                                                                            <Button key={index}
                                                                                                                                                                            style={{
                                                                                                                                                                                marginTop: "5%",
                                                                                                                                                                                marginLeft: "0.25%",
                                                                                                                                                                            }}
                                                                                                                                                                            onClick={
                                                                                                                                                                                () => {
                                                                                                                                                                                    if (this.state.counter===49) {
                                                                                                                                                                                        this.state.stepSeven4.push(value);
                                                                                                                                                                                        if (this.state.stepSeven4.length >= 2) {
                                                                                                                                                                                            let order = [...this.state.nums].slice(8, 10).sort((a, b) => a - b);
                                                                                                                                                                                            for (let i = 0; i < order.length; i++) {
                                                                                                                                                                                                if (order[i] !== this.state.stepSeven4[i]) {
                                                                                                                                                                                                    wrong = true;
                                                                                                                                                                                                }
                                                                                                                                                                                            }
                                                                                                                                                                                            if (wrong) {
                                                                                                                                                                                                mistakes++;
                                                                                                                                                                                                wrongFunction();
                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                    mistakes: this.state.mistakes + 1,
                                                                                                                                                                                                })
                                                                                                                                                                                                if (mistakes >= 3) {
                                                                                                                                                                                                    window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                                                                                                }
                                                                                                                                                                                            } else {
                                                                                                                                                                                                correctFunction()
                                                                                                                                                                                            };
                                                                                                                                                                                            wrong = false;
                                                                                                                                                                                            this.setState({
                                                                                                                                                                                                counter: 50,
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
                                                                                                                                                                });
                                                                                                                                                                let a7Five = [...this.state.nums].slice(10, 12).sort((a, b) => a - b);
                                                                                                                                                                a7Five.push(this.state.nums[12]);
                                                                                                                                                                let arraySeven5 = a7Five.map((value, index) => {
                                                                                                                                                                    return (
                                                                                                                                                                        <Draggable>
                                                                                                                                                                            <Button key={index}
                                                                                                                                                                            style={{
                                                                                                                                                                                marginTop: "5%",
                                                                                                                                                                                marginLeft: "0.25%",
                                                                                                                                                                            }}
                                                                                                                                                                            onClick={
                                                                                                                                                                                () => {
                                                                                                                                                                                    if (this.state.counter===50) {
                                                                                                                                                                                        this.state.stepSeven5.push(value);
                                                                                                                                                                                        if (this.state.stepSeven5.length >= 3) {
                                                                                                                                                                                            let order = [...this.state.nums].slice(10, 13).sort((a, b) => a - b);
                                                                                                                                                                                            for (let i = 0; i < order.length; i++) {
                                                                                                                                                                                                if (order[i] !== this.state.stepSeven5[i]) {
                                                                                                                                                                                                    wrong = true;

                                                                                                                                                                                                }
                                                                                                                                                                                            }
                                                                                                                                                                                            if (wrong) {
                                                                                                                                                                                                mistakes++;
                                                                                                                                                                                                wrongFunction();
                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                    mistakes: this.state.mistakes + 1,
                                                                                                                                                                                                })
                                                                                                                                                                                                if (mistakes >= 3) {
                                                                                                                                                                                                    window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                                                                                                }
                                                                                                                                                                                            } else {
                                                                                                                                                                                                correctFunction()
                                                                                                                                                                                            };
                                                                                                                                                                                            wrong = false;
                                                                                                                                                                                            this.setState({
                                                                                                                                                                                                counter: 51,
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
                                                                                                                                                                });
                                                                                                                                                                let a7Six = [...this.state.nums].slice(13, 15);
                                                                                                                                                                let arraySeven6 = a7Six.map((value, index) => {
                                                                                                                                                                    return (
                                                                                                                                                                        <Draggable>
                                                                                                                                                                            <Button key={index}
                                                                                                                                                                            style={{
                                                                                                                                                                                marginTop: "5%",
                                                                                                                                                                                marginLeft: "0.25%",
                                                                                                                                                                            }}
                                                                                                                                                                            onClick={
                                                                                                                                                                                () => {
                                                                                                                                                                                    if (this.state.counter===51) {
                                                                                                                                                                                        this.state.stepSeven6.push(value);
                                                                                                                                                                                        if (this.state.stepSeven6.length>=2) {
                                                                                                                                                                                            let order = [...this.state.nums].slice(13, 15).sort((a, b) => a - b);
                                                                                                                                                                                            for (let i = 0; i < order.length; i++) {
                                                                                                                                                                                                if (order[i] !== this.state.stepSeven6[i]) {
                                                                                                                                                                                                    wrong = true;
                                                                                                                                                                                                }
                                                                                                                                                                                            }
                                                                                                                                                                                            if (wrong) {
                                                                                                                                                                                                mistakes++;
                                                                                                                                                                                                wrongFunction();
                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                    mistakes: this.state.mistakes + 1,
                                                                                                                                                                                                })
                                                                                                                                                                                                if (mistakes >= 3) {
                                                                                                                                                                                                    window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                                                                                                }
                                                                                                                                                                                            } else {
                                                                                                                                                                                                correctFunction()
                                                                                                                                                                                            };
                                                                                                                                                                                            wrong = false;
                                                                                                                                                                                            this.setState({
                                                                                                                                                                                                counter: 52,
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
                                                                                                                                                                });
                                                                                                                                                                let a7Seven = [...this.state.nums].slice(15, 17).sort((a, b) => a - b);
                                                                                                                                                                a7Seven.push(this.state.nums[17]);
                                                                                                                                                                let arraySeven7 = a7Seven.map((value, index) => {
                                                                                                                                                                    return (
                                                                                                                                                                        <Draggable>
                                                                                                                                                                            <Button key={index}
                                                                                                                                                                            style={{
                                                                                                                                                                                marginTop: "5%",
                                                                                                                                                                                marginLeft: "0.25%",
                                                                                                                                                                            }}
                                                                                                                                                                            onClick={
                                                                                                                                                                                () => {
                                                                                                                                                                                    if (this.state.counter===52) {
                                                                                                                                                                                        this.state.stepSeven7.push(value);
                                                                                                                                                                                        if (this.state.stepSeven7.length >= 3) {
                                                                                                                                                                                            let order = [...this.state.nums].slice(15, 18).sort((a, b) => a - b);
                                                                                                                                                                                            for (let i = 0; i < order.length; i++) {
                                                                                                                                                                                                if (order[i] !== this.state.stepSeven7[i]) {
                                                                                                                                                                                                    wrong = true;

                                                                                                                                                                                                }
                                                                                                                                                                                            }
                                                                                                                                                                                            if (wrong) {
                                                                                                                                                                                                mistakes++;
                                                                                                                                                                                                wrongFunction();
                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                    mistakes: this.state.mistakes + 1,
                                                                                                                                                                                                })
                                                                                                                                                                                                if (mistakes >= 3) {
                                                                                                                                                                                                    window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                                                                                                }
                                                                                                                                                                                            } else {
                                                                                                                                                                                                correctFunction()
                                                                                                                                                                                            };
                                                                                                                                                                                            wrong = false;
                                                                                                                                                                                            this.setState({
                                                                                                                                                                                                counter: 53,
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
                                                                                                                                                                });
                                                                                                                                                                let a7Eight = [...this.state.nums].slice(18, 20);
                                                                                                                                                                let arraySeven8 = a7Eight.map((value, index) => {
                                                                                                                                                                    return (
                                                                                                                                                                        <Draggable>
                                                                                                                                                                            <Button key={index}
                                                                                                                                                                            style={{
                                                                                                                                                                                marginTop: "5%",
                                                                                                                                                                                marginLeft: "0.25%",
                                                                                                                                                                            }}
                                                                                                                                                                            onClick={
                                                                                                                                                                                () => {
                                                                                                                                                                                    if (this.state.counter===53) {
                                                                                                                                                                                        this.state.stepSeven8.push(value);
                                                                                                                                                                                        if (this.state.stepSeven8.length>=2) {
                                                                                                                                                                                            let order = [...this.state.nums].slice(18, 20).sort((a, b) => a - b);
                                                                                                                                                                                            for (let i = 0; i < order.length; i++) {
                                                                                                                                                                                                if (order[i] !== this.state.stepSeven8[i]) {
                                                                                                                                                                                                    wrong = true;
                                                                                                                                                                                                }
                                                                                                                                                                                            }
                                                                                                                                                                                        
                                                                                                                                                                                            if (wrong) {
                                                                                                                                                                                                mistakes++;
                                                                                                                                                                                                wrongFunction();
                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                    mistakes: this.state.mistakes + 1,
                                                                                                                                                                                                })
                                                                                                                                                                                                if (mistakes >= 3) {
                                                                                                                                                                                                    window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                                                                                                }
                                                                                                                                                                                            } else {
                                                                                                                                                                                                correctFunction()
                                                                                                                                                                                            };
                                                                                                                                                                                            wrong = false;
                                                                                                                                                                                        // 3rd merging step (5, 5, 5, 5)
                                                                                                                                                                                        let a8One = [...this.state.nums].slice(0, 3).sort((a, b) => a - b);
                                                                                                                                                                                        a8One.push([...this.state.nums].slice(3, 5).sort((a, b) => a - b)[0]);
                                                                                                                                                                                        a8One.push([...this.state.nums].slice(3, 5).sort((a, b) => a - b)[1]);
                                                                                                                                                                                        let arrayEight1 = a8One.map((value, index) => {
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
                                                                                                                                                                                                                if (this.state.counter===54) {
                                                                                                                                                                                                                    this.state.stepEight1.push(value);
                                                                                                                                                                                                                    if (this.state.stepEight1.length >= 5) {
                                                                                                                                                                                                                        let order = [...this.state.nums].slice(0, 5).sort((a, b) => a-b);
                                                                                                                                                                                                                        for (let i = 0; i < order.length; i++) {
                                                                                                                                                                                                                            if (order[i] !== this.state.stepEight1[i]) {
                                                                                                                                                                                                                                wrong = true;
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                        if (wrong) {
                                                                                                                                                                                                                            mistakes++;
                                                                                                                                                                                                                            wrongFunction();
                                                                                                                                                                                                                            this.setState({
                                                                                                                                                                                                                                mistakes: this.state.mistakes + 1,
                                                                                                                                                                                                                            })
                                                                                                                                                                                                                            if (mistakes >= 3) {
                                                                                                                                                                                                                                window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                            correctFunction()
                                                                                                                                                                                                                        };
                                                                                                                                                                                                                        wrong = false;
                                                                                                                                                                                                                        this.setState({
                                                                                                                                                                                                                            counter: 55,
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
                                                                                                                                                                                        let a8Two = [...this.state.nums].slice(5, 8).sort((a, b) => a-b);
                                                                                                                                                                                        a8Two.push([...this.state.nums].slice(8, 10).sort((a, b) => a - b)[0]);
                                                                                                                                                                                        a8Two.push([...this.state.nums].slice(8, 10).sort((a, b) => a - b)[1]);
                                                                                                                                                                                        let arrayEight2 = a8Two.map((value, index) => {
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
                                                                                                                                                                                                                if (this.state.counter===55) {
                                                                                                                                                                                                                    this.state.stepEight2.push(value);
                                                                                                                                                                                                                    if (this.state.stepEight2.length >= 5) {
                                                                                                                                                                                                                        let order = [...this.state.nums].slice(5, 10).sort((a, b) => a-b);
                                                                                                                                                                                                                        for (let i = 0; i < order.length; i++) {
                                                                                                                                                                                                                            if (order[i] !== this.state.stepEight2[i]) {
                                                                                                                                                                                                                                wrong = true;
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                        if (wrong) {
                                                                                                                                                                                                                            mistakes++;
                                                                                                                                                                                                                            wrongFunction();
                                                                                                                                                                                                                            this.setState({
                                                                                                                                                                                                                                mistakes: this.state.mistakes + 1,
                                                                                                                                                                                                                            })
                                                                                                                                                                                                                            if (mistakes >= 3) {
                                                                                                                                                                                                                                window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                            correctFunction()
                                                                                                                                                                                                                        };
                                                                                                                                                                                                                        wrong = false;
                                                                                                                                                                                                                        this.setState({
                                                                                                                                                                                                                            counter: 56,
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
                                                                                                                                                                                        let a8Three = [...this.state.nums].slice(10, 13).sort((a, b) => a - b);
                                                                                                                                                                                        a8Three.push([...this.state.nums].slice(13, 15).sort((a, b) => a - b)[0]);
                                                                                                                                                                                        a8Three.push([...this.state.nums].slice(13, 15).sort((a, b) => a - b)[1]);
                                                                                                                                                                                        let arrayEight3 = a8Three.map((value, index) => {
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
                                                                                                                                                                                                                if (this.state.counter===56) {
                                                                                                                                                                                                                    this.state.stepEight3.push(value);
                                                                                                                                                                                                                    if (this.state.stepEight3.length >= 5) {
                                                                                                                                                                                                                        let order = [...this.state.nums].slice(10, 15).sort((a, b) => a-b);
                                                                                                                                                                                                                        for (let i = 0; i < order.length; i++) {
                                                                                                                                                                                                                            if (order[i] !== this.state.stepEight3[i]) {
                                                                                                                                                                                                                                wrong = true;
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                        if (wrong) {
                                                                                                                                                                                                                            mistakes++;
                                                                                                                                                                                                                            wrongFunction();
                                                                                                                                                                                                                            this.setState({
                                                                                                                                                                                                                                mistakes: this.state.mistakes + 1,
                                                                                                                                                                                                                            })
                                                                                                                                                                                                                            if (mistakes >= 3) {
                                                                                                                                                                                                                                window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                            correctFunction()
                                                                                                                                                                                                                        };
                                                                                                                                                                                                                        wrong = false;
                                                                                                                                                                                                                        this.setState({
                                                                                                                                                                                                                            counter: 57,
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
                                                                                                                                                                                        let a8Four = [...this.state.nums].slice(15, 18).sort((a, b) => a-b);
                                                                                                                                                                                        a8Four.push([...this.state.nums].slice(18, 20).sort((a, b) => a - b)[0]);
                                                                                                                                                                                        a8Four.push([...this.state.nums].slice(18, 20).sort((a, b) => a - b)[1]);
                                                                                                                                                                                        let arrayEight4 = a8Four.map((value, index) => {
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
                                                                                                                                                                                                                if (this.state.counter===57) {
                                                                                                                                                                                                                    this.state.stepEight4.push(value);
                                                                                                                                                                                                                    if (this.state.stepEight4.length >= 5) {
                                                                                                                                                                                                                            let order = [...this.state.nums].slice(15, 20).sort((a, b) => a-b);
                                                                                                                                                                                                                        for (let i = 0; i < order.length; i++) {
                                                                                                                                                                                                                            if (order[i] !== this.state.stepEight4[i]) {
                                                                                                                                                                                                                                wrong = true;
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                        if (wrong) {
                                                                                                                                                                                                                            mistakes++;
                                                                                                                                                                                                                            wrongFunction();
                                                                                                                                                                                                                            this.setState({
                                                                                                                                                                                                                                mistakes: this.state.mistakes + 1,
                                                                                                                                                                                                                            })
                                                                                                                                                                                                                            if (mistakes >= 3) {
                                                                                                                                                                                                                                window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                            correctFunction()
                                                                                                                                                                                                                        };
                                                                                                                                                                                                                        wrong = false;
                                                                                                                                                                                                                        // 4th merging step (10, 10)
                                                                                                                                                                                                                        let aNine1 = [...this.state.nums].slice(0, 5).sort((a, b) => a-b);
                                                                                                                                                                                                                        let tempNine1 = [...this.state.nums].slice(5, 10).sort((a, b) => a-b);
                                                                                                                                                                                                                        for (let i = 0; i < tempNine1.length; i++) {
                                                                                                                                                                                                                            aNine1.push(tempNine1[i]);
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                        let arrayNine1 = aNine1.map((value, index) => {
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
                                                                                                                                                                                                                                                if (this.state.counter===58) {
                                                                                                                                                                                                                                                    this.state.stepNine1.push(value);
                                                                                                                                                                                                                                                    if (this.state.stepNine1.length >= 10) {
                                                                                                                                                                                                                                                        let order = [...this.state.nums].slice(0, 10).sort((a, b) => a-b);
                                                                                                                                                                                                                                                        for (let i=0; i < 10; i++) {
                                                                                                                                                                                                                                                            if (order[i]!==this.state.stepNine1[i]) {
                                                                                                                                                                                                                                                                wrong = true;
                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                        if (wrong) {
                                                                                                                                                                                                                                                            mistakes++;
                                                                                                                                                                                                                                                            wrongFunction();
                                                                                                                                                                                                                                                            this.setState({
                                                                                                                                                                                                                                                                mistakes: this.state.mistakes + 1,
                                                                                                                                                                                                                                                            })
                                                                                                                                                                                                                                                            if (mistakes >= 3) {
                                                                                                                                                                                                                                                                window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                            correctFunction()
                                                                                                                                                                                                                                                        };
                                                                                                                                                                                                                                                        wrong = false;
                                                                                                                                                                                                                                                        this.setState({
                                                                                                                                                                                                                                                            counter: 59,
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
                                                                                                                                                                                                                        let aNine2 = [...this.state.nums].slice(10, 15).sort((a, b) => a-b);
                                                                                                                                                                                                                        let tempNine2 = [...this.state.nums].slice(15, 20).sort((a, b) => a-b);
                                                                                                                                                                                                                        for (let i = 0; i < tempNine2.length; i++) {
                                                                                                                                                                                                                            aNine2.push(tempNine2[i]);
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                        let arrayNine2 = aNine2.map((value, index) => {
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
                                                                                                                                                                                                                                                if (this.state.counter===59) {
                                                                                                                                                                                                                                                    this.state.stepNine2.push(value);
                                                                                                                                                                                                                                                    if (this.state.stepNine2.length >= 10) {
                                                                                                                                                                                                                                                        let order = [...this.state.nums].slice(10, 20).sort((a, b) => a-b);
                                                                                                                                                                                                                                                        for (let i=0; i < 10; i++) {
                                                                                                                                                                                                                                                            if (order[i]!==this.state.stepNine2[i]) {
                                                                                                                                                                                                                                                                wrong = true;
                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                        if (wrong) {
                                                                                                                                                                                                                                                            mistakes++;
                                                                                                                                                                                                                                                            wrongFunction();
                                                                                                                                                                                                                                                            this.setState({
                                                                                                                                                                                                                                                                mistakes: this.state.mistakes + 1,
                                                                                                                                                                                                                                                            })
                                                                                                                                                                                                                                                            if (mistakes >= 3) {
                                                                                                                                                                                                                                                                window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                            correctFunction()
                                                                                                                                                                                                                                                        };
                                                                                                                                                                                                                                                        wrong = false;
                                                                                                                                                                                                                                                         // final merging step
                                                                                                                                                                                                                                                    let aTen = [...this.state.nums].slice(0, 10).sort((a,b)=>a-b);
                                                                                                                                                                                                                                                    let temp10 = [...this.state.nums].slice(10, 20).sort((a, b)=>a-b);
                                                                                                                                                                                                                                                    for (let i=0; i<10; i++) {
                                                                                                                                                                                                                                                        aTen.push(temp10[i]);
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                    const arrayTen = aTen.map((value, index) => {
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
                                                                                                                                                                                                                                                                            if (this.state.counter===60) {
                                                                                                                                                                                                                                                                                this.state.stepTen.push(value);
                                                                                                                                                                                                                                                                                if (this.state.stepTen.length>=20) {
                                                                                                                                                                                                                                                                                    let order = [...this.state.nums].sort((a,b) => a-b);
                                                                                                                                                                                                                                                                                    for (let i = 0; i < 20; i++) {
                                                                                                                                                                                                                                                                                        if (this.state.stepTen[i] !== order[i]) {
                                                                                                                                                                                                                                                                                            wrong = true;
                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                    if (wrong) {
                                                                                                                                                                                                                                                                                        mistakes++;
                                                                                                                                                                                                                                                                                        wrongFunction();
                                                                                                                                                                                                                                                                                        this.setState({
                                                                                                                                                                                                                                                                                            mistakes: this.state.mistakes + 1,
                                                                                                                                                                                                                                                                                        })
                                                                                                                                                                                                                                                                                        if (mistakes >= 3) {
                                                                                                                                                                                                                                                                                            window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                        correctFunction()
                                                                                                                                                                                                                                                                                    };
                                                                                                                                                                                                                                                                                    wrong = false;
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
                                                                                                                                                                                                                                                        counter: 60,
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
                                                                                                                                                                                                                                {arrayNine1} {arrayNine2}
                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                        )
                                                                                                                                                                                                                        this.setState({
                                                                                                                                                                                                                            counter: 58,
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
                                                                                                                                                                                                {arrayEight1} {arrayEight2} {arrayEight3} {arrayEight4}
                                                                                                                                                                                            </div>
                                                                                                                                                                                        )
                                                                                                                                                                                        this.setState({
                                                                                                                                                                                            counter: 54,
                                                                                                                                                                                            arrayEight: arrayEight,
                                                                                                                                                                                        }) }
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
                                                                                                                                                                        {arraySeven1} {arraySeven2} {arraySeven3} {arraySeven4} {arraySeven5} {arraySeven6} {arraySeven7} {arraySeven8}
                                                                                                                                                                    </div>
                                                                                                                                                                )
                                                                                                                                                                this.setState({
                                                                                                                                                                    counter: 46,
                                                                                                                                                                    arraySeven: arraySeven,
                                                                                                                                                                })
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
                                                                                                                                                    {arraySix1} {arraySix2} {arraySix3} {arraySix4}
                                                                                                                                                </div>
                                                                                                                                            );
                                                                                                                                            this.setState({
                                                                                                                                                counter: 38,
                                                                                                                                                arraySix: arraySix,
                                                                                                                                            })
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
                marginLeft: "10%",
                marginRight: "10%",
            }}>
                <h1>Level Four</h1>
                <h2>MergeSort Algorithm</h2>
                <h5>Ensure NOT to double click buttons</h5>
                <h5>Mistakes made: {this.state.mistakes}</h5>
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
                <br />
                <ButtonGroup style={{marginTop: "2%"}} >
                <Button variant="primary" onClick={() => window.location.reload() }>Restart Level</Button>
                <Button variant="primary" >Change Sorting Algorithm</Button>  
                <Link to ="/levels"><Button variant="primary">Return to Level Select</Button></Link>
                <Button variant="primary" onClick={() => window.close() }>Quit Game</Button>  
                </ButtonGroup>
                <br />
            </div>
        )
    }

}