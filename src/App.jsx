import { useState } from 'react'
import Header from './components/Layout/Header.jsx'
import Home from './components/Home.jsx'
import Login from './components/auth/login.jsx'
import {Routes, Route} from "react-router-dom";
import Register from './components/auth/register.jsx';

import AdminRoute from "./components/Routes/AdminRoute.jsx";
import AdminDashboard from './components/Admin/adminDashboard.jsx';
import PostJobs from './components/Admin/postjobs.jsx';
import Jobs from './components/Admin/jobs.jsx';
import UpdateJob from './components/Admin/updateJob.jsx';
import PostCompany from './components/Admin/postCompany.jsx';
import Company from './components/Admin/company.jsx';
import UpdateCompany from './components/Admin/updateCompany.jsx';

import JobDetails from "./components/jobDetails.jsx"
import Companyy from "./components/company.jsx"
import ApplyForm from "./components/applyForm.jsx"
import CompanyDetails from "./components/CompanyDetails.jsx"

// user
import UserRoute from './components/Routes/UserRoute.jsx';
import UserDashboard from './components/User/profile.jsx';
import ApplyedJob from './components/User/applyedJob.jsx';

function App() {

  return (
    <>
      < Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path='/job/:id' element={<JobDetails />} />
        <Route path='/company' element={<Companyy />} />
        <Route path='/apply/:id' element={<ApplyForm />} />
        <Route path='/company/:id' element={<CompanyDetails />} />

        <Route path="/login" element={<Login />} />
        <Route path='/register' element={<Register />} />


        <Route path='/dashboard' element={<AdminRoute />}>
          <Route path='admin' element={<AdminDashboard />} />
          <Route path='admin/post-job' element={<PostJobs />} />
          <Route path='admin/get-job' element={<Jobs />} />
          <Route path='admin/update-job/:id' element={<UpdateJob />} />
          <Route path='admin/post-company' element={<PostCompany />} />
          <Route path='admin/get-company' element={<Company />} />
          <Route path='admin/update-company/:id' element={<UpdateCompany />} /> 
        </Route>

        {/* user */}

        <Route path='/dashboard' element={<UserRoute />}>
          <Route path='user' element={<UserDashboard />} />
          <Route path='user/apply/get-applyed-job/:id' element={<ApplyedJob />} />
        </Route>
        
      </Routes>
    </>
  )
};

export default App
