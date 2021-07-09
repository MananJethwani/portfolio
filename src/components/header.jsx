const Header = () => {
    return (
        <div className="header">
            <div className="header_content">
                <p className="main_line">Hey, I am <em className="green">Manan Jethwani</em> </p>
                <h3 className="subtitle">I am a CSE undergrad at IIITDMJ,  who is Passionate about <em className="green-dull">Competitive programming</em> and <em className="green-dull">Open Source</em></h3>
                <a className="header_link" href="mailto:2019282@iiitdmj.ac.in">Get In Touch !</a>
            </div>
            <div className="header_image_wrapper">
                <img className="header_image" src={require("../static/my_image.jpeg").default} alt=""/>
            </div>
        </div>
    )
}

export default Header;