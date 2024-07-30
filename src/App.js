import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Member from './pages/Member';
import Game from './pages/Game';
import AddGame from './pages/AddGame';
import Update from './pages/Update';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check local storage for authentication status
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <NavbarWrapper isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={isAuthenticated ? <Navigate to="/SisterHoop/member" /> : <Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/member' element={isAuthenticated ? <Member /> : <Navigate to="/SisterHoop/login" />} />
          <Route path='/games' element={<Game />} />
          <Route path='/addGame' element={<AddGame />} />
          <Route path='/update/:id' element={<Update />} />
        </Routes>
      </Router>
    </div>
  );
}

function NavbarWrapper({ isAuthenticated, setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication state
    setIsAuthenticated(false);
    // Remove token or user data from local storage
    localStorage.removeItem('authToken');
    // Navigate to login page
    navigate('/SisterHoop/login');
  };

  return <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />;
}

export default App;
