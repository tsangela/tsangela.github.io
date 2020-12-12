import React, { useEffect, useState } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Route } from 'react-router';
import { enquireScreen } from 'enquire-js';

import styled from 'styled-components';
import About from './views/about';
import Contact from './views/contact';
import Landing from './views/landing';
import Projects from './views/projects';
import NavigationBar from './components/navigation/bar';
import {
  aboutData,
  contactData,
  landingData,
  projectsData,
  idMap,
} from './resources/data';
import { constructPath, getTab } from './resources/utils';

function App() {
  const [tab, setTab] = useState(getTab(window.location.pathname));
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    enquireScreen((b) => setIsMobile(!!b));
  });

  return (
    <Layout>
      <Router basename="/">
        <NavigationBar isMobile={isMobile} tab={tab} setTab={setTab} />
        <Route
          exact
          path={constructPath(idMap.landing.id)}
          render={() => <Landing isMobile={isMobile} data={landingData} />}
        />
        <Route
          exact
          path={constructPath(idMap.projects.id)}
          render={() => <Projects isMobile={isMobile} data={projectsData} />}
        />
        <Route
          exact
          path={constructPath(idMap.about.id)}
          render={() => <About isMobile={isMobile} data={aboutData} />}
        />
        <Route
          exact
          path={constructPath(idMap.contact.id)}
          render={() => <Contact isMobile={isMobile} data={contactData} />}
        />
      </Router>
    </Layout>
  );
}

export default App;

const Layout = styled.div`
  height: 100vh;
`;
