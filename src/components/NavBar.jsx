/* eslint-disable import/no-extraneous-dependencies */
import {
  Container, Nav, Navbar, Image
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../assets/planet.png";
import styles from "./styles/Navbar.module.css";

// Navbar component
const NaviGationbar = () => {
  const menuItems = {
    rocket: "rocket",
    missions: "missions",
    myProfile: "myProfile",
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary bg-primary"
      style={{ boxShadow: "0 1px 3px grey" }}
    >
      <Container className="">
        <Navbar.Brand href="#home">
          <Image width={40} src={logo} />{" "}
          <span style={{}}>Space Travelers&apos; Hub</span>
        </Navbar.Brand>
        <div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              {Object.keys(menuItems).map((item, index) => (
                <li key={item} className="list-group-item">
                  <NavLink
                    to={menuItems[item] === "rocket" ? "/" : menuItems[item]}
                    className={({ isActive }) => {
                      if (isActive) {
                        return index === 1
                          ? ` d-flex ${styles["active-center"]}`
                          : `d-flex ${styles.active}`;
                      }
                      return index === 1
                        ? `text-decoration-none d-flex ${styles["not-active-center"]}`
                        : `text-decoration-none d-flex ${styles["not-active"]}`;
                    }}
                  >
                    {menuItems[item]}
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
