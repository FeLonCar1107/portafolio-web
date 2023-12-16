// import homeData from "../../data/home.data";
import Navbar from "../components/Navbar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import { StyledLandingPage } from "../styled-components/StyledLandingPage";
const LandingPage = () => {
  return (
    <StyledLandingPage>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </StyledLandingPage>
  );
};

export default LandingPage;
