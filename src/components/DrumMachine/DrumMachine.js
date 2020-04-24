import React, { useEffect, useContext } from 'react';
import Display from '../Display';
import DrumPad from '../DrumPad';
import { ActivePadContext } from '../../contexts/ActivePadContext';
import drumPadData from './drumPadData';

function DrumMachine() {
  const { changePadName } = useContext(ActivePadContext);

  const drumPads =
    drumPadData &&
    drumPadData.map(function createDrumPad(padData) {
      return <DrumPad key={padData.id} data={padData} />;
    });

  function handleKeyPress(event) {
    const pad = document.querySelector(`[data-keycode='${event.keyCode}']`);

    if (pad) {
      pad.play();
      changePadName(pad.attributes['data-id'].value || '');
    }
  }

  useEffect(function () {
    document.addEventListener('keydown', handleKeyPress);
    return function () {
      document.removeEventListener('keydown', handleKeyPress);
    };
  });

  if (!drumPads) return null;

  return (
    <div id="drum-machine">
      <div className="pads-container">{drumPads}</div>
      <div className="display-container">
        <Display />
      </div>
    </div>
  );
}

export default DrumMachine;
