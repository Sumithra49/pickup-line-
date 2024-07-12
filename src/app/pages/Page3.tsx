"use client";
import "./Page3.css";

const containerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  fontFamily: "'Pacifico', cursive",
  color: 'rgb(255, 33, 87)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  marginTop: '-150px',
  padding: '50px',
  boxSizing: 'border-box',
  width: '600px',
  fontSize: '25px',
};

const formStyle: React.CSSProperties = {
  padding: '20px',
  borderRadius: '10px',
  width: '100%',
  textAlign: 'center',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px',
  marginBottom: '10px',
  boxSizing: 'border-box',
  fontFamily: "'Pacifico', cursive",
  border: '1px solid rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
};

const buttonStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px',
  marginTop: '10px',
  backgroundColor: 'rgb(255, 33, 87)',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '40px',
  fontFamily: "'Pacifico', cursive",
  fontSize: '24px',
};

interface Page3Props {
  onNext: () => void;
}

const Page3: React.FC<Page3Props> = ({ onNext }) => {
  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h2>Pickup line generator</h2>
        <button style={{
          position: 'absolute',
          top: '70px',
          right: '20px',
          color: 'rgb(185, 16, 57)',
          padding: '10px',
          fontSize: '25px',
          fontFamily: "'Pacifico', cursive",
          borderRadius: '20px',
          backgroundColor: 'rgb(231, 214, 219)',
          border: 'none',
          fontWeight: 'bold',
          width: "150px"
        }}>Sign out</button>
        <div style={{ marginBottom: '10px' }}>
          <p style={{
            color: 'rgb(175, 87, 108)',
            fontSize: '23px',
            marginTop: '20px',
          }}>Tell us about your crush</p>
          <textarea
            style={{ height: '150px', width: '500px', borderRadius: '10px', ...inputStyle }}
            defaultValue="She is 10 but.."
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <p style={{
            color: 'rgb(175, 87, 108)',
            fontSize: '23px',
            marginTop: '-30px',
            marginBottom: '-2px'
          }}>Style</p>
          <input type="text" placeholder="e.g., funny" style={{ ...inputStyle }} />
        </div>
        <button className="button" style={buttonStyle}>
          <span className="heart">&hearts;</span> Generate for me <span className="heart">&hearts;</span>
        </button>
      </div>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default Page3;
