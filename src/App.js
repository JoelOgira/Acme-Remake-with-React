import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home';
import Services from './Components/Services';
import About from './Components/About';
import Rock from './Components/Rock/Rock'
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ErrorPage from './Components/ErrorPage';
import Contacts from './Components/Contact/Contacts';
import Card from './Components/BackgroundChange/Card'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import DisplayCounter from './Components/Counter Display/DisplayCounter';
import Challenge from './Components/Challenge/Challenge';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>      
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/rock" element={<Rock />}/>
          <Route path="/card" element={<Card />}/>
          <Route path="/contacts" element={<Contacts />}/>
          <Route path="/counter" element={<DisplayCounter />}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/challenge" element={<Challenge />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;


