import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient'; // adjust path if needed
import './Appointments.css';

function Appointments() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [reason, setReason] = useState('');
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
  
    // Clean up the listener when component unmounts
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
        .from('appointments')
        .insert([
          {
            name: name,
            date: date,
            reason: reason,
            user_id: userId,
          },
        ]);

      if (error) {
        console.error('Error booking appointment:', error.message);
        alert('Failed to book appointment.');
      } else {
        console.log('Appointment created:', data);
        setSuccessMessage('Appointment booked successfully!');
        setName('');
        setDate('');
        setReason('');
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <h1>Book an Appointment</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <textarea
          placeholder="Reason for Appointment"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          required
        />
        <button type="submit">Book Appointment</button>
      </form>

      {successMessage && (
        <p style={{ color: 'green', marginTop: '10px' }}>{successMessage}</p>
      )}
    </div>
  );
}

export default Appointments;


