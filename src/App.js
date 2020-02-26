import React from 'react';
import logo from './logo.svg';
import './App.css';

import HeaderContainer from './containers/HeaderContainer'
import SkillsContainer from './containers/SkillsContainer'
import About from './components/About'
import EducationContainer from './containers/EducationContainer'
import ProjectsContainer from './containers/ProjectsContainer'

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <About />
      <SkillsContainer />
      <EducationContainer />
      <ProjectsContainer />
    </div>
  );
}

export default App;
