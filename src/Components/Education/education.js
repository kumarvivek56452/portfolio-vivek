import React from "react";
import "./education.css";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css';
import {MdGroupWork} from "react-icons/md"

const Education=()=>{

    const data=[{
        name:"Aklank Boarding School",
        degree:"10th",
        year:"2016",
        desc:"Completed my tenth-grade education from the Central Board of Secondary Education (CBSE) with a distinguished Cumulative Grade Point Average (CGPA) of 9.4"
    },{
        name:"Lovely Diamond School",
        degree:"12th",
        year:"2018",
        desc:"Completed my twelfth-grade education from the Rajasthan Board of Secondary Education (RBSE) with a percentile of 73.8 %"
    },{
        name:"Cochin University of Science and Technology",
        degree:"B.Tech",
        year:"2018-2022",
        desc:"Completed my B.Tech from CUSAT from Electronics and Communication field with Cumulative Grade Point Average (CGPA) of 8.4"
    }]
    const color=["#76448A","#FF1042","#1E8449 " ,"#283747","#F1C40F",]
    return (
        <div className="container shift" id="education">
            <div className="section-title">
                <h5><span className="line">Education</span></h5>
            </div>
            <div className="timeline-section">
                <VerticalTimeline lineColor="#800000">

                {data.map((item,index)=>(
                    <VerticalTimelineElement
                className="vertical-timeline-element--work"
    contentStyle={{ background: color[index], color: '#fff' }}
    contentArrowStyle={{ borderRight: `7px solid  ${color[index]}` }}
    date={item.year}
    dateClassName="date-class"
    iconStyle={{ background: color[index], color: '#fff' }}
    icon={<MdGroupWork />}
  >
    <h3 className="vertical-timeline-element-title">{item.name}</h3>
    <h4 className="vertical-timeline-element-subtitle">{item.degree}</h4>
    <p>
      {item.desc}
    </p>
  </VerticalTimelineElement>
))}


</VerticalTimeline>
            </div>
        </div>
    )
}

export default Education;