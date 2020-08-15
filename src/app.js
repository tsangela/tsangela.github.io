import React, { useEffect, useState } from 'react';
import { enquireScreen } from 'enquire-js';

import Landing from './views/landing';
import Projects from './views/projects';
import { landingData, projectsData } from './resources/data';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    enquireScreen((b) => setIsMobile(b));
    console.log(isMobile); // todo(atsang): delete
  });

  return (
    <>
      <Landing isMobile={isMobile} data={landingData} />
      <Projects isMobile={isMobile} data={projectsData} />
    </>
  );
}

export default App;
