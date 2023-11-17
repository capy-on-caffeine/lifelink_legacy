import { Navbar, Nav, Container, NavDropdown, Image } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { useLogoutMutation } from "../slices/hospitalsApiSlice";
import { logout } from "../slices/authSlice";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const { hospitalInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <header style={{ zIndex: 3 }}>
      <Navbar
        expand="sm"
        collapseOnSelect
        className="half-black-half-white-navbar"
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="logo">
              <Image src="./images/icon.png" id="icon" fluid />
              <span>Lifelink</span>
            </Navbar.Brand>
          </LinkContainer>

          <LinkContainer style={{ marginRight: "600px" }} to="/link1">
            <Nav.Link>Find blood?</Nav.Link>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {hospitalInfo ? (
                <>
                  <NavDropdown
                    title={
                      hospitalInfo.name.charAt(0).toUpperCase() +
                      hospitalInfo.name.slice(1) +
                      " hospital"
                    }
                    id="hospitalname"
                  >
                    <LinkContainer to="/hospital/profile">
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <>
                  <LinkContainer to="/login">
                    <Nav.Link>
                      <FaSignInAlt /> Sign In
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/register">
                    <Nav.Link>
                      <FaSignOutAlt /> Sign Up
                    </Nav.Link>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
