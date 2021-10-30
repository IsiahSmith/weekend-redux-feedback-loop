import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Submitted from '../Submitted/Submitted';

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
        <Route path='/comments'>
          <Comments />
        </Route>
        <Route path='/review'>
          <Review />
        </Route>
        <Route path='/submitted'>
          <Submitted />
        </Route>
      </Router>
    </div>
  );
}

export default App;
