import React, { useState } from 'react';

const ActivePadContext = React.createContext();

function ActivePadContextProvider(props) {
  const [padName, setPadName] = useState('');

  function changePadName(name) {
    if (typeof name == 'string') setPadName(name);
    return name;
  }

  return (
    <ActivePadContext.Provider value={{ padName, changePadName }}>
      {props.children}
    </ActivePadContext.Provider>
  );
}

export { ActivePadContextProvider, ActivePadContext };
