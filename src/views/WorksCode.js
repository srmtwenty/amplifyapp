import React, {useState} from 'react';
import Menu from '../components/Menu';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import SimpleImageSlider from 'react-simple-image-slider';
import Footer from '../components/Footer';
import project2a from '../images/project2a.png';

import project2b from '../images/project2b.jpg';
import project2c from '../images/project2c.png';

import project1a from '../images/project1a.png';
import project1b from '../images/project1b.png';
import project1c from '../images/project1c.png';
import project3a from '../images/project3a.png';

import project3b1 from '../images/project3b1.png';
import project3b2 from '../images/project3b2.png';
import project3b3 from '../images/project3b3.png';
import project3b4 from '../images/project3b4.png';
import project3b5 from '../images/project3b5.png';

import project4b1 from '../images/p4a.png';
import project4b2 from '../images/p4b.png';
import project4b3 from '../images/p4c.png';
import project4b4 from '../images/p4d.png';
import project4b5 from '../images/p4e.png';
import project4b6 from '../images/p4f.png';
import project4b7 from '../images/p4g.png';
import project4b8 from '../images/p4h.png';

import bg1da1 from '../images/bg1da1.jpg';


import project5a from '../images/project5a.png';
import project5b from '../images/project5b.png';
import project5c from '../images/project5c.png';

import project6a from '../images/project6a.png';
import project6b from '../images/project6b.png';

