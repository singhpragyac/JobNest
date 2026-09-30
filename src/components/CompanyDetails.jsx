import React, { useState, useEffect} from "react";
import axios from "axios";
import toast from "react-hot-toast";
import {useNavigate, useParams} from "react-router-dom";


const companyDetails = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [companies, setCompanies] = useState(null);
    const [jobs, setJobs] = useState([]);

   const getSingleCompany = async () => {
    try {
        console.log("ID:", params.id);
        const { data } = await axios.get(
            `/api/v1/company/get-company/${params.id}`
        );
        if(data.success) {
            setCompanies(data.singleCompany);
        }
        console.log(data);

    } catch (error) {
        console.log(error);
    
    }}

    

    const fetchAllJob = async () => {
        try{
            const {data} = await axios.get(`/api/v1/job/filter/${companies.name}`);

            console.log("API RESPONSE:", data);
            console.log("ALL JOBS:", data.companyName);

            if(data?.success){
                setJobs(data.companyName);
            }
        } catch(error) {
            console.log(error);
            toast.error
        }
    }

    useEffect(() => {
        getSingleCompany();
    },[params.id]);


    useEffect(() => {
        fetchAllJob();
}, [companies]);


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


        <div className="container-fluid mt-3">
            <div className="row">
                <div className="col-md-12">
                    <div className="container d-flex justify-content-center align-items-center mt-4">
                        {companies && (
                            <div className="container">
                                <div className="container">
                                    <img src={`/api/v1/company/company-logo/${companies._id}`} width="80" height="80"/><br/>
                                    <span className="text-secondary">{companies.name}</span><br/>
                                    <h4>About the company</h4>
                                    <span className="text-secondary">{companies.description}</span><br/>
                                </div>
                            </div>
                        )}
                        
                    </div>
                </div>

                <div className="col-md-12">
                    <h4 style={{marginLeft: "70px", padding:"20px"}}>Jobs</h4>
                    <div className="container d-flex gap-3 flex-wrap">
                    
                        {jobs.map((e) => (
                            <div className="card job-card ms-4" key={e._id} onClick={() => {navigate(`/job/${e._id}`);}}>
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
            </div>
            
        </div>
        </>
    )
};

export default companyDetails;