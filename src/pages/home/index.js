import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { GrowthTicker } from "../../components/growthticker";
import { BeatLine } from "../../components/beatline";
import { introdata, meta, growthStops } from "../../content_option";
import { Link } from "react-router-dom";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dhruv Shetty",
  jobTitle: "Founding Engineer",
  description: "Product engineer. Founding engineer at TrueMark, an AI writing platform for schools.",
  url: "https://dhruvshetty.com",
  worksFor: { "@type": "Organization", name: "TrueMark", url: "https://truemark.ai" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "New York University" },
  sameAs: ["https://linkedin.com/in/dhruv-k-shetty", "https://github.com/Some1somewhere"],
};

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
          <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            style={{ backgroundImage: `url(${require('../../assets/images/dhruv1.jpg')})` }}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="visually-hidden">Dhruv Shetty, Product Engineer and Founding Engineer at TrueMark</h1>
                <GrowthTicker stops={growthStops} />
                <p className="mb-0x">{introdata.description1}</p>
                <BeatLine beats={introdata.beats} />
                <div className="intro_btn-action pb-5">
                  <Link to="/resume">
                    <div id="button_p" className="ac_btn btn ">
                      My Resume
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/portfolio">
                    <div id="button_p" className="ac_btn btn ">
                      My Portfolio
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
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
      </section>
    </HelmetProvider>
  );
};
