import React from 'react';
// import resume from '../documents/Resume2021c.pdf';
import { Document, Page, pdfjs } from "react-pdf";



const Resume = () => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    return(
        <div>
            <div className="resume" >
                <Document file='/Resume2021c.pdf' size="A4">
                    <Page
                    object-fit="fill"
                    pageNumber={1}
                    renderTextLayer={false}
                    renderAnnotationLayer={true}
                    width={1000}></Page>
                </Document>
                <div style={{height:"10px"}}></div>
            </div>
            
        </div>
    )
}

export default Resume;