import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from "react-bootstrap";

export default class GameOver extends Component {

    render() {
        return (
            <div style={{marginLeft: "20%", marginTop: "2%"}}>
                <h1>Game Over</h1>
                <h4>you can try again</h4>
                <ButtonGroup style={{marginTop: "2%"}}>
                <Link to="/level_one"><Button variant="primary">Level One</Button></Link>
                <Link to="/level_two"><Button variant="primary">Level Two</Button></Link>
                <Link to="/level_three"><Button variant="primary">Level Three</Button></Link>
                <Link to="/level_four"><Button variant="primary">Level Four</Button></Link>
                <Button variant="primary">Level Five</Button>
                <Button variant="primary">Custom Level</Button>
                </ButtonGroup>
                <br />
                <Link to="/">
                    <Button style={{marginTop: "2%"}} variant="secondary">Return to Home</Button>
                </Link>
            </div>
        )
    }
}