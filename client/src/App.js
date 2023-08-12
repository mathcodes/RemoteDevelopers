import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar';
import LoginPage from './components/LoginPage';

function App() {
  const [loginVisible, setLoginVisible] = useState(false);

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

        {/* Define the routes using 'Routes' and 'Route' components */}
        {/* Specify your routes using the 'element' prop */}
        <Routes>
          {/* Define the route for the root URL */}
          <Route path="/" element={<HomePage />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

// Create a new component for the homepage
function HomePage() {
  return <h1>Welcome to the Homepage!</h1>;
}

export default App;
