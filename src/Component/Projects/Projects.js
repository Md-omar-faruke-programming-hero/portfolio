import React, { useEffect } from 'react';
import tuhfah1 from "../../image/tuhfahHome.png"
import tuhfah2 from "../../image/tuhfahHome2.png"
import tuhfah3 from "../../image/tuhfahReview.png"
import tuhfah4 from "../../image/tuhfahUser.png"
import tuhfah5 from "../../image/tuhfahAdmin.png"
import road1 from "../../image/roadHome.png"
import road2 from "../../image/roadhome2.png"
import road3 from "../../image/road3.png"
import road4 from "../../image/road4.png"
import road5 from "../../image/road5.png"
import agency1 from "../../image/agency1.png"
import agency2 from "../../image/agency2.png"
import agency3 from "../../image/agency3.png"
import agency4 from "../../image/agency4.png"
import agency5 from "../../image/agency5.png"
import tour1 from "../../image/ture1.png"
import tour2 from "../../image/tour2.png"
import tour3 from "../../image/ture3.png"
import tour4 from "../../image/tour4.png"



import WorksCard from '../WorksCard/WorksCard';
import Header from '../Header/Header';


const works = [
    {
        id: 1,
        name: 'TuhFah Bakery',
        image1: tuhfah1,
        image2: tuhfah2,
        image3: tuhfah3,
        image4: tuhfah4,
        image5: tuhfah5,

        
        desc: "User can take choose different types and flavours Cake  as their need, track status of their taken services, see all order history. Admin can add new service and delete service that no longer available. Admin can view all order of services and change status of services.Admin can add new admin",
        tools: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase"],
        repo: 'https://github.com/Md-omar-faruke-programming-hero/tuhfahBakeryClientSite',
        live: 'https://sweet-c0rner.web.app/'
    },
    {
        id: 2,
        name: 'Road Alert Driving centre',
        image1: road1,
        image2: road2,
        image3: road3,
        image4: road4,
        image5: road5,

        
        desc: "User can take four types service form this site,they can enrol any course they want, user can get about course details like fees,duration time ,class schedule ect",
        tools: ["React.js","Bootstrap", "Firebase"],
        repo: 'https://github.com/Md-omar-faruke-programming-hero/road-alert',
        live: 'https://road-alert-driving-centre.web.app/home'
    },
    
    {
        id: 3,
        name: 'Creative Agency',
        image1: agency1,
        image2: agency2,
        image3: agency3,
        image4: agency4,
        image5: agency5,

        
        desc: "creative agency is an organization that uses creative strategies to help clients achieve their goals. Creative agencies, sometimes called marketing agencies, typically focus their efforts in one of the following areas: Strategy: How a business serves customers and generates revenue.",
        tools: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase"],
        repo: 'https://github.com/Md-omar-faruke-programming-hero/creative-agency-client',
        live: 'https://creatve-agency-siteee.netlify.app/'
    },
    {
        id: 4,
        name: 'Tour-X',
        image1: tour1,
        image2: tour2,
        image3: tour3,
        image4: tour4,
        

        
        desc: "TourX is a rapidly-growing global online travel agency, TourX is here to help you plan the perfect trip. Whether you're going on holiday, taking a business trip, or looking to set up a corporate travel account, TourX is here to help you travel the world with cheap flights, discount hotels, and train tickets.",
        tools: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase"],
        repo: 'https://github.com/Md-omar-faruke-programming-hero/tourismClientSite',
        live: 'https://t0urism.web.app/'
    }
    
]

const Projects = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
   
    return (
        <>
        <Header></Header>
        <div className="container">
            <h2 className="text-center">Portfolios</h2>
            <div className="row justify-content-center mx-0 my-5">
                {
                    works.map(each=> <WorksCard key={each.id} info={each}></WorksCard>)
                    
                }

            </div>
           

        </div>
        </>
    );
};

export default Projects;