// eslint-disable-next-line no-unused-vars
import { Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./../App.css"

function MainLayout() {
    return (
        <>
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#4b5759" }}>
            <div className="container">
            <div className="container-fluid">
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
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/" className="nav-link text-white">Indonesia</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Programming" className="nav-link text-white">Programming</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Covid" className="nav-link text-white">Covid-19</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Saved" className="nav-link text-white">Saved</Link>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    />
                    <button className="btn btn-warning" type="submit">
                    Search
                    </button>
                </form>
                </div>
            </div>
            </div>
        </nav>
        <br />

        <div className="container">

            <div className="row">
                <Outlet />
            </div>
        </div>
        </>
    );
}

export default MainLayout;
