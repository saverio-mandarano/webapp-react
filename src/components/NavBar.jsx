import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar bg-dark">
      <ul className="navbar-nav ms-4">
        <li className="nav-item">
          <Link to="/" className="nav-link text-light">
            HomePage
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
