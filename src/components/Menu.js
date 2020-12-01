import React, { Component } from 'react'
import Sidebar from './Sidebar'

import './../App.css'
import './../Sidebar.css'


class Menu extends Component {
    constructor (){
        super ();
    }

    render() {
        return (
            <div className = "Menu" id = "outer-container">
                <Sidebar pageWrapId = {'page-wrap'} outerContainerId={'outer-container'} />
            </div>
        )
    }
}

export default Menu
