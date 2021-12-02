import React from 'react';
import { Carousel } from 'react-bootstrap';
import p31 from '../../images/project-3/p31.PNG'
import p32 from '../../images/project-3/p32.PNG'
import p33 from '../../images/project-3/p33.PNG'
import p37 from '../../images/project-3/p37.png'
import './DetailsProjects.css'
const DetailsProject3 = () => {
    return (
        <div className="project1container">
            <div >
                <h2>This Gym website  project </h2>
                <Carousel style={{ margin: '20' }}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={p31}
                            alt="First slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={p32}
                            alt="Second slide"
                        />


                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={p33}
                            alt="Third slide"
                        />

                    </Carousel.Item>
                </Carousel>
                <br />
                <br />

                <br />
                <h2>process:</h2>
                <p>
                    ● Two Authentication system (Google , Email and Password ) <br />
                    ● Created a Gym service website where users can see their services<br />
                    ● Built responsive, dynamic and optimized single page application using React for
                    better user experience
                </p>
                <br />
                <br />
                <a href=" https://github.com/aviafrid781/GYM-parks" target="_blank"> <button type="button" class="btn btn-primary btn-sm">Github Link</button></a>
                <a href=" https://festive-nightingale-7529e0.netlify.app/" target="_blank"> <button type="button" class="btn btn-success btn-sm ms-3">Live Site</button> </a>



            </div>
            <div>

                <img style={{ width: 300, height: 600 }} src={p37} class="card-img-top" alt="..." />
            </div>

        </div >
    );
};

export default DetailsProject3;