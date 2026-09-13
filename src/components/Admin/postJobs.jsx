import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import AdminMenu from "./adminMenu.jsx";

const PostJobs = () => {

    const [title, setTitle] = useState("");
    const [salary, setSalary] = useState("");
    const [company, setCompany] = useState("");
    const [location, setLocation] = useState("");
    const [jobType, setJobTitle] = useState("");
    const [experience, setExperience] = useState("");
    const [skills, setSkill] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        alert("FORM SUBMITTED");
        console.log("JOB DATA:", {
        title,
        description,
        salary,
        location
    });
        try {
            const job = await axios.post("/api/v1/job/post-job", {title, salary, company, location, jobType, experience, skills, description});
            if(job.data.success) {
                toast.success("job successfully post");
            }
        } catch (error) {
             console.log("STATUS:", error.response?.status);
    console.log("DATA:", error.response?.data);
    console.log("MESSAGE:", error.message);
        }
    }


    return (
        <>
        <div className="container-fluid mt-3">
            <h1 className="text-center">Post Job Here</h1>
            <div className="row">
                <div className="col-md-3">
                    <AdminMenu />
                </div>
                <div className="col-md-9">
                        <div className="card" style={{ width: "min(500px, 92vw)", minHeight: "370px",boxShadow: "1px 1px 1px 0px #d2d2d2" }}>

                        <form onSubmit={handleSubmit}>

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
                            <input type="text" className="form-control" value={jobType} onChange={(e) => setJobTitle(e.target.value)} required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="experience" className="form-label">experience</label>
                            <input type="text" className="form-control" value={experience} onChange={(e) => setExperience(e.target.value)} required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="skills" className="form-label">skills</label>
                            <input type="text" className="form-control" value={skills} onChange={(e) => setSkill(e.target.value)} required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">description</label>
                            <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} required />
                        </div>

                        <button type="submit" className="btn btn-primary ms-1">Post Job</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default PostJobs;