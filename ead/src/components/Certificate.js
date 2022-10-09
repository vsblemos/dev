import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import "../App.css";
import certificate from "../Image/certificate.jpeg";


const Certificate = () =>{
    return(
    <>
    <div className="course-ctn">
        <div className="d-flex">
            <h2>Last Lesson:</h2>
            <button className="btn btn-primary">Keep Learning</button>
        </div>

        <div className="mainlesson d-flex">
            <img src={certificate}></img>
            <img src={certificate}></img>
            <button className="btn btn-primary">take a test</button>
        </div>
        <div className="miniature">
        <img src={certificate}></img>
        <img src={certificate}></img>
        <img src={certificate}></img>
        </div>
        
    </div>


    </>

    );}

    export default Certificate