import React, {useEffect, useState} from 'react';
import Menu from '../components/Menu';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import aboutPic from '../images/IMG_3058_400.jpg';
// import aboutPage from '../images/background_flip1.jpg';
// import bg1a from '../images/bg1a.jpg';
// import bg1da from '../images/bg1da.jpg';
// import profile1a from '../images/profile1a.jpg';
import bg1da1 from '../images/bg1da1.jpg';

import '../styles/aboutStyle.css';
import Typical from 'react-typical';
// import bg3a1 from '../images/bg3a1.jpg';
import bg3a2 from '../images/bg3a2.jpg';
import Footer from '../components/Footer';

import HTML from '../images/icons/HTML.png';
import CSS from '../images/icons/CSS.png';
import Python from '../images/icons/python.png';
import JavaScript from '../images/icons/JavaScript.png';
import MongoDB from '../images/icons/mongodb.png';
import Express from '../images/icons/expressjs.png';
import React1 from '../images/icons/react.png';

import Node from '../images/icons/nodejs.png';
import Java from '../images/icons/java.png';
import Git from '../images/icons/github.png';


import Spring from '../images/icons/spring.png';

import SQL from '../images/icons/sqlite.png';

import Unity from '../images/icons/unity.png';

import Maya from '../images/icons/maya.png';
import Visual from '../images/icons/visual_studio.png';
import Audacity from '../images/icons/audacity.png';
import AEffect from '../images/icons/after-effects.png';

