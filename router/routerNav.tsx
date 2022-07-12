import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import ModalLogin from '../components/modal';
import SignIn from '../pages/signIn';

function RouteNav() {
  const { data: session } = useSession();
  const [ toggle, setToggle ] = useState(false);

  return(
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand>React-Bootstrap</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            { session?.data?.user && 
              <>
                <Link href="/" passHref>
                  <Nav.Link>Home</Nav.Link>
                </Link>
                <Link href="/todo" passHref>
                  <Nav.Link>Todo</Nav.Link>
                </Link>
                <NavDropdown title="Example" id="basic-nav-dropdown">
                  <Link href="/example/useState" passHref>
                    <NavDropdown.Item>useState</NavDropdown.Item>
                  </Link>
                  <Link href="/example/useEffect" passHref>
                    <NavDropdown.Item>useEffect</NavDropdown.Item>
                  </Link>
                  <Link href="/example/useContext/parenUseContext" passHref>
                    <NavDropdown.Item>useContext</NavDropdown.Item>
                  </Link>
                  <Link href="/example/useLayoutEffect" passHref>
                    <NavDropdown.Item>useLayoutEffect</NavDropdown.Item>
                  </Link>
                  <Link href="/example/useRef" passHref>
                    <NavDropdown.Item>useRef</NavDropdown.Item>
                  </Link>
                  <Link href="/example/useMemo" passHref>
                    <NavDropdown.Item>useMemo</NavDropdown.Item>
                  </Link>
                  <Link href="/example/useCallBack" passHref>
                    <NavDropdown.Item>useCallBack</NavDropdown.Item>
                  </Link>
                  <Link href="/example/useReducer" passHref>
                    <NavDropdown.Item>useReducer</NavDropdown.Item>
                  </Link>
                </NavDropdown>
              </>
            }
          </Nav>
          <Nav>
            { 
              session?.data?.user 
              ? <Button  onClick={() => signOut()}>Log out</Button> 
              : <Button onClick={() => setToggle(!toggle)}>Login</Button> 
            }
            <ModalLogin title="Login" show={toggle} change={(event: boolean) => { setToggle(event) }}>
              <SignIn csrfToken={undefined} />
            </ModalLogin>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default RouteNav;