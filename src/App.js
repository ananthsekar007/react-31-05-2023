import logo from './logo.svg';
import './App.css';
import HelloComponent from './components/HelloComponent/HelloComponent';
import { BrowserRouter as Router,Route, Routes, Link } from 'react-router-dom';
import HomeRoute from './routes/HomeRoute';
import ContactRoute from './routes/ContactRoute';
import AboutRoute from './routes/AboutRoute';


function App() {
  return (
    // <div className="App">
    //   <HelloComponent name="Ananth" age={20} />
    // </div>
    <Router>
      <nav>
        <ul>
          <li> <Link to="/">Home</Link> </li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route exact path='/' element={<HomeRoute />}></Route>
        <Route exact path='/contact' element={<ContactRoute />}></Route>
        <Route exact path='/about' element={<AboutRoute />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
