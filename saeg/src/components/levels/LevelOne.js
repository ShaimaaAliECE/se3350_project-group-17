import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class LevelOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            arrayTwo: null,
            arrayThree: null,
            arrayFour: null,
            arrayFive: null,
            message: 'Click next to see first move',
            nums: [],
        }
        for (let i=0; i<10; i++) {
            // add 10 random integers between 1 and 20 to nums array
            this.state.nums.push(Math.floor(Math.random() * 21));
        }
    }
    render() {
        const arrayOne = this.state.nums.map((value) => {
            return (
                <Button variant="outline-info" >{value}</Button>
            )
        });
        // find numbers in left and right half of array
        const nums2Left = [];
        for (let i = 0; i < 5; i++) {
            nums2Left.push(this.state.nums[i]);
        }
        const nums2Right = [];
        for (let i = 5; i < 10; i++) {
            nums2Right.push(this.state.nums[i]);
        }
        // create arrays for left and right half of array
        const arrayTwoLeft = nums2Left.map((value) => {
            return (
                <Button variant="outline-info">{value}</Button>
            )
        });
        const arrayTwoRight = nums2Right.map((value) => {
            return (
                <Button variant="outline-info">{value}</Button>
            )
        });
        // visualize array cut in half
        const arrayTwo = (
            <div>
                {arrayTwoLeft} {arrayTwoRight}
            </div>
        )
        // find numbers in left and right halves of halved arrays
        let nums3Left1 = [];
        let nums3Left2 = [];
        for (let i = 0; i < 3; i++) {
            nums3Left1.push(nums2Left[i]);
        }
        for (let i = 3; i < 5; i++) {
            nums3Left2.push(nums2Left[i]);
        }
        let nums3Right1 = [];
        let nums3Right2 = [];
        for (let i = 0; i < 3; i++) {
            nums3Right1.push(nums2Right[i]);
        }
        for (let i = 3; i < 5; i++) {
            nums3Right2.push(nums2Right[i]);
        }
        // create arrays for2nd splitting of arrays
        const arrayThreeLeft1 = nums3Left1.map((value) => {
            return (
                <Button variant="outline-info">{value}</Button>
            )
        });
        const arrayThreeLeft2 = nums3Left2.map((value) => {
            return (
                <Button variant="outline-info">{value}</Button>
            )
        });
        const arrayThreeRight1 = nums3Right1.map((value) => {
            return (
                <Button variant="outline-info">{value}</Button>
            )
        });
        const arrayThreeRight2 = nums3Right2.map((value) => {
            return (
                <Button variant="outline-info">{value}</Button>
            )
        });
        const arrayThree = (
            <div>
                {arrayThreeLeft1} {arrayThreeLeft2} {arrayThreeRight1} {arrayThreeRight2}
            </div>
        )
        // create arrays for 3rd splitting of arrays
        const arrayFour1 = nums3Left1.slice(0, 2).map((value) => {
            return (
                <Button variant="outline-info">{value}</Button>
            )
        });
        const arrayFour2 = nums3Right1.slice(0, 2).map((value) => {
            return (
                <Button variant="outline-info">{value}</Button>
            )
        });
        // TODO: following 2 elements are bad practice (too long) => fix
        const arrayFour = (
            <div>
                {arrayFour1} <Button variant="outline-info">{nums3Left1[2]}</Button> <Button variant="outline-info">{nums3Left2[0]}</Button> <Button variant="outline-info">{nums3Left2[1]}</Button> {arrayFour2} <Button variant="outline-info">{nums3Right1[2]}</Button> <Button variant="outline-info">{nums3Right2[0]}</Button> <Button variant="outline-info">{nums3Right2[1]}</Button>
            </div>
        )
        const arrayFive = (
            <div>
                <Button variant="outline-info">{nums2Left[0]}</Button> <Button variant="outline-info">{nums2Left[1]}</Button> <Button variant="outline-info">{nums2Left[2]}</Button> <Button variant="outline-info">{nums2Left[3]}</Button> <Button variant="outline-info">{nums2Left[4]}</Button> <Button variant="outline-info">{nums2Right[0]}</Button> <Button variant="outline-info">{nums2Right[1]}</Button> <Button variant="outline-info">{nums2Right[2]}</Button> <Button variant="outline-info">{nums2Right[3]}</Button> <Button variant="outline-info">{nums2Right[4]}</Button>
            </div>
        )
        // button to show next step
        const nextButton = (
            <Button 
                variant="info"
                style={{
                    marginTop: "2%"
                }}
                onClick={
                    () => {
                        // animate next move using this.state.counter
                        if (this.state.counter===0) {
                            this.setState({
                                arrayTwo: arrayTwo,
                                counter: 1,
                                message: 'Recursively split array(s) in half until size=1',
                            })
                        } else if (this.state.counter===1) {
                            this.setState({
                                arrayThree: arrayThree,
                                counter: 2,
                            })
                        } else if (this.state.counter===2) {
                            this.setState({
                                arrayFour: arrayFour,
                                counter: 3,
                            })
                        } else if (this.state.counter===3) {
                            this.setState({
                                arrayFive: arrayFive,
                                counter: 4,
                            })
                        }
                    }
                }
            >
                Next
            </Button>
        );

        return (
            <div style={{marginLeft: "30%", marginTop: "2%"}}>
                <h1>Level One</h1>
                <h3>{this.state.message}</h3>
                <p>{arrayOne}</p>
                <br />
                {this.state.arrayTwo}
                <br />
                {this.state.arrayThree}
                <br />
                {this.state.arrayFour}
                <br />
                {this.state.arrayFive}
                <br />
                {nextButton}
            </div>
        )
    }
}