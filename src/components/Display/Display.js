import React, { useContext } from 'react';
import { ActivePadContext } from '../../contexts/ActivePadContext';
import { Alert } from 'reactstrap';

function Display() {
  const { padName } = useContext(ActivePadContext);
  if (!padName) return null;
  return (
    <div>
      <Alert color="secondary" id="display">
        {padName}
      </Alert>
    </div>
  );
}

export default Display;
