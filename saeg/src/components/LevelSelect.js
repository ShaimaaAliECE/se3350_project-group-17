import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LevelSelect extends Component {

    render() {
        return (
            <div>
                <h1>Level Select</h1>
                <Link to="/level_one"><button>Level One</button></Link>
                <button>Level Two</button>
                <button>Level Three</button>
                <button>Level Four</button>
                <button>Level Five</button>
                <button>Level Six</button>
            </div>
        )
    }
}