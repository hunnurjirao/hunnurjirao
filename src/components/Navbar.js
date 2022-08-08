import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <>
            <header className="header sticky-top">
                <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                    <div className="container"><NavLink className="navbar-brand" to="/">
                        <strong className="h6 mb-0 font-weight-bold text-uppercase">hunnurjirao</strong></NavLink>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item active"><NavLink className="nav-link" to="/mlproj">Projects</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="/">Resume</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="/contactUs">Contact</NavLink></li>
                                {/* <li class="nav-item dropdown">
                                    <NavLink class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Projects
                                    </NavLink>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item" href="#" ><NavLink to="/mlproj" className='a-navlink'>Machine Learning</NavLink></a>
                                        <a class="dropdown-item" href="#"><NavLink to="/webproj" className='a-navlink'>Web Development</NavLink></a>
                                        <a class="dropdown-item" href="#"><NavLink to="/otherproj" className='a-navlink'>Other projects</NavLink></a>
                                    </div>
                                </li> */}
                                {/* <li className="nav-item"><NavLink className="nav-link disabled" to="#">Disabled</NavLink></li> */}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar