import React from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';

function App() {

  return (
    <div className='App'>
      <Router>
        <Route path='/' exact>
          <Feeling />
        </Route>
        <Route path='/understanding'>
          <Understanding />
        </Route>
        <Route path='/support'>
          <Support />
        </Route>
      </Router>
    </div>
  );
}

export default App;
