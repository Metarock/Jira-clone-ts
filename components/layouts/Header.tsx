import Link from 'next/link';
import React from 'react';
import { Navbar, Container, Button, NavbarBrand } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar>
            <Container>
                <NavbarBrand>Project Management</NavbarBrand>
                <Navbar.Toggle />
                <Navbar.Collapse className='justify-content-end'>
                    {/* WE will change this later for authentication */}
                    <Navbar.Text className='p-3'>
                        Signed in as: <a href='#login'>John Sangalang</a>
                    </Navbar.Text>
                    {/* CHANGE LATER FOR LOG OUT OR LOG IN */}
                    <Link href={''}>
                        <Button>Log out</Button>
                    </Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
