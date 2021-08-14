import ScrollTrigger from 'react-scroll-trigger';
import React, { useEffect } from 'react';
import parse from 'html-react-parser';
import {useState} from 'react';
let first=true;

const data = [
    {
        heading: "Google Summer of Code <span class='green'>@kiwix</span>",
        date: "Jun - Aug 2021",
        content: `<ul>
        <li>Part of GSOC 2021 under Kiwix organisation comprising of 1286 students selected out of over 7000 initial applications.</li><br />
        <li>Collaborating with a diverse team in a remote setup to deliver solutions to real-world problems powered by the latest technologies.</li><br />
        <li>Improved kiwix-serve UI with functionality like dynamic loading using OPDS format and filters.</li></ul>`
    },
    {
        heading: "Co-coordinator, The Prog. Club",
        date: "Jan - Aug 2021",
        content: `<ul>
        <li>Became Co-coordinator of the programming club of IIITDM, Jabalpur</li><br />
        <li>Conducted various sessions and events for the club related to competitive programming and development for junior batches with over 200 participants in most events</li><br />
        <li>Improved kiwix-serve UI with functionality like dynamic loading using OPDS format and filters.</li></ul>`
    },
    {
        heading: "Contributor to Kiwix and TPC",
        date: "",
        content: `<ul>
        <li>Contributed to Openzim and Kiwix under mwoffliner project, working on enhancements like introducing webp which brought down file sizes by 15-20%</li><br />
        <li>Collaborating with a diverse team in a remote setup to deliver solutions to real-world problems powered by the latest technologies.</li><br />
        <li>Collaborated with the programming club@IIITDMJ</li></ul>`
    },
    {
        heading: "5 star at codechef",
        date: "",
        content: `<ul>
        <li>Participated in various algorithm based competition and earned 5* ratting on codechef(2051)</li><br />
        <li>Acheived a global rank of 3766 on codechef</li></ul>`
    },
]

async function enterEffectExp() {
    if(first) {
        await window.document.querySelector(`.exp-block`).classList.add('about-animation');
        for (let index = 1; index <= 4; index++) {
            await window.document.querySelector(`.exp-cube${index}`).classList.add('cubeIn');
        }
        first=false;
      }
}

const Exp = () => {
    const [selected, setSelected] = useState(0);
    const select = function(index) {
        document.getElementsByClassName(`exp-nav-${selected + 1}`)[0].style.color = `#3B3742`;
        setSelected(index)
        document.getElementsByClassName(`exp-nav-${index + 1}`)[0].style.color = `#01DC99`;
        return 0;
    }
    useEffect(() => {
        if(window.pageYOffset >=2000) {
          enterEffectExp();
        }
    });
    return(
        <div id="experience" className="exp-block">
            <ScrollTrigger onEnter={enterEffectExp}>
                <img src={require("../static/cube8.svg").default} className="exp-cube1" alt=""/>
                <img src={require("../static/cube2.svg").default} className="exp-cube2" alt=""/>
                <img src={require("../static/cube2.svg").default} className="exp-cube3" alt=""/>
                <img src={require("../static/cube2.svg").default} className="exp-cube4" alt=""/>
                <h1 className="exp-heading">Acheivements and experiences</h1>
                <div className="exp-line-1"></div>
                <div className="exp-line-2"></div>
                <div className="exp-nav-wrapper">
                    <div className="exp-nav-1 exp-nav" onClick={() => {select(0)}} style={{color: `#01DC99`}}>GSOC 2021</div>
                    <div className="exp-nav-2 exp-nav" onClick={() => {select(1)}} style={{color: `#3B3742`}}>Co-coordinator TPC</div>
                    <div className="exp-nav-3 exp-nav" onClick={() => {select(2)}} style={{color: `#3B3742`}}>Open Source</div>
                    <div className="exp-nav-4 exp-nav" onClick={() => {select(3)}} style={{color: `#3B3742`}}>5 star at codechef</div>
                </div>
                <div className="exp-content-wrapper">
                    <div className="exp-content">
                        <div className="exp-content-heading">{parse(data[selected].heading)}</div>
                        <div className="exp-content-date">{parse(data[selected].date)}</div>
                        <div className="exp-content-inner">{parse(data[selected].content)}</div>
                    </div>
                </div>
            </ScrollTrigger>
        </div>
    )
}

export default Exp;