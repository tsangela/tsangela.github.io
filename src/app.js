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
import NavigationBar from './components/navigation/bar';

function App() {
  const trimHash = (hash) => hash.charAt(0) === '#' && hash.substring(1);

  const [isMobile, setIsMobile] = useState(false);
  const [id, setId] = useState(trimHash(window.location.hash));

  const scrollListener = (e) => {
    const { hash } = e.path[0].location;
    const trimmed = trimHash(hash);
    console.log(trimmed, id);
    if (trimmed !== id) {
      setId(trimmed);
      console.log(`updated id to ${trimmed}`);
    }
  };

  useEffect(() => {
    console.log(`current id: ${id}`);
    enquireScreen((b) => setIsMobile(!!b));
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  });

  return (
    <>
      <NavigationBar isMobile={isMobile} activeTab={id} />
      <Landing isMobile={isMobile} data={landingData} />
      <Projects isMobile={isMobile} data={projectsData} />
      <About isMobile={isMobile} data={aboutData} />
      <Contact isMobile={isMobile} data={contactData} />
    </>
  );
}

export default App;
