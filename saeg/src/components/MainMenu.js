import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, InputGroup, FormControl } from "react-bootstrap";

export default class MainMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            adminID: '',
            adminPassword: '',
            playerID: '',
            playerPassword: '',
        }
    }
    render() {
        const signInAdmin = (
            <div style={{marginTop: "2%"}}>
                <label>
                    <InputGroup className="mb-3" style={{width: "100%"}}>
                        <FormControl
                        placeholder="Admin ID"
                        aria-label="Admin ID"
                        aria-describedby="basic-addon2"
                        onChange={
                            (event) => {
                                this.setState({
                                    adminID: event.target.value,
                                })
                            }
                        }
                        />
                        <FormControl
                        placeholder="Admin Password"
                        aria-label="Admin Password"
                        aria-describedby="basic-addon2"
                        onChange={
                            (event) => {
                                this.setState({
                                    adminPassword: event.target.value,
                                })
                            }
                        }
                        />
                    </InputGroup>
                    <Button variant="outline-secondary" id="button-addon1"
                        onClick={
                            () => {
                                // log the admin in
                                // set up route
                            }
                        }
                    >
                        Continue as Admin
                    </Button>
                </label>
            </div>
        )
        const signInPlayer = (
            <div style={{marginTop: "2%"}}>
                <label>
                    <InputGroup className="mb-3" style={{width: "100%"}}>
                        <FormControl
                        placeholder="Player ID"
                        aria-label="Player ID"
                        aria-describedby="basic-addon2"
                        onChange={
                            (event) => {
                                this.setState({
                                    playerID: event.target.value,
                                })
                            }
                        }
                        />
                        <FormControl
                        placeholder="Player Password"
                        aria-label="Player Password"
                        aria-describedby="basic-addon2"
                        onChange={
                            (event) => {
                                this.setState({
                                    playerID: event.target.value,
                                })
                            }
                        }
                        />
                    </InputGroup>
                    <Button variant="outline-secondary" id="button-addon1"
                        onClick={
                            () => {
                                // log the user in
                                // set up route
                            }
                        }
                    >
                        Continue as Player
                    </Button>
                </label>
            </div>
        )
        return (
            <div style={{marginLeft: "30%", marginTop: "2%"}}>
                <h1>Sorting Algorithm Game</h1>
                <h4>ONLY FIREFOX COMPATIBLE</h4>
                <Link to="/createAccount">
                    <Button variant="secondary">Create Account</Button>
                </Link>
                <br />
                <Link to ="/levels">
                    <Button style={{marginTop: "2%"}} variant="primary">Levels (Play As Guest)</Button>
                </Link>
                <br />
                {signInAdmin}
                {signInPlayer}

            </div>
        )
    }
}