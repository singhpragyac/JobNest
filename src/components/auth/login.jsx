import React, {useState} from "react";
import axios from "axios";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom"
import { useAuth } from "../Context/auth"

var Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useAuth();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/v1/auth/login", {email, password});
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token,
                });
                localStorage.setItem("auth", JSON.stringify(res.data));
                navigate(location.state || "/");
            } else {
                toast.success(res.data.message);
            }
        } catch(error) {
            console.log("FULL ERROR:", error);
        }
    }

    return (
   
        <>
        <div className="container justify-content-center align-items-center">
            <h4 className="text-center">Login Here</h4>
            <div className="card mx-auto" style={{ width: "min(500px, 92vw)", minHeight: "270px",boxShadow: "1px 1px 1px 0px #d2d2d2" }}>

                <form onSubmit={handleSubmit}>
                <div className="card-body">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>

                <button type="submit" className="btn btn-primary ms-1">Log in</button>
                </div>
                </form>
            </div>
        </div>
        </>
   );
};

export default Login;