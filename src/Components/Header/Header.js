import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src="https://media.tenor.com/wy9YBlLKgfcAAAAi/weplash-home-office.gif"
                            width="30"
                            height="30"
                        />{' '}
                        EMS
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header