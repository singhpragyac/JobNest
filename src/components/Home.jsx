import React, { useState, useEffect} from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "./Context/auth";

const Home = () => {

    const [jobs, setJobs] = useState([]);
    const [auth, setAuth] =useAuth();

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

    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <>
        <div className="container-fluid bg-dark pb-5">
             <h4 className="text-light ms-5">Welcome, {auth?.user?.name}</h4>
            <h6 className="text-light ms-5 pb-3">Jobs for you</h6>
            <div className="container d-flex gap-3 flex-wrap">
                {jobs.map((e) => (
                    <div className="card" style={{ width: "300px" }} key={e._id}>
                        <div className="card-body">
                            <h5>{e.title}f</h5>
                            <span className="text-secondary">{e.company}</span><br/>
                            <span className="text-secondary">{e.location}</span>
                            <h6 style={{color: "#7ca011"}}>{e.salary}</h6>
                        </div>
                    </div>
                ))}
                
            </div>
        </div>
        </>
    )
};

export default Home;