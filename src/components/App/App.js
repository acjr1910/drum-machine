import React from 'react';
import DrumMachine from '../DrumMachine';
import { ActivePadContextProvider } from '../../contexts/ActivePadContext';

function App() {
  return (
    <div className="App">
      <ActivePadContextProvider>
        <DrumMachine />
      </ActivePadContextProvider>
    </div>
  );
}

export default App;
