import React, { useState } from 'react';
import './Signup.scss';
import { Link, useNavigate } from 'react-router-dom';
import { axiosClient } from '../../utils/axiosClient';
import { KEY_ACCESS_TOKEN, setItem } from '../../utils/LocalStorageManager';

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const result = await axiosClient.post('/auth/signup', {
                  email,
                  password
              });
        console.log(result);
        setItem(KEY_ACCESS_TOKEN, result.result.accessToken);
        navigate('/');
  
        
      } catch (err) {
        console.log(err);
        
      }
  
  }
  return(
    <div className='Signup'>
              <div className='signup-box'>
                  <h2 className='heading'>Signup</h2>
                  <form onSubmit={handleSubmit}>
                      
                      <label htmlFor='email'>Email</label>
                      <input
                          type='email'
                          className='email'
                          id='email'
                          onChange={(e) => {
                              setEmail(e.target.value);
                          }}
  />
  
              <label htmlFor='password'>Password</label>
                      <input
                          type='password'
                          className='password'
                          id='password'
                          onChange={(e) => setPassword(e.target.value)}
                      />
  
                      
                      <input type='submit' className='submit' />
                  </form>
                  <p className='subheading'>
					Already have an account? <Link to='/login'>Log In</Link>
				</p>
              </div>
          </div>
  )};
  
  


export default Signup;
