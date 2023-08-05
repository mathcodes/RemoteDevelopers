import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar';
import LoginPage from './components/LoginPage';

function App() {
  const [loginVisible, setLoginVisible] = useState(false);

  // Create a function that toggles the LoginPage visibility
  const toggleLogin = () => {
    setLoginVisible(!loginVisible);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={toggleLogin}
        >
          Login
        </button>
        {loginVisible && <LoginPage />}
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
