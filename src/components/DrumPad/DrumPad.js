import React, { useRef, useContext } from 'react';
import { ActivePadContext } from '../../contexts/ActivePadContext';

function DrumPad({ data }) {
  const { changePadName } = useContext(ActivePadContext);
  const { keyCode, keyTrigger, id, url } = data;

  const padRef = useRef(null);

  function handlePad() {
    padRef.current.play();
    changePadName(id);
    return true;
  }

  return (
    <div id={keyTrigger} className="drum-pad" onClick={handlePad}>
      <audio
        className="clip"
        data-id={id}
        data-keycode={keyCode}
        ref={padRef}
        src={url}
        id={keyTrigger}
      />
      {keyTrigger}
    </div>
  );
}

export default DrumPad;
