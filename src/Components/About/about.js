import React from "react"
import "./about.css"
import pic from "../../Documents/vk_img.png"

const About=()=>{
    return (<div className="container about-section" id="about">
        
        <div className="row">
            
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="about-image">
                    <img src={pic} alt="vivek_img" />
                    </div>

                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="about-details">
                        <div className="about-title">
                            <h5><span className="line">About Me</span></h5>
                            
                        </div>
                        <p className="about-brief">Dynamic and results-driven professional with a Bachelor's degree from Cochin University of Science and Technology. Graduating in 2022 with CGPA of 8.4, I have honed my skills in both technical and core computer science domains. Currently serving as an Associate at PwC, I bring a wealth of experience in analytical thinking, problem-solving, and adaptability to diverse work environments. Proficient in the MERN stack, I am eager to leverage my technical knowledge and contribute to impactful software development projects. Excited about the prospect of joining a forward-thinking team, I am poised to bring my unique insights to the world of software development.</p>

                    </div>

                </div>
        </div>
    </div>)
}

export default About;