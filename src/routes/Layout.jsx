import { Outlet } from "react-router-dom";
import React from "react";
import Navbar from "../components/NavBar";
import styles from "./styles/Layout.module.css";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className={styles["layout-container"]}>
        <div className={styles.layout}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
