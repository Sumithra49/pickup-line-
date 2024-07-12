"use client";
import "./Page3.css";

import { useState } from 'react';

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  fontFamily: "'Pacifico', cursive",
  color: 'rgb(255,33,87)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  marginTop: '-150px',
  padding: '50px',
  boxSizing: 'border-box',
  width: '600px',
  fontSize: '25px',
};

const formStyle = {
  padding: '20px',
  borderRadius: '10px',
  width: '100%',
  textAlign: 'center',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '10px',
  boxSizing: 'border-box',
  marginTop: '-20px',
  fontFamily: "'Pacifico', cursive",
  border: '1px solid rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
};

const buttonStyle = {
  width: '100%',
  padding: '10px',
  marginTop: '10px',
  backgroundColor: 'rgb(255,33,87)',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '40px',
  fontFamily: "'Pacifico', cursive",
  fontSize: '24px',
};

const Page4 = () => {
  // Sample state to hold form data
  const [formData, setFormData] = useState({
    crushDescription: "She is 10 but...",
    style: "funny", // Example style
  });

  // Function to update form data
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h2>Pickup line generator</h2>
        <button
          style={{
            position: 'absolute',
            top: '70px',
            right: '20px',
            color: 'rgb(175,87,108)',
            padding: '10px',
            fontSize: '25px',
            fontFamily: "'Pacifico', cursive",
            borderRadius: '20px',
            backgroundColor: 'rgb(231,214,219)',
            border: 'none',
          }}
        >
          Sign out
        </button>
        <div style={{ marginBottom: '10px' }}>
          <p
            style={{
              color: 'rgb(175,87,108)',
              marginLeft: '-300px',
              fontSize: '23px',
              marginTop: '20px',
            }}
          >
            Tell us about your crush
          </p>

          <textarea
            style={{ height: '150px', width: '500px', borderRadius: '10px', ...inputStyle }}
            name="crushDescription"
            value={formData.crushDescription}
            onChange={handleChange}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <p
            style={{
              color: 'rgb(175,87,108)',
              marginLeft: '-450px',
              fontSize: '23px',
              marginTop: '-30px',
              marginBottom:'-2px'
            }}
          >
            Style
          </p>
          <input
            type="text"
            placeholder="e.g., funny"
            style={inputStyle }
            name="style"
            value={formData.style}
            onChange={handleChange}
          />
        </div>
        <button className="button" style={buttonStyle}>
          <span className="heart">&hearts;</span> Generate for me <span className="heart">&hearts;</span>
        </button>
      </div>
    </div>
  );
};

export default Page4;
