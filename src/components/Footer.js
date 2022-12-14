import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div class="footer-basic">
            <footer>
                <br />
                <br />
                <div class="social">
                    <a href="https://www.linkedin.com/in/hunnurjirao" target="_blank"><i class="icon ion-social-linkedin"></i></a>
                    <a href="https://github.com/hunnurjirao" target="_blank"><i class="icon ion-social-github"></i></a>
                    <a href="https://api.whatsapp.com/send?phone=+919182530027" target="_blank"><i class="icon ion-social-whatsapp"></i></a>
                    <a href="https://www.youtube.com/channel/UCJ58XYpCLKXPAjnLvO6CUlw" target="_blank"><i class="icon ion-social-youtube"></i></a>
                </div>
                <ul class="list-inline">
                    <li class="list-inline-item"><NavLink to="/">Home</NavLink></li>
                    <li class="list-inline-item"><NavLink to="/mlproj">Projects</NavLink></li>
                    <li class="list-inline-item"><NavLink to="/blogs">Blogs</NavLink></li>
                    <li class="list-inline-item"><NavLink to="/contactUs">Contact</NavLink></li>

                </ul>
                <p class="copyright">&#169;Copyright 2022 K HUNNURJI RAO. All Rights Reserved.</p>
            </footer>
        </div>
    )
}

export default Footer