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
import bg1da1 from '../images/bg1da1.jpg';

// import 'images/concept1a.jpg'
export default(props)=>{
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
        {url: "static/media/project3a.66540f1f.png"},
    ];
    
    return(
        <BrowserRouter>
        {/* <div style={{backgroundImage: `url(${bg1da1})`}}> */}
            <div style={{backgroundColor: "rgb(223, 243, 255)", border: "yellow none 2px", marginLeft:"auto", marginRight:"auto", width: "1900px"}}>
                <Menu/>
                <div style={{width: "1000px", height: "auto" ,marginLeft: "auto", marginRight: "auto", backgroundColor: "white", paddingTop: "5px"}}>
                    <div style={{textAlign: "center"}}>
                        <div>
                            <div>
                                <h2>EasyShop - Simple and intuitive E-commerce website(Python/Django)</h2>
                                <a href="https://github.com/srmtwenty/CodingDojo-projects/tree/main/EasyShop-master">
                                    GitHub
                                </a>
                            </div>
                            <SimpleImageSlider
                                width={800}
                                height={504}
                                images={images1}
                                style={{border: "black outset 2px", marginTop:"20px", marginBottom:"40px", marginLeft:"auto", marginRight:"auto"}}
                                navStyle={1}
                                showNavs={true}
                                showBullets={true}
                            />   
                        </div>
                    
                        <div>
                            <div>
                                <h2>AQI-Maps - Real time air quality map(MERN)</h2>
                                <a href="https://github.com/srmtwenty/CodingDojo-projects/tree/main/AQI-Maps">
                                    Github
                                </a>
                            </div>
                            <SimpleImageSlider
                                width={800}
                                height={504}
                                images={images2}
                                style={{border: "black outset 1px", marginTop:"20px", marginBottom:"40px",marginLeft:"auto", marginRight:"auto"}}
                                navStyle={1}
                                showNavs={true}
                                showBullets={true}
                            />
                        </div>

                        <div>
                            <div>
                                <h2>Friendbook - A clone of Faceboo's social media app(Java)</h2>
                                <a href="https://github.com/srmtwenty/CodingDojo-projects/tree/main/friendbook-main1">
                                    Github
                                </a>
                            </div>
                            <SimpleImageSlider
                                width={800}
                                height={504}
                                images={images3}
                                style={{border: "black outset 1px", marginTop:"20px", marginBottom:"40px",marginLeft:"auto", marginRight:"auto"}}
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