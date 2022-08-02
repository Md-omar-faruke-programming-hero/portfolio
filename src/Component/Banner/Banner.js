import React from 'react';
import pic from "../../image/green.png"
import git from "../../image/github.png"
import linked from "../../image/linkedin.png"
import  email from "../../image/email.png"
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { Link } from 'react-router-dom';
import LightSpeed from 'react-reveal/LightSpeed';
const Banner = () => {
    return (
    <div className="container mb-5">
        <div className="row px-0 mx-0 align-items-center">
            <div className="col-12 col-md-6">
                <h1>Hi, I'm</h1><br />
                <Fade Fade top big cascade>
                <h2>Md. Omar Faruke</h2>
                </Fade>
                <p>Front End Developer</p>
                <Fade Fade right big cascade>
                <small className="">In this age of information technology, I am skilled in JavaScript (React), Express, MongoDB. Strong collaboration skills in application development, problem-solving, and analytics. I have solved about 300 hundred problems in various online judge.</small> 
                </Fade>
                <LightSpeed right>
               <div className="my-3">
                    <a style={{textDecoration:"none"}}  href="https://github.com/Md-omar-faruke-programming-hero" rel="noreferrer" target="_blank"><img src={git} style={{ width:"50px",marginRight:"15px"}} alt="" /> </a>
                    <a style={{textDecoration:"none"}} href="https://www.linkedin.com/in/mohammad-omar-faruke-550140226/"    rel="noreferrer" target="_blank"><img src={linked} style={{ width:"50px",marginRight:"15px"}} alt="" /> </a>
                    <a href="mailto:farukeomar@gmail.com" rel="noreferrer" target="_blank"><img src={email} style={{ width:"50px",marginRight:"15px"}} alt="" /> </a>
               </div>
               </LightSpeed>
               <Link style={{textDecoration:"none"}} to="/about"><button className="btn btn-success mb-1 me-2 px-5">About me</button> </Link>
               <a href="https://drive.google.com/uc?export=download&id=1aBx7r6qHee6SzBkNfHMLI1uFVxVI4Ib0">
                   <button className="btn btn-outline-success px-5 "><i class=" fas fa-cloud-download-alt"></i>Resume</button>
               </a>

            </div>
            <div className="col-12 col-md-6 ">
            <Zoom right>

                <img src={pic} className="w-100 " alt="" />
             </Zoom>  
            </div>
            
        </div>
    </div>
    );
};

export default Banner;