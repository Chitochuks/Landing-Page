import React from 'react';
import Header from './components/Header';
import Feature from './components/Feature';
import About from './components/About';
import Presentation from './components/Presentation';
import aboutimage from './assests/about.png';
import aboutimage1 from './assests/download.png';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Feature />
      <About img={aboutimage} title='Comes With  All You Need For Daily Life' button='Get The App'/>
      <Presentation />
      <About img={aboutimage1} title='Download And Get The App Now' button='Download'/>
      <Contact />
      
    </div>
  );
}

export default App;
