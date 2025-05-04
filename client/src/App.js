import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import Appointments from './pages/Appointments';
import Messages from './pages/Messages';


function App() {
  return (
    <div className="App">
      <Router>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/appointments" element={<Appointments />} />
    <Route path="/messages" element={<Messages />} />

  </Routes>
</Router>

    </div>   
  );
}

export default App;

