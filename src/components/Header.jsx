// import React from 'react';
// import checkImg from '../assets/checkImg.jpg'
// import navBarIcon from '../assets/navBarIcon.jpg'
// import "./Header.css";

// const Header = () => {
//     return (
//         <header className='TodoHeader'>
//         <div className='TodoHeader2'>
//         <img className='checkimg' src={checkImg} alt='check Image'/>
//         <h1>Checklist</h1>
//         </div>
//         <img className="checkimg" src={navBarIcon} alt='this is bar icon'/>
//         </header>
//     );
// };

// export default Header;

import React, { useState } from 'react';
import checkImg from '../assets/checkImg.jpg';
import navBarIcon from '../assets/navBarIcon.jpg';
import './Header.css';
import SignupModal from './SignUp/SignupModal';
import axios from 'axios'; // Import axios if you use it for fetching data

const Header = () => {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false); // Track if user is logged in
  const [todos, setTodos] = useState([]); // State to manage todos

  // Function to fetch the first 20 todos
  const fetchTodos = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      const initialTodos = response.data.slice(0, 20); // Fetch only the first 20 todos
      setTodos(initialTodos);
      localStorage.setItem('todos', JSON.stringify(initialTodos));
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  // Handle sign-up
  const handleSignup = async () => {
    setLoggedIn(true); // Update logged-in status
    await fetchTodos(); // Fetch first 20 todos when signed up
  };

  const handleCheckImgClick = () => {
    setIsSignupOpen(true);
  };

  const closeSignupModal = () => {
    setIsSignupOpen(false);
  };

  return (
    <>
      <header className='TodoHeader'>
        <div className='TodoHeader2'>
          <img className='checkimg' src={checkImg} alt='check Image' />
          <h1>Checklist</h1>
        </div>
        <img className="barIcon" src={navBarIcon} alt='this is bar icon' onClick={handleCheckImgClick}/>
      </header>
      {isSignupOpen && <SignupModal onClose={closeSignupModal} onSignup={handleSignup}/>}
    </>
  );
};

export default Header;
