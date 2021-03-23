import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import {Router} from '@reach/router';
import '../styles/Menu.css';


const Menu = props=>{

    const aStyle={
        textDecoration:"none"
    }

    return (
        <div id="header-style">
        <div className="Menu">

            <a href="/" style={aStyle}>
                    <button className="current1">About</button>
                </a>

                <a href="/resume_code" style={aStyle}>
                    <button className="current1">Resume</button>
                </a>

                <a href="/works_code" style={aStyle}>
                    <button className="current1">Coding Works</button>
                </a>

                <a href="/works_anim" style={aStyle}>
                    <button className="current1">Animation Works</button>
                </a>

                <a href="https://github.com/srmtwenty" style={aStyle}>
                    <button className="current1">Github</button>
                </a>

                <a href="https://www.linkedin.com/in/sc50b/" style={aStyle}>
                    <button className="current1">LinkedIn</button>
                </a>
            
            
            </div>
        </div>
    )
}
export default withRouter(Menu);