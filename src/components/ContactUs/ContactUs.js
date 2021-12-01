import React, { useRef } from 'react';
import './ContactUs.css';
import emailjs from 'emailjs-com';

const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_56qzb0a', 'template_37p52xz', form.current, 'user_cVaIHYPMxprg6CEvEmYv8')
            .then((result) => {
                console.log(result);
                alert('Email send successfully')
            }, (error) => {
                console.log(error);
            });
        e.target.reset()
    };



    return (

        <div class="container w-100 text-start ">
            <form ref={form} onSubmit={sendEmail}>
                <label for="fname "> Name</label>
                <input type="text" id="fname" name="name" placeholder="Your name.." />

                <label for="lname">Email</label>
                <input type="email" id="lname" name="user_email" placeholder="Email.." />



                <label for="subject">Message</label>
                <textarea id="subject" name="message" placeholder="Write something.." style={{ height: '100px' }}></textarea>

                <input type="submit" value="send" />
            </form>
        </div>

    );
};

export default ContactUs;