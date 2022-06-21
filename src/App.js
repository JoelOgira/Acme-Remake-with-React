import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>      
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
