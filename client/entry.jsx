import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './components/AwesomeComponent.jsx';

class App extends React.Component {
  render() {
    return (
      <div id="react_daily">
        <p> Hello React!</p>
        <AwesomeComponent />
      </div>
    );
  }
};




render(<App />, document.getElementById('react_daily'));
