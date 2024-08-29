import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { pyramidProjects, otherProjects, meta } from "../../content_option";
import { Link } from "react-router-dom";
const ProjectDetails = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="project-details">
      <div className="project-details-content">
        <div className="project-details-inner">
          <div className="project-details-image">
            <img src={project.img} alt={project.title} />
          </div>
          <div className="project-details-info">
            <h2>{project.title}</h2>
            <p><strong>Description:</strong> {project.description}</p>
            <p><strong>Info:</strong> {project.info}</p>
            <p><strong>What I focused on:</strong>  </p>{Array.isArray(project.scope) ? (
              <ul>
                {project.scope.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{project.scope}</p> // Fallback if scope is still a string
            )}
            <div className="project-buttons">
              {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div id="button_p" className="ac_btn btn">
                  View Live Project
                  <div className="ring one"></div>
                  <div className="ring two"></div>
                  <div className="ring three"></div>
                </div>
              </a>
              )}
              <Link to="/portfolio">
                <div id="button_p" className="ac_btn btn">
                  Back to Portfolio
                  <div className="ring one"></div>
                  <div className="ring two"></div>
                  <div className="ring three"></div>
                </div>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PortfolioSection = ({ title, projects, onDetailsClick, isPyramid = false }) => (
  <>
    <Row className="mb-5 mt-3 pt-md-3">
      <Col lg="8">
        <div className="title-container">
          <h2 className="display-4 mb-4">{title}</h2>
          {isPyramid && (
            <a href="https://www.pyramiddeveloper.com/" target="_blank" rel="noopener noreferrer">
              <img 
                src={require("../../assets/images/portfolio/pyramid.jpeg")} 
                alt="Pyramid Developers" 
                className="pyramid-logo"
              />
            </a>
          )}
        </div>
        <hr className="t_border my-4 ml-0 text-left" />
      </Col>
    </Row>
    <div className="mb-5 po_items_ho">
      {projects.map((data, i) => (
        <div key={i} className="po_item" onClick={() => onDetailsClick(data)}>
          <img 
            src={data.img} 
            alt={data.title} 
            className={data.isWebScreenshot ? 'web-screenshot' : 'app-screenshot'}
          />
          <div className="content">
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <button>More Details</button>
            {data.link && (
              <a href={data.link} onClick={(e) => e.stopPropagation()}>View Product</a>
            )}
          </div>
        </div>
      ))}
    </div>
  </>
);

export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleDetailsClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
  };

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>


        <PortfolioSection 
          title="Previous Work" 
          projects={otherProjects} 
          onDetailsClick={handleDetailsClick} 
        />

        <PortfolioSection 
          title="Work during my time at Pyramid Developers" 
          projects={pyramidProjects} 
          onDetailsClick={handleDetailsClick} 
          isPyramid={true}
        />


        {selectedProject && (
          <ProjectDetails project={selectedProject} onClose={handleCloseDetails} />
        )}
      </Container>
    </HelmetProvider>
  );
};

