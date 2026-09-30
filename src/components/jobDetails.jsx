import React, { useState, useEffect} from "react";
import axios from "axios";
import toast from "react-hot-toast";
import {useParams, useNavigate } from "react-router-dom";

const jobDetails = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [job, setJob] = useState(null);
    

    const getSingleJob = async () => {
    try {
        console.log("ID:", params.id);
        const { data } = await axios.get(
            `/api/v1/job/get-job/${params.id}`
        );
        if(data?.success) {
            setJob(data.Sjob);
        }
        console.log(data);

    } catch (error) {
        console.log(error);
    }
};

    useEffect(() => {
        getSingleJob();
    },[]);

    return (
        <>
        <div className="container-fluid  pb-5">
            <h4 className="text-light ms-5">Job details</h4>
            <div className="container d-flex justify-content-center align-items-center">
                
        {job &&  (
            <div
            className="card d-flex justify-content-center"
            style={{ cursor: "pointer" }}>
            <div className="card-body">
                <h5>{job.title}</h5>
            <button type="button" className="btn btn-primary" onClick={() => navigate(`/apply/${job._id}`)}>Apply</button>

            <p className="text-secondary" style={{fontSize: "13px"}}>{job.company}</p>

            

            <span><i className="fa-solid fa-briefcase" style={{color:"black"}}></i>  Job type</span>
            <p style={{ color: "#7ca011",  }}>{job.jobType}</p>

            <p><i className="fa-solid fa-credit-card" style={{color:"black"}}></i>Pay</p>
            <h6 style={{ color: "#7ca011",  }}>{job.salary}</h6>

            <p><b>Full job description</b></p>
            <p>{job.description}</p>

            <p><b>Location</b></p>
            <span className="text-secondary"><i className="fa-solid fa-location-crosshairs" style={{color:"black"}}></i>{job.location}</span>
            </div>
            </div>
        )}

            </div>
        </div>
        </>
    )
};

export default jobDetails;