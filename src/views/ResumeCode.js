import React from 'react';
import {Document, Page, pdfjs} from 'react-pdf';
import {Link} from '@reach/router';
import Resume2021c from '../documents/Resume2021c.pdf';
import '../styles/resumeStyle.css';
import SinglePagePDFViewer from "../components/single-page";

import Menu from "../components/Menu";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import bg1da1 from '../images/bg1da1.jpg';

import DownloadLink from "react-download-link";
import Footer from '../components/Footer';
import ResumeC from '../images/Resume2021cs.jpg';
import bg1da1 from '../images/bg1da1.jpg';

const ResumeCode=(props)=>{
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
    // pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const { pdf } = props;

    return(
        
        <BrowserRouter>
        <div style={{backgroundImage: `url(${bg1da1})`}}>
            <div style={{backgroundColor: "white", border: "yellow none 2px", marginLeft:"auto", marginRight:"auto", width: "1000px"}}>
                {/* <div style={{backgroundImage: `url(${bg1da1})`,  height:'1200px'}}> */}
                <Menu/>
    
                <div className="resumeStyle">
                    <h2 style={{paddingBottom: "10px"}}>Choose a resume to view:</h2>
                    <Link style={{textDecoration: "none"}} class="current" to="/resume_code">Resume (full-stack-developer)</Link> 

                    <Link class="currentOff" style={{textDecoration: "none"}} to="/resume_anim">Resume (cg character animator)</Link>
                    
                    
                    {/* <SinglePagePDFViewer pdf={Resume2021c} /> */}
                    <img src={ResumeC}/>

                    <DownloadLink
                    label="Download Resume(full-stack-developer)"
                    filename="Resume2021c.pdf"
                    exportFile={()=>"My cached data"}
                    style={{border:"black solid 2px", backgroundColor:"cyan", marginBottom:"20px", padding:"10px", borderRadius:"15px 15px 15px 15px"}}
                />
                </div>
                
                <Footer/>
            </div>
        </div>
        </BrowserRouter>
    )
}
export default ResumeCode;