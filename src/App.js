import React from 'react';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Routes>
            {/* <div> */}


            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            {/* </div> */}
        </Routes>
    );
}

export default App;
