import logo from './logo.svg';
import './App.css';

import Header from './components/header/Header';
import Title from './components/title/Title';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div className="App">
      {/*<Header/>*/}
      <Title/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
