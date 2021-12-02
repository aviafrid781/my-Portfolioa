import React from 'react';
import { Carousel } from 'react-bootstrap';
import p31 from '../../images/project-6/p61.PNG'
import p32 from '../../images/project-6/p62.PNG'
import p33 from '../../images/project-6/p63.PNG'
import p37 from '../../images/project-6/p611.png'
// import './DetailsProjects.css'
const DetailsProject6 = () => {
    return (
        <div className="project1container">
            <div >
                <h2>This Bike website  UI </h2>
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
                    ● Responsive Website.
                    ● HTML CSS Bootstrap
                    ● Bike website UI
                </p>
                <br />
                <br />
                <a href=" https://github.com/aviafrid781/honda" target="_blank"> <button type="button" class="btn btn-primary btn-sm">Client Side Link</button></a>

                <a href=" https://aviafrid781.github.io/honda/" target="_blank"> <button type="button" class="btn btn-success btn-sm ms-3">Live Site</button> </a>



            </div>
            <div>

                <img style={{ width: 600 }} src={p37} class="card-img-top" alt="..." />
            </div>

        </div >
    );
};

export default DetailsProject6;