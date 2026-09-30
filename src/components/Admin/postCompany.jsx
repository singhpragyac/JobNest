import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import AdminMenu from "./adminMenu.jsx";
import { useNavigate } from "react-router-dom";

const postCompany = () => {
    const navigate = useNavigate();


    const [logo, setLogo] = useState(null);
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();

            formData.append("logo", logo);
            formData.append("name", name);
            formData.append("location", location);
            formData.append("description", description);

            const comapany = await axios.post("/api/v1/company/post-company", formData);
            if(comapany?.data.success) {
                toast.success("comapany successfully post");
                navigate(`/dashboard/admin/get-company`);
            }
        } catch (error) {
            console.log("STATUS:", error.response?.status);
        }
    }


    return (
        <>
            <div className="container-fluid mt-3">
                <h1 className="text-center">Post Company Here</h1>
                <div className="row">
                    <div className="col-md-3">
                        <AdminMenu />
                    </div>
                    <div className="col-md-9">
                            <div className="card" style={{ width: "min(500px, 92vw)", minHeight: "370px",boxShadow: "1px 1px 1px 0px #d2d2d2" }}>
    
                            <form onSubmit={handleSubmit}>
    
                            <div className="card-body">
                                <div className="mb-3">
                                <label htmlFor="logo" className="form-label">logo</label>
                                <input type="file" className="form-control" onChange={(e) => setLogo(e.target.files[0])} required />
                            </div>
    
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">name</label>
                                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
                            </div>
    
                            
                            <div className="mb-3">
                                <label htmlFor="location" className="form-label">location</label>
                                <input type="text" className="form-control" value={location} onChange={(e) => setLocation(e.target.value)} required />
                            </div>
    
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">description</label>
                                <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} required />
                            </div>
    
                            <button type="submit" className="btn btn-primary ms-1">Post comapany</button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default postCompany;