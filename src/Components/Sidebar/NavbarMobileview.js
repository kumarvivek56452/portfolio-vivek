import React, { useState } from "react"
import "./NavbarMobileView.css"
import {GiHamburgerMenu} from "react-icons/gi"
import {FcHome, FcNightPortrait,FcTodoList,FcContacts,FcFactory,FcSalesPerformance} from "react-icons/fc"
import {MdBiotech, MdCastForEducation} from "react-icons/md"
import {Link} from "react-scroll"

const NavbarMobileView=()=>{
    const [open,setopen]=useState(false);

    const handleopen=()=>[
        setopen(!open)
    ]  
    return (
        <div className="mobile-view-navbar">
            <div className="navbar-header">
                <p><GiHamburgerMenu size={25} onClick={handleopen}/></p>
            </div>
            {open ? (<div className="mobile-nav">
            <ul>
                        <li className="navbar-item-mobile-view">
                            <Link to="home"
                            spy={true} smooth={true} duration={100} offset={-100}>
                            <FcHome size={25} />Home
                            </Link>
                            
                        </li>
                        <li className="navbar-item-mobile-view">
                        <Link to="about"
                            spy={true} smooth={true} duration={100} offset={-100}>
                                <FcNightPortrait size={25} />About
                            </Link>
                            
                        </li>
                        <li className="navbar-item-mobile-view">
                        <Link to="work-exp"
                            spy={true} smooth={true} duration={100} offset={-100}>
                                <FcFactory size={25} />Work Experience
                            </Link>
                            
                        </li>
                        <li className="navbar-item-mobile-view">
                        <Link to="tech-stack"
                            spy={true} smooth={true} duration={100} offset={-100}>
                                <MdBiotech size={25} />Tech Stack
                            </Link>
                            
                        </li>
                        <li className="navbar-item-mobile-view">
                        <Link to="education"
                            spy={true} smooth={true} duration={100} offset={-100}>
                                <MdCastForEducation size={25} color="orange"/>Education
                            </Link>
                            
                        </li>
                        <li className="navbar-item-mobile-view">
                        <Link to="project"
                            spy={true} smooth={true} duration={100} offset={-100}>
                                <FcTodoList size={25} />Projects
                            </Link>
                            
                        </li>
                        <li className="navbar-item-mobile-view">
                        <Link to="contact"
                            spy={true} smooth={true} duration={100} offset={-100}>
                                <FcContacts size={25} />Contact
                            </Link>
                            
                        </li>
                    </ul>
            </div>) : null}
            
            
        </div>
    )
}

export default NavbarMobileView;