import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useParams } from "react-router-dom";

const applyForm = () => {

    const params = useParams();
    const [resume, setResume] = useState(null);
    const [country, setCountry] = useState("");
    const [PostalCode, setPostalCode] = useState("");
    const [address, setAddress] = useState("");

      const handleSubmit = async (e) => {
            e.preventDefault();
        try {
        const formData = new FormData();

        formData.append("resume", resume);
        formData.append("country", country);
        formData.append("PostalCode", PostalCode);
        formData.append("address", address);

        const { data } = await axios.post(
            `/api/v1/apply/apply-job/${params.id}`,
            formData
        );
                console.log(country);
                if(data?.success) {
                    toast.success("apply successfully");
                }
            } catch (error) {
                console.log("STATUS:", error);
            }
        }


    return (
        <>
        <div className="container-fluid mt-3">
            <h1 className="text-center">Apply Here</h1>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                    <div className="card" style={{ width: "min(500px, 92vw)", minHeight: "370px",boxShadow: "1px 1px 1px 0px #d2d2d2" }}>

                        <form onSubmit={handleSubmit}>

                            <div className="card-body">
                                <div className="mb-3">
                                <label htmlFor="logo" className="form-label">resume</label>
                                <input type="file" className="form-control" onChange={(e) => setResume(e.target.files[0])} required />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">country</label>
                                <input type="text" className="form-control" value={country} onChange={(e) => setCountry(e.target.value)} required />
                            </div>

                            
                            <div className="mb-3">
                                <label htmlFor="location" className="form-label">PostalCode</label>
                                <input type="text" className="form-control" value={PostalCode} onChange={(e) => setPostalCode(e.target.value)} required />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">address</label>
                                <input type="text" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} required />
                            </div>

                            <button type="submit" className="btn btn-primary ms-1">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default applyForm;