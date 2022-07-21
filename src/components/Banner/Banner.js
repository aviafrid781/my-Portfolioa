import React from 'react';
import './Banner.css'
import image from '../../images/aa.png'
import resume from '../../images/RESUME _OF_AVI_AFRID.pdf';
import Typical from 'react-typical'

const Banner = () => {
  return (
    <div id='aboutMe' className='row banner-background'>
      <div className='col md-10 d-flex justify-content-center align-items-center'>


        <div>
          {/* Text  section */}


          <h3 className='text-light text-start ms-5 mt-3'>   <Typical
            steps={["Welcome", 2000, "This is Avi Afrid", 2000]}
            loop={Infinity}
            wrapper="p"

          />  <br />
          Frond-End Developer,Back-End Developer
          <br />Specialize in MERN stack Development</h3>
          <br />

       


          <p style={{ color: 'red' }}>I'm also Competitive Problem solver<br /> & I  have solved 750+ problem from Various online judge </p>

          {/* Button section */}
          <div className='text-start '>
            {/* <button id="contact-from " type="button " className="btn btn-light rounded-pill   ">CONTACT ME</button> */}

            <a rel="stylesheet" href="#contact" ><button type="button " className="btn btn-primary ms-5  rounded-pill">CONTACT ME</button> </a><br /><br />
            <a
              className="btn btn-warning text-dark ms-5  rounded-pill  js-scroll px-4"

              href={resume} download="Avi Afrid resume.pdf"
              role="button"
            >
              DOWNLOAD RESUME
            </a>

          </div>


        </div>



        < div className='col-md-7'>
          {/* Image section */}
          <div className='text-start'>
            <img src={image} alt="" />
          </div>
        </div>


      </div>

    </div >
  );
};

export default Banner;