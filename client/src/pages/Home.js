import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{
      padding: '60px 20px',
      textAlign: 'center',
      backgroundColor: '#f0f4ff',
      minHeight: '100vh'
    }}>
      <h1 style={{ fontSize: '48px', color: '#6c63ff' }}>
        Welcome to Girl Talk
      </h1>
      <p style={{ fontSize: '20px', marginTop: '20px', color: '#333' }}>
        A safe space for students to connect with counselors.
      </p>

      <div style={{ marginTop: '40px' }}>
        <Link to="/login" style={{
          marginRight: '20px',
          display: 'inline-block',
          backgroundColor: '#6c63ff',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '5px',
          textDecoration: 'none',
          fontSize: '18px'
        }}>
          Log In
        </Link>

        <Link to="/signup" style={{
          display: 'inline-block',
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '5px',
          textDecoration: 'none',
          fontSize: '18px'
        }}>
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Home;

