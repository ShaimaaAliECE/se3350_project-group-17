import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup, ToggleButton, ToggleButtonGroup } from "react-bootstrap";

//Select Sorting Algorithm Page
export default class ChangeSortingAlgorithm extends Component {

    render() {
        return (
            //Header, description, radio buttons, and "Return to Level Select Button" for Select Sorting Algorithm page
            <div style={{marginLeft: "20%", marginTop: "2%"}}>
                <h1>Select Sorting Algorithm</h1>
                <p1>Select the type of sorting algorithm by using the radio buttons below.</p1>
                <br></br>
                <br></br>
                <p2>(This feature is currently not functional as we are not implementing other 
                    algorithms in this project. 
                    <br></br>
                    However, if we were to update the game with more 
                    sorting algorithms, this is where you would select the type of sorting algorithm)</p2>

            <ToggleButtonGroup type="radio" name="options" defaultValue={1} style={{marginTop: "2%"}}>
                <ToggleButton id="tbg-radio-1" value={1} variant='outline-success'>Merge Sort</ToggleButton>
                <ToggleButton id="tbg-radio-2" value={2} variant='outline-success'>Quick Sort</ToggleButton>
                <ToggleButton id="tbg-radio-3" value={3} variant='outline-success'>Bubble Sort</ToggleButton>
                <ToggleButton id="tbg-radio-4" value={4} variant='outline-success'>Insertion Sort</ToggleButton>
                <ToggleButton id="tbg-radio-5" value={5} variant='outline-success'>Selection Sort</ToggleButton>
            </ToggleButtonGroup>
                <br />
                <ButtonGroup style={{marginTop: "2%"}} >
                <Link to ="/levels"><Button variant="primary">Return to Level Select</Button></Link>
                </ButtonGroup>
            </div>
        )
    }
}