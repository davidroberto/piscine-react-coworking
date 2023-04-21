import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/admin/coworkings">Coworkings</Link>
          </li>
          <li>
            <Link to="/admin/create-coworking">Créer un coworking</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
