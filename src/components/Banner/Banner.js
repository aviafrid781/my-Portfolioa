import React from 'react';
import './Banner.css'
import image from '../../images/aa.png'
import resume from '../../images/Avi_Afrid_Resume.pdf';


const Banner = () => {
  return (
    <div id='aboutMe' className='row banner-background'>
      <div className='col md-10 d-flex justify-content-center align-items-center'>


        <div>
          {/* Text  section */}
          <h3 className='text-light text-start ms-5 mt-3'>I’m Avi Afrid.  <br />
            Frond-End Developer,Back-End developer,<br />Specialize in MERN stack development</h3>
          <br />
          <p style={{ color: 'red' }}>I am also problem solving Skills<br />& have solved 400+ problem from Various online judge </p>

          {/* Button section */}
          <div className='text-start '>
            {/* <button id="contact-from " type="button " className="btn btn-light rounded-pill   ">CONTACT ME</button> */}

            <a rel="stylesheet" href="#contact" ><button type="button " className="btn btn-primary ms-5  rounded-pill">CONTACT ME</button> </a><br /><br />
            <a
              className="btn btn-warning text-dark ms-5  rounded-pill  js-scroll px-4"

              href={resume} download="Avi Afrid resume.pdf"
              role="button"
            >
              DONWNLOAD RESUME
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