import React,{useState} from "react"
import "./techstack.css"

const TechStack=()=>{
    const data=[{
        name:"React.js"
    },{
        name:"Node.js"
    },{
        name:"Express.js"
    },{
        name:"MongoDB"
    },{
        name:"JavaScript"
    },{
        name:"CSS"
    },{
        name:"Python"
    },{
        name:"DBMS"
    },{
        name:"Data Structures and Algorithm"
    },{
        name:"OOPs"
    },{
        name:"MySQL"
    },{
        name:"C++"
    },{
        name:"Operating System"
    },{
        name:"High level System Design"
    },{
        name:"Git"
    }]

    const colors=["#D98880","#EC7063","#AF7AC5","#A569BD","#5499C7","#5DADE2","#48C9B0","#45B39D","#52BE80","#58D68D","#F4D03F","#F5B041","#EB984E","#DC7633","#58D68F"]

    const [showMoreTech,sethowMoreTech]=useState(9)

    const loadMore=()=>{
        sethowMoreTech((prev)=>(
            prev+3
        ))
    }

    return (
        <div className="container techstack-section" id="tech-stack">
            <div className="section-title">
                <h5><span className="line">Tech Stack</span></h5>
            </div>
            <div className="row">

                {data.slice(0,showMoreTech).map((item,index)=>(
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>
                        <div className={index==0 ? "text-content-marked text-content" : "text-content"} >
                            <span className="tech-number" style={{backgroundColor:colors[index]}}>{index+1}</span>
                        <p>{item.name}</p>
                    </div>
                    </div>
                ))}
            </div>
            {showMoreTech>=data.length ? null : (<span className="load-More-tech-stack" onClick={loadMore}> Load More...</span>)}
        </div>
    )
}

export default TechStack;