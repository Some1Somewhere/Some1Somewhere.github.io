import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import { truemark } from "../../casestudies";
import { visuals } from "./visuals";
import "./style.css";

export const TrueMarkWork = () => {
  const { hash } = useLocation();

  // Portfolio cards link to /work/truemark#pages etc.; scroll once the page has rendered.
  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>TrueMark | Dhruv Shetty, Product Engineer</title>
        <meta name="description" content="Three things Dhruv Shetty built as the only engineer at TrueMark: Word-style pages for 130,000+ essays, an AI tutor that asks instead of answers, and exam-day submissions at 1,001 an hour." />
      </Helmet>
      <Container className="About-header cs">
        <Row className="mb-4 mt-3 pt-md-3">
          <Col lg="8">
            <p className="cs_kicker">Founding Engineer, 2024 to now</p>
            <h1 className="display-4 mb-3">TrueMark</h1>
            <p className="cs_tagline">{truemark.intro}</p>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <Row className="cs_stats mb-5">
          {truemark.impact.map((s, i) => (
            <Col key={i} xs="6" md="3" className="mb-3">
              <div className="cs_stat_value">{s.value}</div>
              <div className="cs_stat_label">{s.label}</div>
            </Col>
          ))}
        </Row>

        {truemark.stories.map((st) => {
          const Visual = visuals[st.visual];
          return (
            <Fade key={st.slug} triggerOnce>
              <Row className="sec_sp cs_story" id={st.slug}>
                <Col lg="3">
                  <h3 className="color_sec py-4">{st.title}</h3>
                </Col>
                <Col lg="9">
                  {st.image && <img className="cs_image" src={st.image} alt={st.tagline} loading="lazy" />}
                  <Visual />
                  <p>{st.problem}</p>
                  <p>{st.built}</p>
                  <p className="cs_result">{st.result}</p>
                </Col>
              </Row>
            </Fade>
          );
        })}

        <Row className="mt-4 mb-5">
          <Col>
            <Link to="/portfolio">
              <div id="button_p" className="ac_btn btn">Back to Portfolio</div>
            </Link>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
