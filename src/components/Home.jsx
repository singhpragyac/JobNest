import React, { useState, useEffect} from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth} from "./Context/auth";
import { useParams, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const Home = () => {

    const [searchParams] = useSearchParams();
    const company = searchParams.get("company");
    const title = searchParams.get("title");

    const [jobs, setJobs] = useState([]);
    const [auth, setAuth] =useAuth();
    const navigate = useNavigate();
    

    const getAllJob = async () => {
        try {
            let url = "/api/v1/job/get-job";
            if(company || title) {
                url = `/api/v1/job/search-job?company=${company || ""}&title=${title || ""}`;
            }

            const { data } = await axios.get(url);

            if (data?.success) {
                setJobs(data.jobs || data.alljob);
            }

        } catch(error) {
            toast.error("error in getting all jobs");
        }
    };


    useEffect(() => {
        getAllJob();
    }, [company, title]);



    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <>

        <style>
        {`
            .job-card {
                transition: 0.3s;
            }

            .job-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 8px 20px rgba(0,0,0,0.2);
                cursor: pointer;
                // text-decoration: underline;
            }

            .job-card:hover .job-title {
                text-decoration: underline;
                text-decoration-thickness: 1px;
            }
        `}
    </style>
        <div className="container-fluid pb-5">
            <h4 className="text-dark ms-5 mt-4">Welcome, {auth?.user?.name}</h4>
            <h6 className="text-dark ms-5 pb-3">Jobs for you</h6>
            <div className="container d-flex gap-3 flex-wrap">
                {jobs.map((e) => (
                    <div className="card job-card" key={e._id} onClick={() => {navigate(`/job/${e._id}`);}}>
                        <div className="card-body">
                            <h5 className="job-title">{e.title}</h5>
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