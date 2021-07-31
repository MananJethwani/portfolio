import ScrollTrigger from 'react-scroll-trigger';

async function enterEffect() {
    console.log('called2');
    for (let index = 1; index <= 5; index++) {
        await window.document.querySelector(`.cube${index}`).classList.add('cubeIn');
    }
}


const Header = () => {
    return (
        <ScrollTrigger onEnter={enterEffect}>
            <img className="cube1" src={require("../static/cube1.svg").default} alt=""/>
            <img className="cube2" src={require("../static/cube2.svg").default} alt=""/>
            <img className="cube3" src={require("../static/cube3.svg").default} alt=""/>
            <img className="cube4" src={require("../static/cube4.svg").default} alt=""/>
            <img className="cube5" src={require("../static/cube4.svg").default} alt=""/>
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
        </ScrollTrigger>
    )
}

export default Header;