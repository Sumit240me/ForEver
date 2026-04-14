import React, { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import { Routes, Route } from 'react-router-dom'
import Add from './pages/Add.jsx'
import List from './pages/List.jsx'
import Orders from './pages/Orders.jsx'
import { useState } from 'react'
import Login from './components/Login.jsx'
import { ToastContainer } from 'react-toastify';

// from here we are exporting the constant
export const backendUrl = import.meta.env.VITE_BACKEND_URL
export const currency = "$"

const App = () => {

  // This will be checking wheather the token is avaliable in the localStorage if available then will be taken out if not then will add ''

  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '');
  // we have to pass these variable into the props to adjust the value from login form

  // since on refreshing the page the admin automatically gets logout to overcome this problem we will use localStorage

  useEffect(() => {
    localStorage.setItem('token', token)
  }, [token])
  // jaise hi token mai changes ho rahe hai useEffect run hoga

  return (
    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer />
      {token === ""
        ? <Login setToken={setToken} />
        : <>
          <Navbar setToken={setToken} />
          <hr />
          <div className='flex w-full'>
            <Sidebar />
            <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
              <Routes>
                <Route path='/add' element={<Add token={token} />} />
                <Route path='/list' element={<List token={token} />} />
                <Route path='/orders' element={<Orders token={token} />} />
              </Routes>
            </div>
          </div>
        </>}
    </div>
  )
}

export default App
