import React from "react"
import "./sidebarList.css"
import profilepic from "../../Documents/vk_img.png"
import {FcHome, FcNightPortrait,FcTodoList,FcContacts,FcFactory,FcSalesPerformance} from "react-icons/fc"
import {MdBiotech, MdCastForEducation} from "react-icons/md"
import {Link} from "react-scroll"


const SideBarList=({expandSideBar})=>{
    console.log(expandSideBar)
    return (
    // Allows to group mutliple children without extra DOM
        <React.Fragment>
            {expandSideBar ? (
                <div className="navbar-items">
                <div className="sidebar-profile-pic">
                    <img src={profilepic} alt="profile pic" />
                    <ul>
                        <li className="nav-item">
                            <Link to="home"
                            spy={true} smooth={true} duration={100} offset={-100}>
                            <FcHome size={25} />Home
                            </Link>
                            
                        </li>
                        <li className="nav-item">
                        <Link to="about"
                            spy={true} smooth={true} duration={100} offset={-100}>
                                <FcNightPortrait size={25} />About
                            </Link>
                            
                        </li>
                        <li className="nav-item">
                        <Link to="work-exp"
                            spy={true} smooth={true} duration={100} offset={-100}>
                                <FcFactory size={25} />Work Experience
                            </Link>
                            
                        </li>
                        <li className="nav-item">
                        <Link to="tech-stack"
                            spy={true} smooth={true} duration={100} offset={-100}>
                                <MdBiotech size={25} />Tech Stack
                            </Link>
                            
                        </li>
                        <li className="nav-item">
                        <Link to="education"
                            spy={true} smooth={true} duration={100} offset={-100}>
                                <MdCastForEducation size={25} color="orange"/>Education
                            </Link>
                            
                        </li>
                        <li className="nav-item">
                        <Link to="project"
                            spy={true} smooth={true} duration={100} offset={-100}>
                                <FcTodoList size={25} />Projects
                            </Link>
                            
                        </li>
                        <li className="nav-item">
                        <Link to="contact"
                            spy={true} smooth={true} duration={100} offset={-100}>
                                <FcContacts size={25} />Contact
                            </Link>
                            
                        </li>
                    </ul>
                </div>

            </div>
            ) : (
                <div className="navbar-items">
                <div className="sidebar-profile-pic">
                    
                    <ul>
                        <li className="nav-item">
                            <Link to="home"
                            spy={true} smooth={true} duration={100} offset={-100}>
                            <FcHome size={25} />
                            </Link>
                            
                        </li>
                        <li className="nav-item">
                        <Link to="about"
                            spy={true} smooth={true} duration={100} offset={-100}>
                                <FcNightPortrait size={25} />
                            </Link>
                            
                        </li>
                        <li className="nav-item">
                        <Link to="work-exp"
                            spy={true} smooth={true} duration={100} offset={-100}>
                                <FcFactory size={25} />
                            </Link>
                            
                        </li>
                        <li className="nav-item">
                        <Link to="tech-stack"
                            spy={true} smooth={true} duration={100} offset={-100}>
                                <MdBiotech size={25} />
                            </Link>
                            
                        </li>
                        <li className="nav-item">
                        <Link to="education"
                            spy={true} smooth={true} duration={100} offset={-100}>
                                <MdCastForEducation size={25} color="orange"/>
                            </Link>
                            
                        </li>
                        <li className="nav-item">
                        <Link to="project"
                            spy={true} smooth={true} duration={100} offset={-100}>
                                <FcTodoList size={25} />
                            </Link>
                            
                        </li>
                        <li className="nav-item">
                        <Link to="contact"
                            spy={true} smooth={true} duration={100} offset={-100}>
                                <FcContacts size={25} />
                            </Link>
                            
                        </li>
                    </ul>
                </div>

            </div>
            )}
        </React.Fragment>
    )
}

export default SideBarList;