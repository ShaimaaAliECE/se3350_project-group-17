import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from "react-bootstrap";

export default class GameOver extends Component {

    render() {
        return (
            <div style={{marginLeft: "20%", marginTop: "2%"}}>
                <h1>Game Over</h1>
                <h5>Sorry, you made too many mistakes. You can retry this level or go back to any other level.</h5>
                <h4>Good Luck Next Time!</h4>
                
                <ButtonGroup style={{marginTop: "2%"}}>
                <Button variant="secondary" onClick={() => window.history.back() }>Retry Level</Button>
                <Button variant="secondary" >Change Sorting Algorithm</Button> 
                <Link to="/"> <Button  variant="secondary">Return to Home</Button></Link>
                <Button variant="secondary" onClick={() => window.close() }>Quit Game</Button> 
                </ButtonGroup>
                <br />
                <ButtonGroup style={{marginTop: "2%"}}>
                <Link to="/level_one"><Button variant="primary">Level One</Button></Link>
                <Link to="/level_two"><Button variant="primary">Level Two</Button></Link>
                <Link to="/level_three"><Button variant="primary">Level Three</Button></Link>
                <Link to="/level_four"><Button variant="primary">Level Four</Button></Link>
                <Link to="/level_five"><Button variant="primary">Level Five</Button></Link>
                <Button variant="primary">Custom Level</Button>
                </ButtonGroup>
            </div>
        )
    }
}