import React from 'react';
import './App.css';

import HeaderContainer from './containers/HeaderContainer'
import SkillsContainer from './containers/SkillsContainer'
import About from './components/About'
import EducationContainer from './containers/EducationContainer'
import ProjectsContainer from './containers/ProjectsContainer'
import Contact from './components/Contact';
import BlogContainer from './containers/BlogContainer';

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <About />
      <SkillsContainer />
      <EducationContainer />
      <ProjectsContainer />
      <BlogContainer />
      <Contact />
    </div>
  );
}

export default App;
