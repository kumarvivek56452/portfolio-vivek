import React from "react";
import "./project.css"
import ProjectList from "./projectList"

const Projects=()=>{

    const data=[
        {
            name:"eCommerce Website for book sales Platform",
            desc:"Designed and implemented a comprehensive solution, utilizing MongoDB for robust data storage, Express.js for efficient server-side operations, React.js for an intuitive user interface, and Node.js for scalable backend development",
            techUsed:[{
                techName:"React.js"
            },{
                techName:"Node.js"
            },{
                techName:"MongoDB"
            },{
                techName:"Express.js"
            },{
                techName:"HTML"
            },{
                techName:"CSS"
            },{
                techName:"Bootstap"
            },{
                techName:"Javascript"
            }]
        },{
            name:"Chat-App",
            desc:"Our chat app provides a user-friendly platform for seamless communication. With its intuitive interface, users can exchange messages in real-time, share multimedia content, and engage in group conversations effortlessly. Advanced features like encryption ensure privacy and security, while customizable settings allow users to personalize their experience. Whether for casual chats or professional collaboration, our app offers a versatile and reliable solution for staying connected",
            techUsed:[{
                techName:"Socket.io"
            },{
                techName:"MongoDB"
            },{
                techName:"Express.js"
            },{
                techName:"HTML"
            },{
                techName:"CSS"
            },{
                techName:"Bootstap"
            },{
                techName:"Javascript"
            },{
                techName:"Node.js"
            },{
                techName:"Zustand"
            },{
                techName:"React"
            }]
        },{
            name:"To-do list",
            desc:"Designed and implemented a robust Todo List application, providing users with a streamlined platform for task management. Leveraged modern web technologies to ensure a responsive and user-friendly interface. Developed features for adding, editing, and deleting tasks, enhancing overall productivity.",
            techUsed:[{
                techName:"Node.js"
            },{
                techName:"MongoDB"
            },{
                techName:"Express.js"
            },{
                techName:"HTML"
            },{
                techName:"CSS"
            },{
                techName:"Bootstap"
            },{
                techName:"Javascript"
            }]
        }
    ]

    return (<div className="container">
        <div className="section-title" id="project">
                <h5><span className="line">Projects</span></h5>
        </div>
        <div className="row">
            {data.map((item,index)=>(
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" key={index}>
                <ProjectList {...item} />
            </div>))}
        </div>
    </div>)
}

export default Projects