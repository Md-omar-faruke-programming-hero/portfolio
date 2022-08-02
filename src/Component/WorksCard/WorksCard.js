import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import git from "../../image/github.png"

const WorksCard = ({info}) => {
    const{name,image1,image2,image3,image4,image5,desc,tools,repo,live}=info
    const imageCollection=[]
    if(image1) imageCollection.push(image1)
    if(image2) imageCollection.push(image2)
    if(image3) imageCollection.push(image3)
    if(image4) imageCollection.push(image4)
    if(image5) imageCollection.push(image5)
    
    const images = imageCollection.map((size) => ({
        src: `${size}`,
       
      }));
    return (
        <div className="col-md-12 px-md-0">
        <div  className="my-3 shadow row flex-row">
            <div className="col-md-6 m-0 p-0" >
                <Carousel
                   style={{ height:"100%", width:"100%" ,objectFit:"fill"}}
                    images={images}
                    shouldLazyLoad={false}
                    autoPlayInterval={3000}
                    isAutoPlaying={true}
                    hasMediaButton={false}
                    hasSizeButton={false}
                />
            </div>
            <div className="col-md-6" >
            
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">{desc}</p>
        {
            tools.map(tool=> <span class="p-1 card-text me-2 bg-secondary "><small class=" text-white">{tool}</small></span>)
        }
        <div className="my-3">
        <a style={{textDecoration:"none", color:"black"}}  href={repo} rel="noreferrer" target="_blank"><i class="fab fa-github"></i>repository</a>
      <a style={{textDecoration:"none", color:"black"}} href={live}rel="noreferrer" target="_blank"><i class=" ms-5 fas fa-link"></i>live site</a>
        </div>
      </div>
      
    </div>
            
        </div>
    </div>
    );
};

export default WorksCard;