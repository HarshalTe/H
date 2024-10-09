import React from "react";

// In src/index.js or src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import ReportCustomTextField from "./ReportCustomTextField";
const DesktopReport = ()=>{
    return(
        <>
           <div className="container">
               <div className="row">
                     <div className="col-md-12 d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                            <b className="mb-0 text-center">LETTER HEAD</b>
                     </div>
                </div>  
                <div className="row">
                     <div className="col-md-12 d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                            <p className="mb-0 text-center">DESKTOP REPORT</p>
                     </div>
                </div> 
                <div className="row">
                     <div className="col-md-4" style={{border:'1px solid black'}}>
                          <p className="mb-0">Bank Name</p>
                     </div> 
                     <div className="col-md-8  d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                          <p className="mb-0 text-center">ABC bank</p>
                     </div> 
                </div>  
                <div className="row">
                     <div className="col-md-4" style={{border:'1px solid black'}}>
                          <p className="mb-0">Name of customer</p>
                     </div> 
                     <div className="col-md-8  d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                          <ReportCustomTextField multiline />
                     </div> 
                </div>  
                <div className="row">
                     <div className="col-md-4" style={{border:'1px solid black'}}>
                          <p className="mb-0">Flat no.</p>
                     </div> 
                     <div className="col-md-8  d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                          <ReportCustomTextField multiline />
                     </div> 
                </div>  
                <div className="row">
                     <div className="col-md-4" style={{border:'1px solid black'}}>
                          <p className="mb-0">Address of Property as per Document </p>
                     </div> 
                     <div className="col-md-8  d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                          <ReportCustomTextField multiline />
                     </div> 
                </div>  
                <div className="row">
                     <div className="col-md-4" style={{border:'1px solid black'}}>
                          <p className="mb-0">Address of Property as per Site</p>
                     </div> 
                     <div className="col-md-8  d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                          <ReportCustomTextField multiline />
                     </div> 
                </div>  
                <div className="row">
                    <div className="col-md-4 d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                        <p className="mb-0 text-center">Boundaries</p>  
                    </div>
                    <div className="col-md-2 d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                         <p className="mb-0 text-center">East</p>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                         <p className="mb-0 text-center">West</p>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                         <p className="mb-0 text-center">North</p>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                        <p className="mb-0 text-center">South</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                        <p className="mb-0 text-center">As per Doc</p>  
                    </div>
                    <div className="col-md-2 d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                          <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                          <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                          <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                        <ReportCustomTextField multiline />   
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                        <p className="mb-0 text-center">As per Site</p>  
                    </div>
                    <div className="col-md-2 d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                          <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                          <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                          <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                        <ReportCustomTextField multiline />   
                    </div>
                </div>
                <div className="row">
                     <div className="col-md-12 d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                            <b className="mb-0 text-center">DOCUMENT DETAIL</b>
                     </div>
                </div>  
                <div className="row">
                     <div className="col-md-4" style={{border:'1px solid black'}}>
                          <p className="mb-0">Commencement Certificate</p>
                     </div> 
                     <div className="col-md-8  d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                          <ReportCustomTextField multiline />
                     </div> 
                </div> 
                <div className="row">
                     <div className="col-md-4" style={{border:'1px solid black'}}>
                          <p className="mb-0">Sanctioned Plan</p>
                     </div> 
                     <div className="col-md-8  d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                          <ReportCustomTextField multiline />
                     </div> 
                </div> 
                <div className="row">
                     <div className="col-md-4" style={{border:'1px solid black'}}>
                          <p className="mb-0">RERA details</p>
                     </div> 
                     <div className="col-md-8  d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                          <ReportCustomTextField multiline />
                     </div> 
                </div> 
                <div className="row">
                     <div className="col-md-4" style={{border:'1px solid black'}}>
                          <p className="mb-0">RERA number</p>
                     </div> 
                     <div className="col-md-8  d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                          <ReportCustomTextField multiline />
                     </div> 
                </div>
                <div className="row">
                     <div className="col-md-4" style={{border:'1px solid black'}}>
                          <p className="mb-0">RERA start date</p>
                     </div> 
                     <div className="col-md-8  d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                          <ReportCustomTextField multiline />
                     </div> 
                </div>
                <div className="row">
                     <div className="col-md-4" style={{border:'1px solid black'}}>
                          <p className="mb-0">RERA end date</p>
                     </div> 
                     <div className="col-md-8  d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                          <ReportCustomTextField multiline />
                     </div> 
                </div>
                <div className="row">
                     <div className="col-md-12 d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                            <b className="mb-0 text-center">BUILDING DETAIL</b>
                     </div>
                </div>
                <div className="row">
                     <div className="col-md-4" style={{border:'1px solid black'}}>
                          <p className="mb-0">Total no. of wings</p>
                     </div> 
                     <div className="col-md-8  d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                          <ReportCustomTextField multiline />
                     </div> 
                </div>
                <div className="row">
                     <div className="col-md-4" style={{border:'1px solid black'}}>
                          <p className="mb-0">Total no. of Floor</p>
                     </div> 
                     <div className="col-md-8  d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                          <ReportCustomTextField multiline />
                     </div> 
                </div>
                <div className="row">
                     <div className="col-md-4" style={{border:'1px solid black'}}>
                          <p className="mb-0">Total no. of Flat each floor</p>
                     </div> 
                     <div className="col-md-8  d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                          <ReportCustomTextField multiline />
                     </div> 
                </div>
                <div className="row">
                     <div className="col-md-4" style={{border:'1px solid black'}}>
                          <p className="mb-0">Number of lift</p>
                     </div> 
                     <div className="col-md-8  d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                          <ReportCustomTextField multiline />
                     </div> 
                </div>
                <div className="row">
                     <div className="col-md-12 d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                            <b className="mb-0 text-center">STAGE OF CONSTRUCTION</b>
                     </div>
                </div>
                <div className="row">
                     <div className="col-md-4" style={{border:'1px solid black'}}>
                          <p className="mb-0">Current Stage</p>
                     </div> 
                     <div className="col-md-8  d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                          <ReportCustomTextField multiline />
                     </div> 
                </div>
                <div className="row">
                     <div className="col-md-4" style={{border:'1px solid black'}}>
                          <p className="mb-0">Recommended Stage</p>
                     </div> 
                     <div className="col-md-8  d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                          <ReportCustomTextField multiline />
                     </div> 
                </div>
                <div className="row">
                     <div className="col-md-4" style={{border:'1px solid black'}}>
                          <p className="mb-0">Activity on site</p>
                     </div> 
                     <div className="col-md-8  d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                          <ReportCustomTextField multiline />
                     </div> 
                </div>
                <div className="row">
                     <div className="col-md-4" style={{border:'1px solid black'}}>
                          <p className="mb-0">Labors observed on site</p>
                     </div> 
                     <div className="col-md-8  d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                          <ReportCustomTextField multiline />
                     </div> 
                </div>
                <div className="row">
                     <div className="col-md-12 d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                            <b className="mb-0 text-center">UNIT DETAIL</b>
                     </div>
                </div>
                <div className="row">
                     <div className="col-md-2 d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                            <p className="mb-0 text-center">Floor</p>
                     </div>  
                     <div className="col-md-2 d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                            <p className="mb-0 text-center">Flat no.</p>
                     </div> 
                     <div className="col-md-2 d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                            <p className="mb-0 text-center">Config</p>
                     </div> 
                     <div className="col-md-2 d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                            <p className="mb-0 text-center">Carpet Area as per plan</p>
                     </div> 
                     <div className="col-md-2 d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                            <p className="mb-0 text-center">Terrace</p>
                     </div> 
                     <div className="col-md-2 d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                            <p className="mb-0 text-center">Balcony / Otla</p>
                     </div> 
                </div>
                <div className="row">
                     <div className="col-md-2 d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                         <ReportCustomTextField multiline />
                     </div>  
                     <div className="col-md-2 d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                         <ReportCustomTextField multiline />
                     </div> 
                     <div className="col-md-2 d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                         <ReportCustomTextField multiline />
                     </div> 
                     <div className="col-md-2 d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                          <ReportCustomTextField multiline />
                     </div> 
                     <div className="col-md-2 d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                         <ReportCustomTextField multiline />
                     </div> 
                     <div className="col-md-2 d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                          <ReportCustomTextField multiline />
                     </div> 
                </div>
                <div className="row">
                     <div className="col-md-3 d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                            <p className="mb-0 text-center">Loading</p>
                     </div>  
                     <div className="col-md-3 d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                            <p className="mb-0 text-center">SBUA (CA + Terrace + Bal/Otla)</p>
                     </div> 
                     <div className="col-md-3 d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                            <p className="mb-0 text-center">Rate</p>
                     </div> 
                     <div className="col-md-3 d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                            <p className="mb-0 text-center">Value</p>
                     </div> 
                </div>
                <div className="row">
                     <div className="col-md-3 d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                            <ReportCustomTextField multiline />
                     </div>  
                     <div className="col-md-3 d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                           <ReportCustomTextField multiline />
                     </div> 
                     <div className="col-md-3 d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                           <ReportCustomTextField multiline />
                     </div> 
                     <div className="col-md-3 d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                        <ReportCustomTextField multiline />
                     </div> 
                </div>
                <div className="row">
                     <div className="col-md-12 d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                            <b className="mb-0 text-center">REMARKS</b>
                     </div>
                </div>  
                <div className="row">
                     <div className="col-md-12 d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                            <p className="mb-0 text-center">Flat Detail Remarks</p>
                     </div>
                </div> 
                <div className="row">
                     <div className="col-md-12 d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                           <ReportCustomTextField multiline />
                     </div>
                </div> 
                <div className="row">
                     <div className="col-md-6 d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                            <p className="mb-0 text-center">Report as per APF report dated dd/mm/yyyy</p>
                     </div>
                     <div className="col-md-6 d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                          <ReportCustomTextField multiline />
                     </div>
                </div> 
                <div className="row">
                     <div className="col-md-12 d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                            <b className="mb-0 text-center">GEO TAGGING</b>
                     </div>
                </div> 
                <div className="row">
                     <div className="col-md-12 d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                            {/*MaP*/}
                     </div>
                </div>
                <div className="row">
                     <div className="col-md-6 d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                            <b className="mb-0 text-center">LAT - {}</b>
                     </div>
                     <div className="col-md-6 d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                            <b className="mb-0 text-center">LOG - {}</b>
                     </div>
                </div>
                <div className="row">
                     <div className="col-md-12 d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                            <b className="mb-0 text-center">PHOTOGRAPH</b>
                     </div>
                </div> 
                <div className="row">
                     <div className="col-md-12 d-flex justify-content-center align-items-center" style={{border:'1px solid black'}}>
                            {/*MaP*/}
                     </div>
                </div>
           </div>
        </>
    );
}
export default DesktopReport;