const About=props=>{
    const eachSkill={
        display: "flex", 
        // textAlign: "left",
        border: "red solid 2px", 
        width: "250px",
        justifyContent: "right",
        // height: "50px",
        // marginLeft: "5px",
        // marginRight: "5px"
        margin: "5px"

    }

    return(
        <BrowserRouter>
        <div style={{backgroundColor: "white", border: "yellow solid 2px", marginLeft:"auto", marginRight:"auto", width: "1000px"}}>
        {/* <div style={{backgroundImage: `url(${bg1da1})`}}> */}
            <Menu/>
            {/* <Switch>
                <Route exact path="/settings" component={null} />
                <Route exact path="/dashboard" component={null} />
                <Route exact path="/" component={null} />
            </Switch> */}
            <div style={{textAlign: "left", display: "block", maxHeight: "35%", paddingBottom: "70px", border: "red solid 2px", width: "1000px"}}>
                <div style={{backgroundImage: `url(${bg3a2})`, marginTop: "20px",paddingBottom: "260px", marginLeft:"auto", marginRight: "auto", width: "900px", border: "black solid 2px"}}>
                    
                    <div className="fStyle">
                        <Typical
                            // className="fStyle"
                            steps={['Scott Cho', 1000, 
                                ]}
                            wrapper="h1"
                        />  
                        <Typical 
                            // style={{textAlign: "left", display: "inline-block", width: "30%", border: "red, slide, 2px"}}
                            steps={['', 2000, 
                                'Full Web Developer', 500]}
                            
                            wrapper="p"
                            
                        />
                        <Typical 
                            // style={{textAlign: "left", display: "inline-block", width: "30%", border: "red, slide, 2px"}}
                            steps={['', 3500, 
                                '&', 20, 
                                '& CG Character Animator', 500]}
                            
                            wrapper="p"
                            
                        />
                    </div>
                    {/* <img className="profileImg" src={bg3a1} alt="About Picture"/> */}
                    {/* <p>Ver 1.0</p>   */}
                </div>
                </div>
                    
                <div class="aboutPage">

                    <div class="aboutPageSub">
                            <div className="aboutStyle">
                                <h1 class="title">As A Full Stack Developer</h1>
                                <div className="content">
                                    <p>I learned CSS, Python, MERN and Java at CodingDojo for 14 weeks without a computer science background in fall 2020.</p>
                                    <p>Before I learned the coding, I have been keeping an eye on to a growth of app developer industry for last couple years because it is growing fast.
                                    </p>
                                    <p>App is being used widely in a daily life including food delievery, music search, social media and traffic condition.</p>
                                    Furthermore, I also have been interested in problem solving and researching solutions. When I used to work in a game production as a cg character animator, there were situations I had to do multitasking which includes finding errors and solution in a game testing.
                                    <p>During 14 week coding camp, I worked on three team projects in Python, MERN and Java.</p>

                                </div>
                                <h2 style={{fontStyle:"italic"}}>Skills</h2>
                                <div class="skills">
                                
                                    <div class="eachSkill1">
                                        <img src={HTML} style={{width:"50px", height:"50px", border:"yellow solid 2px"}}/>
                                        <h3>HTML</h3>
                                    </div>
                                    <div style={eachSkill}>
                                        <img src={CSS} style={{width:"50px", height:"50px"}}/>
                                        <h3>CSS</h3>
                                    </div>
                                    <div style={eachSkill}>
                                        <img src={Python} style={{width:"50px", height:"50px"}}/>
                                        <h3>Python</h3>
                                    </div>
                                    <div style={eachSkill}>
                                        <img src={JavaScript} style={{width:"50px", height:"50px"}}/>
                                        <h3>JavaScript</h3>
                                    </div>
                                    <div style={eachSkill}>
                                        <img src={MongoDB} style={{width:"50px", height:"50px"}}/>
                                        <h3>MongoDB</h3>
                                    </div>
                                    <div style={eachSkill}>
                                        <img src={Python} style={{width:"50px", height:"50px"}}/>
                                        <h3>Mongoose</h3>
                                    </div>
                                    <div style={eachSkill}>
                                        <img src={Express} style={{width:"50px", height:"50px"}}/>
                                        <h3>Express</h3>
                                    </div>
                                    <div style={eachSkill}>
                                        <img src={React1} style={{width:"50px", height:"50px"}}/>
                                        <h3>React</h3>
                                    </div>
                                    <div style={eachSkill}>
                                        <img src={Node} style={{width:"50px", height:"50px"}}/>
                                        <h3>Node</h3>
                                    </div>
                                    <div style={eachSkill}>
                                        <img src={Spring} style={{width:"50px", height:"50px"}}/>
                                        <h3>Spring Boot</h3>
                                    </div>
                                    <div style={eachSkill}>
                                        <img src={Java} style={{width:"50px", height:"50px"}}/>
                                        <h3>Java</h3>
                                    </div>
                                    <div style={eachSkill}>
                                        <img src={Visual} style={{width:"50px", height:"50px"}}/>
                                        <h3>Visual Studio Code</h3>
                                    </div>
                                    <div style={eachSkill}>
                                        <img src={Python} style={{width:"50px", height:"50px"}}/>
                                        <h3>Bcrypt</h3>
                                    </div>
                                    <div style={eachSkill}>
                                        <img src={SQL} style={{width:"50px", height:"50px"}}/>
                                        <h3>MySQL</h3>
                                    </div>
                                    <div style={eachSkill}>
                                        <img src={Python} style={{width:"50px", height:"50px"}}/>
                                        <h3>Spring Tool Suite</h3>
                                    </div>
                                    <div style={eachSkill}>
                                        <img src={Python} style={{width:"50px", height:"50px"}}/>
                                        <h3>Postman</h3>
                                    </div>
                                    <div style={eachSkill}>
                                        <img src={Git} style={{width:"50px", height:"50px"}}/>
                                        <h3>Github</h3>
                                    </div>
                                    <div style={eachSkill}>
                                        <img src={Python} style={{width:"50px", height:"50px"}}/>
                                        <h3>Api</h3>
                                    </div>
                                    
                                </div>
                            </div>
                        
                            <div className="aboutStyle">
                                <h1 class="title2">As An Animator:</h1>
                                <div className="content">
                                    <p>I earned a MFA degree at the Academy of Art University with a major in 3D Character Animation.  
                                    From 2009 to 2012, I took graduate animation courses focusing on performance, mechanical motion, and was mentored under veteran industry animators.</p> 
                                    <p>In 2011, I participated in the San Francisco Junior Giants Animation project as a character animator at the Academy.  
                                        In 2013, I worked on three collaborative projects: Borderlands 2, Junior Giants 2014, and Scaredy Bat.</p>
                                    <p>I worked in the indie game company called '2020 Venture Studios' and participated in development of 'Chasing Dead' game from Oct 2014 to May 2016.  
                                        In May 2019, I worked for Tim Everitt Productions' 90 min cg animated film as a freelancer.</p>
                                </div>
                                <h2 style={{fontStyle:"italic"}}>Skills</h2>
                                <div class="skills">
                                    
                                    <div style={eachSkill}>
                                        <img src={Maya} style={{width:"50px", height:"50px"}}/>
                                        <h3>Maya</h3>
                                    </div>
                                    <div style={eachSkill}>
                                        <img src={CSS} style={{width:"50px", height:"50px"}}/>
                                        <h3>Photoshop CS</h3>
                                    </div>
                                    <div style={eachSkill}>
                                        <img src={CSS} style={{width:"50px", height:"50px"}}/>
                                        <h3>Premiere Pro</h3>
                                    </div>
                                    <div style={eachSkill}>
                                        <img src={CSS} style={{width:"50px", height:"50px"}}/>
                                        <h3>MotionBuilder</h3>
                                    </div>
                                    <div style={eachSkill}>
                                        <img src={Unity} style={{width:"50px", height:"50px"}}/>
                                        <h3>Unity</h3>
                                    </div>
                                    <div style={eachSkill}>
                                        <img src={AEffect} style={{width:"50px", height:"50px"}}/>
                                        <h3>After Effect</h3>
                                    </div>
                                    <div style={eachSkill}>
                                        <img src={CSS} style={{width:"50px", height:"50px"}}/>
                                        <h3>Illustrator CS</h3>
                                    </div>
                                    <div style={eachSkill}>
                                        <img src={Audacity} style={{width:"50px", height:"50px"}}/>
                                        <h3>Audacity</h3>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            <Footer/>
        </div>
        </BrowserRouter>
        
    )
}

export default About;