import { useState } from 'react'
import Header from './components/Layout/Header.jsx'
import Home from './components/Home.jsx'
import Login from './components/auth/login.jsx'
import {Routes, Route} from "react-router-dom";
import Register from './components/auth/register.jsx';

import AdminRoute from "./components/Routes/AdminRoute.jsx"
import AdminDashboard from './components/Admin/adminDashboard.jsx';
import PostJobs from './components/Admin/postjobs.jsx';
import Jobs from './components/Admin/jobs.jsx';
import UpdateJob from './components/Admin/updateJob.jsx';

function App() {

  return (
    <>
      < Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/dashboard' element={<AdminRoute />}>
        <Route path='admin' element={<AdminDashboard />} />
        <Route path='admin/post-job' element={<PostJobs />} />
        <Route path='admin/get-job' element={<Jobs />} />
        <Route path='admin/update-job/:id' element={<UpdateJob />} />
        </Route>
        
      </Routes>
    </>
  )
};

export default App
