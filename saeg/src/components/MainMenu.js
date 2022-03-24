import React, { Component } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, database } from '../firebase/firebase';
import { ref, get, child, getDatabase } from 'firebase/database';
class MainMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            adminID: '',
            adminPassword: '',
            playerID: '',
            playerPassword: '',
            errorMsg: ''
        }
    }

    signinUser = () => {
        signInWithEmailAndPassword(auth, this.state.playerID + "@null.null", this.state.playerPassword)
        .then((userCredential) => {
            const dbRef = ref(getDatabase());
            get(child(dbRef, `users/${userCredential.user.uid}`)).then((snapshot) => {
                if (snapshot.exists()) {
                    if (snapshot.val().isAdmin) {
                        this.setState({ errorMsg: 'Error: Invalid account type' })
                    } else {
                        this.props.navigate('/levels')
                    }
                }
            }).catch((error) => {
                this.setState({errorMsg: error.message})
            });
        })
        .catch((error) => {
            this.setState({errorMsg: error.message})
        });
    }

    signinAdmin = () => {
        signInWithEmailAndPassword(auth, this.state.adminID + "@null.null", this.state.adminPassword)
        .then((userCredential) => {
            const dbRef = ref(getDatabase());
            get(child(dbRef, `users/${userCredential.user.uid}`)).then((snapshot) => {
                if (snapshot.exists()) {
                    if (!snapshot.val().isAdmin) {
                        this.setState({ errorMsg: 'Error: Invalid account type' })
                    } else {
                        this.props.navigate('/levels') //REPLACE THIS WITH ADMIN PAGE LATER
                    }
                }
            }).catch((error) => {
                this.setState({errorMsg: error.message})
            });
        })
        .catch((error) => {
            this.setState({errorMsg: error.message})
        });
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
                        onClick={this.signinAdmin}
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
                                    playerPassword: event.target.value,
                                })
                            }
                        }
                        />
                    </InputGroup>
                    <Button variant="outline-secondary" id="button-addon1"
                        onClick={this.signinUser}
                    >
                        Continue as Player
                    </Button>
                </label>
            </div>
        )
        return (
            <div style={{marginLeft: "20%", marginTop: "2%"}}>
                <h1>Sorting Algorithm Game</h1>
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
                {this.state.errorMsg}
            </div>
        )
    }
}

export default function WithNav(props) {
    let nav = useNavigate();
    return <MainMenu {...props} navigate={nav} />
}