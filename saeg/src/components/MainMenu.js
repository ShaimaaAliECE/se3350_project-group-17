import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MainMenu extends Component {

    render() {
        return (
            <div>
                <h1>Main Menu</h1>
                <Link to ="/levels"><button>Levels (player)</button></Link>
            </div>
        )
    }
}