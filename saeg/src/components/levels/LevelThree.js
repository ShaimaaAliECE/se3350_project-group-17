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
                     
                    let wrong = false;
                    let mistakes = 0;
                    if (this.state.counter === 0) {
                        this.state.stepOneLeft.push(value);
                        if (this.state.stepOneLeft.length >= 5) {
                            let temp = [...this.state.nums].slice(0, 5);

                            for (let i = 0; i < 5; i++) {
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
                                message: 'Step 2. Drag the remaining 5 elements to the subarray (line) on the right',
                            });
                        }
                    } else if (this.state.counter === 1) {
                        this.state.stepOneRight.push(value);
                        if (this.state.stepOneRight.length >= 5) {
                            let temp = [...this.state.nums].slice(5);
                            // allows zero mistakes for now
                            for (let i = 0; i < 5; i++) {
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
                            };
                            wrong = false;
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
                                                    if (this.state.counter === 2) {
                                                        this.state.stepTwoLeft1.push(value);
                                                        if (this.state.stepTwoLeft1.length >= 3) {
                                                            let temp = [...this.state.nums].slice(0, 3);
                                                            for (let i = 0; i < 3; i++) {
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
                                                            };
                                                            wrong = false;
                                                            this.setState({
                                                                counter: 3,
                                                                message: 'Step 4: Drag the remaining 2 elements on the left subarray to the second most left array ',
                                                            });
                                                        }
                                                    } else if (this.state.counter === 3) {
                                                        this.state.stepTwoLeft2.push(value);
                                                        if (this.state.stepTwoLeft2.length >= 2) {
                                                            let temp = [...this.state.nums].slice(3, 5);
                                                            for (let i = 0; i < 2; i++) {
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
                                                            };
                                                            wrong = false;
                                                            this.setState({
                                                                counter: 4,
                                                                message: 'Step 5: Drag the first 3 elements of the right subarray to the third subarray',
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
                                                    if (this.state.counter === 4) {
                                                        this.state.stepTwoRight1.push(value);
                                                        if (this.state.stepTwoRight1.length >= 3) {
                                                            let temp = [...this.state.nums].slice(5, 8);
                                                            for (let i = 0; i < 3; i++) {
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
                                                            };
                                                            wrong = false;
                                                            this.setState({
                                                                counter: 5,
                                                                message: 'Step 6: Drag the remaining 2 elements on the right subarray to the right most array',
                                                            });
                                                        }
                                                    } else if (this.state.counter === 5) {
                                                        this.state.stepTwoRight2.push(value);
                                                        if (this.state.stepTwoRight2.length >= 2) {
                                                            let temp = [...this.state.nums].slice(8, 10);
                                                            for (let i = 0; i < 2; i++) {
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
                                                            };
                                                            wrong = false;
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
                                                                                    if (this.state.counter === 6) {
                                                                                        this.state.stepThree1.push(value);
                                                                                        if (this.state.stepThree1.length >= 2) {
                                                                                            let temp = [...this.state.nums].slice(0, 2); for (let i = 0; i < 2; i++) {
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
                                                                                            };
                                                                                            wrong = false;
                                                                                            this.setState({
                                                                                                counter: 7,
                                                                                                message: 'Step 8: Drag the remaining element from subarray 1 of 4 to the second most left array.',
                                                                                            });
                                                                                        }
                                                                                    } else if (this.state.counter === 7) {
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
                                                                                        };
                                                                                        wrong = false;
                                                                                        this.setState({
                                                                                            counter: 8,
                                                                                            message: 'Step 9: Drag the first element from subarray 2 of 4 to the third most left array',
                                                                                        });
                                                                                    } else {
                                                                                        wrong = true;
                                                                                        if (wrong) {
                                                                                            mistakes++;
                                                                                            wrongFunction();
                                                                                            this.setState({
                                                                                                mistakes: this.state.mistakes + 1,
                                                                                            })
                                                                                            if (mistakes >= 3) {
                                                                                                window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                            }
                                                                                        } 
                                                                                        wrong = false;
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
                                                                                    if (this.state.counter === 8) {
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
                                                                                        };
                                                                                        wrong = false;
                                                                                        this.setState({
                                                                                            counter: 9,
                                                                                            message: 'Step 10: Drag the remaining element of subarray 2 of 4 to the fourth most left array',
                                                                                        });
                                                                                    } else if (this.state.counter === 9) {
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
                                                                                        };
                                                                                        wrong = false;
                                                                                        this.setState({
                                                                                            counter: 10,
                                                                                            message: 'Step 11: Drag the first 2 elements of subarray 3 of 4 to the fifth most left array',
                                                                                        });
                                                                                    } else {
                                                                                        wrong = true;
                                                                                        if (wrong) {
                                                                                            mistakes++;
                                                                                            wrongFunction();
                                                                                            this.setState({
                                                                                                mistakes: this.state.mistakes + 1,
                                                                                            })
                                                                                            if (mistakes >= 3) {
                                                                                                window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                            }
                                                                                        } 
                                                                                        wrong = false;
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
                                                                                    if (this.state.counter === 10) {
                                                                                        this.state.stepThree2.push(value);
                                                                                        if (this.state.stepThree2.length >= 2) {
                                                                                            let temp = [...this.state.nums].slice(5, 7); for (let i = 0; i < 2; i++) {
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
                                                                                            };
                                                                                            wrong = false;
                                                                                            this.setState({
                                                                                                counter: 11,
                                                                                                message: 'Step 12: Drag the remaining element for subarray 3 of 4 to the 6th most left array',
                                                                                            });
                                                                                        }
                                                                                    } else if (this.state.counter === 11) {
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
                                                                                        };
                                                                                        wrong = false;
                                                                                        this.setState({
                                                                                            counter: 12,
                                                                                            message: 'Step 13: Drag the first element of subarray 4 of 4 to the second most right array ',
                                                                                        });
                                                                                    } else {
                                                                                        wrong = true;
                                                                                        if (wrong) {
                                                                                            mistakes++;
                                                                                            wrongFunction();
                                                                                            this.setState({
                                                                                                mistakes: this.state.mistakes + 1,
                                                                                            })
                                                                                            if (mistakes >= 3) {
                                                                                                window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                            }
                                                                                        } 
                                                                                        wrong = false;
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
                                                                                    if (this.state.counter === 12) {
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
                                                                                        };
                                                                                        wrong = false;
                                                                                        this.setState({
                                                                                            counter: 13,
                                                                                            message: 'Step 14: Drag the remaining element from subarray 4 to the rightmost array',
                                                                                        });
                                                                                    } else if (this.state.counter === 13) {
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
                                                                                        };
                                                                                        wrong = false;
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
                                                                                                                if (this.state.counter === 14) {
                                                                                                                    if (value !== this.state.nums[0]) {
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
                                                                                                                        counter: 15,
                                                                                                                        message: 'Step 16: Drag the remaining element of the left subarray to the second most left array on row 4',
                                                                                                                    });
                                                                                                                } else if (this.state.counter === 15) {
                                                                                                                    if (value !== this.state.nums[1]) {
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
                                                                                                                        counter: 16,
                                                                                                                        message: 'Step 17: Drag the first element of the right subarray to the third most left array of row 4',
                                                                                                                    });
                                                                                                                } else {
                                                                                                                    wrong = true;
                                                                                                                    if (wrong) {
                                                                                                                        mistakes++;
                                                                                                                        wrongFunction();
                                                                                                                        this.setState({
                                                                                                                            mistakes: this.state.mistakes + 1,
                                                                                                                        })
                                                                                                                        if (mistakes >= 3) {
                                                                                                                            window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                        }
                                                                                                                    } 
                                                                                                                    wrong = false;
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
                                                                                                                if (this.state.counter === 16) {
                                                                                                                    if (value !== this.state.nums[5]) {
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
                                                                                                                        counter: 17,
                                                                                                                        message: 'Step 18: Drag the remaining element of the right subarray to the rightmost array on row 4',
                                                                                                                    });
                                                                                                                } else if (this.state.counter === 17) {
                                                                                                                    if (value !== this.state.nums[6]) {
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
                                                                                                                                            if (this.state.counter === 18) {
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
                                                                                                                                                    counter: 19,
                                                                                                                                                    message: 'Step 20: Drag the remaining element of the left subarray to the next spot on the left array on the 5th row',
                                                                                                                                                });
                                                                                                                                            } else if (this.state.counter === 19) {
                                                                                                                                                if (value !== order[1]) {
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
                                                                                                                                                    counter: 20,
                                                                                                                                                    message: 'Step 21:  Drag the element with the smallest value of the right subarray to the front of the right array on the 5th row',
                                                                                                                                                });
                                                                                                                                            } else {
                                                                                                                                                wrong = true;
                                                                                                                                                if (wrong) {
                                                                                                                                                    mistakes++;
                                                                                                                                                    wrongFunction();
                                                                                                                                                    this.setState({
                                                                                                                                                        mistakes: this.state.mistakes + 1,
                                                                                                                                                    })
                                                                                                                                                    if (mistakes >= 3) {
                                                                                                                                                        window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                                                    }
                                                                                                                                                } 
                                                                                                                                                wrong = false;
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
                                                                                                                                            if (this.state.counter === 20) {
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
                                                                                                                                                    counter: 21,
                                                                                                                                                    message: 'Step 22: Drag the remaining element of the right subarray to the next spot on the right array on the 5th row',
                                                                                                                                                });
                                                                                                                                            } else if (this.state.counter === 21) {
                                                                                                                                                if (value !== order[1]) {
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
                                                                                                                                                                        if (this.state.counter === 22) {
                                                                                                                                                                            this.state.stepSixLeft1.push(value);
                                                                                                                                                                            if (this.state.stepSixLeft1.length >= 3) {
                                                                                                                                                                                let order = [...this.state.nums].slice(0, 3).sort((a, b) => a - b);
                                                                                                                                                                                for (let i = 0; i < order.length; i++) {
                                                                                                                                                                                    if (order[i] !== this.state.stepSixLeft1[i]) {
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
                                                                                                                                                                                    counter: 23,
                                                                                                                                                                                    message: 'Step 24: Drag the elements from subarray 2 of 4 onto the second most left array on the 6th row from lowest to highest value',
                                                                                                                                                                                });
                                                                                                                                                                            }
                                                                                                                                                                        } else {
                                                                                                                                                                            wrong = true;
                                                                                                                                                                            if (wrong) {
                                                                                                                                                                                mistakes++;
                                                                                                                                                                                wrongFunction();
                                                                                                                                                                                this.setState({
                                                                                                                                                                                    mistakes: this.state.mistakes + 1,
                                                                                                                                                                                })
                                                                                                                                                                                if (mistakes >= 3) {
                                                                                                                                                                                    window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                                                                                }
                                                                                                                                                                            } 
                                                                                                                                                                            wrong = false;

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
                                                                                                                                                                        if (this.state.counter === 23) {
                                                                                                                                                                            this.state.stepSixLeft2.push(value);
                                                                                                                                                                            if (this.state.stepSixLeft2.length >= 2) {
                                                                                                                                                                                let order = [...this.state.nums].slice(3, 5).sort((a, b) => a - b);
                                                                                                                                                                                for (let i = 0; i < order.length; i++) {
                                                                                                                                                                                    if (order[i] !== this.state.stepSixLeft2[i]) {
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
                                                                                                                                                                                    counter: 24,
                                                                                                                                                                                    message: 'Step 25: Drag the elements from subarray 3 of 4 onto the third most left array on the 6th row from lowest to highest value',
                                                                                                                                                                                });
                                                                                                                                                                            }
                                                                                                                                                                        } else {
                                                                                                                                                                            wrong = true;
                                                                                                                                                                            if (wrong) {
                                                                                                                                                                                mistakes++;
                                                                                                                                                                                wrongFunction();
                                                                                                                                                                                this.setState({
                                                                                                                                                                                    mistakes: this.state.mistakes + 1,
                                                                                                                                                                                })
                                                                                                                                                                                if (mistakes >= 3) {
                                                                                                                                                                                    window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                                                                                }
                                                                                                                                                                            } 
                                                                                                                                                                            wrong = false;
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
                                                                                                                                                                        if (this.state.counter === 24) {
                                                                                                                                                                            this.state.stepSixRight1.push(value);
                                                                                                                                                                            if (this.state.stepSixRight1.length >= 3) {
                                                                                                                                                                                let order = [...this.state.nums].slice(5, 8).sort((a, b) => a - b);
                                                                                                                                                                                for (let i = 0; i < order.length; i++) {
                                                                                                                                                                                    if (order[i] !== this.state.stepSixRight1[i]) {
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
                                                                                                                                                                                    counter: 25,
                                                                                                                                                                                    message: 'Step 26: Drag the elements from subarray 4 of 4 onto the rightmost array on the 6th row from lowest to highest value',
                                                                                                                                                                                });
                                                                                                                                                                            }
                                                                                                                                                                        } else {
                                                                                                                                                                            wrong = true;
                                                                                                                                                                            if (wrong) {
                                                                                                                                                                                mistakes++;
                                                                                                                                                                                wrongFunction();
                                                                                                                                                                                this.setState({
                                                                                                                                                                                    mistakes: this.state.mistakes + 1,
                                                                                                                                                                                })
                                                                                                                                                                                if (mistakes >= 3) {
                                                                                                                                                                                    window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                                                                                }
                                                                                                                                                                            } 
                                                                                                                                                                            wrong = false;
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
                                                                                                                                                                        if (this.state.counter === 25) {
                                                                                                                                                                            this.state.stepSixRight2.push(value);
                                                                                                                                                                            if (this.state.stepSixRight2.length >= 2) {
                                                                                                                                                                                let order = [...this.state.nums].slice(8, 10).sort((a, b) => a - b);
                                                                                                                                                                                for (let i = 0; i < order.length; i++) {
                                                                                                                                                                                    if (order[i] !== this.state.stepSixRight2[i]) {
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
                                                                                                                                                                                                        if (this.state.counter === 26) {
                                                                                                                                                                                                            this.state.stepSevenLeft.push(value);
                                                                                                                                                                                                            if (this.state.stepSevenLeft.length >= 5) {
                                                                                                                                                                                                                let order = [...this.state.nums].slice(0, 5).sort((a, b) => a - b);
                                                                                                                                                                                                                for (let i = 0; i < order.length; i++) {
                                                                                                                                                                                                                    if (order[i] !== this.state.stepSevenLeft[i]) {
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
                                                                                                                                                                                                                    counter: 27,
                                                                                                                                                                                                                    message: 'Step 28: Drag the elements from the right subarray onto the rightmost array on the 7th row from lowest to highest value',
                                                                                                                                                                                                                });
                                                                                                                                                                                                            }
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                            wrong = true;
                                                                                                                                                                                                            if (wrong) {
                                                                                                                                                                                                                mistakes++;
                                                                                                                                                                                                                wrongFunction();
                                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                                    mistakes: this.state.mistakes + 1,
                                                                                                                                                                                                                })
                                                                                                                                                                                                                if (mistakes >= 3) {
                                                                                                                                                                                                                    window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                                                                                                                }
                                                                                                                                                                                                            } 
                                                                                                                                                                                                            wrong = false;
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
                                                                                                                                                                                                        if (this.state.counter === 27) {
                                                                                                                                                                                                            this.state.stepSevenRight.push(value);
                                                                                                                                                                                                            if (this.state.stepSevenRight.length >= 5) {
                                                                                                                                                                                                                let order = [...this.state.nums].slice(5, 10).sort((a, b) => a - b);
                                                                                                                                                                                                                for (let i = 0; i < order.length; i++) {
                                                                                                                                                                                                                    if (order[i] !== this.state.stepSevenRight[i]) {
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
                                                                                                                                                                                                                                        if (this.state.counter === 28) {
                                                                                                                                                                                                                                            this.state.stepEight.push(value);
                                                                                                                                                                                                                                            if (this.state.stepEight.length >= 10) {
                                                                                                                                                                                                                                                let order = [...this.state.nums].sort((a, b) => a - b);
                                                                                                                                                                                                                                                for (let i = 0; i < 10; i++) {
                                                                                                                                                                                                                                                    if (order[i] !== this.state.stepEight[i]) {
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
                                                                                                                                                                                                                                                    message: 'Step 30: Array has been sorted using the Mergesort Algorithm!'
                                                                                                                                                                                                                                                });
                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                            wrong = true;
                                                                                                                                                                                                                                            if (wrong) {
                                                                                                                                                                                                                                                mistakes++;
                                                                                                                                                                                                                                                wrongFunction();
                                                                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                                                                    mistakes: this.state.mistakes + 1,
                                                                                                                                                                                                                                                })
                                                                                                                                                                                                                                                if (mistakes >= 3) {
                                                                                                                                                                                                                                                    window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                            } 
                                                                                                                                                                                                                                            wrong = false;
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
                                                                                                                                                                                                                    message: 'Step 29: Drag the elements from the unsorted array onto the new array on the 8th row from lowest to highest value',
                                                                                                                                                                                                                });
                                                                                                                                                                                                            }
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                            wrong = true;
                                                                                                                                                                                                            if (wrong) {
                                                                                                                                                                                                                mistakes++;
                                                                                                                                                                                                                wrongFunction();
                                                                                                                                                                                                                this.setState({
                                                                                                                                                                                                                    mistakes: this.state.mistakes + 1,
                                                                                                                                                                                                                })
                                                                                                                                                                                                                if (mistakes >= 3) {
                                                                                                                                                                                                                    window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                                                                                                                }
                                                                                                                                                                                                            } 
                                                                                                                                                                                                            wrong = false;
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
                                                                                                                                                                                        <h3>________________     __________________</h3>
                                                                                                                                                                                    </div>
                                                                                                                                                                                )
                                                                                                                                                                                this.setState({
                                                                                                                                                                                    counter: 26,
                                                                                                                                                                                    arraySeven: arraySeven,
                                                                                                                                                                                    message: 'Step 27: Drag the elements from the left subarray onto the leftmost array on the 7th row from lowest to highest value',
                                                                                                                                                                                });
                                                                                                                                                                            }
                                                                                                                                                                        } else {
                                                                                                                                                                            wrong = true;
                                                                                                                                                                            if (wrong) {
                                                                                                                                                                                mistakes++;
                                                                                                                                                                                wrongFunction();
                                                                                                                                                                                this.setState({
                                                                                                                                                                                    mistakes: this.state.mistakes + 1,
                                                                                                                                                                                })
                                                                                                                                                                                if (mistakes >= 3) {
                                                                                                                                                                                    window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                                                                                }
                                                                                                                                                                            } 
                                                                                                                                                                            wrong = false;
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
                                                                                                                                                        <h3>_________  ______     _________  ______</h3>
                                                                                                                                                    </div>
                                                                                                                                                );
                                                                                                                                                this.setState({
                                                                                                                                                    counter: 22,
                                                                                                                                                    message: 'Step 23: Drag the elements from subarray 1 of 4 onto the leftmost array on the 6th row from lowest to highest value',
                                                                                                                                                    arraySix: arraySix,
                                                                                                                                                });
                                                                                                                                            } else {
                                                                                                                                                wrong = true;
                                                                                                                                                if (wrong) {
                                                                                                                                                    mistakes++;
                                                                                                                                                    wrongFunction();
                                                                                                                                                    this.setState({
                                                                                                                                                        mistakes: this.state.mistakes + 1,
                                                                                                                                                    })
                                                                                                                                                    if (mistakes >= 3) {
                                                                                                                                                        window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                                                    }
                                                                                                                                                } 
                                                                                                                                                wrong = false;
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
                                                                                                                            <h3>_______  _______</h3>
                                                                                                                        </div>
                                                                                                                    );
                                                                                                                    this.setState({
                                                                                                                        counter: 18,
                                                                                                                        arrayFive: arrayFive,
                                                                                                                        message: 'Step 19: All subarrays are now at size 1, it is time to merge them. Drag the element with the smallest value of the left subarray to the front of the left array on the 5th row',
                                                                                                                    });
                                                                                                                } else {
                                                                                                                    wrong = true;
                                                                                                                    if (wrong) {
                                                                                                                        mistakes++;
                                                                                                                        wrongFunction();
                                                                                                                        this.setState({
                                                                                                                            mistakes: this.state.mistakes + 1,
                                                                                                                        })
                                                                                                                        if (mistakes >= 3) {
                                                                                                                            window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                                                        }
                                                                                                                    } 
                                                                                                                    wrong = false;
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
                                                                                                <h3>___  ___  ___  ___</h3>
                                                                                            </div>
                                                                                        )
                                                                                        this.setState({
                                                                                            counter: 14,
                                                                                            message: 'Step 15: Drag the first element of the left subarray to the leftmost array of row 4',
                                                                                            arrayFour: arrayFour,
                                                                                        });
                                                                                    } else {
                                                                                        wrong = true;
                                                                                        if (wrong) {
                                                                                            mistakes++;
                                                                                            wrongFunction();
                                                                                            this.setState({
                                                                                                mistakes: this.state.mistakes + 1,
                                                                                            })
                                                                                            if (mistakes >= 3) {
                                                                                                window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                                                            }
                                                                                        } 
                                                                                        wrong = false;
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
                                                                    <h3>______  __  ___  ___     ______  ___  ___  ___</h3>
                                                                </div>
                                                            );
                                                            this.setState({
                                                                counter: 6,
                                                                message: 'Step 7: Drag the first 2 elements of subarray 1 of 4 to the leftmost array',
                                                                arrayThree: arrayThree,
                                                            });
                                                        }
                                                    } else {
                                                        wrong = true;
                                                        if (wrong) {
                                                            mistakes++;
                                                            wrongFunction();
                                                            this.setState({
                                                                mistakes: this.state.mistakes + 1,
                                                            })
                                                            if (mistakes >= 3) {
                                                                window.location.replace(window.location.href.split("level")[0] + "GameOver");
                                                            }
                                                        } 
                                                        wrong = false;
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
                                    <h3>_________ ______     _________ ______</h3>
                                </div>
                            );
                            this.setState({
                                arrayTwo: arrayTwo,
                                counter: 2,
                                message: 'Step 3: Drag the first 3 elements of the left subarray to the most left array'
                            });
                        }
                    } else {
                        wrong = true;
                        if (wrong) {
                            mistakes++;
                            wrongFunction();
                            this.setState({
                                mistakes: this.state.mistakes + 1,
                            })
                            if (mistakes >= 3) {
                                window.location.replace(window.location.href.split("level")[0] + "GameOver");
                            }
                        } 
                        wrong = false;
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
                <h5>Mistakes made: {this.state.mistakes}</h5>
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