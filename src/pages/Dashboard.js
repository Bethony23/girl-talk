import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient'; // adjust the path if needed

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getUser() {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error('Error fetching user:', error.message);
      } else {
        console.log('User data:', data);
        setUser(data.user);
      }
    }

    getUser();
  }, []);

  return (
    <div style={{
      padding: '60px 20px',
      textAlign: 'center',
      backgroundColor: '#f0f4ff',
      minHeight: '100vh'
    }}>
      <h1>Welcome to Girl Talk 🗨️</h1>
      {user && (
        <div style={{ marginTop: '10px', fontSize: '16px' }}>
          <p>Logged in as: <strong>{user.email}</strong></p>
          {/* You can show user.id too if needed */}
        </div>
      )}
      <p>Select a section to get started:</p>

      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '40px'
      }}>
        <Link to="/appointments" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={{
            border: '1px solid #ccc',
            padding: '20px',
            borderRadius: '10px',
            width: '200px',
            textAlign: 'center',
            backgroundColor: '#f9f9f9'
          }}>
            <h2>Appointments 📅</h2>
            <p>Book time with a counselor</p>
          </div>
        </Link>

        <Link to="/messages" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={{
            border: '1px solid #ccc',
            padding: '20px',
            borderRadius: '10px',
            width: '200px',
            textAlign: 'center',
            backgroundColor: '#f9f9f9'
          }}>
            <h2>Messages 🗨️</h2>
            <p>Chat with counselors</p>
          </div>
        </Link>

        <div style={{
          border: '1px solid #ccc',
          padding: '20px',
          borderRadius: '10px',
          width: '200px',
          textAlign: 'center',
          backgroundColor: '#f9f9f9'
        }}>
          <h2>Forum 🗨️</h2>
          <p>Join discussions (coming soon)</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;




