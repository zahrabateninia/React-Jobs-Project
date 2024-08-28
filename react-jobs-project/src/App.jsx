import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import React from 'react'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import HomeCards from './components/HomeCards'
import JobListings from "./components/JobListings"
import ViewAllJobs from './components/ViewAllJobs'
// Installation of React Router : npm i react-router-dom ( for creating multiple pages and data loading and ...
// with React alone we can only make single pages)

const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <HomeCards />
    <JobListings />
    <ViewAllJobs />
    </>
  )
}

export default App
