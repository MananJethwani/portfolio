import Navbar from "./components/navBar";
import Header from "./components/header";
import About from "./components/about";
import Exp from "./components/experience.jsx";
import Projects from "./components/projects.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <img className="cube1" src={require("./static/cube1.svg").default} alt=""/>
      <img className="cube2" src={require("./static/cube2.svg").default} alt=""/>
      <img className="cube3" src={require("./static/cube3.svg").default} alt=""/>
      <img className="cube4" src={require("./static/cube4.svg").default} alt=""/>
      <img className="cube5" src={require("./static/cube4.svg").default} alt=""/>
      <Header />
      <About />
      <Exp />
      <Projects />
    </div>
  );
}



export default App;
