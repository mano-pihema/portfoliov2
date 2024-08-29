import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Projects from './components/Projects';

function App() {
  return (
    <div className=' w-screen bg-gradient-to-b from-teal-200 to-teal-500 '>
      <NavBar />
      <div className='bg-gradient-to-b from-teal-200 to-teal-400'>
        <Hero />
        <About />
      </div>
      <div className='bg-gradient-to-b from-teal-400 to-teal-300 '>
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default App;
