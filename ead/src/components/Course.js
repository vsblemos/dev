import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import "../App.css";
import img1 from "../Image/course_1.jpeg";
import img2 from "../Image/course_2.jpeg";
import img3 from "../Image/course_3.jpeg";
import img4 from "../Image/course_4.jpeg";

const Course = () =>{
    return(
    <>
    <div className="course">
        <div className="d-flex">
            <h2>Last Lesson:</h2>
            <button className="btn btn-primary">Keep Learning</button>
        </div>

        <div className="miniature">
        <img src={img1}></img>
        <img src={img2}></img>
        <img src={img3}></img>
        </div>
        <div className="mainlesson d-flex flex-column">
            <img src={img4}></img>
            <button className="btn btn-primary">take a test</button>
        </div>
        
    </div>


    </>

    );}

    export default Course