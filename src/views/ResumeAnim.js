import React from 'react';
import {Document, Page, pdfjs} from 'react-pdf';
import {Link} from '@reach/router';
import Resume2021a1 from '../documents/Resume2021a1.pdf';
import '../styles/resumeStyle.css';
import SinglePagePDFViewer from "../components/single-page";

import Menu from "../components/Menu";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import DownloadLink from "react-download-link";
import Footer from '../components/Footer';
import ResumeA from '../images/Resume2021a1s.jpg';
import bg1da1 from '../images/bg1da1.jpg';

const ResumeAnim=()=>{
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

    return(
        <BrowserRouter>
            <div style={{backgroundImage: `url(${bg1da1})`}}>
            <div style={{backgroundColor: "white", border: "yellow none 2px", marginLeft:"auto", marginRight:"auto", width: "1000px"}}>
                {/* <div style={{backgroundImage: `url(${bg1da1})`,  height:'1200px'}}> */}
                <Menu/>
    
                <div className="resumeStyle">
                    <h2 style={{paddingBottom: "10px"}}>Choose a resume to view:</h2>
                    <Link className="currentOff" style={{textDecoration: "none"}} to="/resume_code">Resume (full-stack-developer)</Link>
                    <Link style={{textDecoration: "none"}} className="current" to="/resume_anim">Resume (cg character animator)</Link>
                    {/* <Document file={Resume2021c}>
                        <Page pageNumber={1} 
                                // object-fit="fill"
                                renderTextLayer={false}
                                // width={1000}
                                renderAnnotationLayer={true}/>       
                    </Document> */}
                    <img src={ResumeA}/>
                    {/* <SinglePagePDFViewer pdf={Resume2021A} /> */}

                    <DownloadLink
                    label="Download Resume(cg character animator)"
                    filename="Resume2021a1.pdf"
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
export default ResumeAnim;