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

const ResumeCode=(props)=>{
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
    const { pdf } = props;
    // const rStyle={
    //     marginLeft: "auto",
    //     marginRight: "auto" 
    // }

    return(
        <BrowserRouter>
            <div>
                {/* <div style={{backgroundImage: `url(${bg1da1})`,  height:'1200px'}}> */}
                <Menu/>
    
                <div className="resumeStyle">
                    <h2 style={{paddingBottom: "10px"}}>Choose a resume to view:</h2>
                    <Link style={{textDecoration: "none"}} class="current" to="/resume_code">Resume (full-stack-developer)</Link> 
                    <Link class="currentOff" style={{textDecoration: "none"}} to="/resume_anim">Resume (cg character animator)</Link>
                    {/* <Document file={Resume2021c}>
                        <Page pageNumber={1} 
                                // object-fit="fill"
                                renderTextLayer={false}
                                // width={1000}
                                renderAnnotationLayer={true}/>       
                    </Document> */}
                    
                    <SinglePagePDFViewer pdf={Resume2021c} />

                    <DownloadLink
                    label="Download Resume(full-stack-developer)"
                    filename="Resume2021c.pdf"
                    exportFile={()=>"My cached data"}
                />
                </div>
                
                
                {/* <div>
                    <a className="dl" href={pdf} download="Resume2021">Download Resume</a>
                </div> */}
                
                <Footer/>
            </div>
        </BrowserRouter>
    )
}
export default ResumeCode;