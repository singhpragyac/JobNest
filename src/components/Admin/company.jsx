import React, { useState, useEffect} from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../Context/auth";
import AdminMenu from "./adminMenu.jsx";
import {useNavigate, useParams} from "react-router-dom";


const company = () => {
    const navigate = useNavigate();

    const [companies, setCompanies] = useState([]);

    const getAllCompany = async () => {
        try {
            const {data} = await axios.get("/api/v1/company/get-company");

            console.log("ALL JOBS:", data.allcompany);

            if(data?.success){
                setCompanies(data.allcompany);
            }
        } catch(error) {
            toast.error("error in getting all company");
        }
    }

    useEffect(() => {
        getAllCompany();
    },[]);


    const deleteCompany = async (id) => {
        try {
            let answer = window.confirm("Are you sure, want to delete this job ?");
            if(!answer) return;

            const {data} = await axios.delete(`/api/v1/company/delete-company/${id}`);

            if(data?.success) {
                toast.success("company deleted successfully");
                window.location.reload();
            }

        } catch(error) {
            console.log(error);
            toast.error.message
        }
    }

    return (
        <>
        <div className="container-fluid mt-3">
             <h1 className="text-center ms-5">All Company List</h1>
            <div className="row">
                <div className="col-md-3">
                    <AdminMenu />
                </div>
                <div className="col-md-9">
                    <div className="container d-flex gap-3 flex-wrap">
                        {companies.map((e) => (
                            <div className="card" style={{ width: "300px" }} key={e._id}>
                                <div className="card-body">
                                    <img src={`/api/v1/company/company-logo/${e._id}`} width="80" height="80"/><br/>
                                    <span className="text-secondary"><b>Company:</b> {e.name}</span><br/>
                                    <span className="text-secondary"><b>Location:</b> {e.location}</span><br/>
                                    <span className="text-secondary"><b>Description:</b> {e.description}</span><br/><br/>

                                    <button type="button" onClick={() => navigate(`/dashboard/admin/update-company/${e._id}`)} className="btn btn-secondary">Edit</button>
                                    <button type="button" className="btn btn-danger ms-3" onClick={() => deleteCompany(e._id)}>Delete</button>
                                </div>
                            </div>
                        ))}
                        
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default company;