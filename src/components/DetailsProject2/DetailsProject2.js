import React from 'react';
import { Carousel } from 'react-bootstrap';
import p31 from '../../images/project-2/p21.PNG'
import p32 from '../../images/project-2/p22.PNG'
import p33 from '../../images/project-2/p23.PNG'
import p37 from '../../images/project-2/p211.png'
// import './DetailsProjects.css'
const DetailsProject1 = () => {
    return (
        <div className="project1container">
            <div >
                <h2>This Bike sale website  project </h2>
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

                    ● Created a full-stack website where user could explore their tour destination.
                    ● Firebase Authentication base Google Login & Fully Responsive web site.
                    ● Placed booking if user’s login and user could see the tourist place & see their order.
                </p>
                <br />
                <br />
                <a href=" https://github.com/aviafrid781/Smart-Travel-Agency" target="_blank"> <button type="button" class="btn btn-primary btn-sm">Client Side Link</button></a>
                <a href=" https://github.com/aviafrid781/Smart-Travel-agencey-Server" target="_blank"> <button type="button" class="btn btn-primary btn-sm">Server Side  Link</button></a>
                <a href=" https://hardcore-ardinghelli-6b04b3.netlify.app/" target="_blank"> <button type="button" class="btn btn-success btn-sm ms-3">Live Site</button> </a>



            </div>
            <div>

                <img style={{ width: 600 }} src={p37} class="card-img-top" alt="..." />
            </div>

        </div >
    );
};

export default DetailsProject1;