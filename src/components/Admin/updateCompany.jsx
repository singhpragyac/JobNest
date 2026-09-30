import React from "react";
import AdminMenu from '../Admin/adminMenu.jsx';
import toast from "react-hot-toast";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState} from "react";

const updateCompany = () => {

    const navigate = useNavigate();
    const params = useParams();

    const [logo, setLogo] = useState("");
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");

    const getSingleCompany = async () => {
            try {
                console.log("ID:", params.id);
                const {data} = await axios.get(`/api/v1/company/get-company/${params.id}`);
    
    
                 console.log("API RESPONSE:", data);
    
                if(data?.success) {
                    setLogo(data.singleCompany.logo);
                    setName(data.singleCompany.name);
                    setLocation(data.singleCompany.location);
                    setDescription(data.singleCompany.description);
                }
            } catch(error) {
                console.log("GET ERROR:", error);
            console.log("ERROR RESPONSE:", error.response?.data);
            toast.error("Error in getting company");
            }
        };

   const handleUpdate = async (e) => {
        e.preventDefault();
        try {
           const formData = new FormData();

        formData.append("name", name);
        formData.append("location", location);
        formData.append("description", description);

        if (logo) {
            formData.append("logo", logo);
        }

        const { data } = await axios.put(
            `/api/v1/company/update-company/${params.id}`,
            formData
        );

            if(data?.success) {
                toast.success("company updated successfully");
                navigate(`/dashboard/admin/get-company`);
                
            }
        } catch(error) {
            toast.error("company")
        }
    };

    useEffect(() => {
        getSingleCompany();
    },  [params.id]);


    return (
        <>
            <div className="container-fluid mt-3">
                <h1 className="text-center">Update Company Here</h1>
                <div className="row">
                    <div className="col-md-3">
                        <AdminMenu />
                    </div>
                    <div className="col-md-9">
                            <div className="card" style={{ width: "min(500px, 92vw)", minHeight: "370px",boxShadow: "1px 1px 1px 0px #d2d2d2" }}>
    
                            <form onSubmit={handleUpdate}>
    
                            <div className="card-body">
                                <div className="mb-3">
                                <label htmlFor="logo" className="form-label">logo</label>
                                <input type="file" className="form-control" onChange={(e) => setLogo(e.target.files[0])}/>
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
    
                            <button type="submit" className="btn btn-primary ms-1">Update comapany</button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default updateCompany;