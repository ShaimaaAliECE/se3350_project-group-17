import React, { Component } from 'react';
import { mergeSort } from '../../functions/MergeSort';

export default class Level extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            answers: [], //stores the final answers of the grid
            currentPos: [1, 0, 0], //row# , col# , innerrow#
            inputs: [], //stores the currently displayed results
            inputted: [], //stores which tiles have been clicked
            completed: false
        }
    }

    componentDidMount() {
        let arrayToFill = [];
        let answersStorage = []; //first half of the algorithm (dissecting array into pieces)
        let answersStorage2 = []; //second half of algorithm (putting pieces back together sorted)
        let newInt = 0;
        for (let i = 0; i < this.props.len; i++) { //creating the randomized array
            newInt = Math.floor(Math.random() * (this.props.max - this.props.min + 1) + parseInt(this.props.min));
            arrayToFill.push(newInt);
        }
        let sorted = mergeSort(arrayToFill, answersStorage, answersStorage2);

        //sort first half in descending order (by length)
        answersStorage.sort((a, b) => {
            return b.length - a.length;
        })
        //sort second half in ascending order (by length)
        answersStorage2.sort((a, b) => {
            return a.length - b.length;
        })

        //restructure each half so that arrays of equal length are put together on the same row
        let refactorArray = [];
        refactorArray.push([[...answersStorage[0]]]);
        let currentRow = [];
        let currentLength = -1;
        for (let i = 0; i < answersStorage.length; i++) {
            if (answersStorage[i].length == currentLength) {
                currentRow.push([...answersStorage[i]]);
            } else {
                if (currentLength > 0) { //the first iteration will have currentLength=-1, dont want to push empty array to index1
                    if (currentRow.length > 0) {
                        refactorArray.push([...currentRow]);
                    }
                    currentRow = [];
                    currentRow.push([...answersStorage[i]]);
                }
                currentLength = answersStorage[i].length;
            }
            if (i == answersStorage.length - 1) { //on the last iteration, push the current row
                refactorArray.push([...currentRow]);
            }
        }
        answersStorage = [...refactorArray];

        currentRow = [];
        currentLength = -1;
        refactorArray = [];
        for (let i = 0; i < answersStorage2.length; i++) {
            if (answersStorage2[i].length == currentLength) {
                currentRow.push([...answersStorage2[i]]);
            } else {
                if (currentRow.length > 0) {
                    refactorArray.push([...currentRow]);
                }
                currentRow = [];
                currentRow.push([...answersStorage2[i]]);
                
                currentLength = answersStorage2[i].length;
            }
            if (i == answersStorage2.length - 1) { //on the last iteration, push the current row
                refactorArray.push([...currentRow]);
            }
        }
        answersStorage2 = [...refactorArray];

        for (let i = 0; i < answersStorage2.length; i++) {
            answersStorage.push([...answersStorage2[i]]);
        }
        answersStorage.push([[...sorted]]); //push the final sorted array

        //creating the grid inputs array
        let emptyArray = Array(answersStorage.length).fill(null);
        let tempArray = []; //temporary array to keep track of 
        let tempInnerArray = [];
        emptyArray[0] = [ ...answersStorage[0]]; //first array will be filled automatically
        for (let i = 1; i < answersStorage.length; i++) {
            for (let j = 0; j < answersStorage[i].length; j++) {
                for (let k = 0; k < answersStorage[i][j].length; k++) {
                    tempInnerArray.push(null);
                }
                tempArray.push([...tempInnerArray]);
                tempInnerArray = [];
            }
            emptyArray[i] = [...tempArray];
            tempArray = [];
        }
 
        this.setState({ answers: [ ...answersStorage], loading: false, inputs: [ ...emptyArray] }, () => {

        });
    };

    onTileClick = (indexes, val) => { //runs when any tile is clicked
        //console.log("input: " + indexes + " val: " + val );
        let key = indexes[0] + " " + indexes[1] + " " + indexes[2]; //used to easily check inputted array, indexes could be used but JS built-in includes does not work on 2D arrays
        if (this.state.inputs[indexes[0]][indexes[1]][indexes[2]]) { //user shouldn't be able to use the 1st row
            if (!this.state.inputted.includes(key)) { //if the tile hasn't been clicked
                this.setState((prevState) => {
                    let temp = [...prevState.inputs];
                    temp[indexes[0]][indexes[1]][indexes[2]] = val;
                    return {
                        ...prevState,
                        inputs: [...temp]
                    }
                }, () => {
                    if (val === this.state.answers[this.state.currentPos[0]][this.state.currentPos[1]][this.state.currentPos[2]]) { //correct input
                        this.setState((prevState) => {
                            let winStatus = false;
                            let temp2 = [...prevState.inputs];
                            temp2[this.state.currentPos[0]][this.state.currentPos[1]][this.state.currentPos[2]] = val;
                            let tempPos = [];
                            tempPos = [...this.state.currentPos]

                            //move currentPos
                            if (this.state.answers[this.state.currentPos[0]][this.state.currentPos[1]][this.state.currentPos[2]+1]) { //check if inner row has another tile
                                tempPos[2] += 1;
                            } else { //if on last tile of inner row, move to next inner row
                                tempPos[2] = 0;
                                if (this.state.answers[this.state.currentPos[0]][this.state.currentPos[1]+1]) { //check if current row has a next inner row
                                    tempPos[1] += 1;
                                } else { //no next inner row, check for next row
                                    if (this.state.answers[this.state.currentPos[0]+1]) {
                                        tempPos[1] = 0;
                                        tempPos[0] += 1;
                                    } else { //game over - user has won
                                        winStatus = true;
                                    }
                                }
                            }
                            return {
                                ...prevState,
                                inputs: [...temp2],
                                currentPos: [...tempPos],
                                inputted: [...prevState.inputted, key],
                                completed: winStatus
                            };
                        }, () => { //callback func 
                            
                        });
                    } else { //incorrect input (play wrong function)
                        
                    }
                });
            } else { //if the tile was already clicked
                
            }
        } else { //if either the first row or a future cell is clicked (idt this has any use)
            
        }
    }

    render() {
        const tileStyle = {
            display:"inline-block",
            border:"solid", 
            width: "50px", 
            height: "50px",
            marginLeft: "5px",
            marginRight: "5px",
            marginTop: "10px",
            marginBottom: "10px",
            fontSize: "28px"
        };

        return (
            <div>
                <center>
                    {!this.state.loading && 
                        <div>
                            <br />
                            <br />
                            <br />
                            {this.state.answers.map((row, rowIndex) => {       
                                return (
                                    <div key={rowIndex}>
                                        {row.map((tile, tileIndex) => {
                                            return (
                                                <div key={rowIndex + " " + tileIndex} style={{display:"inline-block", marginLeft: "20px", marginRight: "20px"}}>
                                                    {tile.map((innerTile, innerTileIndex) => {
                                                        return (
                                                            <div key={rowIndex + " " + tileIndex + " " + innerTileIndex} 
                                                                style={tileStyle}
                                                                onClick={() => {this.onTileClick([rowIndex, tileIndex, innerTileIndex], innerTile)}}
                                                            >
                                                                {this.state.inputs[rowIndex][tileIndex][innerTileIndex]}
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            );
                                        })}
                                        
                                    </div>
                                )
                            })}
                        </div>
                    }
                </center>
            </div>
        )
    }
}