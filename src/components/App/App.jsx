import React from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import Feeling1 from '../Feeling1/Feeling1';
import Understanding2 from '../Understanding2/Understanding2';

function App() {

  return (
    <div className='App'>
      <Router>
        <Route path='/' exact>
          <Feeling1 />
        </Route>
      </Router>
    </div>
  );
}

export default App;
