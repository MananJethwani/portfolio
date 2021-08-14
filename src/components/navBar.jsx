import React, { useState } from 'react';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    window.addEventListener('resize', () => {
        setWidth(window.innerWidth);
    })

    function toggleNav() {
        setOpen(!open);
        if (open) {
            window.document.querySelector(".show").style.width = "0";
        } else {
            window.document.querySelector(".hide").style.width = "100vw";
        }
    }

    return (
        <div className="navBar">
            <div className="logo"><span>MJ</span></div>
            {
                width > 1250 ? 
                <div className="nav_links"> 
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#work">Work</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <div className="resume_wrapper">
                        <div className="resume_button">
                            <a href="https://drive.google.com/file/d/1EJMJCgASaCk6jwZLEav_qECtPnv3oPp2/view" rel="noreferrer" target="_blank">Resume</a>
                        </div>
                    </div>
                </div> :
                <div className="col-nav">
                    <button className="ham" onClick={toggleNav}><img  alt="" src="https://img.icons8.com/material-rounded/96/ffffff/menu--v1.png"/></button>
                        <div className={open ? "show" : "hide"}>
                            <button className="close" onClick={toggleNav}><img alt="" src="https://img.icons8.com/ios-glyphs/90/ffffff/macos-close.png"/></button>
                            <ul>
                                <li><a href="#about">About</a></li>
                                <li><a href="#experience">Experience</a></li>
                                <li><a href="#work">Work</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                </div>
            }
        </div>
    )
}

export default Navbar;