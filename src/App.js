
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import RegestrationFrom from './Childs/RegestrationFrom';
import CounterHook from './custom/CounterHook1';
import CounterHook1 from './custom/CounterHook1';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/form' element={<RegestrationFrom />} />
        <Route path='/custom' element={<CounterHook1 />} />

      </Routes>


    </>

  );
}

function NavBar() {
  return (
    <nav className="navbar">
      <h1>My Website</h1>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about" state={{ id: 42 }}>About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/form">Reg From</Link>
        </li>
        <li>
          <Link to="/custom">Custom Hook</Link>
        </li>
      </ul>
    </nav>
  );
}



export default App;



