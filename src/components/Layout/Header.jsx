import "../styles/Header.css"

const Header = () => {

    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">

                    <a className="navbar-brand mb-0 h1" href="#">
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
                                <a className="nav-link active" href="#">
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
                                className="btn btn-outline-light"
                                type="submit" style={{backgroundColor: "#7ca011"}}
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

                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Login / Sign Up
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};



export default Header;