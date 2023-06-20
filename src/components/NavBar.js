/* eslint-disable import/no-extraneous-dependencies */
import {
  Container, Nav, Navbar, Image
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../assets/planet.png";

// Navbar component
const NaviGationbar = () => {
  const menuItems = {
    rocket: "Rockets",
    missions: "Missions",
    myProfile: "My Profile",
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary bg-primary"
      style={{ boxShadow: '0 1px 3px grey' }}
    >
      <Container className="">
        <Navbar.Brand href="#home">
          <Image width={60} src={logo} />{" "}
          <span style={{}}>Space Travelers&apos; Hub</span>
        </Navbar.Brand>
        <div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              {Object.keys(menuItems).map((item, index) => (
                <li key={item} className="list-group-item">
                  <NavLink
                    to={`${item}`}
                    className="text-decoration-none d-flex"
                  >
                    {index === 1 ? (
                      <>
                        <hr
                          style={{
                            width: 2,
                            height: 15,
                            border: "solid 1px black",
                          }}
                        />
                        <Nav.Link href="#deets" className="text-dark">
                          {menuItems[item]}
                        </Nav.Link>
                        <hr
                          style={{
                            width: 2,
                            height: 15,
                            border: "1px solid black",
                          }}
                        />
                      </>
                    ) : (
                      <Nav.Link href="#deets" className="text-dark">
                        {menuItems[item]}
                      </Nav.Link>
                    )}
                  </NavLink>
                </li>
              ))}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default NaviGationbar;
