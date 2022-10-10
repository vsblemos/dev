import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import "../App.css";
import certificate from "../Image/certificate.jpeg";


const Certificate = () =>{
    return(
    <>
    <div className="course-ctn">
            <h2 className="secondary-title">Certificates</h2>
            <h3 className="title">Your Certificates</h3>
        

        <div className="mainlesson d-flex">
            <img src={certificate}></img>
            <img src={certificate}></img>
        </div>
        <div>
            <h3 className="inner-text">Available Certificates</h3>
            <div className="miniature">
                <img src={certificate}></img>
                <img src={certificate}></img>
                <img src={certificate}></img>
            </div>
        </div>
        
    </div>


    </>

    );}

    export default Certificate