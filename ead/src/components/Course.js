import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import "../App.css"
import Gallery from "./Gallery";



const Course = () =>{
    return(
    <>
    <div className="course-ctn">
        <div className="d-flex">
            <h2>Last Lesson:</h2>
            <button className="btn btn-primary">Keep Learning</button>
            
        </div>
        <div>
        <Gallery></Gallery>
        </div>
        
    </div>


    </>

    );}

    export default Course