import React from 'react';

import projects1 from '../../images/bike-12.PNG'
import projects2 from '../../images/p2.PNG';
import projects3 from '../../images/p3.PNG';
import projects4 from '../../images/p4.PNG';
import projects5 from '../../images/p5.PNG';
import projects6 from '../../images/p6.PNG';


const Projects = () => {
    return (
        <div className='container mt-5'>
            <h2>My Projects</h2>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100 ">
                        <img src={projects1} class="card-img-top" alt="..." />
                        <div class="card-body text-start">
                            <h5 class="card-title text-start">Bike Shop website</h5>
                            <p class="card-text text-start">This is a Bike sale  shop full stack responsive website.   Build a full stack website including admin panel dashboard and the user dashboard.</p>
                            <a href="https://github.com/aviafrid781/Bike-Shop" target="_blank"> <button type="button" class="btn btn-primary btn-sm">Github Link</button></a>
                            <a href=" https://competent-babbage-4a0b6f.netlify.app/" target="_blank"> <button type="button" class="btn btn-success btn-sm ms-3">Live Site</button> </a>

                        </div>
                    </div>
                </div>



                <div class="col">
                    <div class="card h-100">
                        <img src={projects2} class="card-img-top" alt="..." />
                        <div class="card-body text-start">
                            <h5 class="card-title">Travel and Tour website</h5>
                            <p class="card-text">This is a travel and tourism related full stack responsive website.  Firebase Authentication base Google Login and user could see the tourist place</p>
                            <a href="https://github.com/aviafrid781/Smart-Travel-Agency" target="_blank"> <button type="button" class="btn btn-primary btn-sm">Github Link</button></a>
                            <a href="https://hardcore-ardinghelli-6b04b3.netlify.app/" target="_blank"> <button type="button" class="btn btn-success btn-sm ms-3">Live Site</button> </a>
                        </div>
                    </div>
                </div>


                <div class="col">
                    <div class="card h-100">
                        <img src={projects3} class="card-img-top" alt="..." />
                        <div class="card-body text-start">
                            <h5 class="card-title">GYM Park website</h5>
                            <p class="card-text">This is a GYM related website.  Email-Password and Google Sign in Authentication.  This is a single page react website.</p>
                            <a href="https://github.com/aviafrid781/GYM-parks" target="_blank"> <button type="button" class="btn btn-primary btn-sm">Github Link</button></a>
                            <a href="https://festive-nightingale-7529e0.netlify.app/" target="_blank"> <button type="button" class="btn btn-success btn-sm ms-3">Live Site</button> </a>
                        </div>
                    </div>
                </div>


                <div class="col">
                    <div class="card h-100">
                        <img src={projects4} class="card-img-top" alt="..." />
                        <div class="card-body text-start">
                            <h5 class="card-title">Sport News website </h5>
                            <p class="card-text">This is a Sports News website.  Email-Password and Google Sign in Authentication.  This is a single page react website.</p>
                            <a href="https://github.com/aviafrid781/Responsive-FootBall-1" target="_blank"> <button type="button" class="btn btn-primary btn-sm">Github Link</button></a>
                            <a href="https://aviafrid781.github.io/Responsive-FootBall-1/" target="_blank"> <button type="button" class="btn btn-success btn-sm ms-3">Live Site</button> </a>
                        </div>
                    </div>
                </div>


                <div class="col">
                    <div class="card h-100">
                        <img src={projects5} class="card-img-top" alt="..." />
                        <div class="card-body text-start">
                            <h5 class="card-title">Food  bank Website</h5>
                            <p class="card-text">This is a online food shop website .I made this website in html and css</p>
                            <a href="https://github.com/aviafrid781/food-bank1" target="_blank"> <button type="button" class="btn btn-primary btn-sm">Github Link</button></a>
                            <a href="https://aviafrid781.github.io/food-bank1/" target="_blank"> <button type="button" class="btn btn-success btn-sm ms-3">Live Site</button> </a>
                        </div>
                    </div>
                </div>


                <div class="col">
                    <div class="card h-100">
                        <img src={projects6} class="card-img-top" alt="..." />
                        <div class="card-body text-start">
                            <h5 class="card-title "> Honda Website UI</h5>
                            <p class="card-text"> This is simple website frond-end UI. We  used HTML ,CSS .This is  great UI design  </p>
                            <a href="https://github.com/aviafrid781/honda" target="_blank"> <button type="button" class="btn btn-primary btn-sm">Github Link</button></a>
                            <a href=" https://xenodochial-davinci-ea1bb9.netlify.app/" target="_blank"> <button type="button" class="btn btn-success btn-sm ms-3">Live Site</button> </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;