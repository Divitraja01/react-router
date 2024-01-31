import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import {NavLink,Link} from 'react-router-dom';
import Home  from './home';
import About from './about';
import Support  from './support';
import Labs  from './labs';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          <li>
            <NavLink to="/about">about</NavLink>
          </li>
          <li>
            <NavLink to="/labs">labs</NavLink>
          </li>
          <li>
            <NavLink to="/support">support</NavLink>
          </li>
          <li>
            <NavLink to="*">other</NavLink>
          </li>
         
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/support" element={<Support/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/labs" element={<Labs/>} />
        <Route path="*" element={<div>not found  page</div>} />
        
      </Routes>
  
      
    </div>
    
  );
}

export default App;
