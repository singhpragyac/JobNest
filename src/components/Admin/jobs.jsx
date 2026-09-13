import React, { useState, useEffect} from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../Context/auth";
import AdminMenu from "./adminMenu.jsx";
import {useNavigate, useParams} from "react-router-dom";

const Jobs = () => {

    const [jobs, setJobs] = useState([]);
    const [auth, setAuth] =useAuth();
    const params = useParams();
    const navigate = useNavigate();

    const getAllJob = async () => {
        try {
            const {data} = await axios.get("/api/v1/job/get-job");

            console.log("API RESPONSE:", data);
            console.log("ALL JOBS:", data.alljob);

            if(data?.success){
                setJobs(data.alljob);
            }
        } catch(error) {
            toast.error("error in getting all jobs");
        }
    }

    useEffect(() => {
        getAllJob();
    },[]);


    const handleDelete = async (id) => {
        try {
            let answer = window.confirm("Are you sure, want to delete this job ?");
            if(!answer) return;

              console.log("ID:", id);
            const {data} = await axios.delete(`/api/v1/job/delete/${id}`);

            if(data?.success) {
                toast.success("job deleted successfully");
                window.location.reload();
            }

        } catch(error) {
            console.log(error);
            toast.error("error in deleting job");
        }
    };


    

    return (
        <>
        <div className="container-fluid mt-3">
             <h1 className="text-center ms-5">All Job List</h1>
            <div className="row">
                <div className="col-md-3">
                    <AdminMenu />
                </div>
                <div className="col-md-9">
                    <div className="container d-flex gap-3 flex-wrap">
                        {jobs.map((e) => (
                            <div className="card" style={{ width: "300px" }} key={e._id}>
                                <div className="card-body">
                                    <h6 style={{color: "#7ca011"}}><b>Salary:</b> {e.salary}</h6>
                                    <span className="text-secondary"><b>Company:</b> {e.company}</span><br/>
                                    <span className="text-secondary"><b>Location:</b> {e.location}</span><br/>
                                    <span className="text-secondary"><b>JobType:</b> {e.jobType}</span><br/>
                                    <span className="text-secondary"><b>Experience:</b> {e.experience}</span><br/>
                                    <span className="text-secondary"><b>Skills:</b> {e.skills}</span><br/>
                                    <span className="text-secondary"><b>Description:</b> {e.description}</span><br/><br/>

                                    <button type="button" onClick={() => navigate(`/dashboard/admin/update-job/${e._id}`)} className="btn btn-secondary">Edit</button>
                                    <button type="button" onClick={() => handleDelete(e._id)} className="btn btn-danger ms-3">Delete</button>
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

export default Jobs;