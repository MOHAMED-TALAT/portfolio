import './App.scss';
import Home from './components/home/Home';
import About from './components/about/About';
import Work from './components/work/Work';
import { Route, Routes } from 'react-router-dom';
import Contact from './components/contact/Contact';

function App() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="*" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="work" element={<Work />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  )
}

export default App;
