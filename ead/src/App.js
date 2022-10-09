import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Course from "./components/Course";
import Certificate from "./components/Certificate";


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
        <div id="main">
        <div id="class-container">
          <h1>Welcome Back</h1>
          <div>
          <Course></Course>
          </div>
        </div>
        <div id="main2">
          <Certificate></Certificate>
        </div>
        </div>
        
      </div>

      <div className="col-3" id="ranking">
      <div id="main">
        <div id="class-container">
          
          <div>
          
          </div>
        </div>



      </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default App;
