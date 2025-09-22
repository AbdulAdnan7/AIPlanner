import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Navbar from './components/Navbar'
import Trip from './pages/Trip'
import Result from './pages/Result'

function App() {
   const route = createBrowserRouter([
    {
      path: '/',
      element: <>
      <Navbar />
      <Home />
      </>
    },
    {
      path: '/planTrip',
      element: <>
      <Navbar />
      <Trip />
      </>
    },
    {
      path: '/results',
      element: <>
      <Navbar />
      <Result />
      </>
    },
   ])

  return (
    <>
    <RouterProvider router={route} />
    </>
  )
}

export default App
