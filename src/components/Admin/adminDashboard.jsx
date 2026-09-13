import React from "react";
import AdminMenu from "./adminMenu.jsx";
import { useAuth } from "../Context/auth.jsx";

const AdminDashboard = () => {
    const [auth, setAuth] =useAuth();
    return (
        <>
        <div className="container-fluid pt-5 dashboard">
            <div className="row">
                <div className="col-md-3">
                    <AdminMenu />
                </div>
                <div className="col-md-9">
                    <h5>Name: {auth?.user.name}</h5>
                    <h5>Email: {auth?.user.email}</h5>
                </div>
            </div>
        </div>
        </>
    )
};

export default AdminDashboard;