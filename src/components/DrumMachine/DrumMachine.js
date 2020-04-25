import React, { useEffect, useContext } from 'react';
import Display from '../Display';
import DrumPad from '../DrumPad';
import { ActivePadContext } from '../../contexts/ActivePadContext';
import drumPadData from './drumPadData';

import { Jumbotron, Container, Row, Col } from 'reactstrap';

function DrumMachine() {
  const { changePadName } = useContext(ActivePadContext);

  const drumPads =
    drumPadData &&
    drumPadData.map(function createDrumPad(padData) {
      return (
        <Col className="d-flex justify-content-center">
          <DrumPad key={padData.id} data={padData} />
        </Col>
      );
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
      <Jumbotron>
        <h1 className="display-5 text-center">Drum Machine</h1>
      </Jumbotron>
      <Container className="d-flex justify-content-center">
        <Display />
      </Container>
      <Container className="d-flex justify-content-center">
        <Row xs="3">{drumPads}</Row>
      </Container>
    </div>
  );
}

export default DrumMachine;
