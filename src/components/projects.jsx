import ScrollTrigger from 'react-scroll-trigger';
import React, { useEffect } from 'react';
let first=true;

async function enterEffectProject(){
    if(first) {
        for (let index = 1; index <= 3; index++) {
            await window.document.querySelector(`.project-cube${index}`).classList.add('cubeIn');
        }
        await window.document.querySelector(`.project-heading`).classList.add('about-animation');
        let i=300;
        window.document.querySelectorAll(`.project-card`).forEach(card => {
            setTimeout(() => {
                card.classList.add(`about-animation`);
            }, i);
            i+=300;
        });
        first=false;
      }
}

const Projects = () => {
    useEffect(() => {
        if(window.pageYOffset >=3000) {
          enterEffectProject();
        }
    });
    return(
        <div id="work" className="project-box">
            <ScrollTrigger onEnter={enterEffectProject}>
                <h1 className="project-heading">Few things I have been working on</h1>
                <img src={require("../static/cube6.svg").default} className="project-cube1" alt=""/>
                <img src={require("../static/cube6.svg").default} className="project-cube2" alt=""/>
                <img src={require("../static/cube6.svg").default} className="project-cube3" alt=""/>
                <div className="project-cards">
                    <div className="project-card">
                        <div className="card-heading">Resource Website</div>
                        <a href="https://github.com/BitByte-TPC/resource_website"><img className="card-github-icon" src={require("../static/github.svg").default} alt=""/></a>
                        <div className="card-description">An unofficial resource website for college use to collect and provide various study material in college.</div>
                        <ul className="card-tag-list">
                            <li>React</li>
                            <li>Express</li>
                            <li>Node</li>
                            <li>Mongo</li>
                        </ul>
                    </div>
                    <div className="project-card">
                        <div className="card-heading">TPC-Website</div>
                        <a href="https://github.com/BitByte-TPC/tpc-website"><img className="card-github-icon" src={require("../static/github.svg").default} alt=""/></a>
                        <div className="card-description">A web application for managing day-to-day operations at The Programming club at IIITDMJ.</div>
                        <ul className="card-tag-list">
                            <li>React</li>
                            <li>Express</li>
                            <li>Node</li>
                            <li>Mongo</li>
                        </ul>
                    </div>
                    <div className="project-card">
                        <div className="card-heading">Online Class Attendace Manager</div>
                        <a href="https://github.com/MananJethwani/online_classes_attendance_manager"><img className="card-github-icon" src={require("../static/github.svg").default} alt=""/></a>
                        <div className="card-description">A client side application that uses zoom chat and records attendance.</div>
                        <ul className="card-tag-list">
                            <li>PHP</li>
                            <li>CSS</li>
                            <li>SQL</li>
                        </ul>
                    </div>
                </div>
            </ScrollTrigger>
        </div>
    )
}

export default Projects;