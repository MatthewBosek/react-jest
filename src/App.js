import logo from './logo.svg';
import './App.css';
import {Checkbox} from 'evergreen-ui';
import React, {useState} from 'react';

function App() {
  const [v, setV] = useState(false);
  

  return (
    <div className="App">
      <h1>Learn React Testing
      </h1>
      <input data-test="regular-checkbox"
            name="isGoing"
            type="checkbox"
            checked={v}
            onChange={({target: {checked}}) => setV(checked)} />
      <Checkbox data-test="evergreen-ui-checkbox" checked={v}
        onChange={({target: {checked}}) => setV(checked)}
        />
    </div>
  );
}

export default App;
