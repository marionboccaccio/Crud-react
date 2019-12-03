import React from "react";
import { NavLink } from "react-router-dom";

export default function NavMain() {
  return (
    <nav className="nav-main">
      <NavLink exact to="/">
        home
      </NavLink>
      <NavLink to="/all-albums">all albums</NavLink>
      <NavLink to="/all-artists">all artists</NavLink>
      <NavLink to="/create-album">+ album</NavLink>
      <NavLink to="/create-artist">+ artist</NavLink>
    </nav>
  );
}
