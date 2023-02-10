import './App.css';
import './components/NavBar'
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Projects } from './components/Projects'
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'
import Particles from 'react-tsparticles';
import { useCallback } from 'react';
import { loadFull } from 'tsparticles';
import { type } from '@testing-library/user-event/dist/type';

function App() {

  const init = useCallback(async (engine) => {
    await loadFull(engine)
  })



  return (
    <div className="App">
      <Particles options={{
        particles: {
          color: {
            value: '#fff'
          },
          number: {
            value: 50
          },
          opacity: {
            value: { min: 0.3, max: 1 }
          },

          shape :{
            type : 'circle'
          },

          size : {
            value : {min : 0.9 , max : 2}
          },

          move : {
            direction : 'bottomLeft',
            enable : true,
            speed : {min : 0.1, max : 1},
            straight : true,
          }

        }
      }} init={init} />
      <NavBar />
      <Banner />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
