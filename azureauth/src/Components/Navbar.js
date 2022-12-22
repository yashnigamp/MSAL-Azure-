import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { SignInButton } from "./SignInButton";
import { SignOutButton } from './SignOutButton';
import { WelcomeText } from './WelcomeComp';
import { useIsAuthenticated } from '@azure/msal-react';
import '../Style/index.css'
function NavbarIntel() {

    const isAuthenticated  = useIsAuthenticated();
    console.log(isAuthenticated);
  return (
    <>
      <Navbar className='navbar-gradient'>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="dasa"
              src="/intel.svg"
              width="60"
              height="30"
              className="d-inline-block align-top"
            />
            NGMC
          </Navbar.Brand>
          <Nav className="justify-content-end">
            {!isAuthenticated ? <Nav.Item className="me-2"><SignInButton/></Nav.Item> : <Nav.Item><WelcomeText /><SignOutButton/></Nav.Item>}
          
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarIntel;