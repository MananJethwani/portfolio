const Navbar = () => {
    return (
        <div className="navBar">
            <div className="logo"><span>MJ</span></div>
            <div className="nav_links"> 
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className="resume_wrapper">
                    <div className="resume_button">
                        <a href="../static/Resume.pdf" download>Resume</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;