import React, { useState, useEffect } from "react";
import UserMenu from "./userMenu.jsx";
import { useAuth } from "../Context/auth.jsx";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const UserDashboard = () => {
    const [auth, setAuth] =useAuth();
    const [resume, setResume] = useState(null);
    const params = useParams;
    

    const handleResume = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();

            formData.append("resume", resume);
            console.log(auth?.user?._id);
            console.log(resume);

            const uploadresume = await axios.post(`/api/v1/auth/upload-resume/${auth?.user?._id}`, formData);
            console.log(uploadresume);
            if(uploadresume?.data.success) {
                toast.success("resume successfully uploaded");
                setAuth({
                    ...auth,
                    user: uploadresume.data.uploadedResume
                });
            }
        } catch (error) {
            console.log("STATUS:", error);
        }
    };

    return (
        <>
        <div className="container-fluid pt-5 dashboard">
            <div className="row">
                <div className="col-md-3">
                    <UserMenu/>
                </div>
                <div className="col-md-9">
                    <h5>Name: {auth?.user.name}</h5>
                    <h5>Email: {auth?.user.email}</h5>

                    <div className="mt-5">
                        {auth?.user?.resume?.data ? (
                         <iframe
                            src={`/api/v1/auth/get-resume/${auth.user._id}`}
                            alt="Resume"
                           max-width="100%"
        height="500px"
        style={{
            border: "none",
            overflow: "hidden"
        }}
                        />
                    ) : (
                        <>
                        <form onSubmit={handleResume}>
                            <div>
                                <label className="form-label">Resume</label>
                                <input type="file" className="form-control" onChange={(e) => setResume(e.target.files[0])} required />

                                <button type="submit" className="btn btn-primary ms-1">Upload Resume</button>
                            </div>
                        </form>
                        </>
                    )}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default UserDashboard;