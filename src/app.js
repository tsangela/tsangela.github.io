import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { trimHash } from './resources/utils';
import { setTab } from './store/actions';

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const { tab } = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  const handleTabChange = (e) => {
    const { hash } = e.path[0].location;
    const trimmed = trimHash(hash);
    if (trimmed !== tab) {
      dispatch(setTab(trimmed));
    }
  };

  useEffect(() => {
    enquireScreen((b) => setIsMobile(!!b));
    window.addEventListener('scroll', handleTabChange);
    return () => {
      window.removeEventListener('scroll', handleTabChange);
    };
  });

  return (
    <>
      <NavigationBar isMobile={isMobile} />
      <Landing isMobile={isMobile} data={landingData} />
      <Projects isMobile={isMobile} data={projectsData} />
      <About isMobile={isMobile} data={aboutData} />
      <Contact isMobile={isMobile} data={contactData} />
    </>
  );
}

export default App;
