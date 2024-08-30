import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "react-bootstrap";
import { pyramidProjects, otherProjects, meta } from "../../content_option";

export const ProjectDetails = () => {
  const { projectId } = useParams();
  const allProjects = [...pyramidProjects, ...otherProjects];
  const project = allProjects.find(p => p.projectTitle.toLowerCase().replace(/\s+/g, '-') === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>{project.projectTitle} | Dhruv Shetty Portfolio </title>
        <meta name="description" content={project.description} />
        <meta property="og:title" content={`${project.projectTitle} | Dhruv Shetty Portfolio`} />
        <meta property="og:description" content={project.description} />
        <meta property="og:image" content={project.img} />
        <meta property="og:url" content={`https://www.dhruvshetty.com/portfolio/${projectId}`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Container className="About-header">
        <div className="project-details">
          <div className="project-details-content">
            <div className="project-details-inner">
              <div className="project-details-image">
                <img src={project.img} alt={project.projectTitle} />
              </div>
              <div className="project-details-info">
                <h2>{project.projectTitle}</h2>
                <p><strong>Description:</strong> {project.description}</p>
                <p><strong>Info:</strong> {project.info}</p>
                <p><strong>What I focused on:</strong></p>
                {Array.isArray(project.scope) ? (
                  <ul>
                    {project.scope.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{project.scope}</p>
                )}
                <div className="project-buttons">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <div id="button_p" className="ac_btn btn">
                        View Live Project
                      </div>
                    </a>
                  )}
                  <Link to="/portfolio">
                    <div id="button_p" className="ac_btn btn">
                      Back to Portfolio
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </HelmetProvider>
  );
};