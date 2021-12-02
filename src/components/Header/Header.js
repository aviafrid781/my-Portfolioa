import React from 'react';
// import { Button } from 'react-bootstrap';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

import { Link } from 'react-router-dom';

const Header = () => {

    //const { user, logOut } = useFirebase();

    return (
        <>

            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">AVI AFRID</Navbar.Brand>
                    <Navbar.Toggle />

                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link href="#home"></Nav.Link>
                        <Nav.Link href="/home#aboutMe">About Me</Nav.Link>
                        <Nav.Link href="/home#contact">Contact Me</Nav.Link>
                        <Nav.Link href="/home#projects">Projects</Nav.Link>
                        <Nav.Link href="/home#skills">Skills</Nav.Link>

                        < Nav.Link as={Link} to="/blog">Blog</Nav.Link>






                        {/* {user?.email ?
                            <Button onClick={logOut} className='btn btn-danger' variant="outline-success"> Logout</Button> :
                            < Nav.Link as={Link} to="/login">Login</Nav.Link>}



                        {
                            user.email && <span className="text-light me-4">welcome {user.email.substring(0, user.email.lastIndexOf("@"))} </span>
                        } */}



                    </Navbar.Collapse>

                </Container>
            </Navbar>

        </>
    );
};

export default Header;