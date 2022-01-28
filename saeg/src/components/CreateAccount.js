import React, { Component } from 'react';
import {     
            ToggleButton, 
            ButtonGroup, 
            Button, 
            InputGroup, 
            FormControl 
        } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class CreateAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userType: '2',
            username: null,
            password: null,
            retypePassword: null,
        }
    }
    
    render() {
        let radios = [
            { name: 'Admin', value: '1' }, 
            { name: 'Player', value: '2' }
        ]
        const radioButtons = (
            <ButtonGroup className="mb-2">
                    {radios.map((radio, idx) => (
                        // TODO: FIX THE STATE FOR THE TOGGLEBUTTONS
                        <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                            name="radio"
                            value={radio.value}
                            checked={true}
                            onClick={
                                (event) => {
                                this.setState(
                                    {
                                        userType: event.target.value,
                                    }
                                );
                                // console.log(this.state.userType);
                            }
                            }
                        >
                            {radio.name}
                        </ToggleButton>
                    ))}
                </ButtonGroup>
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
                        Create Account
                    </Button>
                </label>
            </div>
        )

        const returnButton = (
            <Link to="/">
                <Button style={{marginTop: "10%", marginLeft: "30%"}}>
                    Return to Login
                </Button>
            </Link>
        )
        return (
            <div>
                <h1 style={{marginLeft: "30%", marginTop: "2%"}}>
                    Create Account
                </h1>
                <div style={{marginLeft: "30%", marginTop: "2%"}}>
                    {radioButtons}
                    {/* TODO: add form to create account (3 inputs + submit) */}
                    <br />
                    {accountCreation}
                </div>
                {returnButton}
            </div>
        )
    }
}