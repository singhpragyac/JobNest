import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
    return (
        <>
        <div className="list-group text-center">
             <h3>Admin Dashboard</h3>
  
            <NavLink to="/dashboard/admin/post-job" className="list-group-item list-group-item-action">Post Jobs</NavLink>
            <NavLink to="/dashboard/admin/get-job" className="list-group-item list-group-item-action">All Jobs</NavLink>
            <NavLink to="/dashboard/admin/update-job/:id" className="list-group-item list-group-item-action">Update Job</NavLink>
            <NavLink to="" className="list-group-item list-group-item-action">Post Company</NavLink>
            <NavLink to="" className="list-group-item list-group-item-action">All Company</NavLink>
            <NavLink to="" className="list-group-item list-group-item-action">Update Company</NavLink>
        </div>
        </>
    )
};;
export default AdminMenu;