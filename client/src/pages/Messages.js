import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient'; // adjust path if needed

function Messages() {
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session) {
          setUserId(session.user.id);
        } else {
          console.error('No active session found.');
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId) {
      alert('User not logged in!');
      return;
    }

    try {
      const { data, error } = await supabase
        .from('messages')
        .insert([
          {
            name: 'Anonymous',
            message: message,
            user_id: userId,
          },
        ]);

      if (error) {
        console.error('Error sending message:', error.message);
        alert('Failed to send message.');
      } else {
        console.log('Message sent:', data);
        setSuccessMessage('Message sent successfully!');
        setMessage('');
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div style={{ padding: '60px 20px', textAlign: 'center' }}>
      <h1>Send a Message to Your Counselor</h1>
      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <textarea
          placeholder="Type your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          style={{ width: '300px', height: '150px', padding: '10px', fontSize: '16px' }}
        />
        <br />
        <button
          type="submit"
          style={{
            marginTop: '10px',
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#6C63FF',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Send Message
        </button>
      </form>

      {successMessage && (
        <p style={{ color: 'green', marginTop: '20px' }}>{successMessage}</p>
      )}
    </div>
  );
}

export default Messages;

