import React from 'react';
import {Document, Page, pdfjs} from 'react-pdf';
import {Link} from '@reach/router';
//import Resume2021c from '../documents/Resume2021c.pdf';
import '../styles/resumeStyle.css';
//import SinglePagePDFViewer from "../components/single-page";

import Menu from "../components/Menu";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import bg1da1 from '../images/bg1da1.jpg';

//import DownloadLink from "react-download-link";
import Footer from '../components/Footer';


import ResumeC1 from '../images/Resume2021cs1.jpg';
//import ResumeC from '../images/Resume2022cs.jpg';
import bg1da1 from '../images/bg1da1.jpg';

import Scott_Cho_resume_full_stack_developer from '../documents/Scott_Cho_resume_full_stack_developer.pdf';

const ResumeCode=(props)=>{
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
    // pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const { pdf } = props;

    return(
        
        <BrowserRouter>
        
        {/* <div style={{backgroundImage: `url(${bg1da1})`}}> */}
            <div style={{backgroundColor: "white", border: "yellow none 2px", marginLeft:"auto", marginRight:"auto", width: "100%"}}>
                {/* <div style={{backgroundImage: `url(${bg1da1})`,  height:'1200px'}}> */}
                <Menu/>
    
                <div className="resumeStyle">
                    <h2 style={{paddingBottom: "10px"}}>Choose a resume to view:</h2>
                    <Link style={{textDecoration: "none"}} class="current" to="/resume_code">Resume (full-stack-developer)</Link> 

                    <Link class="currentOff" style={{textDecoration: "none"}} to="/resume_anim">Resume (cg character animator)</Link>
                    
                    
                    {/* <SinglePagePDFViewer pdf={Scott_Cho_resume_full_stack_developer} /> */}
                    <img src={ResumeC1}/>

                    {/* <DownloadLink
                    label="Download Resume(full-stack-developer)"
                    // filename="Scott_Cho_resume_full_stack_developer.pdf"
                    // filename="Scott_Cho_resume_full_stack_developer.pdf"
                    filename="Resume2021c.pdf"
                    exportFile={()=>"My cached data"}
                    // class="downStyle"
                    style={{borderStyle:"outset", color: "black", backgroundImage:"linear-gradient(to bottom right, cyan, rgb(5, 223, 223))", marginBottom:"20px", padding:"10px", borderRadius:"10px 10px 10px 10px", textDecoration:"none"}}
                    />
                    <a className="dl" href={Resume2021c} download="Resume2021c">Download Resume(full stack developer)</a>
                    <a className="dl" href={Scott_Cho_resume_full_stack_developer} download="Scott_Cho_resume_full_stack_developer">Download Resume(full stack developer)</a> */}
                    {/* <a href="https://drive.google.com/uc?export=download&id=1jXRI0iOXYU_jiaIULQLoxAbFhUE-mcJj">Download Resume(Full Stack Developer)</a> */}
                    <a href="https://drive.google.com/file/d/1L8gPYYOkKtJHNpXbOM2z8SE6Ci2VTmy1">Download Resume(Full Stack Developer)</a>
                    
                </div>
                
                <Footer/>
            
        </div>
        </BrowserRouter>
    )
}
export default ResumeCode;