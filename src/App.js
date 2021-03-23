import logo from './logo.svg';
import './App.css';
import {Router} from '@reach/router';

import About from './views/About';
// import Dropdown from './dropdownmenu/Dropdown';
import WorksAnim from './views/WorksAnim';
import WorksCode from './views/WorksCode';

import ResumeCode from './views/ResumeCode';
import ResumeAnim from './views/ResumeAnim';

import React from 'react';
// import Example from './views/Example';
import Collapsible from './views/Collapsible';
// import './styles/navigate.css';

import Image from './images/concept1a.jpg';


function App() {
  return (
    <div className="App">
      <Router>
        <About path="/"/>
        <WorksAnim path="/works_anim"/>
        <WorksCode path="/works_code"/>
        <ResumeCode path="/resume_code"/>
        <ResumeAnim path="/resume_anim"/>
      </Router>
    </div>
  );
}

export default App;