//import 'images/p4a.png'
// import 'images/concept1a.jpg'
export default(props)=>{
    const images4=[
        {url: "static/media/p4a.9d63158b.png"},
        {url: "static/media/p4b.db331937.png"},
        {url: "static/media/p4c.57e97bc6.png"},
        {url: "static/media/p4d.9ec5ef5a.png"},
        {url: "static/media/p4e.8fb946c1.png"},
        {url: "static/media/p4f.da01f69c.png"},
        {url: "static/media/p4g.534bb0d7.png"},
        {url: "static/media/p4h.31b379d8.png"}
    ];

    const images1=[
        {url: "static/media/project1a.d8959746.png"},
        {url: "static/media/project1b.c78ddfe6.png"},
        {url: "static/media/project1c.9cd02ff3.png"},
    ];

    const images2=[
        {url: "static/media/project2a.2bbaca98.png"},
        {url: "static/media/project2b.175b5a3a.jpg"},
        {url: "static/media/project2c.e88c4f68.png"},
    ];

    const images3=[
        {url: "static/media/project3b1.cab0e2a7.png"},
        {url: "static/media/project3b2.08355e95.png"},
        {url: "static/media/project3b3.cd6a161e.png"},
        {url: "static/media/project3b4.df278725.png"},
        {url: "static/media/project3b5.3e8fe3db.png"},
    ];
    
    return(
        <BrowserRouter>
        {/* <div style={{backgroundImage: `url(${project3b1})`}}> */}
            <div style={{backgroundColor: "rgb(223, 243, 255)", border: "yellow none 2px", marginLeft:"auto", marginRight:"auto", width: "100%"}}>
                <Menu/>
                
                <div style={{width: "1000px", height: "auto" ,marginLeft: "auto", marginRight: "auto", backgroundColor: "white", paddingTop: "5px", border: "red none 2px"}}>
                    <div style={{textAlign: "center"}}>

                        <div style={{backgroundColor: "rgba(235, 255, 253)", padding: "20px 0px 20px 0px"}}>
                            <div>
                                <h2>Athlete Database - A database of Athletes records(Java, 2022)</h2>
                                <a href="https://github.com/srmtwenty/my_java_project1_athlete_database">
                                    Github
                                </a>
                                <div style={{width: "900px", margin:"auto", border: "red none 2px"}}>
                                    <ul style={{margin: "20px", textAlign:"left"}}>
                                        <li>Created jsp forms with Spring Tool Suite to implement post / edit / delete / search functionality for a seamless and intuitive user experience
                                        </li>

                                        <li>Implemented a MySQL database that ties listing systems with users (hosts), athletes, competitions, nations, and competition musics for a secured and organized data table
                                        </li>

                                        <li>Developed eight different relational entities in MySQL database for users giving power to the user logged in, such as deleting or editing athletes & competitions they created as hosts
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <SimpleImageSlider
                                width={900}
                                height={700}
                                images={images4}
                                style={{border: "black outset 1px", marginTop:"20px", marginBottom:"40px",marginLeft:"auto", marginRight:"auto"}}
                                navStyle={1}
                                showNavs={true}
                                showBullets={true}
                            />
                        </div>


                        <div style={{backgroundColor: "rgba(235, 255, 253)", padding: "20px 0px 20px 0px"}}>
                            <div>
                                <h2>Athlete Database - A database of Athletes records(Java, 2022)</h2>
                                <a href="https://github.com/srmtwenty/my_java_project1_athlete_database">
                                    Github
                                </a>
                                <div style={{width: "900px", margin:"auto", border: "red none 2px"}}>
                                    <ul style={{margin: "20px", textAlign:"left"}}>
                                        <li>Created jsp forms with Spring Tool Suite to implement post / edit / delete / search functionality for a seamless and intuitive user experience
                                        </li>

                                        <li>Implemented a MySQL database that ties listing systems with users (hosts), athletes, competitions, nations, and competition musics for a secured and organized data table
                                        </li>

                                        <li>Developed eight different relational entities in MySQL database for users giving power to the user logged in, such as deleting or editing athletes & competitions they created as hosts
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <SimpleImageSlider
                                width={900}
                                height={700}
                                images={images4}
                                style={{border: "black outset 1px", marginTop:"20px", marginBottom:"40px",marginLeft:"auto", marginRight:"auto"}}
                                navStyle={1}
                                showNavs={true}
                                showBullets={true}
                            />
                        </div>





                        <div style={{backgroundColor: "rgba(235, 255, 253)", padding: "20px 0px 20px 0px"}}>
                            <div>
                                <h2>Athlete Database - A database of Athletes records(Java, 2022)</h2>
                                <a href="https://github.com/srmtwenty/my_java_project1_athlete_database">
                                    Github
                                </a>
                                <div style={{width: "900px", margin:"auto", border: "red none 2px"}}>
                                    <ul style={{margin: "20px", textAlign:"left"}}>
                                        <li>Created jsp forms with Spring Tool Suite to implement post / edit / delete / search functionality for a seamless and intuitive user experience
                                        </li>

                                        <li>Implemented a MySQL database that ties listing systems with users (hosts), athletes, competitions, nations, and competition musics for a secured and organized data table
                                        </li>

                                        <li>Developed eight different relational entities in MySQL database for users giving power to the user logged in, such as deleting or editing athletes & competitions they created as hosts
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <SimpleImageSlider
                                width={900}
                                height={700}
                                images={images4}
                                style={{border: "black outset 1px", marginTop:"20px", marginBottom:"40px",marginLeft:"auto", marginRight:"auto"}}
                                navStyle={1}
                                showNavs={true}
                                showBullets={true}
                            />
                        </div>

                        <div style={{backgroundColor: "rgba(255, 249, 214)", padding: "20px 0px 20px 0px"}}>
                            <div>
                                <h2>Friendbook - A clone of Facebook's social media app(Java, 2020)</h2>
                                <a href="https://github.com/srmtwenty/CodingDojo-projects/tree/main/friendbook-main1">
                                    Github
                                </a>
                                <div style={{width: "900px", margin:"auto", border: "red none 2px"}}>
                                    <ul style={{margin: "20px", textAlign:"left"}}>
                                        <li>Created jsp forms with Spring Tool Suite to implement post / edit / delete functionality for a seamless and intuitive user experience
                                        </li>

                                        <li>Implemented a MySQL database that ties listing systems with users (hosts and attendees) and events for a secured and organized data table
                                        </li>

                                        <li>Developed five different relational models in MySQL database for users giving power to the user logged in, such as deleting or editing posts they created as hosts.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <SimpleImageSlider
                                width={900}
                                height={504}
                                images={images3}
                                style={{border: "black outset 1px", marginTop:"20px", marginBottom:"40px",marginLeft:"auto", marginRight:"auto"}}
                                navStyle={1}
                                showNavs={true}
                                showBullets={true}
                            />
                        </div>

                        <div style={{backgroundColor: "rgba(227, 250, 231)", padding: "20px 0px 20px 0px"}}>
                            <div>
                                <h2>AQI-Maps - Real time air quality map(MERN, 2020)</h2>
                                <a href="https://github.com/srmtwenty/CodingDojo-projects/tree/main/AQI-Maps">
                                    Github
                                </a>
                                <div style={{width: "900px", margin:"auto", border: "red none 2px"}}>
                                    <ul style={{margin: "20px", textAlign:"left"}}>
                                        <li>Implemented React component forms with VS Code and MongoDB for secure login and registration
                                        </li>
                                        
                                        <li>Set validation error messages using React to bolster form security
                                        </li>
                                        
                                        <li>Used Axios to send HTTP post(user, email, password info for login, registration) from a client to a backend(server)
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <SimpleImageSlider
                                width={900}
                                height={504}
                                images={images2}
                                style={{border: "black outset 1px", marginTop:"20px", marginBottom:"40px",marginLeft:"auto", marginRight:"auto"}}
                                navStyle={1}
                                showNavs={true}
                                showBullets={true}
                            />
                        </div>


                        <div style={{padding: "20px 0px 20px 0px"}}>
                            <div>
                                <h2>EasyShop - Simple and intuitive E-commerce website(Python/Django, 2020)</h2>
                                <a href="https://github.com/srmtwenty/CodingDojo-projects/tree/main/EasyShop-master">
                                    GitHub
                                </a>
                                <div style={{width: "900px", margin:"auto", border: "red none 2px"}}>
                                    <ul style={{margin: "20px", textAlign:"left"}}>
                                    <li>Configured templates in Python/Django cultivating a simplistic UI and shopping experience including viewing, adding, and ordering items.
                                    </li>
                                    <li>Implemented Bcrypt's hashing and HTML form validation to enhance security.
                                    </li> 
                                    <li>Constructed an intuitive front end design using CSS resulting in a seamless and on-brand user experience”    
                                    </li>
                                    </ul>
                                </div>
                            </div>
                            <SimpleImageSlider
                                width={900}
                                height={504}
                                images={images1}
                                style={{border: "black outset 2px", marginTop:"20px", marginBottom:"40px", marginLeft:"auto", marginRight:"auto"}}
                                navStyle={1}
                                showNavs={true}
                                showBullets={true}
                            />   
                        </div>
                    
                    </div>
                </div>
            <Footer/>
            </div>
            
        </BrowserRouter>
    )
}