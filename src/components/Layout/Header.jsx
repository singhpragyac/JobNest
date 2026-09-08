import "../styles/Header.css";
import {useNavigate} from "react-router-dom"
import {Link, NavLink} from "react-router-dom";


const Header = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    const navigate = useNavigate();

    const handleLogout = () => {
        console.log("logout k phle")
        localStorage.removeItem("user");
        console.log("logout k bad")
        navigate("/login");
        console.log("navigation k bad")
    }

    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">

                    <a className="navbar-brand mb-0 h1" href="/">
                        JobNest
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        {/* Left / Center Navigation */}
                        <ul className="navbar-nav align-items-center">

                            <li className="nav-item">
                                <a className="nav-link active" href="/">
                                    Home
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Companies
                                </a>
                            </li>

                        </ul>

                        {/* Search */}
                        <form className="d-flex me-3 search-form" >
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />

                            <button
                                className="btn"
                                type="submit" style={{backgroundColor: "#7ca011", color:"white"}}
                            >
                                Find Jobs
                            </button>
                        </form>

                        {/* Right Navigation */}
                        <ul className="navbar-nav mb-2 mb-lg-0 right-menu">

                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Saved Jobs
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Profile
                                </a>
                            </li>
                            {user ? (
                                <li className="nav-item">
                                <button type="button" className="btn btn-secondary btn-sm mt-1" onClick={handleLogout} data-bs-toggle="modal" data-bs-target="#loginModal">
                                    Logout
                                </button>
                            </li>
                            ) : (
                                <>
                                <li className="nav-item">
                                <NavLink className="nav-link" to="/login">
                                    Login
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/register">
                                    Register
                                </NavLink>
                            </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};



export default Header;