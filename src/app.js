import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router';
import { enquireScreen } from 'enquire-js';

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
import { getPath, getTab } from './resources/utils';

function App() {
  const [tab, setTab] = useState(getTab(window.location.pathname));
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    enquireScreen((b) => setIsMobile(!!b));
  });

  return (
    <Router>
      <NavigationBar isMobile={isMobile} tab={tab} setTab={setTab} />
      <Route
        exact
        path={getPath(idMap.landing.id)}
        render={() => <Landing isMobile={isMobile} data={landingData} />}
      />
      <Route
        exact
        path={getPath(idMap.projects.id)}
        render={() => <Projects isMobile={isMobile} data={projectsData} />}
      />
      <Route
        exact
        path={getPath(idMap.about.id)}
        render={() => <About isMobile={isMobile} data={aboutData} />}
      />
      <Route
        exact
        path={getPath(idMap.contact.id)}
        render={() => <Contact isMobile={isMobile} data={contactData} />}
      />
    </Router>
  );
}

export default App;
