import React, { Component } from 'react';
import Level from './Level';
import { Link } from 'react-router-dom';
import {     
    ToggleButton, 
    ToggleButtonGroup, 
    Button, 
    InputGroup, 
    FormControl 
} from 'react-bootstrap';
export default class LevelCustom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            min: 0,
            max: 10,
            len: 5,
            levelGenerated: false
        }
    }

    createLevel = () => {
        this.setState({ levelGenerated: true });
    }

    render() {
        return (
            <div>
                <center>
                    <h1>Custom Level</h1>
                    {!this.state.levelGenerated &&  
                        <div>
                            <InputGroup className="mb-3" >
                                <FormControl placeholder="Min" aria-describedby="basic-addon2" onChange={(e) => {this.setState({min: e.target.value})}} />
                                <FormControl placeholder="Max" aria-describedby="basic-addon2" onChange={(e) => {this.setState({max: e.target.value})}} />
                                <FormControl placeholder="Length" aria-describedby="basic-addon2" onChange={(e) => {this.setState({len: e.target.value})}} />
                            </InputGroup>
                            <Button variant="outline-secondary" id="button-addon1" onClick={this.createLevel}> Submit </Button>
                        </div>
                    }
                    {this.state.levelGenerated && 
                        <Level min={this.state.min} max={this.state.max} len={this.state.len} />
                    }
                    <Button variant="primary" onClick={() => window.location.reload() } style={{marginRight: "20px", marginTop: "20px"}}>Restart Level</Button>
                    <Link to ="/levels"><Button variant="primary" style={{marginRight: "20px", marginTop: "20px"}}>Return to Level Select</Button></Link>
                </center>
            </div>
        )
    }
};