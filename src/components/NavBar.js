import React from "react";
import { NavLink } from "react-router-dom";

// Navbar component
const Navbar = () => {
  const menuItems = {
    rocket: "Rockets",
    missions: "Missions",
    myProfile: "My Profile",
  };
  return (
    <div className="d-inline-flex px-3 w-100 bg-light">
      <h5>Space Travelors' Hub</h5>
      <ul className="d-flex justify-content-end gap-5 w-100 mt-2">
        {Object.keys(menuItems).map((item) => (
          <li key={item} className="list-group-item">
            <NavLink to={`${item}`} className="text-decoration-none text-dark">
              {menuItems[item]}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
