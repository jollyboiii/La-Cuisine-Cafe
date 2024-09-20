import './App.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import * as icon from '@fortawesome/free-solid-svg-icons';
import Home from './Pages/Home';
import About from './Pages/About';
import Menu from  './Pages/Menu'
import Catering from './Pages/Catering';
import Kitchen from './Pages/Kitchen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // Adjusted for version 6
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path='/catering' element={<Catering/>}/>
          <Route path='/kitchen' element={<Kitchen/>}/>

        </Routes>
      </BrowserRouter>

      {/* <h1 className=''> La Cuisine Cafe</h1>
      <FontAwesomeIcon icon={icon.faChartLine} /> */}
    </div>
  );
}

export default App;
