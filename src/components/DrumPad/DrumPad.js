import React, { useRef, useContext } from 'react';
import { ActivePadContext } from '../../contexts/ActivePadContext';
import { Button } from 'reactstrap';
import './styles.css';

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
    <Button
      color="primary"
      size="lg"
      outline
      id={keyTrigger}
      className="drum-pad"
      onClick={handlePad}
    >
      <audio
        className="clip"
        data-id={id}
        data-keycode={keyCode}
        ref={padRef}
        src={url}
        id={keyTrigger}
      />
      {keyTrigger}
    </Button>
  );
}

export default DrumPad;
