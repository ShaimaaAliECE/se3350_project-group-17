import React, { Component } from 'react';
import { mergeSort } from '../../functions/MergeSort';

export default class Level extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            answers: [], //stores the final answers of the grid
            currentPos: [1, 0], //row# , col#
            inputs: [], //stores the currently displayed results
            inputted: [] //stores which tiles have been clicked
        }
    }

    componentDidMount() {
        let arrayToFill = [];
        let answersStorage = [];
        let newInt = 0;
        for (let i = 0; i < this.props.len; i++) { //creating the randomized array
            newInt = Math.floor(Math.random() * (this.props.max - this.props.min + 1) + parseInt(this.props.min));
            arrayToFill.push(newInt);
        }
        mergeSort(arrayToFill, answersStorage);

        //creating the grid inputs array
        let emptyArray = Array(answersStorage.length).fill(null);
        let tempArray = [];
        emptyArray[0] = [ ...answersStorage[0]]; //first array will be filled automatically
        for (let i = 1; i < answersStorage.length; i++) {
            for (let j = 0; j < answersStorage[i].length; j++) {
                //console.log(i + "-" + j + " ... " + answersStorage[i][j]);
                tempArray.push(null);
            }
            emptyArray[i] = [...tempArray];
            tempArray = [];
        }
        //console.log([...emptyArray]);
        
        this.setState({ answers: [ ...answersStorage], loading: false, inputs: [ ...emptyArray] }, () => {
            
        });
    };

    onTileClick = (indexes, val) => { //runs when any tile is clicked
        console.log("input: " + indexes);
        let key = indexes[0] + " " + indexes[1]; //used to easily check inputted array, indexes could be used but JS built-in includes does not work on 2D arrays
        if (this.state.inputs[indexes[0]][indexes[1]]) { //user shouldn't be able to use the 1st row
            if (!this.state.inputted.includes(key)) { //if the tile hasn't been clicked
                this.setState((prevState) => {
                    let temp = [...prevState.inputs];
                    temp[indexes[0]][indexes[1]] = val;
                    return {
                        ...prevState,
                        inputted: [...prevState.inputted, key],
                        inputs: [...temp]
                    }
                }, () => {
                    //console.log("inputs below")
                    //console.log(this.state.inputs)
                    if (val === this.state.answers[this.state.currentPos[0]][this.state.currentPos[1]]) { //correct input
                        console.log("correct")
                    } else { //incorrect input
                        console.log("incorrect");
                        console.log("guess value: " + val)
                        console.log("answer: " + this.state.answers[this.state.currentPos[0]][this.state.currentPos[1]]);
                    }
                });
            } else { //if the tile was already clicked
                console.log("already clicked")
            }
        } else { //if either the first row or a future cell is clicked (idt this has any use)
            console.log("first row or unclickable");
        }
    }

    render() {
        const tileStyle = {
            display:"inline-block",
            border:"solid", 
            width: "30px", 
            height: "30px",
            marginLeft: "5px",
            marginRight: "5px",
            marginTop: "10px",
            marginBottom: "10px"
        };

        return (
            <div>
                {!this.state.loading && 
                    <div>
                        ------------

                        <br />
                        {this.state.answers.map((row, rowIndex) => {
                            
                             return (
                                 <div key={rowIndex}>
                                    {row.map((tile, tileIndex) => {
                                        return (
                                            <div key={rowIndex + " " + tileIndex} style={tileStyle} onClick={() => {this.onTileClick([rowIndex, tileIndex], tile)}}> 
                                                <center>
                                                    {this.state.inputs[rowIndex][tileIndex]} 
                                                </center>
                                            </div>
                                            );
                                    })}
                                    
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        )
    }
}