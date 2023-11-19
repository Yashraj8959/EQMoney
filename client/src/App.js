import './App.css';
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Register from './components/register/register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {useState} from 'react';

function App() {
  const [ user, setLoginUser] = useState({})
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
            {/* user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />} /> */}
          <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
