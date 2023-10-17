import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Header />

      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
