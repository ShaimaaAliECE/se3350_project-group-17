import React, { Component } from 'react';
import {     
            ToggleButton, 
            ToggleButtonGroup, 
            Button, 
            InputGroup, 
            FormControl 
        } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class CreateAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdmin: false,
            username: null,
            password: null,
            retypePassword: null,
        }
    }
    
    render() {
        const radioButtons = (
            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                <ToggleButton id="tbg-radio-1" value={1} variant='outline-success'
                    onClick={
                        () => {
                            if (this.state.isAdmin===true) {
                                this.setState({
                                    isAdmin: false,
                                });
                            }
                            // console.log(this.state.isAdmin)
                        }
                    }
                >
                Player
                </ToggleButton>
                <ToggleButton id="tbg-radio-2" value={2} variant='outline-danger'
                /*
                    there's a bug here that makes you double click the admin button 
                    to make isAdmin=true
                */
                    onClick={
                        () => {
                            if (this.state.isAdmin===false) {
                                this.setState({
                                    isAdmin: true,
                                });
                            }
                            // console.log(this.state.isAdmin)
                        }
                    }
                >
                Admin
                </ToggleButton>
            </ToggleButtonGroup>
        )

        const accountCreation = (
            <div style={{marginTop: "2%"}}>
                <label>
                    <InputGroup className="mb-3" style={{width: "100%"}}>
                        <FormControl
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon2"
                        onChange={
                            (event) => {
                                this.setState({
                                    username: event.target.value,
                                })
                            }
                        }
                        />
                        <FormControl
                        placeholder="Password"
                        aria-label="Password"
                        aria-describedby="basic-addon2"
                        onChange={
                            (event) => {
                                this.setState({
                                    password: event.target.value,
                                })
                            }
                        }
                        />
                        <FormControl
                        placeholder="Retype Password"
                        aria-label="Retype Password"
                        aria-describedby="basic-addon2"
                        onChange={
                            (event) => {
                                this.setState({
                                    retypePassword: event.target.value,
                                })
                            }
                        }
                        />
                    </InputGroup>
                    <Button variant="outline-secondary" id="button-addon1"
                        onClick={
                            () => {
                                // create the account if passwords match and valid user + pass
                                // set up route
                            }
                        }
                    >
                        Submit
                    </Button>
                </label>
            </div>
        )

        const returnButton = (
            <Link to="/">
                <Button style={{marginTop: "10%", marginLeft: "20%"}}>
                    Return to Login
                </Button>
            </Link>
        )
        return (
            <div>
                <h1 style={{marginLeft: "20%", marginTop: "2%"}}>
                    Create Account
                </h1>
                <h4 style={{marginLeft: "20%"}}>ONLY FIREFOX COMPATIBLE</h4>
                <div style={{marginLeft: "20%", marginTop: "2%"}}>
                    {radioButtons}
                    <br />
                    {accountCreation}
                </div>
                {returnButton}
            </div>
        )
    }
}