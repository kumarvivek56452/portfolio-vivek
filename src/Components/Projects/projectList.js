import React, { useState } from "react";
import {FcExpand, FcCollapse} from "react-icons/fc"
import "./project.css"

const ProjectList=({name,desc,techUsed})=>{

    const [show,setshow]=useState(true)
    const handleClick=()=>{
        setshow(!show)
    }

    return (
    <div className="project-list">
        <div className="title-and-collapse-option" onClick={handleClick}>
            <h5>{name}</h5>
            {show ? (<p><FcExpand size={20} /></p>):(<p ><FcCollapse size={20} /></p>)}
        </div>
        {show ? (<div className="row">
            {techUsed &&techUsed.map((tech,index)=>(
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12" key={index}>
                    <div className="tech-used-in-project">
                        <p>{tech.techName}</p>
                    </div>
                </div>
            ))}
        </div>):(<p className="description">{desc}</p>)}
        
    </div>)
}

export default ProjectList