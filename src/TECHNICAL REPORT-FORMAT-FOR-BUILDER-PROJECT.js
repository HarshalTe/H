import React from "react";

// In src/index.js or src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import ReportCustomTextField from "./Componants/ReportCustomTextField";
const TechnicalReportFormatForBuilderProject = ()=>{
    
    return(
        <>
             <div className='container'>
                 <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <b>TECHNICAL REPORT FORMAT FOR BUILDER PROJECT</b>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0 text-center"> FOR : Fullerton Housing Finance Company</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black',height:'25px'}}>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-3" style={{ border: '1px solid black'}} >
                        <p className="mb-0">Report Generation Date </p>
                    </div>
                    <div className="col-md-9 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-3" style={{ border: '1px solid black'}} >
                        <p className="mb-0">Report Submission Date </p>
                    </div>
                    <div className="col-md-9 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-3" style={{ border: '1px solid black'}} >
                        <p className="mb-0">Project Name</p>
                    </div>
                    <div className="col-md-9 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-3" style={{ border: '1px solid black'}} >
                        <p className="mb-0">Address as per Site  </p>
                    </div>
                    <div className="col-md-9 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-3" style={{ border: '1px solid black'}} >
                        <p className="mb-0">Address as per Plan </p>
                    </div>
                    <div className="col-md-9 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-3" style={{ border: '1px solid black'}} >
                        <p className="mb-0">Address as per Legal Opinion </p>
                    </div>
                    <div className="col-md-9 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black',height:'25px'}}>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <b>GENERAL DETAILS</b>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-3" style={{ border: '1px solid black'}} >
                        <p className="mb-0">Site Visit Date</p>
                    </div>
                    <div className="col-md-9 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-3" style={{ border: '1px solid black'}} >
                        <p className="mb-0">Name of the Person Contacted on Site</p>
                    </div>
                    <div className="col-md-9 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-3" style={{ border: '1px solid black'}} >
                        <p className="mb-0">Name</p>
                    </div>
                    <div className="col-md-9 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-3" style={{ border: '1px solid black'}} >
                        <p className="mb-0">Developer Address</p>
                    </div>
                    <div className="col-md-9 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-3" style={{ border: '1px solid black'}} >
                        <p className="mb-0">Parent Company / Major Shareholders</p>
                    </div>
                    <div className="col-md-9 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-3" style={{ border: '1px solid black'}} >
                        <p className="mb-0">Architect / Contractor Name </p>
                    </div>
                    <div className="col-md-9 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-3" style={{ border: '1px solid black'}} >
                        <p className="mb-0">Architect / Contractor Address</p>
                    </div>
                    <div className="col-md-9 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-3" style={{ border: '1px solid black'}} >
                        <p className="mb-0">Landmark</p>
                    </div>
                    <div className="col-md-9 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-3" style={{ border: '1px solid black'}} >
                        <p className="mb-0">Name of Muncipal Corporation / Authority</p>
                    </div>
                    <div className="col-md-9 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-3" style={{ border: '1px solid black'}} >
                        <p className="mb-0">Licence Registration No.</p>
                    </div>
                    <div className="col-md-9 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-3" style={{ border: '1px solid black'}} >
                        <p className="mb-0">Project Type </p>
                    </div>
                    <div className="col-md-9 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-3" style={{ border: '1px solid black'}} >
                        <p className="mb-0">If Mixed, No.of Commercial units/shops</p>
                    </div>
                    <div className="col-md-9 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-3" style={{ border: '1px solid black'}} >
                        <p className="mb-0">Plot Area (in acres)</p>
                    </div>
                    <div className="col-md-9 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-3" style={{ border: '1px solid black'}} >
                        <p className="mb-0">Land Title Type</p>
                    </div>
                    <div className="col-md-9 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-3" style={{ border: '1px solid black'}} >
                        <p className="mb-0">FAR Permissible (in sqft)</p>
                    </div>
                    <div className="col-md-9 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-3" style={{ border: '1px solid black'}} >
                        <p className="mb-0">FAR Approved (in sqft)</p>
                    </div>
                    <div className="col-md-9 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-3" style={{ border: '1px solid black'}} >
                        <p className="mb-0">TDR Aprroved</p>
                    </div>
                    <div className="col-md-9 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-3" style={{ border: '1px solid black'}} >
                        <p className="mb-0">Free/Fungible FSI</p>
                    </div>
                    <div className="col-md-9 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-3" style={{ border: '1px solid black'}} >
                        <p className="mb-0">Purchasable FSI</p>
                    </div>
                    <div className="col-md-9 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-3" style={{ border: '1px solid black'}} >
                        <p className="mb-0">Purchasable TDR</p>
                    </div>
                    <div className="col-md-9 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-3" style={{ border: '1px solid black'}} >
                        <p className="mb-0">Construction Status</p>
                    </div>
                    <div className="col-md-9 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-3" style={{ border: '1px solid black'}} >
                        <p className="mb-0">Project Launch Date</p>
                    </div>
                    <div className="col-md-9 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-3" style={{ border: '1px solid black'}} >
                        <p className="mb-0">Construction Start Date</p>
                    </div>
                    <div className="col-md-9 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-3" style={{ border: '1px solid black'}} >
                        <p className="mb-0">Developer Bank A/C No</p>
                    </div>
                    <div className="col-md-9 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-3" style={{ border: '1px solid black'}} >
                        <p className="mb-0">Account Holder Name</p>
                    </div>
                    <div className="col-md-9 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-3" style={{ border: '1px solid black'}} >
                        <p className="mb-0">Developer Bank Name</p>
                    </div>
                    <div className="col-md-9 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-3" style={{ border: '1px solid black'}} >
                        <p className="mb-0">Branch Name  </p>
                    </div>
                    <div className="col-md-9 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-3" style={{ border: '1px solid black'}} >
                        <p className="mb-0">IFSC Code</p>
                    </div>
                    <div className="col-md-9 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-3" style={{ border: '1px solid black'}} >
                        <p className="mb-0">Total Approved Units </p>
                    </div>
                    <div className="col-md-9 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-3" style={{ border: '1px solid black'}} >
                        <p className="mb-0">Total UnApproved Units</p>
                    </div>
                    <div className="col-md-9 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black',height:'25px'}}>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <b>STATUS OF STATUTORY APPROVALS</b>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-4" style={{ border: '1px solid black'}} >
                        <p className="mb-0 text-center">Name </p>
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                        <p className="mb-0 text-center">Comments</p>
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                        <p className="mb-0 text-center">Status</p>
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                        <p className="mb-0 text-center">Applied Date</p>
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                        <p className="mb-0 text-center">Received Date</p>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-4" style={{ border: '1px solid black'}} >
                          <p className="mb-0">Land Conversion approval / CLU</p>
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                         <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                         <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                        <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                         <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-4" style={{ border: '1px solid black'}} >
                          <p className="mb-0">Sanction Layout plan Details </p>
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                         <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                         <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                        <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                         <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-4" style={{ border: '1px solid black'}} >
                          <p className="mb-0">Airport Authority Clearance Status </p>
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                         <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                         <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                        <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                         <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-4" style={{ border: '1px solid black'}} >
                          <p className="mb-0">Fire Department Clearance Status </p>
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                         <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                         <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                        <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                         <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-4" style={{ border: '1px solid black'}} >
                          <p className="mb-0">Environment Clearance status  </p>
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                         <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                         <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                        <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                         <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-4" style={{ border: '1px solid black'}} >
                          <p className="mb-0">Commencement Certificate</p>
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                         <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                         <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                        <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                         <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-4" style={{ border: '1px solid black'}} >
                          <p className="mb-0">Intimation of Disaaproval (IOD)</p>
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                         <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                         <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                        <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                         <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-4" style={{ border: '1px solid black'}} >
                          <p className="mb-0">NOC from NHAI, Railway Board</p>
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                         <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                         <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                        <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                         <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-4" style={{ border: '1px solid black'}} >
                          <p className="mb-0">NOC from High Rise Committee</p>
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                         <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                         <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                        <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                         <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-4" style={{ border: '1px solid black'}} >
                          <p className="mb-0">Letter of Intent (LOI) </p>
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                         <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                         <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                        <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                         <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-4" style={{ border: '1px solid black'}} >
                          <p className="mb-0">NOC from ULC Department </p>
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                         <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                         <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                        <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                         <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-4" style={{ border: '1px solid black'}} >
                          <p className="mb-0">NOC from MIDC for development</p>
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                         <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                         <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                        <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                         <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-4" style={{ border: '1px solid black'}} >
                          <p className="mb-0">Change of User Certificate / Zone Certificate</p>
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                         <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                         <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                        <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                         <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-4" style={{ border: '1px solid black'}} >
                          <p className="mb-0">Specific NOC from Local Authority if any (for ex - MHADA for Redevelopment project under MHADA Layout)</p>
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                         <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                         <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                        <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                         <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-4" style={{ border: '1px solid black'}} >
                          <p className="mb-0">Letter from Structural Engineer of the project stating compliance of IS code related to construction as per  NDMA guidelines</p>
                    </div>
                    <div className="col-md-2 justify-content-center align-items-enter" style={{ border: '1px solid black'}} >
                         <p>Name of Structural Engineer -</p>
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                         <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                        <p> Letter Dated - </p>
                    </div>
                    <div className="col-md-2" style={{ border: '1px solid black'}} >
                         <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black',height:'25px'}}>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <b>PHYSICAL AND SOCIAL INFRASTRUCTURE</b>
                    </div>
            </div>
            <div className='row'>
                    <div className="col-md-4" style={{ border: '1px solid black'}} >
                        <p className="mb-0 text-center">Facility</p>
                    </div>
                    <div className="col-md-4" style={{ border: '1px solid black'}} >
                        <p className="mb-0 text-center">Status</p>
                    </div>
                    <div className="col-md-4" style={{ border: '1px solid black'}} >
                        <p className="mb-0 text-center">Distance from Project</p>
                    </div>
            </div>
            <div className='row'>
                    <div className="col-md-4" style={{ border: '1px solid black'}} >
                        <p className="mb-0 text-center">Bus Stop</p>
                    </div>
                    <div className="col-md-4" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-4" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
            </div>
            <div className='row'>
                    <div className="col-md-4" style={{ border: '1px solid black'}} >
                        <p className="mb-0 text-center">Railway Station </p>
                    </div>
                    <div className="col-md-4" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-4" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
            </div>
            <div className='row'>
                    <div className="col-md-4" style={{ border: '1px solid black'}} >
                        <p className="mb-0 text-center">Public Park</p>
                    </div>
                    <div className="col-md-4" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-4" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
            </div>
            <div className='row'>
                    <div className="col-md-4" style={{ border: '1px solid black'}} >
                        <p className="mb-0 text-center">Main Road</p>
                    </div>
                    <div className="col-md-4" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-4" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
            </div>
            <div className='row'>
                    <div className="col-md-4" style={{ border: '1px solid black'}} >
                        <p className="mb-0 text-center">Hospital</p>
                    </div>
                    <div className="col-md-4" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-4" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
            </div>
            <div className='row'>
                    <div className="col-md-4" style={{ border: '1px solid black'}} >
                        <p className="mb-0 text-center">Public Transport</p>
                    </div>
                    <div className="col-md-4" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-4" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
            </div>
            <div className='row'>
                    <div className="col-md-4" style={{ border: '1px solid black'}} >
                        <p className="mb-0 text-center">School</p>
                    </div>
                    <div className="col-md-4" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-4" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
            </div>
            <div className='row'>
                    <div className="col-md-4" style={{ border: '1px solid black'}} >
                        <p className="mb-0 text-center">Shopping Mall / Market</p>
                    </div>
                    <div className="col-md-4" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-4" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
            </div>
            <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <b>AMENITIES PROVIDED</b>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 " style={{ border: '1px solid black',height:'25px' }}>
                    </div>
                </div>
                <div className='row'>
                      <div className="col-md-4 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                           <p className="mb-0 text-center">Direction</p>
                     </div>
                     <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                           <p className="mb-0 text-center">As Per Plan</p>
                     </div>
                    <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                          <p className="mb-0 text-center">As Per Site</p>
                   </div>
                   <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                         <p className="mb-0 text-center">Comments</p>
                  </div>
                  <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                       <p className="mb-0 text-center">Does Boundary Match (Y/N)</p>
                  </div>
               </div>
               <div className='row'>
                      <div className="col-md-4 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                           <p className="mb-0 text-center">East</p>
                     </div>
                     <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                           <ReportCustomTextField multiline />
                     </div>
                    <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                           <ReportCustomTextField multiline />
                   </div>
                   <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                  </div>
                  <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                  </div>
               </div>
               <div className='row'>
                      <div className="col-md-4 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                           <p className="mb-0 text-center">West</p>
                     </div>
                     <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                           <ReportCustomTextField multiline />
                     </div>
                    <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                           <ReportCustomTextField multiline />
                   </div>
                   <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                  </div>
                  <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                  </div>
               </div>
               <div className='row'>
                      <div className="col-md-4 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                           <p className="mb-0 text-center">North</p>
                     </div>
                     <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                           <ReportCustomTextField multiline />
                     </div>
                    <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                           <ReportCustomTextField multiline />
                   </div>
                   <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                  </div>
                  <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                  </div>
               </div>
               <div className='row'>
                      <div className="col-md-4 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                           <p className="mb-0 text-center">South</p>
                     </div>
                     <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                           <ReportCustomTextField multiline />
                     </div>
                    <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                           <ReportCustomTextField multiline />
                   </div>
                   <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                  </div>
                  <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                  </div>
               </div>
               <div className='row'>
                      <div className="col-md-4 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                           <p className="mb-0 text-center">Property Falls Under Seismic Zone</p>
                     </div>
                     <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                           <ReportCustomTextField multiline />
                     </div>
                    <div className="col-md-4 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                         <p className="mb-0 text-center">Property Falls Under Flood Zone</p>
                   </div>
                   <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                  </div>
               </div>
               <div className='row'>
                      <div className="col-md-4 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                           <p className="mb-0 text-center">Property Falls Under Cyclone Zone</p>
                     </div>
                     <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                           <ReportCustomTextField multiline />
                     </div>
                    <div className="col-md-4 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                         <p className="mb-0 text-center">Property Falls Under CR Zone</p>
                   </div>
                   <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                  </div>
               </div>
               <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <b>PROJECT STRUCTURE</b>
                    </div>
                </div>
<div className="row" style={{ display: 'flex' }}>
  <div className="col-md-2" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
    <div className="row" style={{ flex: 1 }}>
      <div
        className="col-md d-flex justify-content-center align-items-center"
        style={{ border: '1px solid black', flex: 1 }}
      >
        <p className="mb-0 text-center">Tower</p>
      </div>
    </div>
  </div>
  <div className="col-md-10" style={{ display: 'flex', flexDirection: 'column', flex: 5 }}>
    <div className="row" style={{ flex: 1, display: 'flex' }}>
      <div
        className="col-md-6 d-flex justify-content-center align-items-center"
        style={{ border: '1px solid black', flex: 1 }}
      >
        <p className="mb-0 text-center">Tower Structure as Per</p>
      </div>
      <div
        className="col-md-6 d-flex justify-content-center align-items-center"
        style={{ border: '1px solid black', flex: 1 }}
      >
        <p className="mb-0 text-center">Range (PerSqft)</p>
      </div>
    </div>
    <div className="row" style={{ flex: 1, display: 'flex' }}>
      <div
        className="col-md-2 d-flex justify-content-center align-items-center"
        style={{ border: '1px solid black', flex: 1 }}
      >
        <p className="mb-0 text-center">Range (PerSqft)</p>
      </div>
      <div
        className="col-md-2 d-flex justify-content-center align-items-center"
        style={{ border: '1px solid black', flex: 1 }}
      >
        <p className="mb-0 text-center">Range (PerSqft)</p>
      </div>
      <div
        className="col-md-2 d-flex justify-content-center align-items-center"
        style={{ border: '1px solid black', flex: 1 }}
      >
        <p className="mb-0 text-center">Range (PerSqft)</p>
      </div>
      <div
        className="col-md-3 d-flex justify-content-center align-items-center"
        style={{ border: '1px solid black', flex: 1 }}
      >
        <p className="mb-0 text-center">Range (PerSqft)</p>
      </div>
      <div
        className="col-md-3 d-flex justify-content-center align-items-center"
        style={{ border: '1px solid black', flex: 1 }}
      >
        <p className="mb-0 text-center">Range (PerSqft)</p>
      </div>
    </div>
  </div>
</div>

             <div className="row">
                  <div className="col-md">
                      <div className="row">
                          <div className="col-md-*  d-flex justify-content-center align-items-center" style={{ border: '1px solid black',width:'18.10%'}}>
                                <ReportCustomTextField multiline />
                          </div>
                          <div className="col-md-* d-flex justify-content-center align-items-center" style={{ border: '1px solid black',width:'16.35%'  }}>
                                 <ReportCustomTextField multiline />
                          </div>
                          <div className="col-md-*  d-flex justify-content-center align-items-center" style={{ border: '1px solid black',width:'16.40%' }}>
                               <ReportCustomTextField multiline />
                          </div>
                          <div className="col-md-*  d-flex justify-content-center align-items-center" style={{ border: '1px solid black',width:'16.38%' }}>
                               <ReportCustomTextField multiline />
                          </div>
                          <div className="col-md-*  d-flex justify-content-center align-items-center" style={{ border: '1px solid black',width:'16.38%' }}>
                                <ReportCustomTextField multiline />
                          </div>
                          <div className="col-md-*  d-flex justify-content-center align-items-center" style={{ border: '1px solid black',width:'16.38%' }}>
                                <ReportCustomTextField multiline />
                          </div>
                      </div>
                  </div>
             </div>
             <div className="row">
                  <div className="col-md">
                      <div className="row">
                          <div className="col-md-6  d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                              <p className="mb-0 text-center">Units</p>
                          </div>
                          <div className="col-md-6  d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                               <p className="mb-0 text-center">Dates</p>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-md-2  d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                              <p className="mb-0 text-center">Approved</p>
                          </div>
                          <div className="col-md-2  d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                              <p className="mb-0 text-center">Unapproved</p>
                          </div>
                          <div className="col-md-2  d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                                 <p className="mb-0 text-center">Sold</p>
                          </div>
                          <div className="col-md-2  d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                              <p className="mb-0 text-center">Launch</p>
                          </div>
                          <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                                <p className="mb-0 text-center">Construction Start</p>
                          </div>
                          <div className="col-md-2  d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                                <p className="mb-0 text-center">Proposed Completion</p>
                          </div>
                      </div>
                  </div>
             </div>
             <div className="row">
                <div className="col-md-2" style={{border:'1px solid black'}}>
                     <ReportCustomTextField multiline />
                </div>
                <div className="col-md-2" style={{border:'1px solid black'}}>
                     <ReportCustomTextField multiline />
                </div>
                <div className="col-md-2" style={{border:'1px solid black'}}>
                     <ReportCustomTextField multiline />
                </div>
                <div className="col-md-2" style={{border:'1px solid black'}}>
                     <ReportCustomTextField multiline />
                </div>
                <div className="col-md-2" style={{border:'1px solid black'}}>
                     <ReportCustomTextField multiline />
                </div>
                <div className="col-md-2" style={{border:'1px solid black'}}>
                     <ReportCustomTextField multiline />
                </div>
             </div>
             <div className="row">
                    <div className="col-md-3 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}}>
                        <p className="mb-0 text-center">Note :</p>
                    </div>
                    <div className="col-md-9 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}}>
                         <ReportCustomTextField multiline />
                    </div>
                </div>
               <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black',height:'25px'}}>
                    </div>
                </div>


                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <b>TOWER WISE LOADING</b>
                    </div>
                </div>
               <div className="row">
                  <div className="col-md-6" >
                       <div className="row">
                             <div className="col-md-3  d-flex justify-content-center align-items-center" style={{ border: '1px solid black',height:"80px" }}>
                                 <p className="mb-0 text-center">Tower</p>
                             </div>
                             <div className="col-md-9  d-flex justify-content-center align-items-center" style={{ border: '1px solid black',height:"80px" }}>
                                 <p className="mb-0 text-center">Built Up Area as Per Plan</p>
                             </div>
                       </div>
                  </div>
                  <div className="col-md-6" >
                      <div className="row">
                          <div className="col-md-6  d-flex justify-content-center align-items-center" style={{ border: '1px solid black',height:"20px" }}>
                              <p className="mb-0 text-center">Total Area</p>
                          </div>
                          <div className="col-md-6  d-flex justify-content-center align-items-center" style={{ border: '1px solid black',height:"20px" }}>
                               <p className="mb-0 text-center">Percentage Loading</p>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-md-2  d-flex justify-content-center align-items-center" style={{ border: '1px solid black',height:"60px"  }}>
                              <p className="mb-0 text-center">Carpet</p>
                          </div>
                          <div className="col-md-2  d-flex justify-content-center align-items-center" style={{ border: '1px solid black',height:"60px"  }}>
                              <p className="mb-0 text-center">Super BUA</p>
                          </div>
                          <div className="col-md-2  d-flex justify-content-center align-items-center" style={{ border: '1px solid black',height:"60px"  }}>
                                 <p className="mb-0 text-center">Built Up to Carpet</p>
                          </div>
                          <div className="col-md-3  d-flex justify-content-center align-items-center" style={{ border: '1px solid black',height:"60px"  }}>
                              <p className="mb-0 text-center">Super to Built Up</p>
                          </div>
                          <div className="col-md-3  d-flex justify-content-center align-items-center" style={{ border: '1px solid black',height:"60px"  }}>
                                <p className="mb-0 text-center">Super to Carpet</p>
                          </div>
                      </div>
                  </div>
             </div>
             <div className="row">
                  <div className="col-md">
                      <div className="row">
                          <div className="col-md-* d-flex justify-content-center align-items-center" style={{ border: '1px solid black',width:'12.65%'}}>
                                <ReportCustomTextField multiline />
                          </div>
                          <div className="col-md-* d-flex justify-content-center align-items-center" style={{ border: '1px solid black',width:'37.38%'  }}>
                                 <ReportCustomTextField multiline />
                          </div>
                          <div className="col-md-*  d-flex justify-content-center align-items-center" style={{ border: '1px solid black',width:'8.28%' }}>
                               <ReportCustomTextField multiline />
                          </div>
                          <div className="col-md-*  d-flex justify-content-center align-items-center" style={{ border: '1px solid black',width:'8.35%' }}>
                               <ReportCustomTextField multiline />
                          </div>
                          <div className="col-md-* d-flex justify-content-center align-items-center" style={{ border: '1px solid black',width:'8.35%' }}>
                                <ReportCustomTextField multiline />
                          </div>
                          <div className="col-md d-flex justify-content-center align-items-center" style={{ border: '1px solid black',width:'20.80%' }}>
                                <ReportCustomTextField multiline />
                          </div>
                          <div className="col-md d-flex justify-content-center align-items-center" style={{ border: '1px solid black',width:'20.80%' }}>
                                <ReportCustomTextField multiline />
                          </div>
                      </div>
                  </div>
             </div>
             <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black',height:'25px'}}>
                    </div>
                </div>


                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <b>UNIT DETAILS</b>
                    </div>
                </div>
              <div className="row">
                <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}}>
                     <p className="mb-0 text-center">Tower Name</p>
                </div>
                <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}}>
                      <p className="mb-0 text-center">Unit Type</p>
                </div>
                <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}}>
                      <p className="mb-0 text-center">Carpet Area / Plot Area (for Villas and Plots ) in sqft</p>
                </div>
                <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}}>
                      <p className="mb-0 text-center">Terrace Area (if any) in sqft</p>
                </div>
                <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}}>
                     <p className="mb-0 text-center">Super Built Up Area (sqft)</p>
                </div>
                <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}}>
                       <p className="mb-0 text-center">No.of Units</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}}>
                      <ReportCustomTextField multiline />
                </div>
                <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}}>
                    <ReportCustomTextField multiline />
                </div>
                <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}}>
                      <ReportCustomTextField multiline />
                </div>
                <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}}>
                   <ReportCustomTextField multiline />
                </div>
                <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}}>
                       <ReportCustomTextField multiline />
                </div>
                <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}}>
                     <ReportCustomTextField multiline />
                </div>
              </div>
             <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black',height:'25px'}}>
                    </div>
                </div>


                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <b>UNIT NOMENCLATURE</b>
                    </div>
                </div>
              <div className="row">
                <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}}>
                     <p className="mb-0 text-center">Tower Name</p>
                </div>
                <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}}>
                      <p className="mb-0 text-center">Unit Type</p>
                </div>
                <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}}>
                      <p className="mb-0 text-center">Floor Number</p>
                </div>
                <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}}>
                      <p className="mb-0 text-center">Terrace Area (if any) in sqft</p>
                </div>
                <div className="col-md-4 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}}>
                     <p className="mb-0 text-center">Saleable Area (sqft)</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}}>
                    <ReportCustomTextField multiline />
                </div>
                <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}}>
                      <ReportCustomTextField multiline />
                </div>
                <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}}>
                   <ReportCustomTextField multiline />
                </div>
                <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}}>
                       <ReportCustomTextField multiline />
                </div>
                <div className="col-md-4 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}}>
                     <ReportCustomTextField multiline />
                </div>
              </div>
              <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black',height:'25px'}}>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <b>CONSTRUCTION STATUS</b>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <p>Tower Name</p>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <p>Construction Stage %</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                          <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                         <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0 text-center">Note :</p>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                         <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black',height:'25px'}}>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 d-flex justify-content-center align-items-center" style={{ border: '1px solid black',height:'25px'}}>
                        <p className="mb-0 text-center">Project Completion %</p>
                    </div>
                    <div className="col-md-9 d-flex justify-content-center align-items-center" style={{ border: '1px solid black',height:'25px'}}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black',height:'25px'}}>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 d-flex justify-content-center align-items-center" style={{ border: '1px solid black',height:'25px'}}>
                        <p className="mb-0 text-center">Construction Activity</p>
                    </div>
                    <div className="col-md-9 d-flex justify-content-center align-items-center" style={{ border: '1px solid black',height:'25px'}}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black',height:'25px'}}>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <b>ADDITIONAL CHARGES</b>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                          <p className="mb-0 text-center">Charge Type</p>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                          <p className="mb-0 text-center">Charge Detail</p>
                    </div>
                    <div className="col-md-1 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                          <p className="mb-0 text-center"> Charge<br></br>(Per Sqft)</p>
                    </div>
                    <div className="col-md-1 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                          <p className="mb-0 text-center">From Floor</p>
                    </div>
                    <div className="col-md-1 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                          <p className="mb-0 text-center">To Floor </p>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                          <p className="mb-0 text-center">Mandatory</p>
                    </div>
                    <div className="col-md-1 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                          <p className="mb-0 text-center">Resale Value</p>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0 text-center">Remarks</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                          <p className="mb-0 text-center">PLC</p>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                           <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-1 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                           <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-1 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                             <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-1 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                            <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                            <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-1 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                            <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                         <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                          <p className="mb-0 text-center">Club Membership </p>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                           <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-1 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                           <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-1 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                             <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-1 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                            <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                            <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-1 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                            <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                         <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                          <p className="mb-0 text-center">IFMS (Interest Free Maintenance Security) </p>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                           <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-1 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                           <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-1 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                             <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-1 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                            <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                            <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-1 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                            <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                         <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                          <p className="mb-0 text-center">Others</p>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                           <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-1 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                           <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-1 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                             <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-1 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                            <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                            <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-1 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                            <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                         <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black',height:'25px'}}>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <b>REMARKS</b>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-3" style={{ border: '1px solid black'}} >
                        <p className="mb-0">Marketibility of Project</p>
                    </div>
                    <div className="col-md-9 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-3" style={{ border: '1px solid black'}} >
                        <p className="mb-0">Level of Land with topographical condition</p>
                    </div>
                    <div className="col-md-9 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-3" style={{ border: '1px solid black'}} >
                        <p className="mb-0">Comments on Sanction plan verification</p>
                    </div>
                    <div className="col-md-9 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-3" style={{ border: '1px solid black'}} >
                        <p className="mb-0">Market Feedback </p>
                    </div>
                    <div className="col-md-9 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-3" style={{ border: '1px solid black'}} >
                        <p className="mb-0">Any Social Disturbance (As per site visit) </p>
                    </div>
                    <div className="col-md-9 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-3" style={{ border: '1px solid black'}} >
                        <p className="mb-0">Any Legal Litigation (As per site visit) </p>
                    </div>
                    <div className="col-md-9 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-3" style={{ border: '1px solid black'}} >
                        <p className="mb-0">Existing Structure if any and what is proposed action </p>
                    </div>
                    <div className="col-md-9 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-3" style={{ border: '1px solid black'}} >
                        <p className="mb-0">Other Information</p>
                    </div>
                    <div className="col-md-9 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-3" style={{ border: '1px solid black'}} >
                        <p className="mb-0">RERA Registration Number </p>
                    </div>
                    <div className="col-md-9 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-3" style={{ border: '1px solid black'}} >
                        <p className="mb-0">RERA Registration Date </p>
                    </div>
                    <div className="col-md-9 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-3" style={{ border: '1px solid black'}} >
                        <p className="mb-0">RERA Remarks (if any) </p>
                    </div>
                    <div className="col-md-9 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}} >
                          <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <b>FSI DEVIATION</b>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4  d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                          <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-4  d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                         <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-4  d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                          <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black',height:'25px'}}>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <b>OTHER COMMENTS/OBSERVATIONS</b>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}}>
                    <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black',height:'25px'}}>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <b>PAYMENT PLAN</b>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                          <p className="mb-0 text-center">Plan Name</p>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                         <p className="mb-0 text-center"> Discount % </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                               <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                               <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black',height:'25px'}}>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <b>PAYMENT PLAN DETAILS</b>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                          <p className="mb-0 text-center">Payment</p>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                         <p className="mb-0 text-center">  Instalment Number  </p>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                         <p className="mb-0 text-center">  Stage / Time  </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                               <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-4 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                               <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-4 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                               <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                          <p className="mb-0 text-center">Note :</p>
                    </div>
                    <div className="col-md-9 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                            <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black',height:'25px'}}>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <b>PHOTOGRAPHS (Building/Tower wise)</b>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        {/*photo*/}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black',height:'25px'}}>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <b>PROJECT LATTITUDE/LONGITUDE & LOCATION MAP</b>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black',height:'25px'}}>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}}>
                          <p className="mb-0 text-center">Authorized Signatory</p>
                    </div>
                    <div className="col-md-9 d-flex justify-content-center align-items-center" style={{ border: '1px solid black'}}>
                    </div>
                </div>
             </div>
           
        </>
    );
}
export default TechnicalReportFormatForBuilderProject;