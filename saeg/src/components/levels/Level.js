import React, { Component } from 'react';
import { merge, mergeSort } from '../../functions/MergeSort';

export default class Level extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            array: []
        }
    }

    componentDidMount() {
        console.log("mounted");
        let arrayToFill = [];
        let newInt = 0;
        for (let i = 0; i < this.props.len; i++) {
            newInt = Math.floor(Math.random() * (this.props.max - this.props.min + 1) + parseInt(this.props.min));
            arrayToFill.push(newInt);
        }
        this.setState({ array: [... arrayToFill], loading: false }, () => {
            
        });
    }

    render() {
        return (
            <div>
                {!this.state.loading && 
                    <div>
                        {this.state.array}
                    </div>
                }
            </div>
        )
    }
}