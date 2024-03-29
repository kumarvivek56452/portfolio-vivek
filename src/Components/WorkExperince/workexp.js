import React from "react";
import "./workexp.css";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css';
import {MdGroupWork} from "react-icons/md"


const WorkExperience=()=>{

    const data=[{
        companyName:"PwC",
        Position:"Associate 2",
        desc:"Working as Backend Developer for developing respnsive website",
        year:"2022-Present"
    }]

    const color=["#FF7F50","#FF1042"]

    return (
    <div className="container workexperience-section" id="work-exp">
        <div className="section-title">
                <h5><span className="line">Work Experience</span></h5>
        </div>
        <div className="timeline-section">
        <VerticalTimeline lineColor="#800000">

{data.map((item,index)=>(
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: color[index], color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #FF7F50' }}
    date={item.year}
    dateClassName="date-class"
    iconStyle={{ background: color[index], color: '#fff' }}
    icon={<MdGroupWork />}
  >
    <h3 className="vertical-timeline-element-title">{item.companyName}</h3>
    <h4 className="vertical-timeline-element-subtitle">{item.Position}</h4>
    <p>
      {item.desc}
    </p>
  </VerticalTimelineElement>
))}


</VerticalTimeline>
        </div>
        
    </div>)
}

export default WorkExperience;