import React from 'react'
import { NavLink } from 'react-router-dom'
import learnContent from './learn-content'

const Blogs = () => {

    const create_UUID = () => {
        var dt = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (dt + Math.random() * 16) % 16 | 0;
            dt = Math.floor(dt / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    }

    const learnBlocks = learnContent.map(p => {
        return (
            <><div class="col-lg-4 col-sm-6 mb-4" key={create_UUID()}>
                <div class="card h-100">
                    <div class="card-body">

                        <h4 class="card-title">
                            <a href={p.path} style={{ textDecoration: 'none' }} target='_blank'>{p.heading}</a>
                        </h4>
                        <p class="card-text">{p.description}</p>
                    </div>

                </div>
            </div>

            </>
        )
    })
    return (
        <div class="container">

            <h1 class="my-4">
                <small> &nbsp;</small>
            </h1>

            <div class="row">


                {learnBlocks}



            </div>

            {/* <ul class="pagination justify-content-center">
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span class="sr-only">Previous</span>
                    </a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#">1</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#">2</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#">3</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span class="sr-only">Next</span>
                    </a>
                </li>
            </ul> */}

        </div>
    )
}

export default Blogs