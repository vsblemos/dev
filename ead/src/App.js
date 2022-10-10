import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Course from "./components/Course";
import Certificate from "./components/Certificate";
import Ranking from "./components/Ranking";
import Progress from "./components/Progress";


const App = () =>{
  return(
    <>
    <div>
    <Header className="container-fluid"></Header>
    </div>
    <div className="container">
    <div className="row">
      <div className="col-2" id="sidebar">
        <Sidebar></Sidebar>
      </div>
      <div className="col-7" id="courses">
          <h1 className="primary-title">Welcome Back</h1>
        <div className="course-container">
        <div id="class-container">
          
          <Course></Course>
          
        </div>
        <div id="certificate">
          <Certificate></Certificate>
        </div>
        </div>
        
      </div>

      <div className="col-3" id="ranking">
      <div id="main">
        <div >
          <Ranking></Ranking>
        </div>
        <div id="progress">
          <Progress></Progress>

        </div>



      </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default App;
