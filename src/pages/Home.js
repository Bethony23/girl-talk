import React from 'react';

function Home() {
  return (
    <div style={{
      padding: '60px 20px',
      textAlign: 'center',
      backgroundColor: '#f0f4ff',
      minHeight: '100vh'
    }}>
      <h1 style={{ fontSize: '48px', color: '#6c63ff' }}>Welcome to Girl Talk 💬</h1>
      <p style={{ fontSize: '20px', marginTop: '20px', color: '#333' }}>
        Girl Talk is a safe space for students to connect with counselors, book appointments, and share their experiences through private messages and forums.
      </p>
      <p style={{ fontSize: '20px', marginTop: '20px', color: '#333' }}>
        Ready to get started? <br />
        <a href="/signup" style={{
          marginTop: '20px',
          display: 'inline-block',
          backgroundColor: '#6c63ff',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          textDecoration: 'none',
          fontSize: '20px'
        }}>
          Sign Up Now
        </a>
      </p>
    </div>
  );
}

export default Home;
