import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

type HeaderProps = {
  label: string;
};

const Header: FC<HeaderProps> = ({ label }) => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <h1>{label}</h1>
        <div className={classes.container}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/forms">Forms</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
