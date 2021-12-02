import React from 'react';
import { Carousel } from 'react-bootstrap';
import p31 from '../../images/project-1/p13.PNG'
import p32 from '../../images/project-1/p12.PNG'
import p33 from '../../images/project-1/p15.png'
import p37 from '../../images/project-1/p14.png'
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
                    ● Build a full stack website including admin panel dashboard and the user dashboard.
                    ● Controlled products, orders shipment, manage orders, cancel orders by admin
                    ● User can orders, reviews products and also cancel order & delete own reviews.
                </p>
                <br />
                <br />
                <a href=" https://github.com/aviafrid781/Bike-Shop" target="_blank"> <button type="button" class="btn btn-primary btn-sm">Client Side Link</button></a>
                <a href=" https://github.com/aviafrid781/Bike-shops-server" target="_blank"> <button type="button" class="btn btn-primary btn-sm">Server Side  Link</button></a>
                <a href=" https://competent-babbage-4a0b6f.netlify.app/" target="_blank"> <button type="button" class="btn btn-success btn-sm ms-3">Live Site</button> </a>



            </div>
            <div>

                <img style={{ width: 600 }} src={p37} class="card-img-top" alt="..." />
            </div>

        </div >
    );
};

export default DetailsProject1;