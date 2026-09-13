import React from "react";
import AdminMenu from '../Admin/adminMenu.jsx';
import toast from "react-hot-toast";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState} from "react";

const updateJob = () => {
    const navigate = useNavigate();
    const params = useParams();

    const [title, setTitle] = useState("");
    const [salary, setSalary] = useState("");
    const [company, setCompany] = useState("");
    const [location, setLocation] = useState("");
    const [jobType, setjobType] = useState("");
    const [experience, setExperience] = useState("");
    const [skills, setSkills] = useState("");
    const [description, setDescription] = useState("");
    

    const getsingleJob = async () => {
        try {
            console.log("ID:", params.id);
            const {data} = await axios.get(`/api/v1/job/get-job/${params.id}`);


             console.log("API RESPONSE:", data);

            if(data?.success) {
                setTitle(data.Sjob.title);
                setSalary(data.Sjob.salary);
                setCompany(data.Sjob.company);
                setLocation(data.Sjob.location);
                setjobType(data.Sjob.jobType);
                setExperience(data.Sjob.experience);
                setSkills(data.Sjob.skills);
                setDescription(data.Sjob.description);
            }
        } catch(error) {
              console.log("GET ERROR:", error);
        console.log("ERROR RESPONSE:", error.response?.data);
        toast.error("Error in getting job");
        }
    };

    useEffect(() => {
        getsingleJob();
    } , [params.id]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const data = await axios.put(`/api/v1/job/update/${params.id}`, {title, salary, company, location, jobType, experience, skills, description});

            if(data?.success) {
                toast.success("job updated successfully");
                navigate(`/dashboard/admin/get-job`);
                
            }
        } catch(error) {
            toast.error("error in updating job")
        }
    };

   


    return (
        <>
        <div className="container-fluid mt-3">
            <h1 className="text-center">Update Job Here</h1>
            <div className="row">
                <div className="col-md-3">
                    <AdminMenu />
                </div>
                <div className="col-md-9">
                        <div className="card" style={{ width: "min(500px, 92vw)", minHeight: "370px",boxShadow: "1px 1px 1px 0px #d2d2d2" }}>

                        <form onSubmit={handleUpdate}>

                            <div className="card-body">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">title</label>
                                    <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="salary" className="form-label">salary</label>
                                    <input type="text" className="form-control" value={salary} onChange={(e) => setSalary(e.target.value)} required />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="company" className="form-label">company</label>
                                    <input type="text" className="form-control" value={company} onChange={(e) => setCompany(e.target.value)} required />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="location" className="form-label">location</label>
                                    <input type="text" className="form-control" value={location} onChange={(e) => setLocation(e.target.value)} required />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="jobType" className="form-label">jobType</label>
                                    <input type="text" className="form-control" value={jobType} onChange={(e) => setjobType(e.target.value)} required />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="experience" className="form-label">experience</label>
                                    <input type="text" className="form-control" value={experience} onChange={(e) => setExperience(e.target.value)} required />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="skills" className="form-label">skills</label>
                                    <input type="text" className="form-control" value={skills} onChange={(e) => setSkills(e.target.value)} required />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">description</label>
                                    <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} required />
                                </div>

                                <button type="submit" className="btn btn-primary ms-1" onClick={() => navigate(`/dashboard/admin/get-job`)}>Update Job</button>
                            </div>
                            </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default updateJob;