import React from 'react'
import { NavLink } from 'react-router-dom'
// import 'Main.css'

const Home = () => {
    return (

        <>
            <section className="py-5 section-1">
                <div className="container py-5 text-center">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <h2> I'M <b>K HUNNURJI RAO</b></h2>
                            <p className="text-muted lead">A Machine Learning Intern, who has experience in building end-to-end projects and able to build predictive models. Ready to apply my skills, work with a great team in an organization and simultaneously improve/update my skills in Machine Learning.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-1">
                <div className="container  text-center">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <h2> Skills & Technologies</h2>
                        </div>
                    </div>
                </div>
            </section>

            <div class="container mt-4 d-flex justify-content-center">
                <div class="row g-0">

                    <div class="col-md-4 border-right">
                        <div class="cards">

                            <div class="first bg-white p-4 text-center"><img className='intro-img' src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-machine-learning-robotics-flaticons-lineal-color-flat-icons.png" alt='img' />
                                <h5>Machine Learning </h5>
                                <p class="line">Machine Learning Algorithms - Supervised and Unsupervised Learning</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 border-right">
                        <div class="cards">

                            <div class=" second bg-white p-4 text-center"> <img className='intro-img' src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-web-development-internet-marketing-flaticons-lineal-color-flat-icons-3.png" alt='img' />
                                <h5>Deep Learning</h5>
                                <p class="line">Convolutional Neural Networks, Recurrent Neural Networks, Natural Language Processing</p>
                            </div>

                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="cards">


                            <div class=" third bg-white p-4 text-center"> <img className='intro-img' src="https://img.icons8.com/external-smashingstocks-hand-drawn-black-smashing-stocks/344/external-ai-security-cyber-attack-hacking-smashingstocks-hand-drawn-black-smashing-stocks-2.png" alt='img' />
                                <h5>Web Technologies</h5>
                                <p class="line">React JS, React Native, MongoDB, Python Flask,JavaScript, Web Scrapping</p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

            <section className="py-5 section-1">
                <div className="container py-5 text-center">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <h2> End-to-End Projects </h2>
                            <p className=" lead py-3" style={{ color: "black" }}>Please find all the projects &nbsp;
                                <NavLink to="/mlproj" className="div-navlink" style={{ color: "#0066ff" }}>
                                    here
                                </NavLink>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="py-5 section-1">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <p className=" lead" style={{ color: "black" }}>If you didn't find the projects you are looking for! Please contacts us.</p>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    )
}

export default Home