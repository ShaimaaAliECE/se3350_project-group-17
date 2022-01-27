import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";

export default class MainMenu extends Component {

    render() {
        return (
            <div style={{marginLeft: "30%", marginTop: "2%"}}>
                <h1>Sorting Algorithm Game</h1>
                <br />
                <Button variant="secondary">Create Account</Button>
                <br />
                <Link to ="/levels">
                    <Button style={{marginTop: "2%"}} variant="primary">Levels (player)</Button>
                </Link>
            </div>
        )
    }
}