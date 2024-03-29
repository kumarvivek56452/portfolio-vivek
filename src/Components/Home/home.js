import React from "react"
import "./home.css"
import Typewriter from "typewriter-effect"
import Resume from "../../Documents/VIVEK_RESUME.pdf"
import {Link} from "react-scroll"

const Home=()=>{
    return (
        <div className="container-fluid home" id="home">
            <div className="container home-content">
                <h1>Hi I'm </h1>
                <h3>
                <Typewriter
                    options={{
                    strings: ["MERN Stack Developer","Frontend Developer", "Backend Developer"],
                    autoStart: true,
                    loop: true,
                    delay:5
                    }}
                />
                </h3>
                <div className="button-for-action">
                    <div className="Hire-me-button">
                    <Link to="contact"
                            spy={true} smooth={true} duration={100} offset={-100}>
                        Contact Me
                        </Link>
                    </div>
                    <div className="Get-resume-btn">
                        <a href={Resume} download="Vivek's Resume">Get Resume</a>
                        
                    </div>
                </div>

            </div>

            
        </div>
    )
}

export default Home;
