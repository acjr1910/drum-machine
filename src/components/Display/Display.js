import React, { useContext } from 'react';
import { ActivePadContext } from '../../contexts/ActivePadContext';

function Display() {
  const { padName } = useContext(ActivePadContext);
  return (
    <div>
      <p id="display">{padName}</p>
    </div>
  );
}

export default Display;
