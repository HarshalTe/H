import React from "react";
import ReportCustomTextField from "./ReportCustomTextField";

// In src/index.js or src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';


const AdityaBirlaHousingFinanceLimited = () => {
    return (
        <>
            <div className="container" >
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <b>ADITYA BIRLA HOUSING FINANCE LIMITED - JAY GURUPRASAD CHSL</b>
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
                        <b>BUILDER INFORMATION </b>
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
                        <p className="mb-0">Address of Builder / Developers</p>
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
                        <p className="mb-0">Name of the Project</p>
                    </div>
                    <div className="col-md-10" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
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
                        <p className="mb-0">NEAREST BUS STOP</p>
                    </div>
                    <div className="col-md-4" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">NEAREST RAILWAY STATION</p>
                    </div>
                    <div className="col-md-4" style={{ border: '1px solid black' }}>
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
                        <b>DOCUMENT DETAILS	</b>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Building Permission / Commencement Certificate</p>
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
                        <p className="mb-0">No. of Shops/Offices /Showrooms</p>
                    </div>
                    <div className="col-md-10" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">No. of Flats / Sale Area. & Carpet area of Flat</p>
                    </div>
                    <div className="col-md-10" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                   <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <b>Refre Annexure Below</b>
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
                        <p className="mb-0">Over-all Quality of construction</p>
                    </div>
                    <div className="col-md-10" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                     <div className="col-md">
                        <div className="row">
                              <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                                  <p>Sai Proviso Sapphire</p>
                              </div>
                              <div className="col-md-10">
                                <div className="row">
                                     <div className="col-md" style={{ border: '1px solid black' }}>
                                         <p>Flooring</p>
                                     </div>
                                     <div className="col-md" style={{ border: '1px solid black' }}>
                                         <ReportCustomTextField multiline />
                                     </div>
                                </div>
                                <div className="row">
                                     <div className="col-md" style={{ border: '1px solid black' }}>
                                        <p>Doors</p>
                                     </div>
                                     <div className="col-md" style={{ border: '1px solid black' }}>
                                       <ReportCustomTextField multiline />
                                     </div>
                                </div>
                                <div className="row">
                                     <div className="col-md" style={{ border: '1px solid black' }}>
                                        <p>Windows</p>
                                     </div>
                                     <div className="col-md" style={{ border: '1px solid black' }}>
                                       <ReportCustomTextField multiline />
                                     </div>
                                </div>
                                <div className="row">
                                     <div className="col-md" style={{ border: '1px solid black' }}>
                                       <p>Kitchen Platfrom</p>
                                     </div>
                                     <div className="col-md" style={{ border: '1px solid black' }}>
                                        <ReportCustomTextField multiline />
                                     </div>
                                </div>
                                <div className="row">
                                     <div className="col-md" style={{ border: '1px solid black' }}>
                                        <p>Concealed Plumbing</p>
                                     </div>
                                     <div className="col-md" style={{ border: '1px solid black' }}>
                                        <ReportCustomTextField multiline />
                                     </div>
                                </div>
                                <div className="row">
                                     <div className="col-md" style={{ border: '1px solid black' }}>
                                        <p>Concealed Electrification</p>
                                     </div>
                                     <div className="col-md" style={{ border: '1px solid black' }}>
                                        <ReportCustomTextField multiline />
                                     </div>
                                </div>
                                <div className="row">
                                     <div className="col-md" style={{ border: '1px solid black' }}>
                                        <p>Other</p>
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
                        <ReportCustomTextField multiline />
                    </div>
                    <div className="col-md-5 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
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
                    <div className="col-md-10 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Is the property in any Negative List/Unauthorised Layout as per authorities( if any)</p>
                    </div>
                    <div className="col-md-10 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
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
                    <div className="col-md-10 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Rate in the Vicinity for similar properties</p>
                    </div>
                    <div className="col-md-10 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Recommended Rate of Flats </p>
                    </div>
                    <div className="col-md-10 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Floor Rise</p>
                    </div>
                    <div className="col-md-10 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <b>COMPLETION STATUS</b>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <b>Stage of Construction</b>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">% of Completion</p>
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Building No./Wing</p>
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Progress</p>
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Recommended %</p>
                    </div>
                    <div className="col-md-4 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Remark</p>
                    </div>
                </div>
                <div className="row">
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
                    <div className="col-md-4 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                         <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Stage of Construction</p>
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
                        <p className="mb-0">RERA no. & Phase</p>
                    </div>
                    <div className="col-md-10 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Date of commencement (as per RERA)</p>
                    </div>
                    <div className="col-md-10 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Proposed Date of Completion (as per RERA)</p>
                    </div>
                    <div className="col-md-10 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Proposed Date of Completion (as per developer)</p>
                    </div>
                    <div className="col-md-10 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Proposed Date of Completion (as per our opinion)</p>
                    </div>
                    <div className="col-md-10 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <ReportCustomTextField multiline />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
                        <p className="mb-0">Annexure/remark if any</p>
                    </div>
                    <div className="col-md-10 d-flex justify-content-start align-items-center" style={{ border: '1px solid black' }}>
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
                    <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ border: '1px solid black' }}>
                        <b>Annexure</b>
                    </div>
                </div>
            </div>
          
        </>
    );
}

export default AdityaBirlaHousingFinanceLimited;
