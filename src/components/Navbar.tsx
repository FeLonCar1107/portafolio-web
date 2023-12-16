import { useEffect, useState } from "react";
import { URIs } from "../common/config";
import navbarData from "../data/navbar.data";
import useSectionActive from "../hooks/sectionActive";
import { StyledNavbar } from "../styled-components/StyledNavbar";
import boltIcon from "../assets/svg/bolt.svg";
import githubIcon from "../assets/svg/github.svg";
import linkedinIcon from "../assets/svg/linkedin.svg";
import menuIcon from "../assets/svg/menu-burger.svg";

const Navbar = () => {
  const [hasBorder, setHasBorder] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links: { [key: string]: string } = {
    github: URIs.github,
    linkedin: URIs.linkedin,
  };

  useEffect(() => {
    handleScroll();
    useSectionActive();
  }, []);

  const handleMenu = () => {
    const menu = document.querySelector(".menu");
    if (!isMenuOpen) {
      menu?.classList.add("open");
      setIsMenuOpen(true);
    } else {
      menu?.classList.remove("open");
      setIsMenuOpen(false);
    }
  };

  const handleIconClick = (icon: string) => {
    window.open(links[icon], "_blank");
  };

  const handleScroll = () => {
    const isScrolling = window.scrollY > 0;
    setHasBorder(isScrolling);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  };

  return (
    <header className={`sticky-header ${hasBorder ? "with-border" : ""}`}>
      <StyledNavbar>
        <div id="nav">
          <div id="nav-logo">
            <h2>Felipe</h2>
            <img id="nav-icon" src={boltIcon} alt="icon-bolt" />
          </div>
          <nav id="nav-options">
            <ul>
              <li>
                <a href="#home">{navbarData.section.home}</a>
              </li>
              <li>
                <a href="#about">{navbarData.section.about}</a>
              </li>
              <li>
                <a href="#skills">{navbarData.section.skills}</a>
              </li>
              <li>
                <a href="#projects">{navbarData.section.projects}</a>
              </li>
              <li>
                <a href="#contact">{navbarData.section.contact}</a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="nav-social">
          <img
            className="github-icon"
            src={githubIcon}
            alt="github-logo"
            onClick={() => handleIconClick("github")}
          />
          <img
            className="linkedin-icon"
            src={linkedinIcon}
            alt="linkedin-logo"
            onClick={() => handleIconClick("linkedin")}
          />
        </div>
        <div id="nav-menu" onClick={() => handleMenu()}>
          <img src={menuIcon} alt="menu-icon" />
        </div>
        <div className="menu">
          
        </div>
      </StyledNavbar>
    </header>
  );
};

export default Navbar;
