import React, {useState} from 'react';
import { Link, NavLink } from "react-router-dom";
import "./header.css";
import logo from '../../assets/images/logo.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
      <header>
        <nav>
          <Link to="/" className="title">
          <img src={logo} className='logo' alt='logo do app'/>
            Achados & Perdidos
          </Link>
          <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={menuOpen ? "open" : ""}>
            <li>
              <NavLink to="/sobre" activeClassName="active">Sobre</NavLink>
            </li>
            <li>
              <NavLink to="/home" activeClassName="active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/apoio" activeClassName="active">Apoio</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  };
export default Header;