import React, { useEffect, useState } from 'react';
import { enquireScreen } from 'enquire-js';

import Landing from './views/landing';
import Projects from './views/projects';
import { landingData, projectsData } from './resources/data';
import Button, { TYPES } from './components/button';

function App() {
  const [isMobile, setIsMobile] = useState(enquireScreen((b) => b));

  useEffect(() => {
    enquireScreen((b) => setIsMobile(!!b));
    console.log(isMobile); // todo(atsang): delete
  });

  return (
    <div className='App'>
      <Landing isMobile={isMobile} data={landingData} />
      <Projects isMobile={isMobile} data={projectsData} />
      <header className='App-header'>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button color='indianred'>Filled</Button>
        <Button type={TYPES.outline} color='indianred'>
          Outline
        </Button>
      </header>
    </div>
  );
}

export default App;
