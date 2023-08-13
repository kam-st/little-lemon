// import { useState } from "react";
// import { FaRegTimesCircle, FaGripLines } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav className={`nav`}>
        <Link to="/" className="nav-item">
          HOME
        </Link>
        <Link to="#" className="nav-item">
          ABOUT
        </Link>
        <Link to="#" className="nav-item">
          MENU
        </Link>
        <Link to="/booking" className="nav-item">
          RESERVATIONS
        </Link>
        <Link to="#" className="nav-item">
          ORDER ONLINE
        </Link>
        <Link to="#" className="nav-item">
          LOGIN
        </Link>
      </nav>
    </>
  );
}
