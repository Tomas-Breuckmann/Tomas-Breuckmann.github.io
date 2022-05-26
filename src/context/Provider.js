import React from 'react';
import Context from './Context.js';

function Provider(props) {
  const { children } = props;
  const dados = {
    data: true,
  };

  return (
    <Context.Provider
      value={ dados }
    >
      {children}
    </Context.Provider>
  );
}

export default Provider;