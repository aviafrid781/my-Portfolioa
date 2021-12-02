import React from 'react';
import { Carousel } from 'react-bootstrap';
import p31 from '../../images/project-5/p51.PNG'
import p32 from '../../images/project-5/p52.PNG'
import p33 from '../../images/project-5/p53.PNG'
import p37 from '../../images/project-5/p511.png'
// import './DetailsProjects.css'
const DetailsProject5 = () => {
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
                    ● Responsive Website.
                    ● HTML CSS UI
                    ● Food item website UI
                </p>
                <br />
                <br />
                <a href=" https://aviafrid781.github.io/food-bank1/" target="_blank"> <button type="button" class="btn btn-primary btn-sm">Client Side Link</button></a>

                <a href=" https://aviafrid781.github.io/food-bank1/" target="_blank"> <button type="button" class="btn btn-success btn-sm ms-3">Live Site</button> </a>



            </div>
            <div>

                <img style={{ width: 600 }} src={p37} class="card-img-top" alt="..." />
            </div>

        </div >
    );
};

export default DetailsProject5;