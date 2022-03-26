import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from "react-bootstrap";

export default class LevelSelect extends Component {

    render() {
        return (
            <div style={{marginLeft: "20%", marginTop: "2%"}}>
                <h1>Level Select</h1>
                <p1>Select a level using the buttons below. On each level, follow the given instructions 
                    to complete the level. 
                    <br></br>
                    A timer is displayed on each level, after 5 minutes of inactivity the level 
                    will time out and you will be prompted to restart the level.
                    <br></br>
                    Each level contains a mistake counter. If you make 3 mistakes, 
                    it will be "game over" and you will be prompted to restart the level.
                </p1>
                <ButtonGroup style={{marginTop: "2%"}}>
                <Link to="/level_one"><Button variant="primary">Level One</Button></Link>
                <Link to="/level_two"><Button variant="primary">Level Two</Button></Link>
                <Link to="/level_three"><Button variant="primary">Level Three</Button></Link>
                <Link to="/level_four"><Button variant="primary">Level Four</Button></Link>
                <Link to="/level_five"><Button variant="primary">Level Five</Button></Link>
                <Button variant="primary">Custom Level</Button>
                </ButtonGroup>
                <br />
                <Link to="/">
                    <Button style={{marginTop: "2%"}} variant="secondary">Return to Home</Button>
                </Link>
                <Link to="/SelectAlgorithm">
                    <Button style={{marginTop: "2%"}} variant="secondary">Change Sorting Algorithm</Button>
                </Link>
            </div>
        )
    }
}