import React from "react";
import { Route, Routes } from "react-router-dom";
import withRouter from "../hooks/withRouter"
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Socialicons } from "../components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path="/resume" element={<RedirectToResume />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

const RedirectToResume = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const hasPDFViewer = navigator.mimeTypes['application/pdf'];
    if (!hasPDFViewer) {
      window.open('/resume/Shetty%20Dhruv%20Resume%20US.pdf', '_blank');
      navigate('/');
    }
  }, [navigate]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%' }}>
      <object data="/resume/Shetty%20Dhruv%20Resume%20US.pdf" type="application/pdf" width="80%" height="100%">
        <p>It appears you don't have a PDF plugin for this browser. You can <a href="/resume/Shetty%20Dhruv%20Resume%20US.pdf">click here to download the PDF file.</a></p>
      </object>
    </div>
  );
}

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
