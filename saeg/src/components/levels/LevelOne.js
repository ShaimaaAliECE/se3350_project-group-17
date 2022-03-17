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
            arraySix: null,
            arraySeven: null,
            arrayEight: null,
            arrayNine: null,
            message: 'Click Next to see the first step to sort this array using the MergeSort Algorithm.',
            nextButtonMsg: 'Next',
            previousButtonMsg: 'Return To Level Select',
            nums: [],
        }
        for (let i=0; i<10; i++) {
            // add 10 random integers between 1 and 20 to nums array
            this.state.nums.push(Math.floor(Math.random() * 21));
        }
    }
    render() {
        this.RedirectAfterTimetout();
        const arrayOne = this.state.nums.map((value) => {
            return (
                <Button variant="outline-warning" >{value}</Button>
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
        // TODO: following elements are bad practice (too long) => fix
        const arrayFour = (
            <div>
                {arrayFour1} <Button variant="info">{nums3Left1[2]}</Button> <Button variant="info">{nums3Left2[0]}</Button> <Button variant="info">{nums3Left2[1]}</Button> {arrayFour2} <Button variant="info">{nums3Right1[2]}</Button> <Button variant="info">{nums3Right2[0]}</Button> <Button variant="info">{nums3Right2[1]}</Button>
            </div>
        );
        const arrayFive = (
            <div>
                <Button variant="info">{nums2Left[0]}</Button> <Button variant="info">{nums2Left[1]}</Button> <span style={{marginLeft: "13.5%"}}><Button variant="info">{nums2Right[0]}</Button> <Button variant="info">{nums2Right[1]}</Button></span>
            </div>
        );
        let nums6Left = [nums2Left[0], nums2Left[1]].sort(function(a, b) {
            return a - b;
        });
        let nums6Right = [nums2Right[0], nums2Right[1]].sort(function(a, b) {
            return a - b;
        });
        const arraySixLeft = nums6Left.map((value) => {
            return (
                <Button variant="outline-info">{value}</Button>
            )
        });
        const arraySixRight = nums6Right.map((value) => {
            return (
                <Button variant="outline-info">{value}</Button>
            )
        });
        const arraySix = (
            <div>
                {arraySixLeft}<span style={{marginLeft: "14.25%"}}>{arraySixRight}</span>
            </div>
        );
        let nums7Left1 = [...nums3Left1].sort(function(a, b) {
            return a - b;
        });
        let nums7Left2 = [...nums3Left2].sort(function(a, b) {
            return a - b;
        });
        let nums7Right1 = [...nums3Right1].sort(function(a, b) {
            return a - b;
        });
        let nums7Right2 = [...nums3Right2].sort(function(a, b) {
            return a - b;
        });
        const array7Left1 = nums7Left1.map((value) => {
            return (
                <Button variant="outline-info">{value}</Button>
            )
        });
        const array7Left2 = nums7Left2.map((value) => {
            return (
                <Button variant="outline-info">{value}</Button>
            )
        });
        const array7Right1 = nums7Right1.map((value) => {
            return (
                <Button variant="outline-info">{value}</Button>
            )
        });
        const array7Right2 = nums7Right2.map((value) => {
            return (
                <Button variant="outline-info">{value}</Button>
            )
        });
        const arraySeven = (
            <div>
                {array7Left1} {array7Left2} {array7Right1} {array7Right2}
            </div>
        );
        let nums8Left = [...nums2Left].sort(function(a, b) {
            return a - b;
        });
        let nums8Right = [...nums2Right].sort(function(a, b) {
            return a - b;
        });
        const array8Left = nums8Left.map((value) => {
            return (
                <Button variant="outline-info">{value}</Button>
            )
        });
        const array8Right = nums8Right.map((value) => {
            return (
                <Button variant="outline-info">{value}</Button>
            )
        });
        const arrayEight = (
            <div>
                {array8Left} {array8Right}
            </div>
        );
        let nums9 = [...this.state.nums].sort(function(a, b) {
            return a - b;
        });
        const arrayNine = nums9.map((value) => {
            return (
                <Button variant="outline-success">{value}</Button>
            )
        });
        // button to show next step
        const nextButton = (
            <Button 
                variant="secondary"
                style={{
                    marginTop: "2%",
                    marginBottom: "2%",
                }}
                onClick={
                    () => {
                        // animate next move using this.state.counter
                        if (this.state.counter===0) {
                            this.setState({
                                arrayTwo: arrayTwo,
                                counter: 1,
                                message: 'First, split the array as evenly as possible into two subarrays. This results into two subarray of 5.',
                                previousButtonMsg: 'Previous'
                            });
                        } else if (this.state.counter===1) {
                            this.setState({
                                arrayThree: arrayThree,
                                counter: 2,
                                message: 'Now, split both the subarrays as evenly as possible again. Each subarray of 5 is split into a subarray of 3 and 2.',
                            });
                        } else if (this.state.counter===2) {
                            this.setState({
                                arrayFour: arrayFour,
                                counter: 3,
                                message: 'Continue to split the subarrays as evenly as possible. Arrays of length 1 (which are shaded in) cannot be split and are ready to merge.',
                            });
                        } else if (this.state.counter===3) {
                            this.setState({
                                arrayFive: arrayFive,
                                counter: 4,
                                message: 'Continue to split the subarrays as evenly as possible. Arrays of length 1 (which are shaded in) cannot be split and are ready to merge. All arrays should now only have a length of 1.',
                            });
                        } else if (this.state.counter===4) {
                            this.setState({
                                arraySix: arraySix,
                                counter: 5,
                                message: 'Now we rebuild the arrays. Select the minimum of the values from the last split subarrays and add it to the beginning of the new sorted subarray. We now have 2 sorted subarrays.',
                            });
                        } else if (this.state.counter===5) {
                            this.setState({
                                arraySeven: arraySeven,
                                counter: 6,
                                message: 'We now have four sorted subarrays. Select the minimum of the values from the front of the remaining subarray and add it to the correct spot in the new sorted subarray. When one list becomes empty copy all values of the remaining array into the sorted array.',
                            });
                        } else if (this.state.counter===6) {
                            this.setState({
                                arrayEight: arrayEight,
                                counter: 7,
                                message: 'We now have two sorted subarrays of length 5. Select the minimum of the values from the front of the subarrays and add it to the new sorted array (this will be the final sorted array). When one array becomes empty copy all values of the remaining array into the sorted array.',
                            });
                        } else if (this.state.counter===7) {
                            this.setState({
                                arrayNine: arrayNine,
                                counter: 8,
                                message: 'Sorting is complete!',
                                nextButtonMsg: 'Return to Level Select'
                            });
                        } else {
                            window.location.href = window.location.href.split("level_one")[0] + "levels";
                        }
                    }
                }
            >
                {this.state.nextButtonMsg}
            </Button>
        );

        // button to show previous step
        const previousButton = (
            <Button 
                variant="secondary"
                style={{
                    marginTop: "2%",
                    marginBottom: "2%",
                }}
                onClick={
                    () => {
                        // animate previous move using this.state.counter
                        if (this.state.counter===8) {
                            this.setState({
                                arrayNine: null,
                                counter: 7,
                                message: 'Select the minimum of the values from the front of the subarray and add it to the new sorted array. When one list becomes empty copy all values of the remaining array into the sorted array.',
                                nextButtonMsg: 'Next',
                            });
                        } else if (this.state.counter===7) {
                            this.setState({
                                arrayEight: null,
                                counter: 6,
                                message: 'Select the minimum of the values from the front of the subarray and add it to the new sorted subarray. When one list becomes empty copy all values of the remaining array into the sorted array.',
                            });
                        } else if (this.state.counter===6) {
                            this.setState({
                                arraySeven: null,
                                counter: 5,
                                message: 'Now we rebuild the arrays. Select the minimum of the values from the last split subarrays and add it to the beginning of the new sorted subarray.',
                            });
                        } else if (this.state.counter===5) {
                            this.setState({
                                arraySix: null,
                                counter: 4,
                                message: 'Continue to split the subarrays as evenly as possible. Arrays of length 1 cannot be split and are ready to merge.',
                            });
                        } else if (this.state.counter===4) {
                            this.setState({
                                arrayFive: null,
                                counter: 3,
                                message: 'Continue to split the subarrays as evenly as possible. Arrays of length 1 cannot be split and are ready to merge.',
                            });
                        } else if (this.state.counter===3) {
                            this.setState({
                                arrayFour: null,
                                counter: 2,
                                message: 'Split both the subarrays as evenly as possible again.',
                            });
                        } else if (this.state.counter===2) {
                            this.setState({
                                arrayThree: null,
                                counter: 1,
                                message: 'First, split the array as evenly as possible.',
                            });
                        } else if (this.state.counter===1) {
                            this.setState({
                                arrayTwo: null,
                                counter: 0,
                                message: 'Click Next to see first step to sort this array.',
                                previousButtonMsg: 'Return to Level Select'
                            });
                        }  else {
                            window.location.href = window.location.href.split("level_one")[0] + "levels";
                        }
                    }
                }
            >
                {this.state.previousButtonMsg}
            </Button>
        );

        return (
            <div style={{marginLeft: "20%", marginRight: "20%", marginTop: "2%", height: "80%"}}>
                <h1 >Level One</h1>
                <h2>MergeSort Algorithm</h2>
                <h4>ONLY FIREFOX COMPATIBLE</h4>
                <p1>Instructions: </p1>
                <p2>{this.state.message}</p2> 
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
                {this.state.arraySix}
                <br />
                {this.state.arraySeven}
                <br />
                {this.state.arrayEight}
                <br />
                <p>{this.state.arrayNine}</p>
                <br />
                {previousButton} {nextButton}
            </div>
        )
    } 
  //  setTimeout(function(){ window.location = "<URL HERE>";}, 30000);

   

    RedirectAfterTimetout() {

        const idleDurationSecs = 60*5;    // X number of seconds --- 5 minutes
        const redirectUrl = window.location.href.split("level")[0];  // Redirect idle users to this URL
        let idleTimeout; // variable to hold the timeout, do not modify
    
        const resetIdleTimeout = function() {
    
            // Clears the existing timeout
            if(idleTimeout) clearTimeout(idleTimeout);
    
            // Set a new idle timeout to load the redirectUrl after idleDurationSecs
            idleTimeout = setTimeout(() => window.location.href = redirectUrl, idleDurationSecs * 1000);
        };
        // Init on page load
        resetIdleTimeout();
    
        // Reset the idle timeout on any of the events listed below
        ['click', 'mousemove'].forEach(evt => 
            document.addEventListener(evt, resetIdleTimeout, false)
        );  
    } 
     
  
}

