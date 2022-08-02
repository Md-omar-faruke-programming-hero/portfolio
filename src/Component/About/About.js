import React from 'react';
import pic from "../../image/green.png"
import Header from '../Header/Header';
import git from "../../image/github.png"
import linked from "../../image/linkedin.png"
import  email from "../../image/email.png"

import "./About.css"


const About = () => {

const Expertise = ["JavaScript", "React", "REST API", "React Bootstrap", "Bootstrap", "HTML", "CSS"]
const Comfortable = ["Node.js", "Express.js", "MongoDB", "JSON", "C", "C++", "jQuery", "PHP"]
const Familiar = ["Redux.js", "TypeScript", "SQL", "MySQL"]
const Tools = ["Git", "VS Code", "Chrome Dev tool", "Firebase", "Heroku", "Figma", "Photoshop", "XD"]

    return (
        <>
        <Header></Header>
      <div className="container mb-5">
            <div className="row mx-0 px-0">
            <div className="col-md-6 col-12">
                <div>
                <img className="w-50" src={pic} alt="" />
                </div>
                <div>
                <h2>Hi, I'm Omar Faruke</h2>
                <p>In this age of information technology, I am skilled in JavaScript (React), Express, MongoDB.Strong collaboration skills in application development, problem-solving, and analytics. I havesolved about 300 hundred problems in various online judge.</p>
            </div>
            <div className="my-3">
                    <a style={{textDecoration:"none"}}  href="https://github.com/Md-omar-faruke-programming-hero" rel="noreferrer" target="_blank"><img src={git} style={{ width:"50px",marginRight:"15px"}} alt="" /> </a>
                    <a style={{textDecoration:"none"}} href="https://www.linkedin.com/in/mohammad-omar-faruke-550140226/"    rel="noreferrer" target="_blank"><img src={linked} style={{ width:"50px",marginRight:"15px"}} alt="" /> </a>
                    <a href="mailto:farukeomar@gmail.com" rel="noreferrer" target="_blank"><img src={email} style={{ width:"50px",marginRight:"15px"}} alt="" /> </a>
            </div>
            
               

            </div>
            

            <div  className="col-md-6 col-12">
                <h1 className="skil">Skills</h1>
                <div>
                    <h5 className="border-bottom border-3 border-dark w-25">Expertise</h5>
                    {
                      Expertise.map(e=> <h5 className="mb-2 d-inline-block"><span className="me-3 badge bg-secondary ">{e}</span></h5>)  
                    }
                </div>
                <div>
                    <h5 className="border-bottom border-3 border-dark w-25">Comfortable</h5>
                    {
                      Comfortable.map(c=> <h5 className="mb-2 d-inline-block"><span className="me-3 badge bg-secondary ">{c}</span></h5>)  
                    }
                </div>
                <div>
                    <h5 className="border-bottom border-3 border-dark w-25">Familiar</h5>
                    {
                      Familiar.map(f=><h5 className="mb-2 d-inline-block"><span className="me-3 badge bg-secondary ">{f}</span></h5> )  
                    }
                </div>
                <div>
                    <h5 className="border-bottom border-3 border-dark w-25">Tools</h5>
                    {
                      Tools.map(t=> <h5 className=" mb-2 d-inline-block"><span className="me-3 badge bg-secondary ">{t}</span></h5>)  
                    }
                </div>

            </div>
            
        </div>

      </div>
      </>
    );
};

export default About;