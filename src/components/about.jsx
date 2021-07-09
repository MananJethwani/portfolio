const About = () => {
  return (
    <div id="about" className="about">
      <p className="about_heading">About Me!</p>
      <p className="about_content">
        Hi, I'm a software professional who works to achieve software that
        empowers people, not just businesses. I aim to deliver scalable
        applications and hence, insist over writing the sleek & efficient code
        while maintaining agreement on code-maintenance.<br /><br />I will be graduating
        with a B.Tech in CSE from <a href="https://www.iiitdmj.ac.in/" style={{'text-decoration': 'none'}} className="red">IIITDM, Jabalpur</a> in May 2023. When I'm not
        building software, I like to watch anime, do a lot of gaming, and
        explore the world!<br /><br />I am an Open Source enthusiast with contributions to
        orgs. like Kiwix and Openzim, and I was part of <a href="https://summerofcode.withgoogle.com/projects/#5158540915769344" style={{'text-decoration': 'none'}} className="red">GSOC 2021</a> under kiwix.
        <br /><br />
        Here are a few technologies I've been working with recently:
      </p>
      <img className="about_img_1 about_img" src={require("../static/about_img1.png").default} alt=""/>
      <img className="about_img_2 about_img" src={require("../static/about_img2.png").default} alt=""/>
      <img className="about_img_3 about_img" src={require("../static/about_img3.png").default} alt=""/>
      <p className="about_bullet bullet_1"><img className="bullet_icon" src={require("../static/bullet.svg").default} alt=""/> Node | React | Express</p>
      <p className="about_bullet bullet_2"><img className="bullet_icon" src={require("../static/bullet.svg").default} alt=""/> Python |  Flask</p>
      <p className="about_bullet bullet_3"><img className="bullet_icon" src={require("../static/bullet.svg").default} alt=""/> Git | Open Source</p>
      <p className="about_bullet bullet_4"><img className="bullet_icon" src={require("../static/bullet.svg").default} alt=""/> C | C++</p>
      <p className="about_bullet bullet_5"><img className="bullet_icon" src={require("../static/bullet.svg").default} alt=""/> MongoDB | SQL</p>
      <p className="about_bullet bullet_6"><img className="bullet_icon" src={require("../static/bullet.svg").default} alt=""/> Typescript</p>
      <img src={require("../static/cube7.svg").default} className="about-cube1" alt=""/>
      <img src={require("../static/cube6.svg").default} className="about-cube2" alt=""/>
      <img src={require("../static/cube6.svg").default} className="about-cube3" alt=""/>
      <img src={require("../static/cube6.svg").default} className="about-cube4" alt=""/>
    </div>
  );
};

export default About;
