import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { pyramidProjects, otherProjects, meta } from "../../content_option";
import { Link } from "react-router-dom";
import "./style.css";

const PortfolioSection = ({ title, projects, isPyramid = false }) => (
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
        <Link 
        key={i} 
        to={`/portfolio/${data.projectTitle.toLowerCase().replace(/\s+/g, '-')}`}
        className="po_item_wrapper"
      >
        <div key={i} className="po_item">
          <img 
            src={data.img} 
            alt={data.projectTitle} 
            className={data.isWebScreenshot ? 'web-screenshot' : 'app-screenshot'}
          />
          <div className="content">
              <h3>{data.projectTitle}</h3>
            <p>{data.description}</p>
            <Link to={`/portfolio/${data.projectTitle.toLowerCase().replace(/\s+/g, '-')}`}>
              More Details
            </Link>
            {data.link && (
              <a href={data.link} target="_blank" rel="noopener noreferrer">
                View Product
              </a>
            )}
          </div>
        </div>
        </Link>
      ))}
    </div>
  </>
);

export const Portfolio = () => {
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
        />

        <PortfolioSection 
          title="Work during my time at Pyramid Developers" 
          projects={pyramidProjects} 
          isPyramid={true}
        />
      </Container>
    </HelmetProvider>
  );
};

