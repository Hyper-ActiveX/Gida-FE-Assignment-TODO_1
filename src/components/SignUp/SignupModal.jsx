import React from 'react';
import './SignupModal.css';

const SignupModal = ({ onClose, onSignup }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Sign Up</h2>
        <p>Sign up to unlock recurring tasks, publishing, collaborating, and more.</p>
        <button className="signup-button" onClick={() => { onSignup(); onClose(); }}>Sign Up</button>
      </div>
    </div>
  );
};

export default SignupModal;
