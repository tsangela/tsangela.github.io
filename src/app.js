import React, { useEffect, useState } from 'react';
import { enquireScreen } from 'enquire-js';

import Button, { TYPES } from './components/button';
import Landing from './views/landing';

function App() {
  const [isMobile, setIsMobile] = useState(enquireScreen((b) => b));

  useEffect(() => {
    enquireScreen((b) => setIsMobile(!!b));
    console.log(isMobile); // todo(atsang): delete
  });

  return (
    <div className='App'>
      <Landing isMobile={isMobile} />
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
