import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams, useNavigate} from "react-router-dom";
import { useAuth } from "../Context/auth.jsx";

const ApplyedJob = () => {
    const params = useParams();
    const [auth, setAuth] =useAuth();
    const [jobs, setJobs] = useState([]);
    const navigate = useNavigate();

    const handlejob = async () => {
        try {
            console.log(auth?.user?._id);
            const {data} = await axios.get(`/api/v1/apply/get-applyed-job/${auth?.user?._id}`);

            console.log(data);

            if(data?.success) {
                toast.success("applyed jobs are here");
                setJobs(data.applyedJob);
            }
        } catch(error) {
            console.log(error);
            toast.error
        }
    };

    useEffect(() => {
        handlejob();
    },[auth?.user?._id]);

    return (
        <>
        <div className="container d-flex gap-3 flex-wrap mt-4">
            {jobs?.length > 0 ? (
                jobs.map((e) => (
                    <div className="card job-card" key={e._id} onClick={() => {navigate(`/job/${e.job?._id}`);}}>
                        <div className="card-body">
                            <h5 className="job-title">{e.job?.title}</h5>
                            <span className="text-secondary">{e.job.company}</span><br/>
                            <span className="text-secondary">{e.job.location}</span>
                            <h6 style={{color: "#7ca011"}}>{e.job.salary}</h6>
                        </div>
                    </div>
                ))
           ) : (
               <p>No applied jobs.</p>
           )} 
       </div>
        </>
    )
};


export default ApplyedJob;