import React, { useEffect, useState } from 'react';
import { enquireScreen } from 'enquire-js';

import Landing from './views/landing';
import Projects from './views/projects';
import About from './views/about';
import {
  landingData,
  projectsData,
  aboutData,
  contactData,
} from './resources/data';
import Contact from './views/contact';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    enquireScreen((b) => setIsMobile(!!b));
  });

  return (
    <>
      <Landing isMobile={isMobile} data={landingData} />
      <Projects isMobile={isMobile} data={projectsData} />
      <About isMobile={isMobile} data={aboutData} />
      <Contact isMobile={isMobile} data={contactData} />
    </>
  );
}

export default App;
