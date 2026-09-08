import react ,{useState} from "react";
import axios from "axios";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom"

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleregister =async (e) => {
        e.preventDefault();
        try {
            const req = await axios.post("/api/v1/register", {name, email, password});
            if(req.data.success) {
                toast.success("user register succesfully");
                navigate("/");
            }
        } catch(error) {
            console.log(error);
            toast.error("error in register user");
        }   
    } 


    return (
        <>
        <div className="container">
            <h4 className="text-center">Sign-up and apply for free</h4>
            <div className="card mx-auto" style={{ width: "min(500px, 92vw)", minHeight: "370px",boxShadow: "1px 1px 1px 0px #d2d2d2" }}>

                <form onSubmit={handleregister}>
                <div className="card-body">
                    <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>

                <button type="submit" className="btn btn-primary ms-1">Sign up</button>
                </div>
                </form>
            </div>
        </div>
        </>
    )
};


export default Register;