import Topbar from "./Components/Topbar/Topbar";
import Intro from "./Components/Intro/Intro";
import Portfolio from "./Components/Portfolio/Portfolio";
import Projects from "./Components/Projects/Projects";
import Tools from "./Components/Tools/Tools";
import Contact from "./Components/Contact/Contact";
import './App.scss';
import { useState } from "react";
import Menu from "./Components/Menu/Menu";
import Aboutme from "./Components/Aboutme/Aboutme";

const App = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Aboutme />
        <Projects />
        <Tools />
        <Contact />
      </div>
    </div>
  );
}

export default App;
