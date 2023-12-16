import { useEffect } from "react";
import { useCardEffect } from "../hooks/cardEffect";
import projectsData from "../data/projects.data";
import { StyledProjects } from "../styled-components/StyledProjects";
import { StyledCardsProjects } from "../styled-components/StyledCardsProjects";

const Projects = () => {
  const projects = projectsData.projects;
  useEffect(() => {
    useCardEffect();
  }, []);

  return (
    <StyledProjects id="projects">
      <div className="container">
        <h1>Projects</h1>
        <StyledCardsProjects className="card-project">
          {projects.map((project) => (
            <article className="card-main" key={project.id}>
              <div className="glows"></div>
              <div className="img-preview">
                <img src={project.image} alt="image project" />
              </div>
              <div className="card-content">
                <span className="card-title">{project.title}</span>
                <div className="card-description">
                  <p>{project.description}</p>
                  <a href="">Learn more</a>
                </div>
              </div>
            </article>
          ))}
        </StyledCardsProjects>
      </div>
    </StyledProjects>
  );
};

export default Projects;
