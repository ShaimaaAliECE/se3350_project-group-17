import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Draggable from 'react-draggable';
import { wrongFunction, correctFunction } from '../../functions/SoundFunctions';

export default class GenericLevel extends Component {
    // prop called numCount holding the number of buttons
    // prop called lowerBound holding the min value
    // prop called upperBound holding the max value
    // prop called msg, if true then display instructions
    // prop called title
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            message: '',
            // object to hold all the arrays that show up
            levels: [],
            answer: [],
            nums: [],
        };
        let range = this.props.upperBound - this.props.lowerBound;
        for (let i=0; i < this.props.numCount; i++) {
            this.state.nums.push(this.props.lowerBound + Math.floor(Math.random() * (range + 1)));
        }
        this.state = {
            answer: [...this.state.nums].sort((a, b) => a-b),
        }
    }

    

    render() {
        return (
            <div style={{
                marginLeft: "20%",
            }}>
                <h1>{this.props.title}</h1>
                <h2>MergeSort Algorithm</h2>
                <h4>Ensure NOT to double click buttons</h4>
                <h4>Perform each step left-to-right</h4>
                <h4>ONLY FIREFOX COMPATIBLE</h4>
                <h3>{this.state.message}</h3>
            </div>
        );
    }
}