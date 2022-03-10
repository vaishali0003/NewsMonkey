import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">NewsMonkey</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink className="nav-link" to="/entertainment">Entertainment</NavLink>
                    <NavLink className="nav-link" to="/business">Business</NavLink>
                    <NavLink className="nav-link" to="/general">General</NavLink>
                    <NavLink className="nav-link" to="/health">Health</NavLink>
                    <NavLink className="nav-link" to="/science">Science</NavLink>
                    <NavLink className="nav-link" to="/sports">Sports</NavLink>
                    <NavLink className="nav-link" to="/technology">Technology</NavLink>
                </div>
                </div>
            </div>
           </nav>
        </>
    )
}

export default Navbar;