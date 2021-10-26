import React from 'react';

import Calculator from './CalculatorSalarii/Calculator/Calculator';
import Insert from './components/task1/task1';
import InfoAxios from './InfoAxios/InfoAxios';
import Pontaje from './InfoAxios/Pontaje';
import Test from './InfoAxios/Test/Test';

function App() {

  return (
    <div className="App">
      <Insert />
      <br />
      <Calculator />
      <InfoAxios />
      <Test />
      <Pontaje />
    </div>
  );
}

export default App;
