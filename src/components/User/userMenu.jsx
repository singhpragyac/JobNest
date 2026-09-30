import React from "react";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
    return (
        <>
        <div className="list-group text-center">
            <h3>User Dashboard</h3>          
            {/* <NavLink to="" className="list-group-item list-group-item-action">Profile</NavLink> */}
            <NavLink to="/dashboard/user/apply/get-applyed-job/:id" className="list-group-item list-group-item-action">Applyed Job</NavLink>
        </div>
        </>
    )
};;
export default UserMenu;