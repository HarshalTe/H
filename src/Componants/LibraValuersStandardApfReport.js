import React from "react";
import ReportCustomTextField from "./ReportCustomTextField";
import { useState } from "react";
// In src/index.js or src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';
const LibraValuersStandardApfReport = ()=>{
  
    return(
        <>
          <div className="container">
               <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <b>Libra Valuers Standard APF report - </b>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Visit date :</p>
                    </div>
                    <div className="col-md-4" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Date :</p>
                    </div>
                    <div className="col-md-4" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">File Reference No. :</p>
                    </div>
                    <div className="col-md-4" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Sourced By :</p>
                    </div>
                    <div className="col-md-4" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Project Name</p>
                    </div>
                    <div className="col-md-4" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Phone Number :</p>
                    </div>
                    <div className="col-md-4" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <b>BUILDER INFORMATION</b>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Name of the Builder / Developer</p>
                    </div>
                    <div className="col-md-10" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Address of Builder / Developer</p>
                    </div>
                    <div className="col-md-10" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Phone / Contact Numbers</p>
                    </div>
                    <div className="col-md-5" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-5" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Person met on site</p>
                    </div>
                    <div className="col-md-5" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-5" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Architect</p>
                    </div>
                    <div className="col-md-10" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Brief about Builder</p>
                    </div>
                    <div className="col-md-10" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <b>PROJECT DETAILS</b>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Name of the Project</p>
                    </div>
                    <div className="col-md-10" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Address of the Project (as per Plan)</p>
                    </div>
                    <div className="col-md-10" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Address of the Project (as per Site)</p>
                    </div>
                    <div className="col-md-10" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Nearby Landmark</p>
                    </div>
                    <div className="col-md-10" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Class of Locality</p>
                    </div>
                    <div className="col-md-10" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Proximity to Civic Amenities</p>
                    </div>
                    <div className="col-md-5" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-5" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Boundaries</p>
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">North</p>
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">South</p>
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">East</p>
                    </div>
                    <div className="col-md-4 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">West</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">At Site</p>
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                       <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                       <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-4 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                       <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">As per Documents</p>
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                       <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                       <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-4 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                       <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Boundaries matching with the documents provided</p>
                    </div>
                    <div className="col-md-10" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Latitude</p>
                    </div>
                    <div className="col-md-10" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Longitude</p>
                    </div>
                    <div className="col-md-10" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Plot Area Permissible</p>
                    </div>
                    <div className="col-md-10" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Proposed Built Up Area</p>
                    </div>
                    <div className="col-md-10" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Number of wings approved</p>
                    </div>
                    <div className="col-md-10" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Units approved as per plans</p>
                    </div>
                    <div className="col-md-10" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <b>DOCUMENT DETAILS</b>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 d-flex justify-conr planstent-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Building Permission / Commence<br></br>ment Certificate</p>
                    </div>
                    <div className="col-md-10" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">App. Plan Copies & Level of Approvals</p>
                    </div>
                    <div className="col-md-10" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">MAHARERA NO:</p>
                    </div>
                    <div className="col-md-10" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <b>STATUS OF STATUTORY APPROVALS</b>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Name</p>
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Comments</p>
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Status</p>
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Applied Date</p>
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Received Date</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Land Conversion approval / CLU</p>
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                       <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                       <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                       <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Sanction Layout plan Details </p>
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                       <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                       <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                       <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Airport Authority Clearance Status</p>
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                       <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                       <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                       <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Fire Department Clearance Status</p>
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                       <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                       <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                       <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Environment Clearance status </p>
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                       <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                       <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                       <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Commencement Certificate</p>
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                       <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                       <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                       <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Intimation of Disaaproval (IOD)</p>
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                       <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                       <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                       <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">NOC from NHAI, Railway Board</p>
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                       <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                       <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                       <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">NOC from High Rise Committee</p>
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                       <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                       <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                       <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Letter of Intent (LOI) </p>
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                       <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                       <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                       <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">NOC from ULC Department </p>
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                       <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                       <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                       <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">NOC from MIDC for development</p>
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                       <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                       <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                       <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Specific NOC from Local Authority if any (for ex - MHADA for Redevelopment project under MHADA Layout)</p>
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                       <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                       <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                       <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Letter from Structural Engineer of the project stating compliance of IS code related to construction as per  NDMA guidelines</p>
                    </div>
                    <div className="col-md-8 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                       <ReportCustomTextField multiline />
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
        <p className="mb-0 text-center">To Floor</p>
    </div>
    <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
        <p className="mb-0 text-center">Mandatory</p>
    </div>
    <div className="col-md-1 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
        <p className="mb-0 text-center">Resale Value </p>
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
        <p className="mb-0 text-center">IFMS (Interest Free Maintenance Security)</p>
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
        <p className="mb-0 text-center">IFMS (Interest Free Maintenance Security)</p>
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
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <b>REMARKS</b>
                    </div>
    </div>
    <div className="row">
                    <div className="col-md-6 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Marketibility of Project</p>
                    </div>
                    <div className="col-md-6" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
    </div>
    <div className="row">
                    <div className="col-md-6 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Level of Land with topographical condition</p>
                    </div>
                    <div className="col-md-6" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
    </div>
    <div className="row">
                    <div className="col-md-6 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Comments on Sanction plan verification</p>
                    </div>
                    <div className="col-md-6" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
    </div>
    <div className="row">
                    <div className="col-md-6 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Market Feedback</p>
                    </div>
                    <div className="col-md-6" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
    </div>
    <div className="row">
                    <div className="col-md-6 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Any Social Disturbance (As per site visit)</p>
                    </div>
                    <div className="col-md-6" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
    </div>
    <div className="row">
                    <div className="col-md-6 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Any Legal Litigation (As per site visit) </p>
                    </div>
                    <div className="col-md-6" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
    </div>
    <div className="row">
                    <div className="col-md-6 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Existing Structure if any and what is proposed action </p>
                    </div>
                    <div className="col-md-6" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
    </div>
    <div className="row">
                    <div className="col-md-6 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Other Information</p>
                    </div>
                    <div className="col-md-6" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
    </div>
    <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <b>LAND/ BUILDING DETAILS</b>
                    </div>
     </div>
     <div className="row">
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Approved Land Use</p>
                    </div>
                    <div className="col-md-10" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
       </div>
       <div className="row">
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Type of construction</p>
                    </div>
                    <div className="col-md-10" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
       </div>
       <div className="row">
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Over-all Quality of construction </p>
                    </div>
                    <div className="col-md-10" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
       </div>
       <div className="row">
          <div className="col-md">
              <div className="row">
                   <div className="col-md-2  d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0 text-center">Varad Heights</p>
                   </div>
                   <div className="col-md-10">
                       <div className="row">
                            <div className="col-md d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                                <p className="mb-0 text-center">Flooring</p>
                            </div>
                            <div className="col-md" style={{ border: '1px solid black' }}>
                                <ReportCustomTextField multiline />
                            </div>
                       </div>
                       <div className="row">
                            <div className="col-md d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                                <p className="mb-0 text-center">Doors</p>
                            </div>
                            <div className="col-md" style={{ border: '1px solid black' }}>
                                <ReportCustomTextField multiline />
                            </div>
                       </div>
                       <div className="row">
                            <div className="col-md d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                                <p className="mb-0 text-center">Windows</p>
                            </div>
                            <div className="col-md" style={{ border: '1px solid black' }}>
                                <ReportCustomTextField multiline />
                            </div>
                       </div>
                       <div className="row">
                            <div className="col-md d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                                <p className="mb-0 text-center">Kitchen Platfrom</p>
                            </div>
                            <div className="col-md" style={{ border: '1px solid black' }}>
                                <ReportCustomTextField multiline />
                            </div>
                       </div>
                       <div className="row">
                            <div className="col-md d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                                <p className="mb-0 text-center">Concealed Plumbing</p>
                            </div>
                            <div className="col-md" style={{ border: '1px solid black' }}>
                                <ReportCustomTextField multiline />
                            </div>
                       </div>
                       <div className="row">
                            <div className="col-md d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                                <p className="mb-0 text-center">Concealed Electrification</p>
                            </div>
                            <div className="col-md" style={{ border: '1px solid black' }}>
                                <ReportCustomTextField multiline />
                            </div>
                       </div>
                       <div className="row">
                            <div className="col-md d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                                <p className="mb-0 text-center">Other</p>
                            </div>
                            <div className="col-md" style={{ border: '1px solid black' }}>
                                <ReportCustomTextField multiline />
                            </div>
                       </div>
                   </div>
              </div>
          </div>
       </div>
       <div className="row">
                            <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                                <p className="mb-0">Amenities within Project</p>
                            </div>
                            <div className="col-md-5 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                                 <p className="mb-0 text-center">Lift</p>
                            </div>
                            <div className="col-md-5" style={{ border: '1px solid black' }}>
                                <ReportCustomTextField multiline />
                            </div>
        </div>
        <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <b>VIOLATIONS OBSERVED IF ANY</b>
                    </div>
         </div>
         <div className="row">
                            <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                                <p className="mb-0">Risk associated ( if any )</p>
                            </div>
                            <div className="col-md-10" style={{ border: '1px solid black' }}>
                                <ReportCustomTextField multiline />
                            </div>
        </div>
        <div className="row">
                            <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                                <p className="mb-0 text-center">Is the property in any Negative List/ Unauthorised Layout as per authorities( if any)</p>
                            </div>
                            <div className="col-md-10" style={{ border: '1px solid black' }}>
                                <ReportCustomTextField multiline />
                            </div>
        </div>
        <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <b>RATES AND VALUE</b>
                    </div>
         </div>
         <div className="row">
                            <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                                <p className="mb-0">Rate in the Vicinity for similar properties</p>
                            </div>
                            <div className="col-md-10" style={{ border: '1px solid black' }}>
                                <ReportCustomTextField multiline />
                            </div>
        </div>
        <div className="row">
                            <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                                <p className="mb-0">Rate of Flats as quoted by builder</p>
                            </div>
                            <div className="col-md-10" style={{ border: '1px solid black' }}>
                                <ReportCustomTextField multiline />
                            </div>
        </div>
        <div className="row">
                            <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                                <p className="mb-0">Recommended Rate of Flats </p>
                            </div>
                            <div className="col-md-10" style={{ border: '1px solid black' }}>
                                <ReportCustomTextField multiline />
                            </div>
        </div>
        <div className="row">
                            <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                                <p className="mb-0">Floor Rise</p>
                            </div>
                            <div className="col-md-10" style={{ border: '1px solid black' }}>
                                <ReportCustomTextField multiline />
                            </div>
         </div>
         <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <b>COMPLETION STATUS</b>
                    </div>
         </div>
          <div className="row">
                            <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                                <p className="mb-0">Stage of Construction</p>
                            </div>
                            <div className="col-md-10" style={{ border: '1px solid black' }}>
                                <ReportCustomTextField multiline />
                            </div>
          </div>
          <div className="row">
          <div className="col-md">
              <div className="row">
                   <div className="col-md-2  d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0 text-center">% of Completion</p>
                   </div>
                   <div className="col-md-10">
                       <div className="row">
                            <div className="col-md d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                                <p className="mb-0 text-center">Building No./Wing</p>
                            </div>
                            <div className="col-md d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                               <p className="mb-0 text-center">Progress</p>
                            </div>
                            <div className="col-md d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                                <p className="mb-0 text-center">Recommendation</p>
                            </div>
                            <div className="col-md d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                               <p className="mb-0 text-center">Remark</p>
                            </div>
                       </div>
                   </div>
              </div>
          </div>
       </div>
          <div className="row">
          <div className="col-md">
              <div className="row">
                   <div className="col-md-2  d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0 text-center">Varad Heights</p>
                   </div>
                   <div className="col-md-10">
                       <div className="row">
                            <div className="col-md" style={{ border: '1px solid black' }}>
                                <ReportCustomTextField multiline />
                            </div>
                            <div className="col-md" style={{ border: '1px solid black' }}>
                                <ReportCustomTextField multiline />
                            </div>
                            <div className="col-md" style={{ border: '1px solid black' }}>
                                <ReportCustomTextField multiline />
                            </div>
                            <div className="col-md" style={{ border: '1px solid black' }}>
                                <ReportCustomTextField multiline />
                            </div>
                       </div>
                       <div className="row">
                            <div className="col-md" style={{ border: '1px solid black' }}>
                                <ReportCustomTextField multiline />
                            </div>
                            <div className="col-md" style={{ border: '1px solid black' }}>
                                <ReportCustomTextField multiline />
                            </div>
                            <div className="col-md" style={{ border: '1px solid black' }}>
                                <ReportCustomTextField multiline />
                            </div>
                            <div className="col-md" style={{ border: '1px solid black' }}>
                                <ReportCustomTextField multiline />
                            </div>
                       </div>
                       <div className="row">
                            <div className="col-md" style={{ border: '1px solid black' }}>
                                <ReportCustomTextField multiline />
                            </div>
                            <div className="col-md" style={{ border: '1px solid black' }}>
                                <ReportCustomTextField multiline />
                            </div>
                            <div className="col-md" style={{ border: '1px solid black' }}>
                                <ReportCustomTextField multiline />
                            </div>
                            <div className="col-md" style={{ border: '1px solid black' }}>
                                <ReportCustomTextField multiline />
                            </div>
                       </div>
                       <div className="row">
                            <div className="col-md" style={{ border: '1px solid black' }}>
                                <ReportCustomTextField multiline />
                            </div>
                            <div className="col-md" style={{ border: '1px solid black' }}>
                                <ReportCustomTextField multiline />
                            </div>
                            <div className="col-md" style={{ border: '1px solid black' }}>
                                <ReportCustomTextField multiline />
                            </div>
                            <div className="col-md" style={{ border: '1px solid black' }}>
                                <ReportCustomTextField multiline />
                            </div>
                       </div>
                       <div className="row">
                           <div className="col-md" style={{ border: '1px solid black' }}>
                                <ReportCustomTextField multiline />
                            </div>
                            <div className="col-md" style={{ border: '1px solid black' }}>
                                <ReportCustomTextField multiline />
                            </div>
                            <div className="col-md" style={{ border: '1px solid black' }}>
                                <ReportCustomTextField multiline />
                            </div>
                            <div className="col-md" style={{ border: '1px solid black' }}>
                                <ReportCustomTextField multiline />
                            </div>
                       </div>
                       <div className="row">
                           <div className="col-md" style={{ border: '1px solid black' }}>
                                <ReportCustomTextField multiline />
                            </div>
                            <div className="col-md" style={{ border: '1px solid black' }}>
                                <ReportCustomTextField multiline />
                            </div>
                            <div className="col-md" style={{ border: '1px solid black' }}>
                                <ReportCustomTextField multiline />
                            </div>
                            <div className="col-md" style={{ border: '1px solid black' }}>
                                <ReportCustomTextField multiline />
                            </div>
                       </div>
                       <div className="row">
                           <div className="col-md" style={{ border: '1px solid black' }}>
                                 <ReportCustomTextField multiline />
                            </div>
                            <div className="col-md" style={{ border: '1px solid black' }}>
                                <ReportCustomTextField multiline />
                            </div>
                            <div className="col-md" style={{ border: '1px solid black' }}>
                                <ReportCustomTextField multiline />
                            </div>
                            <div className="col-md" style={{ border: '1px solid black' }}>
                                <ReportCustomTextField multiline />
                            </div>
                       </div>
                   </div>
              </div>
          </div>
       </div>
       <div className="row">
                        <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                            <p className="mb-0 text-center">Stage of Construction</p>
                        </div>
                         <div className="col-md" style={{ border: '1px solid black' }}>
                                 <ReportCustomTextField multiline />
                          </div>
                            <div className="col-md" style={{ border: '1px solid black' }}>
                                <ReportCustomTextField multiline />
                            </div>
                            <div className="col-md" style={{ border: '1px solid black' }}>
                                <ReportCustomTextField multiline />
                            </div>
                            <div className="col-md" style={{ border: '1px solid black' }}>
                                <ReportCustomTextField multiline />
                            </div>
       </div>
       <div className="row">
                        <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                            <p className="mb-0 text-center">RERA no. & Phase</p>
                        </div>
                         <div className="col-md" style={{ border: '1px solid black' }}>
                                 <ReportCustomTextField multiline />
                          </div>
                            <div className="col-md" style={{ border: '1px solid black' }}>
                                <ReportCustomTextField multiline />
                            </div>
       </div>
       <div className="row">
                        <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                            <p className="mb-0 text-center">Date of commencement (as per RERA)</p>
                        </div>
                         <div className="col-md" style={{ border: '1px solid black' }}>
                                 <ReportCustomTextField multiline />
                          </div>
                            <div className="col-md" style={{ border: '1px solid black' }}>
                                <ReportCustomTextField multiline />
                            </div>
       </div>
       <div className="row">
                        <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                            <p className="mb-0">Proposed Date of Completion (as per RERA)</p>
                        </div>
                         <div className="col-md" style={{ border: '1px solid black' }}>
                                 <ReportCustomTextField multiline />
                          </div>
                            <div className="col-md" style={{ border: '1px solid black' }}>
                                <ReportCustomTextField multiline />
                            </div>
       </div>
       <div className="row">
                        <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                            <p className="mb-0">Proposed Date of Completion (as per developer)</p>
                        </div>
                         <div className="col-md" style={{ border: '1px solid black' }}>
                                 <ReportCustomTextField multiline />
                          </div>
       </div>
       <div className="row">
                        <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                            <p className="mb-0">Proposed Date of Completion (as per our opinion)</p>
                        </div>
                         <div className="col-md" style={{ border: '1px solid black' }}>
                                 <ReportCustomTextField multiline />
                          </div>
       </div>
       <div className="row">
                        <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                            <p className="mb-0">Annexure/remark if any</p>
                        </div>
                         <div className="col-md" style={{ border: '1px solid black' }}>
                                 <ReportCustomTextField multiline />
                          </div>
                           
       </div>
       <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <b>Declaration</b>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Place</p>
                    </div>
                    <div className="col-md-10 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Date</p>
                    </div>
                    <div className="col-md-10 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Name of the Valuer</p>
                    </div>
                    <div className="col-md-10 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <b>PHOTOGRAPHS </b>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <b>PROJECT LATTITUDE/LONGITUDE & LOCATION MAP</b>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <b>LAYOUT PLAN</b>
                    </div>
                </div>
                <div className="row">
                        <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                            <p className="mb-0">Authorized Signatory Name & Signature</p>
                        </div>
                         <div className="col-md" style={{ border: '1px solid black' }}>
                                
                          </div>
                           
               </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <b>Annexure</b>
                    </div>
                </div>
          </div>
        </>
    );
}
export default LibraValuersStandardApfReport;