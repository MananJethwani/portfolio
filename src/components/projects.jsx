const Projects = () => {
    return(
        <div className="project-box">
            <h1 className="project-heading">Few things I have been working on</h1>
            <img src={require("../static/cube6.svg").default} className="project-cube1" alt=""/>
            <img src={require("../static/cube6.svg").default} className="project-cube2" alt=""/>
            <img src={require("../static/cube6.svg").default} className="project-cube3" alt=""/>
            <div className="project-cards">
                <div className="project-card">
                    <div className="card-heading">Project Name</div>
                    <img className="card-github-icon" src={require("../static/github.svg").default} alt=""/>
                    <div className="card-description">Description of a project later to be customized!!</div>
                    <ul className="card-tag-list">
                        <li>tag 1</li>
                        <li>tag 2</li>
                    </ul>
                </div>
                <div className="project-card">
                    <div className="card-heading">Project Name</div>
                    <img className="card-github-icon" src={require("../static/github.svg").default} alt=""/>
                    <div className="card-description">Description of a project later to be customized!!</div>
                    <ul className="card-tag-list">
                        <li>tag 1</li>
                        <li>tag 2</li>
                    </ul>
                </div>
                <div className="project-card">
                    <div className="card-heading">Project Name</div>
                    <img className="card-github-icon" src={require("../static/github.svg").default} alt=""/>
                    <div className="card-description">Description of a project later to be customized!!</div>
                    <ul className="card-tag-list">
                        <li>tag 1</li>
                        <li>tag 2</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Projects;